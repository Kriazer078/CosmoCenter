"use client"

import { Orbit, Star, Activity, Maximize2 } from "lucide-react"
import { useAuth } from "@/lib/auth-context"
import { toast } from "sonner"
import { useState } from "react"

export function LearnSection() {
  const learningCategories = [
    {
      title: "Планеты",
      description: "Изучите миры от раскаленных пустынь до ледяных гигантов",
      icon: Orbit,
      delay: "0ms",
      color: "text-blue-400 text-glow",
      bgHover: "hover:bg-blue-900/20"
    },
    {
      title: "Звёзды",
      description: "Жизненный цикл звезд: от туманностей до сверхновых",
      icon: Star,
      delay: "100ms",
      color: "text-yellow-400 text-glow",
      bgHover: "hover:bg-yellow-900/20"
    },
    {
      title: "Чёрные дыры",
      description: "Загадочные объекты, где нарушаются законы физики",
      icon: Activity,
      delay: "200ms",
      color: "text-purple-400 text-glow",
      bgHover: "hover:bg-purple-900/20"
    },
    {
      title: "Вселенная",
      description: "Происхождение, структура и расширение бескрайнего космоса",
      icon: Maximize2,
      delay: "300ms",
      color: "text-red-400 text-glow",
      bgHover: "hover:bg-red-900/20"
    }
  ]

  const { addXp, user } = useAuth()
  const [visited, setVisited] = useState<Set<string>>(new Set())

  const handleCategoryClick = async (title: string) => {
    if (user && !visited.has(title)) {
      setVisited(prev => new Set(prev).add(title))
      try {
        await addXp(5)
        toast.success("Раздел открыт!", { description: "+5 XP за тягу к знаниям." })
      } catch (e) {}
    } else if (!user) {
      toast("Хотите получать XP?", { description: "Авторизуйтесь, чтобы прогресс сохранялся." })
    }
  }

  return (
    <section id="learn" className="relative py-24 bg-black/40 overflow-hidden">
      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 glass rounded-full text-sm text-primary mb-4">
            Образовательная программа
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Разделы </span>
            <span className="text-primary text-glow">обучения</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Выберите тему для погружения и начните своё космическое путешествие
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {learningCategories.map((category) => (
            <div
              key={category.title}
              onClick={() => handleCategoryClick(category.title)}
              className={`glass rounded-2xl p-6 transition-all duration-500 hover:neon-glow group cursor-pointer ${category.bgHover}`}
              style={{ animationDelay: category.delay, animationFillMode: "both" }}
              title="Раздел в разработке"
            >
              <div className={`p-4 rounded-xl bg-background/50 inline-block mb-6 shadow-lg`}>
                <category.icon className={`h-8 w-8 ${category.color} transition-transform group-hover:scale-110`} />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {category.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
