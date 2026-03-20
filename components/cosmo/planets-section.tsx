"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const planets = [
  {
    name: "Меркурий",
    distance: "58 млн км",
    diameter: "4 879 км",
    description: "Ближайшая к Солнцу планета с экстремальными перепадами температур",
    color: "from-gray-400 to-gray-600",
    size: "w-8 h-8 md:w-10 md:h-10",
  },
  {
    name: "Венера",
    distance: "108 млн км",
    diameter: "12 104 км",
    description: "Самая горячая планета с плотной атмосферой из углекислого газа",
    color: "from-yellow-500 to-orange-600",
    size: "w-12 h-12 md:w-16 md:h-16",
  },
  {
    name: "Земля",
    distance: "150 млн км",
    diameter: "12 742 км",
    description: "Наш дом — единственная известная планета с жизнью",
    color: "from-blue-400 to-green-500",
    size: "w-14 h-14 md:w-18 md:h-18",
  },
  {
    name: "Марс",
    distance: "228 млн км",
    diameter: "6 779 км",
    description: "Красная планета — главная цель колонизации человечества",
    color: "from-red-500 to-orange-700",
    size: "w-10 h-10 md:w-14 md:h-14",
  },
  {
    name: "Юпитер",
    distance: "778 млн км",
    diameter: "139 820 км",
    description: "Крупнейший газовый гигант с Большим красным пятном",
    color: "from-orange-400 to-amber-700",
    size: "w-24 h-24 md:w-32 md:h-32",
  },
  {
    name: "Сатурн",
    distance: "1.4 млрд км",
    diameter: "116 460 км",
    description: "Планета с величественной системой колец из льда и камня",
    color: "from-yellow-300 to-amber-500",
    size: "w-20 h-20 md:w-28 md:h-28",
  },
  {
    name: "Уран",
    distance: "2.9 млрд км",
    diameter: "50 724 км",
    description: "Ледяной гигант с уникальным боковым вращением",
    color: "from-cyan-300 to-teal-500",
    size: "w-16 h-16 md:w-20 md:h-20",
  },
  {
    name: "Нептун",
    distance: "4.5 млрд км",
    diameter: "49 244 км",
    description: "Самая удалённая планета с самыми сильными ветрами в системе",
    color: "from-blue-500 to-indigo-700",
    size: "w-14 h-14 md:w-18 md:h-18",
  },
]

export function PlanetsSection() {
  const [selectedPlanet, setSelectedPlanet] = useState(planets[2])

  return (
    <section id="planets" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-space" />
      <div className="absolute inset-0 star-field opacity-40" />

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 glass rounded-full text-sm text-primary mb-4">
            Солнечная система
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Планеты </span>
            <span className="text-primary text-glow">нашей системы</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Восемь уникальных миров, каждый со своими тайнами и загадками
          </p>
        </div>

        {/* Interactive Solar System */}
        <div className="mb-12">
          {/* Planet Selector */}
          <div className="flex items-center justify-center gap-2 md:gap-4 flex-wrap mb-12">
            {planets.map((planet) => (
              <button
                key={planet.name}
                onClick={() => setSelectedPlanet(planet)}
                className={cn(
                  "rounded-full bg-gradient-to-br transition-all duration-300 hover:scale-125",
                  planet.color,
                  planet.size,
                  selectedPlanet.name === planet.name && "ring-2 ring-primary ring-offset-2 ring-offset-background scale-125 neon-glow"
                )}
                title={planet.name}
              />
            ))}
          </div>

          {/* Selected Planet Info */}
          <div className="glass-strong rounded-2xl p-8 max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <div
                className={cn(
                  "w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br animate-pulse-slow",
                  selectedPlanet.color
                )}
              />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {selectedPlanet.name}
            </h3>
            <p className="text-muted-foreground text-lg mb-8">
              {selectedPlanet.description}
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="glass rounded-xl p-4">
                <div className="text-sm text-muted-foreground mb-1">
                  Расстояние от Солнца
                </div>
                <div className="text-xl font-bold text-primary">
                  {selectedPlanet.distance}
                </div>
              </div>
              <div className="glass rounded-xl p-4">
                <div className="text-sm text-muted-foreground mb-1">
                  Диаметр
                </div>
                <div className="text-xl font-bold text-primary">
                  {selectedPlanet.diameter}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Planet Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {planets.map((planet) => (
            <div
              key={planet.name}
              onClick={() => setSelectedPlanet(planet)}
              className={cn(
                "glass rounded-xl p-4 cursor-pointer transition-all duration-300 hover:scale-105",
                selectedPlanet.name === planet.name && "neon-glow border-primary"
              )}
            >
              <div className="flex items-center gap-3 mb-2">
                <div
                  className={cn(
                    "w-6 h-6 rounded-full bg-gradient-to-br shrink-0",
                    planet.color
                  )}
                />
                <span className="font-medium text-foreground truncate">
                  {planet.name}
                </span>
              </div>
              <div className="text-xs text-muted-foreground">
                {planet.distance}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
