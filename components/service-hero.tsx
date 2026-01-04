"use client"

import { motion } from "framer-motion"
import { Phone, Mail, Clock } from "lucide-react"
import { Breadcrumb } from "./breadcrumb"

interface ServiceHeroProps {
  title: string
  subtitle: string
  description: string
  image: string
  breadcrumbs: { label: string; href?: string }[]
}

export function ServiceHero({ title, subtitle, description, image, breadcrumbs }: ServiceHeroProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src={image || "/placeholder.svg"} 
            alt={title} 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
            <div className="text-card">
              <Breadcrumb items={breadcrumbs} />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-8 max-w-3xl"
            >
              <span className="text-sm tracking-widest uppercase text-accent">
                {subtitle}
              </span>
              <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold text-card tracking-tight text-balance">
                {title}
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-card/80 leading-relaxed max-w-2xl">
                {description}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Contact Bar */}
      <section className="bg-primary text-primary-foreground py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-sm">
            {/* Phone */}
            <a
              href="tel:0938386679"
              className="flex items-center gap-2 hover:text-accent transition-colors py-2 px-4 rounded-lg hover:bg-primary-foreground/10"
            >
              <Phone className="h-5 w-5 flex-shrink-0" />
              <span className="font-semibold">0938 38 66 79</span>
            </a>

            {/* Separator */}
            <span className="hidden sm:inline text-primary-foreground/40">|</span>

            {/* Email */}
            <a
              href="mailto:sanvuonthienson@gmail.com"
              className="flex items-center gap-2 hover:text-accent transition-colors py-2 px-4 rounded-lg hover:bg-primary-foreground/10"
            >
              <Mail className="h-5 w-5 flex-shrink-0" />
              <span className="hidden md:inline">sanvuonthienson@gmail.com</span>
              <span className="md:hidden">Email tư vấn</span>
            </a>

            {/* Separator */}
            <span className="hidden sm:inline text-primary-foreground/40">|</span>

            {/* Working Hours */}
            <div className="flex items-center gap-2 py-2 px-4">
              <Clock className="h-5 w-5 flex-shrink-0" />
              <span className="hidden md:inline">Thứ 2 - Thứ 7: 8:00 - 18:00</span>
              <span className="md:hidden">T2-T7: 8h-18h</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}