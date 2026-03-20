"use client"

import { Coffee, BedDouble, HeartPulse, Feather, Map, Home, Clock } from "lucide-react"
import { useState } from "react"
import { useAuth } from "@/lib/auth-context"
import { toast } from "sonner"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"

export function LifeInSpaceSection() {
  const spaceQuestions = [
    {
      q: "Как астронавты спят?",
      icon: BedDouble,
      color: "text-blue-400",
      answer: "В условиях микрогравитации нет понятий «верх» и «низ», поэтому спать на кроватях невозможно. Астронавты спят в прикреплённых к стенам спальных мешках внутри своих личных кают. Рядом с головой обязательно должен работать вентилятор: без него выдыхаемый углекислый газ образует вокруг лица невидимое облако, от которого можно задохнуться.",
      source: "NASA: МКС (Международная космическая станция)"
    },
    {
      q: "Как астронавты едят?",
      icon: Coffee,
      color: "text-orange-400",
      answer: "Большая часть пищи на МКС сублимирована (высушена) или термостабилизирована. Астронавты добавляют в неё горячую или холодную воду через специальный диспенсер. Жидкости пьют исключительно через тубусы, чтобы капли не разлетелись по всей станции и не замкнули ценное оборудование. Свежие фрукты завозят очень редко в качестве лакомства на грузовых кораблях.",
      source: "NASA: Жизнь на орбите"
    },
    {
      q: "Что происходит с телом в космосе?",
      icon: HeartPulse,
      color: "text-red-400",
      answer: "В условиях микрогравитации мышцам и костям не нужно бороться с силой притяжения Земли. Без физических нагрузок тело начинает стремительно терять мышечную массу и плотность костной ткани, так как организм считает их «ненужными». Чтобы вернуться на Землю здоровыми, астронавты обязаны заниматься на специальных орбитальных тренажерах от 2 до 2,5 часов каждый день.",
      source: "NASA: Изучение влияния космоса на человека"
    },
    {
      q: "Почему люди парят (летают) в космосе?",
      icon: Feather,
      color: "text-teal-400",
      answer: "Астронавты не находятся в области, где гравитация равна нулю. МКС летает на высоте около 400 км над поверхностью Земли, где гравитация всё ещё составляет почти 90% от привычной. Причина невесомости — непрерывное свободное падение: станция летит с огромной скоростью (~28000 км/ч) в горизонтальном направлении вокруг Земли, а Земля закругляется под ней. Астронавты просто падают вместе со станцией.",
      source: "NASA: Микрогравитация и свободное падение"
    }
  ]

  const marsQuestions = [
    {
      q: "Могут ли люди жить на Марсе?",
      icon: Map,
      color: "text-rose-500",
      answer: "Теоретически да, но с серьёзными трудностями. Марс имеет тонкую атмосферу из углекислого газа, не имеет глобального магнитного поля и среднюю температуру -60°C. Потребуются герметичные, радиационно-защищенные базы, замкнутые системы переработки воздуха и воды, а также постоянное использование специальных скафандров.",
      source: "NASA / ESA: Миссии на Марс"
    },
    {
      q: "Как будет выглядеть жизнь на Марсе?",
      icon: Home,
      color: "text-rose-400",
      answer: "Дома, скорее всего, придется строить с использованием технологий 3D-печати из местного марсианского грунта (реголита), чтобы получить толстые купола для защиты от метеоритов и космической радиации. Пища будет выращиваться в гидропонных оранжереях на искусственном освещении, а электроэнергия будет добываться через ядерные мини-реакторы и солнечные панели.",
      source: "NASA: Программа 'Полет на Марс'"
    },
    {
      q: "Сколько времени нужно, чтобы долететь до Марса?",
      icon: Clock,
      color: "text-amber-500",
      answer: "Полет на Марс ракетой на химическом топливе занимает около 7-9 месяцев. Путешествие возможно только раз в ~26 месяцев во время 'стартового окна', когда орбиты планет оптимальны. Однако перспективные технологии будущего (такие как тепловые ядерные реакторы и ионные двигатели нового поколения) могут теоретически сократить время полёта с многомесячного до 45 дней.",
      source: "NASA: Пусковые окна к Марсу"
    }
  ]

  const [selectedArticle, setSelectedArticle] = useState<any>(null)
  const { addXp, user } = useAuth()
  const [visited, setVisited] = useState<Set<string>>(new Set())

  const handleArticleClick = async (item: any) => {
    setSelectedArticle(item)
    if (user && !visited.has(item.q)) {
      setVisited(prev => new Set(prev).add(item.q))
      try {
        await addXp(10)
        toast.success("Новое знание получено!", { description: "+10 XP за изучение материала." })
      } catch (e) {
        // silently fail or log locally
      }
    }
  }

  return (
    <section id="life-in-space" className="relative py-24 bg-black/60 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="absolute -left-1/4 top-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -right-1/4 bottom-1/4 w-[400px] h-[400px] bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4">
        
        {/* Block 1: Life in Space */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 glass flex items-center justify-center w-max mx-auto rounded-full text-sm text-primary mb-4">
              Повседневность вне графитации
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="text-foreground">Жизнь </span>
              <span className="text-primary text-glow">в космосе</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {spaceQuestions.map((item, i) => (
              <div 
                key={i} 
                onClick={() => handleArticleClick(item)}
                className="glass p-6 rounded-2xl hover:neon-glow transition-all duration-300 group cursor-pointer flex flex-col items-center text-center"
              >
                <item.icon className={`w-10 h-10 mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 ${item.color}`} />
                <h4 className="text-lg font-medium text-foreground">{item.q}</h4>
                <div className="mt-4 flex items-center text-primary text-sm font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                  Узнать ответ <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Block 2: Mars and the Future */}
        <div>
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 glass rounded-full text-sm text-rose-400 mb-4 border border-rose-500/20">
              Следующий шаг человечества
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="text-foreground">Марс </span>
              <span className="text-rose-500 drop-shadow-[0_0_15px_rgba(244,63,94,0.5)]">и будущее</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {marsQuestions.map((item, i) => (
              <div 
                key={i} 
                onClick={() => handleArticleClick(item)}
                className="glass border-rose-500/10 hover:border-rose-500/40 p-8 rounded-3xl transition-all duration-500 group cursor-pointer relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/5 rounded-full blur-2xl group-hover:bg-rose-500/10 transition-colors" />
                <item.icon className={`w-12 h-12 mb-6 transition-transform duration-500 group-hover:scale-110 ${item.color}`} />
                <h4 className="text-xl font-bold text-foreground mb-2 relative z-10">{item.q}</h4>
                <div className="mt-6 flex items-center text-rose-400 text-sm font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                  Читать статью <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
      {/* Information Modal */}
      <Dialog open={!!selectedArticle} onOpenChange={(open) => !open && setSelectedArticle(null)}>
        <DialogContent className="glass-strong border-primary/20 text-foreground max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold flex items-center gap-3 mb-4">
              {selectedArticle?.icon && <selectedArticle.icon className={`w-8 h-8 ${selectedArticle.color}`} />}
              {selectedArticle?.q}
            </DialogTitle>
            <DialogDescription className="text-muted-foreground pt-4 border-t border-primary/20 leading-relaxed text-base">
              {selectedArticle?.answer}
              
              {selectedArticle?.source && (
                <div className="mt-8 pt-4 border-t border-primary/10 text-xs text-primary/60 font-medium tracking-wide w-full text-right">
                  Источник: {selectedArticle.source}
                </div>
              )}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </section>
  )
}
