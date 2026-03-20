"use client"

import { Calendar, Rocket, Globe, Star } from "lucide-react"

const timelineEvents = [
  {
    year: "1957",
    title: "Спутник-1",
    description: "Первый искусственный спутник Земли открыл космическую эру человечества",
    icon: Globe,
  },
  {
    year: "1961",
    title: "Юрий Гагарин",
    description: "Первый человек в космосе. 108 минут, изменившие историю навсегда",
    icon: Star,
  },
  {
    year: "1969",
    title: "Аполлон-11",
    description: "Нил Армстронг — первый человек, ступивший на поверхность Луны",
    icon: Rocket,
  },
  {
    year: "2020",
    title: "SpaceX Crew Dragon",
    description: "Новая эра частной космонавтики и коммерческих полётов к МКС",
    icon: Calendar,
  },
]

export function HistorySection() {
  return (
    <section id="history" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-space" />
      <div className="absolute inset-0 star-field opacity-20" />

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 glass rounded-full text-sm text-primary mb-4">
            Путь к звёздам
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">История </span>
            <span className="text-primary text-glow">освоения космоса</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            От мечты к реальности — ключевые вехи человечества на пути к звёздам
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent hidden md:block" />

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div
                key={event.year}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content Card */}
                <div className="flex-1 glass rounded-2xl p-6 hover:neon-glow transition-all duration-500 group">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <event.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <span className="text-sm text-primary font-medium">{event.year}</span>
                      <h3 className="text-xl font-bold text-foreground mt-1 mb-2">
                        {event.title}
                      </h3>
                      <p className="text-muted-foreground">{event.description}</p>
                    </div>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="hidden md:flex items-center justify-center w-4 h-4 rounded-full bg-primary neon-glow shrink-0" />

                {/* Spacer */}
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div className="mt-20 text-center">
          <blockquote className="glass-strong rounded-2xl p-8 max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl text-foreground italic mb-4">
              &ldquo;Земля — колыбель человечества, но нельзя вечно жить в колыбели&rdquo;
            </p>
            <cite className="text-primary text-glow">— Константин Циолковский</cite>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
