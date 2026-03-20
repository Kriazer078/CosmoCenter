"use client"

import { Rocket, Satellite, MapPin } from "lucide-react"

export function KazakhstanSpaceSection() {
  return (
    <section id="kazakhstan-space" className="relative py-24 overflow-hidden">
      {/* Background & Effects */}
      <div className="absolute inset-0 bg-primary/5" />
      <div className="absolute inset-0 star-field opacity-20" />
      
      {/* Subtle glowing orb */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
          
          {/* Text Content */}
          <div className="flex-1 space-y-8">
            <div>
              <span className="inline-block px-4 py-1 glass rounded-full text-sm text-cyan-400 mb-4 border border-cyan-500/20">
                Казахстан и космос
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                <span className="text-foreground">От Байконура </span>
                <span className="text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">
                  к будущему
                </span>
              </h2>
            </div>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Байконур — один из самых важных и старейших космодромов в мире. Именно здесь человечество совершило свои первые шаги к звездам.
            </p>

            <div className="space-y-6 pt-4">
              <div className="flex gap-4">
                <div className="p-3 bg-cyan-500/10 rounded-xl h-fit text-cyan-400">
                  <Rocket className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-1">Историческая колыбель</h4>
                  <p className="text-muted-foreground">
                    Отсюда Юрий Гагарин совершил первый в истории человечества полёт в космос.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="p-3 bg-cyan-500/10 rounded-xl h-fit text-cyan-400">
                  <Satellite className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-1">Главная гавань Вселенной</h4>
                  <p className="text-muted-foreground">
                    Тысячи запусков спутников, орбитальных станций и исследовательских миссий.
                  </p>
                </div>
              </div>
            </div>

            {/* <div className="pt-6">
              <button className="px-8 py-4 rounded-xl font-medium text-background bg-cyan-400 hover:bg-cyan-300 transition-colors inline-flex items-center gap-2">
                Узнать больше об истории <MapPin className="w-4 h-4" />
              </button>
            </div> */}
          </div>

          {/* Visual Side */}
          <div className="flex-1 w-full max-w-lg lg:max-w-none relative">
            <div className="aspect-square rounded-full border border-cyan-500/20 relative animate-[spin_60s_linear_infinite]">
              <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 p-4 bg-background rounded-full border border-cyan-500/50 text-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                <Rocket className="w-6 h-6 -rotate-45" />
              </div>
              <div className="absolute bottom-0 translate-y-1/2 right-1/4 p-3 bg-background rounded-full border border-cyan-500/30 text-cyan-400/70 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                <Satellite className="w-5 h-5" />
              </div>
            </div>

            {/* Central static piece */}
            <div className="absolute inset-16 backdrop-blur-md bg-black/40 rounded-full border border-cyan-500/30 flex items-center justify-center p-8 text-center glass shadow-2xl">
              <div>
                <MapPin className="w-12 h-12 text-cyan-400 mx-auto mb-4 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
                <h3 className="text-3xl font-bold text-foreground mb-2 tracking-wider">BAIKONUR</h3>
                <p className="text-cyan-400/80 font-mono text-sm tracking-widest uppercase">
                  45.96° N, 63.30° E
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
