"use client"

import { Globe, Tent, School, Building2 } from "lucide-react"

export function RoadmapSection() {
  const steps = [
    {
      title: "Сайт — образовательная платформа",
      description: "Интерактивное онлайн-пространство для изучения космоса из любой точки мира.",
      icon: Globe,
      color: "text-blue-400"
    },
    {
      title: "Мобильный космический формат",
      description: "Выездные планетарии, купола и палатки для погружения в космическую атмосферу.",
      icon: Tent,
      color: "text-purple-400"
    },
    {
      title: "Программы для школ",
      description: "Образовательные модули, интегрированные в школьную программу для юных исследователей.",
      icon: School,
      color: "text-green-400"
    },
    {
      title: "Реальный космоцентр",
      description: "Масштабный физический центр с тренажерами, симуляторами и музеем космонавтики.",
      icon: Building2,
      color: "text-orange-400"
    }
  ]

  return (
    <section id="roadmap" className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 gradient-space opacity-50" />
      <div className="absolute inset-0 star-field opacity-30" />
      
      <div className="relative z-10 container mx-auto px-4">
        
        {/* Header content */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block px-4 py-1 glass rounded-full text-sm text-primary mb-4">
            Будущий CosmoCenter
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Масштабирование </span>
            <span className="text-primary text-glow">мечты</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Этот сайт — первый шаг проекта CosmoCenter. 
            <br className="hidden md:block" />
            В будущем он станет реальным местом с интерактивным космическим опытом.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-10 text-foreground">Как это работает</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="glass p-8 rounded-3xl relative group hover:neon-glow transition-all duration-500 overflow-hidden">
                {/* Step Number Background */}
                <div className="absolute -right-4 -top-8 text-[120px] font-bold text-primary/5 group-hover:text-primary/10 transition-colors pointer-events-none select-none">
                  {index + 1}
                </div>
                
                <div className="relative z-10">
                  <div className={`p-4 bg-background/50 rounded-2xl w-fit mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                    <step.icon className={`w-8 h-8 ${step.color} drop-shadow-[0_0_10px_currentColor]`} />
                  </div>
                  
                  <h4 className="text-xl font-bold text-foreground mb-3 leading-snug">
                    {step.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
