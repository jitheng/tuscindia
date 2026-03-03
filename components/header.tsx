"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-serif text-2xl font-bold tracking-tight text-primary">TUSC</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#about" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              About
            </Link>
            <Link
              href="#services"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Services
            </Link>
            <Link
              href="#why-tusc"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Why TUSC
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link href="https://www.instagram.com/tusc.india/" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-5 h-5 text-foreground/70 hover:text-primary transition-colors" />
            </Link>
            <Button asChild>
              <Link href="#contact">Get in Touch</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 flex flex-col gap-4">
            <Link href="#about" className="text-sm font-medium py-2" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link href="#services" className="text-sm font-medium py-2" onClick={() => setIsMenuOpen(false)}>
              Services
            </Link>
            <Link href="#why-tusc" className="text-sm font-medium py-2" onClick={() => setIsMenuOpen(false)}>
              Why TUSC
            </Link>
            <Link href="#contact" className="text-sm font-medium py-2" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
            <Link
              href="https://www.instagram.com/tusc.india/"
              target="_blank"
              className="flex items-center gap-2 text-sm font-medium py-2"
            >
              <Instagram className="w-4 h-4" /> Instagram
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
