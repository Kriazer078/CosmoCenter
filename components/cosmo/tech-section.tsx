"use client"

import { useState } from "react"

import { Cpu, Zap, Shield, Orbit, ArrowRight, Snowflake, Pickaxe, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

const technologies = [
  {
    icon: Cpu,
    title: "Квантовые двигатели",
    description:
      "Революционные системы на основе квантовой физики, способные преодолеть барьер скорости света",
    status: "В разработке",
    progress: 35,
  },
  {
    icon: Zap,
    title: "Термоядерные реакторы",
    description:
      "Чистая и практически неограниченная энергия для межпланетных путешествий",
    status: "Прототип",
    progress: 65,
  },
  {
    icon: Shield,
    title: "Радиационная защита",
    description:
      "Магнитные щиты нового поколения для защиты экипажа от космической радиации",
    status: "Тестирование",
    progress: 80,
  },
  {
    icon: Orbit,
    title: "Искусственная гравитация",
    description:
      "Вращающиеся модули и электромагнитные системы для имитации земной гравитации",
    status: "Концепция",
    progress: 20,
  },
  {
    icon: Snowflake,
    title: "Криогенный сон",
    description:
      "Медицинские капсулы для погружения экипажа в длительный стазис во время межзвёздных полётов",
    status: "Концепция",
    progress: 15,
  },
  {
    icon: Pickaxe,
    title: "Добыча на астероидах",
    description:
      "Автоматизированные дроны для извлечения редких металлов и льда из околоземных астероидов",
    status: "Прототип",
    progress: 50,
  },
]

export function TechSection() {
  const [showAll, setShowAll] = useState(false);
  const displayedTech = showAll ? technologies : technologies.slice(0, 4);
  return (
    <section id="tech" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[oklch(0.06_0.02_270)]" />
      <div className="absolute inset-0 star-field opacity-30" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-16">
          <div>
            <span className="inline-block px-4 py-1 glass rounded-full text-sm text-primary mb-4">
              Инновации
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="text-foreground">Технологии </span>
              <span className="text-primary text-glow">будущего</span>
            </h2>
            <p className="max-w-xl text-muted-foreground text-lg">
              Прорывные разработки, которые откроют человечеству дорогу к звёздам
            </p>
          </div>
          <Button 
            variant="outline" 
            className="border-primary/50 hover:bg-primary/10 group cursor-pointer"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Скрыть" : "Загрузить ещё"}
            {showAll ? (
              <ChevronUp className="ml-2 h-4 w-4 transition-transform" />
            ) : (
              <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            )}
          </Button>
        </div>

        {/* Technology Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {displayedTech.map((tech) => (
            <div
              key={tech.title}
              className="glass rounded-2xl p-6 hover:neon-glow-purple transition-all duration-500 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl bg-accent/20 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <tech.icon className="h-6 w-6" />
                </div>
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                  {tech.status}
                </span>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-2">
                {tech.title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {tech.description}
              </p>

              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Прогресс разработки</span>
                  <span className="text-primary">{tech.progress}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000"
                    style={{ width: `${tech.progress}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 glass-strong rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Присоединяйтесь к миссии
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Будьте в курсе последних разработок в области космических технологий. 
            Получайте эксклюзивные материалы и аналитику прямо на почту.
          </p>
          <form 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto"
            onSubmit={async (e) => {
              e.preventDefault();
              const target = e.target as HTMLFormElement;
              const input = target.elements[0] as HTMLInputElement;
              
              if (input && input.value) {
                try {
                  const { db } = await import("@/lib/firebase");
                  const { collection, addDoc } = await import("firebase/firestore");
                  
                  await addDoc(collection(db, "newsletter"), {
                    email: input.value,
                    subscribedAt: new Date(),
                  });
                  
                  toast.success("Вы успешно подписались!", { 
                    description: `Новости будут отправляться на ${input.value}` 
                  });
                  target.reset();
                } catch (error) {
                  console.error("Firebase Error: ", error);
                  toast.error("Произошла ошибка!", {
                    description: "Не удалось подписаться. Попробуйте позже."
                  });
                }
              }
            }}
          >
            <input
              type="email"
              required
              placeholder="Ваш email"
              className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
            />
            <Button type="submit" className="w-full sm:w-auto neon-glow whitespace-nowrap cursor-pointer">
              Подписаться
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
