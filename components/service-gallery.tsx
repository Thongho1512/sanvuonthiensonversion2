"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

interface GalleryImage {
  src: string
  alt: string
  caption?: string
}

interface ServiceGalleryProps {
  title: string
  subtitle: string
  images: GalleryImage[]
}

export function ServiceGallery({ title, subtitle, images }: ServiceGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const openLightbox = (index: number) => setSelectedIndex(index)
  const closeLightbox = () => setSelectedIndex(null)
  const nextImage = () => setSelectedIndex((prev) => (prev !== null ? (prev + 1) % images.length : null))
  const prevImage = () =>
    setSelectedIndex((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : null))

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
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="cursor-pointer group"
              onClick={() => openLightbox(index)}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors flex items-center justify-center">
                  <span className="text-card opacity-0 group-hover:opacity-100 transition-opacity font-medium">
                    Xem chi tiết
                  </span>
                </div>
              </div>
              {image.caption && <p className="mt-3 text-sm text-muted-foreground">{image.caption}</p>}
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <button onClick={closeLightbox} className="absolute top-4 right-4 text-card hover:text-accent p-2">
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
                key={selectedIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                src={images[selectedIndex].src}
                alt={images[selectedIndex].alt}
                className="max-w-full max-h-[85vh] object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
