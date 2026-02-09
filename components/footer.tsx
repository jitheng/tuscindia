import Link from "next/link"
import { Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="font-serif text-2xl font-bold tracking-tight text-primary">TUSC</span>
            <span className="text-muted-foreground text-sm">| The Ultimate Sourcing Company</span>
          </div>

          <nav className="flex items-center gap-6 text-sm">
            <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
              Services
            </Link>
            <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
            <Link
              href="https://www.instagram.com/tusc.india/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </Link>
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} TUSC - The Ultimate Sourcing Company. All rights reserved.</p>
          <p className="mt-2 italic">
            Because when tradition meets trust, India doesn{"'"}t just export products — it exports stories, skills, and
            soul.
          </p>
        </div>
      </div>
    </footer>
  )
}
