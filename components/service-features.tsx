"use client"

import { motion } from "framer-motion"
import * as LucideIcons from "lucide-react"

interface Feature {
  icon: string
  title: string
  description: string
}

interface ServiceFeaturesProps {
  title: string
  subtitle: string
  features: Feature[]
}

export function ServiceFeatures({ title, subtitle, features }: ServiceFeaturesProps) {
  return (
    <section className="py-20 lg:py-28 bg-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm tracking-widest uppercase text-accent">{subtitle}</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-foreground tracking-tight">{title}</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Những ưu điểm vượt trội khi chọn dịch vụ của Thiên Sơn
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const IconComponent = LucideIcons[feature.icon as keyof typeof LucideIcons] as React.ElementType

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-card p-6 lg:p-8 rounded-2xl border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {IconComponent && <IconComponent className="h-7 w-7 text-primary" />}
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}