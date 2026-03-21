"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, Play, Sparkles } from "lucide-react"
import { Dialog, DialogContent } from "@/components/ui/dialog"

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-space" />
      <div className="absolute inset-0 star-field opacity-40" />
      
      {/* Nebula Effects */}
      <div 
        className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] rounded-full opacity-20 blur-3xl"
        style={{
          background: "radial-gradient(circle, oklch(0.6 0.22 280) 0%, transparent 70%)",
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          transition: "transform 0.3s ease-out"
        }}
      />
      <div 
        className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] rounded-full opacity-15 blur-3xl"
        style={{
          background: "radial-gradient(circle, oklch(0.75 0.18 200) 0%, transparent 70%)",
          transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
          transition: "transform 0.3s ease-out"
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-8 animate-float">
          <Sparkles className="h-4 w-4 text-primary" />
          <span className="text-sm text-muted-foreground">
            Откройте для себя бесконечность космоса
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          <span className="block text-foreground">Исследуй космос</span>
          <span className="block text-primary text-glow">по-новому</span>
        </h1>

        {/* Subheading */}
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed text-balance">
          Интерактивная образовательная платформа о космосе для студентов, семей и будущих исследователей.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 w-full max-w-md mx-auto sm:max-w-none">
          <Button asChild size="lg" className="neon-glow hover:scale-105 transition-transform text-lg px-8 py-6 cursor-pointer w-full sm:w-auto">
            <a href="#about">Начать обучение</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="group border-primary/50 hover:bg-primary/10 text-lg px-8 py-6 cursor-pointer w-full sm:w-auto"
            onClick={() => setIsVideoOpen(true)}
          >
            <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Смотреть видео
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 max-w-4xl mx-auto">
          {[
            { value: "400B+", label: "Звёзд в галактике" },
            { value: "8", label: "Планет системы" },
            { value: "200+", label: "Активных миссий" },
            { value: "1969", label: "Первый человек на Луне" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="glass rounded-xl p-3 sm:p-4 hover:neon-glow transition-all duration-500"
            >
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary text-glow">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-primary/60" />
      </div>

      {/* Video Modal */}
      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="max-w-5xl w-[90vw] p-0 bg-black/90 border-white/10 overflow-hidden aspect-video rounded-2xl">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/EEIk7gwjgIM?autoplay=1"
            title="Space Exploration Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </DialogContent>
      </Dialog>
    </section>
  )
}
