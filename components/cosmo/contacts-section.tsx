"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Mail, MapPin, Phone, Send, Instagram } from "lucide-react"
import { toast } from "sonner"
import { FaqModal } from "./faq-modal"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "cosmocenter.support@gmail.com",
    href: "mailto:cosmocenter.support@gmail.com",
  },
  {
    icon: Phone,
    label: "Телефон",
    value: "+7 (800) 555-STAR",
    href: "tel:+78005557827",
  },
  {
    icon: MapPin,
    label: "Локация",
    value: "Звёздный городок, Россия",
    href: "#",
  },
]

const socialLinks = [
  { icon: Send, label: "Telegram", href: "https://t.me/cosmocenter" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/cosmocenter" },
]

export function ContactsSection() {
  const [isFaqOpen, setIsFaqOpen] = useState(false);

  return (
    <section id="contacts" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[oklch(0.05_0.02_270)]" />
      <div className="absolute inset-0 star-field opacity-20" />
      
      {/* Decorative Gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-20 blur-3xl"
        style={{
          background: "radial-gradient(circle, oklch(0.75 0.18 200) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 glass rounded-full text-sm text-primary mb-4">
            На связи
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Свяжитесь </span>
            <span className="text-primary text-glow">с нами</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Есть вопросы о космосе? Хотите сотрудничать? Мы всегда рады новым контактам
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="glass-strong rounded-2xl p-8">
            <h3 className="text-xl font-bold text-foreground mb-6">
              Отправить сообщение
            </h3>
            <form 
              className="space-y-6"
              onSubmit={async (e) => {
                e.preventDefault();
                const target = e.target as HTMLFormElement;
                const formData = new FormData(target);
                
                const name = formData.get("name") as string;
                const email = formData.get("email") as string;
                const subject = formData.get("subject") as string;
                const message = formData.get("message") as string;

                try {
                  const { db } = await import("@/lib/firebase");
                  const { collection, addDoc } = await import("firebase/firestore");
                  
                  await addDoc(collection(db, "contacts"), {
                    name,
                    email,
                    subject,
                    message,
                    createdAt: new Date(),
                  });
                  
                  toast.success("Сообщение отправлено!", { description: "Оно успешно сохранено в базе данных." });
                  target.reset();
                } catch (error) {
                  console.error("Firebase Error: ", error);
                  toast.error("Произошла ошибка!", { description: "Не удалось отправить сообщение." });
                }
              }}
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">
                    Имя
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Юрий"
                    className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">
                    Email
                  </label>
                  <input
                    name="email"
                    required
                    type="email"
                    placeholder="cosmonaut@email.com"
                    className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-muted-foreground mb-2">
                  Тема
                </label>
                <input
                  name="subject"
                  type="text"
                  placeholder="О чём хотите поговорить?"
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm text-muted-foreground mb-2">
                  Сообщение
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Ваше сообщение..."
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
                />
              </div>
              <Button type="submit" size="lg" className="w-full neon-glow">
                <Send className="mr-2 h-4 w-4" />
                Отправить сообщение
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-6">
                Контактная информация
              </h3>
              <div className="space-y-4 mb-8">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-4 glass rounded-xl p-4 hover:neon-glow transition-all duration-300 group"
                  >
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">
                        {item.label}
                      </div>
                      <div className="font-medium text-foreground">
                        {item.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-4">
                Мы в социальных сетях
              </h4>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="p-3 glass rounded-xl hover:neon-glow transition-all duration-300 group"
                    title={social.label}
                  >
                    <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* FAQ Prompt */}
            <div className="mt-8 glass rounded-xl p-6">
              <h4 className="font-bold text-foreground mb-2">
                Часто задаваемые вопросы
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                Возможно, ответ на ваш вопрос уже есть в нашем FAQ
              </p>
              <Button 
                variant="outline" 
                className="border-primary/50 hover:bg-primary/10 cursor-pointer"
                onClick={() => setIsFaqOpen(true)}
              >
                Перейти в FAQ
              </Button>
            </div>
          </div>
        </div>
      </div>

      <FaqModal isOpen={isFaqOpen} onOpenChange={setIsFaqOpen} />
    </section>
  )
}
