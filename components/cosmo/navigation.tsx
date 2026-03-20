"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { AuthModal } from "@/components/cosmo/auth-modal"

const navItems = [
  { name: "Главная", href: "#home" },
  { name: "История", href: "#history" },
  { name: "Планеты", href: "#planets" },
  { name: "Миссии", href: "#missions" },
  { name: "Галерея", href: "#gallery" },
  { name: "Контакты", href: "#contacts" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "glass-strong py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="#home" className="flex items-center gap-2 group">
          <div className="relative">
            <Rocket className="h-8 w-8 text-primary transition-transform group-hover:rotate-12 group-hover:scale-110" />
            <div className="absolute inset-0 bg-primary/30 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <span className="text-xl font-bold tracking-wider">
            <span className="text-primary text-glow">COSMO</span>
            <span className="text-foreground">CENTER</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all group-hover:w-full rounded-full" />
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <AuthModal />
            <Button asChild className="neon-glow hover:scale-105 transition-transform cursor-pointer">
              <a href="#planets">Начать путешествие</a>
            </Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "lg:hidden glass-strong absolute top-full left-0 right-0 transition-all duration-300 overflow-hidden",
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <div className="mt-4 flex flex-col gap-3">
            <AuthModal />
            <Button asChild className="neon-glow cursor-pointer" onClick={() => setIsOpen(false)}>
              <a href="#planets">Начать путешествие</a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
