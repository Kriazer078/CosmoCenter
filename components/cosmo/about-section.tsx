"use client"

import { Rocket } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-space" />
      <div className="absolute inset-0 star-field opacity-20" />

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 glass rounded-full text-sm text-primary mb-4">
            Добро пожаловать
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">What is </span>
            <span className="text-primary text-glow">CosmoCenter?</span>
          </h2>
          <p className="max-w-3xl mx-auto text-muted-foreground text-xl md:text-2xl leading-relaxed mt-8">
            CosmoCenter is an educational platform that makes space simple, interactive and exciting.
            <br className="hidden md:block" />
            It is the first step towards building a real space experience center.
          </p>
          
          <div className="mt-12 flex justify-center">
             <div className="glass p-6 rounded-2xl flex items-center justify-center gap-4 hover:neon-glow transition-all duration-500 w-full max-w-xl">
               <div className="p-4 rounded-xl bg-primary/10 text-primary">
                 <Rocket className="w-8 h-8" />
               </div>
               <div className="text-left">
                  <h3 className="font-bold text-lg text-foreground mb-1">CosmoCenter — это образовательная платформа</h3>
                  <p className="text-muted-foreground">которая делает космос простым, интерактивным и интересным. Это первый шаг к созданию реального космического центра.</p>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  )
}
