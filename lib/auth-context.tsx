'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { 
  User, 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth';
import { doc, getDoc, setDoc, updateDoc, onSnapshot } from 'firebase/firestore';
import { auth, db } from './firebase';

export interface UserStats {
  xp: number;
  level: number;
  rank: string;
}

const RANKS = [
  { maxLevel: 1, name: "Новичок" },
  { maxLevel: 2, name: "Исследователь" },
  { maxLevel: 3, name: "Пилот" },
  { maxLevel: 4, name: "Капитан" },
  { maxLevel: 5, name: "Коммандер" },
  { maxLevel: Infinity, name: "Звездный Лорд" }
];

export const calculateLevelAndRank = (xp: number) => {
  let level = 1;
  if (xp >= 100) level = 2;
  if (xp >= 300) level = 3;
  if (xp >= 600) level = 4;
  if (xp >= 1000) level = 5;
  if (xp >= 2000) level = 6;

  const rank = RANKS.find(r => level <= r.maxLevel)?.name || "Звездный Лорд";
  return { level, rank };
};

interface AuthContextType {
  user: User | null;
  userStats: UserStats | null;
  loading: boolean;
  login: (email: string, pass: string) => Promise<any>;
  register: (email: string, pass: string) => Promise<any>;
  loginWithGoogle: () => Promise<any>;
  logout: () => Promise<void>;
  addXp: (amount: number) => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userStats, setUserStats] = useState<UserStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let unsubscribeStats: () => void;

    const unsubscribeAuth = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      
      if (currentUser) {
        const userRef = doc(db, 'users', currentUser.uid);
        
        // Setup realtime listener for stats
        unsubscribeStats = onSnapshot(userRef, async (docSnap) => {
          if (docSnap.exists()) {
            setUserStats(docSnap.data() as UserStats);
          } else {
            // Initialize new user stats locally immediately
            const initialStats: UserStats = { xp: 0, level: 1, rank: "Новичок" };
            setUserStats(initialStats);
            // Try pushing to DB (might fail if rules aren't set yet)
            try {
              await setDoc(userRef, initialStats);
            } catch (e) {
              console.warn("Could not create user stats in DB (maybe rules check)", e);
            }
          }
        }, (error) => {
          console.warn("Firestore snapshot error:", error);
          setUserStats({ xp: 0, level: 1, rank: "Новичок" });
        });
      } else {
        setUserStats(null);
        if (unsubscribeStats) unsubscribeStats();
      }
      
      setLoading(false);
    });

    return () => {
      unsubscribeAuth();
      if (unsubscribeStats) unsubscribeStats();
    };
  }, []);

  const addXp = async (amount: number) => {
    if (!user) return;
    
    // Prevent overriding real values with null, ensure userRef is available
    const userRef = doc(db, 'users', user.uid);
    const newXp = (userStats?.xp || 0) + amount;
    const { level, rank } = calculateLevelAndRank(newXp);
    
    // Optimistic update
    setUserStats({ xp: newXp, level, rank });
    
    try {
      await setDoc(userRef, { xp: newXp, level, rank }, { merge: true });
    } catch (e) {
      console.error("Failed to update XP in DB", e);
      throw e; // Let the caller handle the error
    }
  };

  const login = (email: string, pass: string) => {
    return signInWithEmailAndPassword(auth, email, pass);
  };

  const register = (email: string, pass: string) => {
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  const logout = () => {
    return signOut(auth);
  };

  const loginWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  return (
    <AuthContext.Provider value={{ user, userStats, loading, login, register, loginWithGoogle, logout, addXp }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
