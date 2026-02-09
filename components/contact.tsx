"use client"

import type React from "react"

import { useState } from "react"
import { Instagram, Mail, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [statusMessage, setStatusMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/send-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setStatusMessage("Thank you! Your message has been sent successfully.")
        setFormData({
          name: "",
          email: "",
          company: "",
          message: "",
        })
      } else {
        const errorData = await response.json()
        setSubmitStatus("error")
        setStatusMessage(errorData.error || "Failed to send message. Please try again.")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
      setStatusMessage("An error occurred. Please try again later.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 max-w-6xl mx-auto">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4 font-medium">Contact</p>
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-tight mb-6">Let{"'"}s connect</h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Whether you{"'"}re a brand seeking to source from India or have questions about our services, we{"'"}d
              love to hear from you. Let{"'"}s start a conversation.
            </p>

            <div className="space-y-6">
              <a
                href="mailto:hello@tuscindia.com"
                className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center group-hover:border-primary/30 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email us</p>
                  <p className="font-medium">hello@tuscindia.com</p>
                </div>
              </a>

              <a
                href="https://www.instagram.com/tusc.india/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center group-hover:border-primary/30 transition-colors">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Follow us</p>
                  <p className="font-medium">@tusc.india</p>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-card p-8 md:p-10 rounded-lg border border-border">
            <h3 className="font-serif text-2xl font-medium mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Company / Organization</Label>
                <Input
                  id="company"
                  placeholder="Your company name"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your sourcing needs..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>

              {submitStatus === "success" && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm">
                  {statusMessage}
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm">
                  {statusMessage}
                </div>
              )}

              <Button 
                type="submit" 
                className="w-full group"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send Message"}
                <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
