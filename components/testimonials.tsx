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
  },
  {
    quote:
      "Đội ngũ chuyên nghiệp, tận tâm và sáng tạo. Tiểu cảnh hòn non bộ của chúng tôi nhận được rất nhiều lời khen từ khách đến thăm.",
    author: "Chị Thu Hằng",
  },
  {
    quote: "Từ thiết kế đến thi công đều rất chỉn chu. Bảo hành và chăm sóc sau bán hàng xuất sắc. Rất đáng để đầu tư!",
    author: "Anh Quang Huy",
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="text-sm tracking-widest uppercase text-accent">Khách hàng nói gì</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight text-balance">
            Phản hồi từ khách hàng
          </h2>
        </motion.div>

        {/* Testimonial Slider */}
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
              {/* Quote Icon */}
              <Quote className="mx-auto h-16 w-16 text-accent/30 mb-8" />

              {/* Quote Text */}
              <blockquote className="mt-8 text-xl sm:text-2xl lg:text-3xl font-medium text-foreground leading-relaxed px-4">
                &ldquo;{testimonials[current].quote}&rdquo;
              </blockquote>

              {/* Author - Không còn ảnh */}
              <div className="mt-12">
                <p className="text-xl lg:text-2xl font-semibold text-foreground">
                  {testimonials[current].author}
                </p>
                {/* Nếu sau này muốn thêm chức vụ, có thể mở lại dòng dưới */}
                {/* <p className="text-sm text-muted-foreground mt-1">Chủ biệt thự tại Hà Nội</p> */}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons & Dots */}
          <div className="mt-16 flex justify-center items-center gap-6">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="border-border hover:bg-muted bg-transparent rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <div className="flex items-center gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === current ? "bg-primary w-8" : "bg-border"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="border-border hover:bg-muted bg-transparent rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}