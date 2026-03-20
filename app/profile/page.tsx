"use client";

import { useAuth } from '@/lib/auth-context';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, User, Mail, Calendar, LogOut, Award, Star, Rocket, Camera, Loader2, Edit2, Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { updateProfile } from 'firebase/auth';

export default function ProfilePage() {
  const { user, userStats, addXp, logout, loading } = useAuth();
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [isEditingName, setIsEditingName] = useState(false);
  const [newName, setNewName] = useState("");
  const [updatingName, setUpdatingName] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/');
    }
    if (user && !newName) {
      setNewName(user.displayName || "");
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[oklch(0.02_0.01_270)] flex items-center justify-center text-primary">
        <Rocket className="h-8 w-8 animate-bounce" />
      </div>
    );
  }

  if (!user) return null;

  const handleLogout = () => {
    logout();
    toast.success("Вы вышли из аккаунта");
    router.push('/');
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0 || !user) return;
    const file = e.target.files[0];
    
    if (file.size > 2 * 1024 * 1024) {
      toast.error("Слишком большой файл", { description: "Пожалуйста, используйте изображение до 2 МБ." });
      return;
    }

    setUploading(true);
    try {
      const img = new window.Image();
      img.src = URL.createObjectURL(file);
      await new Promise((resolve) => { img.onload = resolve; });
      
      const canvas = document.createElement('canvas');
      const MAX_SIZE = 200;
      let width = img.width;
      let height = img.height;
      if (width > height) {
        if (width > MAX_SIZE) {
          height *= MAX_SIZE / width;
          width = MAX_SIZE;
        }
      } else {
        if (height > MAX_SIZE) {
          width *= MAX_SIZE / height;
          height = MAX_SIZE;
        }
      }
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx?.drawImage(img, 0, 0, width, height);
      
      const base64DataUrl = canvas.toDataURL('image/jpeg', 0.7);
      
      const userRef = doc(db, 'users', user.uid);
      await updateDoc(userRef, { avatarUrl: base64DataUrl });
      
      toast.success("Аватар обновлен!", { description: "Ваше новое фото успешно установлено." });
      
      setTimeout(() => window.location.reload(), 1500);
    } catch (error: any) {
      console.error(error);
      toast.error("Ошибка при сохранении", { description: "Не удалось обновить профиль." });
    } finally {
      setUploading(false);
    }
  };

  const handleSaveName = async () => {
    if (!user || !newName.trim()) return;
    setUpdatingName(true);
    try {
      await updateProfile(user, { displayName: newName.trim() });
      toast.success("Имя обновлено!");
      setIsEditingName(false);
      setTimeout(() => window.location.reload(), 500); 
    } catch (error) {
      console.error(error);
      toast.error("Ошибка при обновлении имени");
    } finally {
      setUpdatingName(false);
    }
  };

  const [isTraining, setIsTraining] = useState(false);

  const handleTrain = async () => {
    setIsTraining(true);
    try {
      await addXp(50);
      toast.success("Тренировка завершена!", { description: "+50 XP получено. Отличная работа!" });
    } catch {
      toast.error("Ошибка сети");
    } finally {
      setTimeout(() => setIsTraining(false), 500);
    }
  };

  const getNextLevelXp = (xp: number) => {
    if (xp < 100) return { base: 0, next: 100 };
    if (xp < 300) return { base: 100, next: 300 };
    if (xp < 600) return { base: 300, next: 600 };
    if (xp < 1000) return { base: 600, next: 1000 };
    if (xp < 2000) return { base: 1000, next: 2000 };
    return { base: 2000, next: 2000 }; // Max level
  };

  const currentXp = userStats?.xp || 0;
  const { base, next } = getNextLevelXp(currentXp);
  const progressPercent = next === base ? 100 : Math.min(100, Math.max(0, ((currentXp - base) / (next - base)) * 100));

  const getCreationDate = () => {
    if (user.metadata && user.metadata.creationTime) {
      return new Date(user.metadata.creationTime).toLocaleDateString('ru-RU', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    }
    return 'Неизвестно';
  };

  return (
    <div className="min-h-screen bg-[oklch(0.02_0.01_270)] text-foreground pt-24 pb-12 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 star-field opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto space-y-8">
        <Link href="/" className="inline-flex items-center text-primary hover:text-white transition-colors">
           <ArrowLeft className="mr-2 h-4 w-4" /> Назад на главную
        </Link>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* User Card */}
          <div className="md:w-1/3 space-y-6">
            <div className="glass-strong rounded-3xl p-8 text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative">
                <div 
                  className="w-24 h-24 mx-auto bg-primary/20 rounded-full flex items-center justify-center border-2 border-primary/50 shadow-[0_0_30px_rgba(147,51,234,0.3)] mb-4 cursor-pointer relative overflow-hidden group/avatar"
                  onClick={() => fileInputRef.current?.click()}
                >
                  {userStats?.avatarUrl || user.photoURL ? (
                    <img src={userStats?.avatarUrl || user.photoURL || ""} alt="Avatar" className="w-full h-full rounded-full object-cover" />
                  ) : (
                    <User className="h-10 w-10 text-primary" />
                  )}
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 group-hover/avatar:opacity-100 transition-opacity">
                    {uploading ? (
                      <Loader2 className="h-6 w-6 text-white animate-spin" />
                    ) : (
                      <Camera className="h-6 w-6 text-white" />
                    )}
                  </div>
                </div>
                
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  onChange={handleImageChange} 
                  accept="image/*" 
                  className="hidden" 
                />
                
                {isEditingName ? (
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <input 
                      type="text" 
                      value={newName} 
                      onChange={(e) => setNewName(e.target.value)} 
                      className="bg-background/50 border border-primary/50 text-foreground px-3 py-1 text-center rounded-md w-40 text-lg outline-none focus:border-primary"
                      autoFocus
                    />
                    <button onClick={handleSaveName} disabled={updatingName} className="text-green-400 hover:text-green-300 transition-colors">
                      {updatingName ? <Loader2 className="h-5 w-5 animate-spin" /> : <Check className="h-5 w-5" />}
                    </button>
                    <button onClick={() => { setIsEditingName(false); setNewName(user.displayName || ""); }} disabled={updatingName} className="text-red-400 hover:text-red-300 transition-colors">
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2 mb-1 group/name">
                    <h2 className="text-xl font-bold text-foreground truncate">
                      {user.displayName || "Космонавт"}
                    </h2>
                    <button onClick={() => setIsEditingName(true)} className="text-muted-foreground hover:text-primary transition-colors opacity-0 group-hover/name:opacity-100">
                      <Edit2 className="h-4 w-4" />
                    </button>
                  </div>
                )}
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-6">
                  <Mail className="h-4 w-4" />
                  <span className="truncate">{user.email}</span>
                </div>

                <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground/70 mb-8">
                  <Calendar className="h-4 w-4" />
                  <span>В рядах с {getCreationDate()}</span>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full border-red-500/30 text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-all"
                  onClick={handleLogout}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Покинуть корабль
                </Button>
              </div>
            </div>
          </div>

          {/* Stats & Info */}
          <div className="md:w-2/3 space-y-6">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/50">
              Ваша космическая статистика
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="glass rounded-2xl p-6 hover:neon-glow transition-all">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center mb-4 text-primary">
                  <Star className="h-5 w-5" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">{userStats?.level || 1}</div>
                <div className="text-sm text-muted-foreground">Уровень исследователя</div>
              </div>
              
              <div className="glass rounded-2xl p-6 hover:neon-glow transition-all">
                <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center mb-4 text-blue-400">
                  <Award className="h-5 w-5" />
                </div>
                <div className="text-2xl font-bold text-foreground mb-1 mt-1 truncate">{userStats?.rank || "Новичок"}</div>
                <div className="text-sm text-muted-foreground">Ранг в Академии</div>
              </div>
            </div>

            {/* XP Progress Bar */}
            <div className="glass rounded-2xl p-6">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-muted-foreground">Прогресс до следующего уровня</span>
                <span className="font-bold text-primary">{currentXp} / {next} XP</span>
              </div>
              <div className="h-3 w-full bg-input rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary transition-all duration-1000 relative"
                  style={{ width: `${progressPercent}%` }}
                >
                  <div className="absolute inset-0 bg-white/20 w-full h-full animate-[shimmer_2s_infinite]" />
                </div>
              </div>
            </div>

            <div className="glass-strong rounded-2xl p-8 mt-6">
              <h4 className="text-lg font-bold text-white mb-4">Тренировочный центр</h4>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Пока мы готовим для вас настоящие миссии, вы можете проходить тренировки на симуляторе. 
                Каждая успешная симуляция приносит <span className="text-primary font-bold">+50 XP</span>.
              </p>
              <Button 
                onClick={handleTrain} 
                disabled={isTraining}
                className="w-full sm:w-auto neon-glow"
              >
                {isTraining ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Rocket className="mr-2 h-4 w-4" />}
                Запустить тренировку
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
