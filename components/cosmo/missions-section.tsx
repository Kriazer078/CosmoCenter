"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Rocket, Satellite, Moon, Globe, ArrowUpRight } from "lucide-react"

const missions = [
  {
    name: "Artemis III",
    agency: "NASA",
    destination: "Луна",
    status: "active",
    statusLabel: "Активна",
    year: "2026",
    description: "Возвращение человека на Луну спустя 50 лет",
    icon: Moon,
    progress: 75,
  },
  {
    name: "Mars Sample Return",
    agency: "NASA + ESA",
    destination: "Марс",
    status: "active",
    statusLabel: "Активна",
    year: "2028",
    description: "Доставка образцов марсианского грунта на Землю",
    icon: Rocket,
    progress: 45,
  },
  {
    name: "Starship",
    agency: "SpaceX",
    destination: "Марс",
    status: "testing",
    statusLabel: "Тестирование",
    year: "2029",
    description: "Полностью многоразовый корабль для межпланетных путешествий",
    icon: Rocket,
    progress: 60,
  },
  {
    name: "Europa Clipper",
    agency: "NASA",
    destination: "Европа",
    status: "active",
    statusLabel: "В полёте",
    year: "2024",
    description: "Исследование ледяного спутника Юпитера",
    icon: Satellite,
    progress: 30,
  },
  {
    name: "Lunar Gateway",
    agency: "NASA + ESA",
    destination: "Лунная орбита",
    status: "construction",
    statusLabel: "Строительство",
    year: "2027",
    description: "Орбитальная станция для исследования Луны",
    icon: Globe,
    progress: 40,
  },
  {
    name: "James Webb",
    agency: "NASA + ESA",
    destination: "L2 точка",
    status: "operational",
    statusLabel: "Работает",
    year: "2021",
    description: "Самый мощный космический телескоп в истории",
    icon: Satellite,
    progress: 100,
  },
]

const statusColors: Record<string, string> = {
  active: "bg-green-500/20 text-green-400 border-green-500/30",
  testing: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  construction: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  operational: "bg-primary/20 text-primary border-primary/30",
}

export function MissionsSection() {
  return (
    <section id="missions" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[oklch(0.06_0.02_270)]" />
      <div className="absolute inset-0 star-field opacity-25" />
      
      {/* Decorative Lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 glass rounded-full text-sm text-accent mb-4">
            Прямо сейчас
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Текущие </span>
            <span className="text-accent text-glow-purple">космические миссии</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Следите за главными космическими проектами человечества в реальном времени
          </p>
        </div>

        {/* Missions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {missions.map((mission) => (
            <div
              key={mission.name}
              className="glass rounded-2xl p-6 hover:neon-glow-purple transition-all duration-500 group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <mission.icon className="h-6 w-6" />
                </div>
                <Badge
                  variant="outline"
                  className={statusColors[mission.status]}
                >
                  {mission.statusLabel}
                </Badge>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-1">
                {mission.name}
              </h3>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm text-primary">{mission.agency}</span>
                <span className="text-muted-foreground">•</span>
                <span className="text-sm text-muted-foreground">{mission.year}</span>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                {mission.description}
              </p>

              {/* Destination & Progress */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-muted-foreground">
                  Цель: <span className="text-foreground">{mission.destination}</span>
                </span>
                <span className="text-xs text-accent">{mission.progress}%</span>
              </div>
              <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000"
                  style={{ width: `${mission.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Live Updates Banner */}
        <div className="glass-strong rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-green-400">Live</span>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-1">
              Следите за миссиями в реальном времени
            </h3>
            <p className="text-muted-foreground">
              Получайте уведомления о ключевых событиях космических программ
            </p>
          </div>
          <Button asChild className="neon-glow-purple whitespace-nowrap group cursor-pointer">
            <a href="#contacts">
              Отслеживать миссии
              <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
