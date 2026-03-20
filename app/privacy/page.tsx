import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[oklch(0.02_0.01_270)] text-foreground pt-24 pb-12 px-4 relative overflow-hidden">
      {/* Background Star field */}
      <div className="absolute inset-0 star-field opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto glass-strong p-8 rounded-2xl">
        <Link href="/" className="inline-flex items-center text-primary hover:text-white transition-colors mb-8">
           <ArrowLeft className="mr-2 h-4 w-4" /> Назад на главную
        </Link>
        
        <h1 className="text-3xl md:text-5xl font-bold mb-8 text-glow">Политика конфиденциальности</h1>
        
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            Добро пожаловать в CosmoCenter! Мы ценим вашу конфиденциальность и стремимся защищать ваши личные данные.
            Настоящая политика конфиденциальности объясняет, как мы собираем, используем и защищаем вашу информацию.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">1. Сбор информации</h2>
          <p>
            Мы собираем только ту информацию, которая необходима для работы сервиса: ваш адрес электронной почты
            (для создания аккаунта и входа) и данные, которые вы оставляете в форме обратной связи. 
            Пароли хранятся в защищенном зашифрованном виде (при помощи Firebase Authentication) и нам недоступны.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">2. Использование данных</h2>
          <p>
            Собранные данные используются исключительно для:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Обеспечения работы вашего аккаунта.</li>
            <li>Ответов на ваши запросы в службу поддержки.</li>
            <li>Улучшения работы нашей платформы.</li>
          </ul>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">3. Передача третьим лицам</h2>
          <p>
            Мы не продаем, не обмениваем и не передаем ваши личные данные сторонним организациям, за исключением случаев, 
            предусмотренных законодательством, или когда это необходимо для работы нашего сервиса (например, провайдеру базы данных Firebase).
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">4. Безопасность</h2>
          <p>
            Мы применяем современные технологии шифрования для защиты вашей информации. Однако помните, что ни один метод 
            передачи данных через интернет не является абсолютно безопасным на 100%. Мы используем стандарты безопасности от Google Firebase.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">5. Изменения в политике</h2>
          <p>
            Мы оставляем за собой право вносить изменения в данную Политику конфиденциальности в любое время. 
            Продолжая использовать CosmoCenter, вы соглашаетесь с её актуальной версией.
          </p>
          
          <p className="mt-8 pt-6 border-t border-border">
            Если у вас есть вопросы, свяжитесь с нами: <a href="mailto:cosmocenter.support@gmail.com" className="text-primary hover:underline">cosmocenter.support@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}
