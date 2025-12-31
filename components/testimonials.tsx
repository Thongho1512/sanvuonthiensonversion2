"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    quote:
      "Thiên Sơn đã biến giấc mơ về một sân vườn Nhật Bản thành hiện thực. Hồ cá Koi của tôi giờ là niềm tự hào của cả gia đình.",
    author: "Anh Minh Đức",
    role: "Chủ biệt thự Vinhomes",
    image: "/vietnamese-businessman-portrait-professional-heads.jpg",
  },
  {
    quote:
      "Đội ngũ chuyên nghiệp, tận tâm và sáng tạo. Tiểu cảnh hòn non bộ của chúng tôi nhận được rất nhiều lời khen từ khách đến thăm.",
    author: "Chị Thu Hằng",
    role: "Chủ resort Phú Quốc",
    image: "/vietnamese-businesswoman-portrait-professional-hea.jpg",
  },
  {
    quote: "Từ thiết kế đến thi công đều rất chỉn chu. Bảo hành và chăm sóc sau bán hàng xuất sắc. Rất đáng để đầu tư!",
    author: "Anh Quang Huy",
    role: "Chủ nhà phố Quận 7",
    image: "/vietnamese-man-portrait-casual-headshot.jpg",
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm tracking-widest uppercase text-accent">Khách hàng nói gì</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight">
            Phản hồi từ khách hàng
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <Quote className="mx-auto h-12 w-12 text-accent/30" />
              <blockquote className="mt-8 text-xl sm:text-2xl lg:text-3xl font-medium text-foreground leading-relaxed">
                &ldquo;{testimonials[current].quote}&rdquo;
              </blockquote>
              <div className="mt-10 flex flex-col items-center gap-4">
                <img
                  src={testimonials[current].image || "/placeholder.svg"}
                  alt={testimonials[current].author}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonials[current].author}</p>
                  <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="mt-12 flex justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="border-border hover:bg-muted bg-transparent"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${index === current ? "bg-primary" : "bg-border"}`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="border-border hover:bg-muted bg-transparent"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
