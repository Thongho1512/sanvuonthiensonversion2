"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    category: "Hồ cá Koi",
    image: "/50.jpg",
  },
  {
    category: "Sân vườn",
    image: "/20.jpg",
  },
  {
    category: "Hòn non bộ",
    image: "/13.jpg",
  },
  // Bạn có thể thêm nhiều hơn nếu cần, ví dụ:
  // {
  //   category: "Tiểu cảnh sân thượng",
  //   image: "/rooftop-garden-terrace-design.jpg",
  // },
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
            <span className="text-sm tracking-widest uppercase text-accent font-medium">
              Dự án tiêu biểu
            </span>
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
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={`Dự án ${project.category} thực tế tại Thiên Sơn Landscape`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block px-3 py-1 bg-accent/20 backdrop-blur-sm border border-accent/30 text-accent text-xs font-semibold rounded-full mb-3">
                      {project.category}
                    </span>
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