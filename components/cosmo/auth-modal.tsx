'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/lib/auth-context';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { User, LogOut } from 'lucide-react';
import { toast } from 'sonner';

export function AuthModal() {
  const { user, login, register, loginWithGoogle, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      if (isLogin) {
        await login(email, password);
        toast.success("Вход выполнен успешно!");
      } else {
        await register(email, password);
        toast.success("Регистрация успешна!");
      }
      setIsOpen(false);
      setEmail('');
      setPassword('');
    } catch (error: any) {
      console.error(error);
      const msg = error.code === 'auth/email-already-in-use' 
        ? 'Этот email уже зарегистрирован'
        : error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found' || error.code === 'auth/invalid-credential' 
          ? 'Неверный email или пароль' 
          : 'Произошла ошибка, попробуйте еще раз';
          
      toast.error(isLogin ? "Ошибка входа" : "Ошибка регистрации", {
        description: msg
      });
    } finally {
      setLoading(false);
    }
  };

  if (user) {
    return (
      <div className="flex items-center gap-4">
        <Link href="/profile" className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors bg-white/5 py-1.5 px-3 rounded-full border border-white/10">
          <User className="h-4 w-4" />
          <span className="truncate max-w-[120px]">{user.email}</span>
        </Link>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => {
            logout();
            toast.success("Вы вышли из аккаунта");
          }}
          className="text-muted-foreground hover:text-white"
        >
          <LogOut className="h-4 w-4" />
        </Button>
      </div>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="border-primary/50 text-white hover:bg-primary/20">
          Войти
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-background/95 glass-strong border-white/10">
        <DialogHeader>
          <DialogTitle className="text-xl">
            {isLogin ? 'Вход в систему' : 'Регистрация'}
          </DialogTitle>
          <DialogDescription>
            {isLogin 
              ? 'Войдите, чтобы получить доступ к своей панели исследователя.' 
              : 'Создайте аккаунт для полного доступа к миссиям.'}
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="space-y-2">
            <label className="text-sm text-muted-foreground">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="yuri@gagarin.space"
              className="w-full px-3 py-2 rounded-md bg-input border border-border focus:border-primary outline-none"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-muted-foreground">Пароль</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              minLength={6}
              className="w-full px-3 py-2 rounded-md bg-input border border-border focus:border-primary outline-none"
            />
          </div>
          {!isLogin && (
            <div className="flex items-start gap-3 mt-4 mb-2">
              <input 
                type="checkbox" 
                id="terms" 
                required 
                className="mt-0.5 accent-primary w-4 h-4 cursor-pointer"
              />
              <label htmlFor="terms" className="text-xs text-muted-foreground leading-tight">
                Соглашаюсь с{' '}
                <a href="/privacy" target="_blank" className="text-primary hover:underline">Политикой конфиденциальности</a>
                {' '}и{' '}
                <a href="/terms" target="_blank" className="text-primary hover:underline">Условиями использования</a>.
              </label>
            </div>
          )}
          
          <Button type="submit" disabled={loading} className="w-full neon-glow font-bold mt-2">
            {loading ? 'Загрузка...' : (isLogin ? 'Войти' : 'Создать аккаунт')}
          </Button>
        </form>

        <div className="text-center mt-2">
          <button 
            type="button" 
            onClick={() => setIsLogin(!isLogin)}
            className="text-sm text-muted-foreground hover:text-primary transition-colors hover:underline"
          >
            {isLogin 
              ? 'Нет аккаунта? Зарегистрироваться' 
              : 'Уже есть аккаунт? Войти'}
          </button>
        </div>

        <div className="flex items-center gap-4 my-6">
          <div className="flex-1 h-px bg-white/10" />
          <span className="text-xs uppercase text-muted-foreground">Или продолжить через</span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        <div className="flex flex-col gap-3 pb-2">
          <Button 
            type="button" 
            variant="outline" 
            onClick={async () => {
              try {
                setLoading(true);
                await loginWithGoogle();
                setIsOpen(false);
                toast.success("Вход через Google успешен!");
              } catch (error: any) {
                toast.error("Ошибка входа", { description: error.message });
              } finally {
                setLoading(false);
              }
            }}
            disabled={loading}
            className="w-full bg-white/5 border-white/10 hover:bg-white/10 flex items-center gap-2"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Продолжить с Google
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
