"use client"

import { motion } from "framer-motion"
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
    <section className="relative min-h-[70vh] flex items-end overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
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
            <span className="text-sm tracking-widest uppercase text-accent">{subtitle}</span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold text-card tracking-tight text-balance">
              {title}
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-card/80 leading-relaxed max-w-2xl">{description}</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
