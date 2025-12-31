"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ServiceCTAProps {
  title: string
  description: string
}

export function ServiceCTA({ title, description }: ServiceCTAProps) {
  return (
    <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-balance">{title}</h2>
          <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">{description}</p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/lien-he">
                Nhận báo giá miễn phí
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
            >
              <a href="tel:0901234567">
                <Phone className="mr-2 h-5 w-5" />
                090 123 4567
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
