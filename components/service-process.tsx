"use client"

import { motion } from "framer-motion"

interface ProcessStep {
  number: string
  title: string
  description: string
}

interface ServiceProcessProps {
  title: string
  subtitle: string
  steps: ProcessStep[]
}

export function ServiceProcess({ title, subtitle, steps }: ServiceProcessProps) {
  return (
    <section className="py-20 lg:py-28 bg-background">
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
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative text-center lg:text-left"
              >
                <div className="inline-flex lg:flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-semibold mb-6 relative z-10">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
