import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[oklch(0.02_0.01_270)] text-foreground pt-24 pb-12 px-4 relative overflow-hidden">
      {/* Background Star field */}
      <div className="absolute inset-0 star-field opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto glass-strong p-8 rounded-2xl">
        <Link href="/" className="inline-flex items-center text-primary hover:text-white transition-colors mb-8">
           <ArrowLeft className="mr-2 h-4 w-4" /> Назад на главную
        </Link>
        
        <h1 className="text-3xl md:text-5xl font-bold mb-8 text-glow">Условия использования</h1>
        
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            Добро пожаловать в CosmoCenter! Пожалуйста, внимательно прочитайте настоящие Условия использования перед
            началом работы с нашим сайтом.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">1. Согласие с условиями</h2>
          <p>
            Используя сайт CosmoCenter и регистрируя аккаунт, вы подтверждаете свое согласие с этими условиями. Если вы не
            согласны с каким-либо из пунктов, пожалуйста, прекратите использование сайта.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">2. Использование контента</h2>
          <p>
            Наш проект носит образовательный и информационный характер. Пользователь имеет право:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Свободно изучать предоставленные материалы, статьи и статистику.</li>
            <li>Скачивать изображения из Галереи для личного, некоммерческого использования.</li>
            <li>Использовать проект для обучения.</li>
          </ul>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">3. Авторские права на изображения и данные</h2>
          <p>
            Весь контент, включая фотографии планет, туманностей и звездных скоплений, принадлежит их
            законным владельцам (NASA, ESA, Unsplash и другим достоверным источникам). Мы не заявляем об
            авторских правах на эти медиафайлы. Изображения используются в целях свободного просвещения.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">4. Ограничение ответственности</h2>
          <p>
            Администрация CosmoCenter старается предоставлять только актуальную и научно достоверную информацию, 
            однако мы не несем юридической ответственности за возможные ошибки, неточности или временную неработоспособность 
            модулей сайта. Вы используете предоставленные данные "как есть".
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">5. Правила поведения пользователей</h2>
          <p>
            При использовании форм обратной связи или иных интерактивных функций, запрещается отправлять спам,
            вредоносные ссылки, оскорбления или любой другой контент, нарушающий законодательство или права третьих лиц.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">6. Изменение условий</h2>
          <p>
            Мы оставляем за собой право вносить изменения в настоящие Условия использования. О значительных изменениях мы 
            уведомим вас на этой странице.
          </p>
          
          <p className="mt-8 pt-6 border-t border-border">
            Если у вас возникли вопросы по поводу Условий, пожалуйста, напишите нам: <a href="mailto:cosmocenter.support@gmail.com" className="text-primary hover:underline">cosmocenter.support@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}
