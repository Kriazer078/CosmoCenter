"use client"

import { Compass, Ship, UserCheck } from "lucide-react"
import { useAuth } from "@/lib/auth-context"
import { toast } from "sonner"
import { useState } from "react"

export function InteractiveSection() {
  const activities = [
    {
      title: "Выбери свою планету",
      description: "Изучи условия жизни на разных планетах и найди свой новый дом.",
      icon: Compass,
      image: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?auto=format&fit=crop&q=80&w=800",
      href: "#learn"
    },
    {
      title: "Путешествуй по космосу",
      description: "Отправься в виртуальный тур через нашу Солнечную систему и дальше.",
      icon: Ship,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
      href: "#gallery"
    },
    {
      title: "Стань астронавтом",
      description: "Сделай первые шаги и пройди симуляцию подготовки к полету.",
      icon: UserCheck,
      image: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&q=80&w=800",
      href: "#contacts"
    }
  ]

  const { addXp, user } = useAuth()
  const [visited, setVisited] = useState<Set<string>>(new Set())

  const handleInteract = (title: string) => {
    if (user && !visited.has(title)) {
      setVisited(prev => new Set(prev).add(title))
      addXp(5).then(() => {
        toast.success("Интерактив пройден!", { description: "+5 XP за активность." })
      }).catch(() => {})
    }
  }

  return (
    <section id="interactive" className="relative py-24 overflow-hidden">
      {/* Background with slight tint */}
      <div className="absolute inset-0 bg-primary/5" />
      <div className="absolute inset-0 star-field opacity-30" />

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          <span className="inline-block px-4 py-1 glass rounded-full text-sm text-primary mb-4 z-10 relative">
            Интерактивный опыт
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Исследуй </span>
            <span className="text-primary text-glow">космос</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Взаимодействуйте с виртуальной средой и получайте знания на практике
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {activities.map((activity, index) => (
            <a
              key={activity.title}
              href={activity.href}
              onClick={() => handleInteract(activity.title)}
              className="glass rounded-3xl overflow-hidden hover:neon-glow transition-all duration-500 group flex flex-col h-full cursor-pointer block"
            >
              {/* Visual "Image" half */}
              <div 
                className="h-48 w-full relative flex items-center justify-center border-b border-primary/20 overflow-hidden"
              >
                  <img src={activity.image} alt={activity.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-500" />
                  <activity.icon className="w-16 h-16 text-white/70 group-hover:text-white group-hover:scale-125 transition-all duration-700 z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
              </div>

              {/* Text Body */}
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {activity.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {activity.description}
                </p>
                <div className="mt-8 flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  Начать <activity.icon className="ml-2 w-4 h-4 inline" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
