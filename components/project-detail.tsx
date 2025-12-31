"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Breadcrumb } from "./breadcrumb"
import { ServiceCTA } from "./service-cta"
import { MapPin, Calendar, Ruler, Clock, User, ArrowLeft, ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Project {
  id: string
  title: string
  category: string
  location: string
  year: string
  area: string
  duration: string
  client: string
  description: string
  challenge: string
  solution: string
  images: string[]
  features: string[]
}

interface ProjectDetailProps {
  project: Project
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const nextImage = () => setSelectedImage((prev) => (prev + 1) % project.images.length)
  const prevImage = () => setSelectedImage((prev) => (prev - 1 + project.images.length) % project.images.length)

  return (
    <>
      <section className="pt-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Dự án", href: "/du-an" }, { label: project.title }]} />

          {/* Back Link */}
          <Link
            href="/du-an"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mt-4"
          >
            <ArrowLeft className="h-4 w-4" />
            Quay lại danh sách dự án
          </Link>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-8 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-3 gap-4"
          >
            {/* Main Image */}
            <div
              className="lg:col-span-2 aspect-[16/10] rounded-lg overflow-hidden cursor-pointer"
              onClick={() => setLightboxOpen(true)}
            >
              <img
                src={project.images[selectedImage] || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
              {project.images.slice(0, 3).map((image, index) => (
                <div
                  key={index}
                  className={`aspect-[16/10] lg:aspect-[16/9] rounded-lg overflow-hidden cursor-pointer border-2 transition-colors ${
                    selectedImage === index ? "border-primary" : "border-transparent"
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${project.title} - ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Info */}
      <section className="py-12 lg:py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <span className="text-sm tracking-widest uppercase text-accent">{project.category}</span>
                <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight">
                  {project.title}
                </h1>
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{project.description}</p>

                {/* Challenge & Solution */}
                <div className="mt-12 space-y-8">
                  <div>
                    <h2 className="text-xl font-semibold text-foreground mb-4">Thách thức</h2>
                    <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-foreground mb-4">Giải pháp</h2>
                    <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
                  </div>
                </div>

                {/* Features */}
                <div className="mt-12">
                  <h2 className="text-xl font-semibold text-foreground mb-6">Đặc điểm nổi bật</h2>
                  <ul className="grid sm:grid-cols-2 gap-4">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-muted rounded-lg p-6 lg:p-8 sticky top-24">
                <h3 className="text-lg font-semibold text-foreground mb-6">Thông tin dự án</h3>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Địa điểm</p>
                      <p className="font-medium text-foreground">{project.location}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Calendar className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Năm hoàn thành</p>
                      <p className="font-medium text-foreground">{project.year}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Ruler className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Diện tích</p>
                      <p className="font-medium text-foreground">{project.area}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Thời gian thi công</p>
                      <p className="font-medium text-foreground">{project.duration}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <User className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Khách hàng</p>
                      <p className="font-medium text-foreground">{project.client}</p>
                    </div>
                  </li>
                </ul>

                <Button asChild className="w-full mt-8 bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="/lien-he">
                    Liên hệ tư vấn
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4"
            onClick={() => setLightboxOpen(false)}
          >
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-4 right-4 text-card hover:text-accent p-2"
            >
              <X className="h-8 w-8" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                prevImage()
              }}
              className="absolute left-4 text-card hover:text-accent p-2"
            >
              <ChevronLeft className="h-10 w-10" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                nextImage()
              }}
              className="absolute right-4 text-card hover:text-accent p-2"
            >
              <ChevronRight className="h-10 w-10" />
            </button>
            <motion.img
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={project.images[selectedImage]}
              alt={project.title}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <ServiceCTA
        title="Bạn muốn có một dự án tương tự?"
        description="Liên hệ ngay để được tư vấn miễn phí và nhận báo giá chi tiết."
      />
    </>
  )
}
