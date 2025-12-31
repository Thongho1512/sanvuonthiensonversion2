"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Biệt thự Vinhomes Riverside",
    category: "Hồ cá Koi",
    image: "/luxury-villa-koi-pond-at-night-with-lighting.jpg",
  },
  {
    title: "Resort Nha Trang",
    category: "Thiết kế sân vườn",
    image: "/tropical-resort-garden-with-palm-trees-and-pool.jpg",
  },
  {
    title: "Nhà phố Quận 2",
    category: "Hòn non bộ",
    image: "/modern-townhouse-rock-garden-with-water-feature.jpg",
  },
  {
    title: "Penthouse Landmark 81",
    category: "Tiểu cảnh",
    image: "/rooftop-zen-garden-with-city-view.jpg",
  },
]

export function FeaturedProjects() {
  return (
    <section className="py-24 lg:py-32 bg-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12 lg:mb-16"
        >
          <div>
            <span className="text-sm tracking-widest uppercase text-accent">Dự án tiêu biểu</span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight">
              Công trình đã thực hiện
            </h2>
          </div>
          <Button
            asChild
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground self-start sm:self-auto bg-transparent"
          >
            <Link href="/du-an">
              Xem tất cả dự án
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href="/du-an" className="group block">
                <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-xs tracking-widest uppercase text-accent">{project.category}</span>
                    <h3 className="mt-2 text-lg font-semibold text-card">{project.title}</h3>
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
