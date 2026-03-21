import Link from "next/link"
import { Rocket, Instagram, Send } from "lucide-react"

const footerLinks = {
  explore: [
    { name: "История", href: "#history" },
    { name: "Планеты", href: "#planets" },
    { name: "Галерея", href: "#gallery" },
    { name: "Контакты", href: "#contacts" },
  ],
  legal: [
    { name: "Политика конфиденциальности", href: "/privacy" },
    { name: "Условия использования", href: "/terms" },
  ],
}

const socialLinks = [
  { icon: Send, href: "#", label: "Telegram" },
  { icon: Instagram, href: "#", label: "Instagram" },
]

export function Footer() {
  return (
    <footer className="relative bg-[oklch(0.04_0.02_270)] border-t border-border/50">
      <div className="absolute inset-0 star-field opacity-10" />
      
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link href="#home" className="flex items-center gap-2 mb-4">
              <Rocket className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold tracking-wider">
                <span className="text-primary">COSMO</span>
                <span className="text-foreground">CENTER</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-6 max-w-xs">
              Информационная и образовательная платформа о космосе. 
              Исследуйте Вселенную вместе с нами.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 glass rounded-lg hover:text-primary transition-colors"
                  title={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-semibold text-foreground mb-4">Навигация</h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-sm text-muted-foreground order-2 md:order-1">
            © {new Date().getFullYear()} CosmoCenter. Все права защищены.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 order-1 md:order-2">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Decorative Text */}
        <div className="mt-12 text-center">
          <p className="text-xs text-muted-foreground/50 italic">
            Per aspera ad astra — Через тернии к звёздам
          </p>
        </div>
      </div>
    </footer>
  )
}
