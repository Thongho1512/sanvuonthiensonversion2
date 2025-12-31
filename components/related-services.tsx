"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

interface RelatedService {
  title: string
  description: string
  image: string
  href: string
}

interface RelatedServicesProps {
  currentService: string
  services: RelatedService[]
}

export function RelatedServices({ currentService, services }: RelatedServicesProps) {
  const filteredServices = services.filter((s) => s.title !== currentService)

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
          <span className="text-sm tracking-widest uppercase text-accent">Dịch vụ liên quan</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-foreground tracking-tight">
            Khám phá thêm dịch vụ khác
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-8">
          {filteredServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={service.href} className="group block">
                <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-semibold text-card flex items-center gap-2">
                      {service.title}
                      <ArrowUpRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="mt-2 text-sm text-card/80">{service.description}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
