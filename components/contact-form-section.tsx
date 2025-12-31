"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Send, CheckCircle2, Shield, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const benefits = [
  { icon: CheckCircle2, text: "Tư vấn miễn phí tại nhà" },
  { icon: Shield, text: "Bảo hành công trình 5 năm" },
  { icon: Sparkles, text: "Thiết kế 3D trước thi công" },
]

export function ContactFormSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section className="py-20 lg:py-28 bg-muted/50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <span className="text-sm tracking-widest uppercase text-accent font-medium">Bắt đầu ngay</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-foreground tracking-tight text-balance">
              Nhận báo giá & tư vấn miễn phí
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Chỉ cần điền thông tin bên dưới, đội ngũ của chúng tôi sẽ liên hệ tư vấn chi tiết và chuẩn bị báo giá phù
              hợp với nhu cầu của bạn.
            </p>

            {/* Benefits */}
            <div className="mt-10 space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{benefit.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12 p-6 bg-card border border-border rounded-2xl"
            >
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <img
                      key={i}
                      src={`/vietnamese-professional-person-portrait-.jpg?height=40&width=40&query=vietnamese professional person portrait ${i}`}
                      alt=""
                      className="w-10 h-10 rounded-full border-2 border-card object-cover"
                    />
                  ))}
                </div>
                <div>
                  <p className="font-semibold text-foreground">2,000+ khách hàng hài lòng</p>
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                    <span className="ml-2 text-sm text-muted-foreground">4.9/5</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="relative bg-card border border-border rounded-2xl p-8 lg:p-10 shadow-xl shadow-primary/5"
            >
              {/* Success Overlay */}
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 z-20 bg-card rounded-2xl flex flex-col items-center justify-center"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                    <CheckCircle2 className="h-8 w-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Gửi thành công!</h3>
                  <p className="mt-2 text-muted-foreground">Chúng tôi sẽ liên hệ trong vòng 2 giờ</p>
                </motion.div>
              )}

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-foreground">
                    Họ và tên <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3.5 bg-background border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-foreground placeholder:text-muted-foreground transition-all"
                    placeholder="Nguyễn Văn A"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground">
                    Số điện thoại <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="w-full px-4 py-3.5 bg-background border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-foreground placeholder:text-muted-foreground transition-all"
                    placeholder="090 123 4567"
                  />
                </div>
              </div>

              <div className="mt-6 space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-foreground">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3.5 bg-background border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-foreground placeholder:text-muted-foreground transition-all"
                  placeholder="email@example.com"
                />
              </div>

              <div className="mt-6 grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="service" className="block text-sm font-medium text-foreground">
                    Dịch vụ quan tâm <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="service"
                    required
                    className="w-full px-4 py-3.5 bg-background border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-foreground transition-all appearance-none cursor-pointer"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Chọn dịch vụ
                    </option>
                    <option value="ho-ca-koi">Thi công Hồ cá Koi</option>
                    <option value="hon-non-bo">Hòn non bộ & Tiểu cảnh</option>
                    <option value="thiet-ke-san-vuon">Thiết kế sân vườn</option>
                    <option value="tron-goi">Trọn gói (Nhiều dịch vụ)</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="budget" className="block text-sm font-medium text-foreground">
                    Ngân sách dự kiến
                  </label>
                  <select
                    id="budget"
                    className="w-full px-4 py-3.5 bg-background border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-foreground transition-all appearance-none cursor-pointer"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Chọn ngân sách
                    </option>
                    <option value="under-100">Dưới 100 triệu</option>
                    <option value="100-300">100 - 300 triệu</option>
                    <option value="300-500">300 - 500 triệu</option>
                    <option value="500-1000">500 triệu - 1 tỷ</option>
                    <option value="over-1000">Trên 1 tỷ</option>
                  </select>
                </div>
              </div>

              <div className="mt-6 space-y-2">
                <label htmlFor="address" className="block text-sm font-medium text-foreground">
                  Địa chỉ công trình
                </label>
                <input
                  type="text"
                  id="address"
                  className="w-full px-4 py-3.5 bg-background border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-foreground placeholder:text-muted-foreground transition-all"
                  placeholder="Quận/Huyện, Tỉnh/Thành phố"
                />
              </div>

              <div className="mt-6 space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-foreground">
                  Mô tả yêu cầu
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3.5 bg-background border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary resize-none text-foreground placeholder:text-muted-foreground transition-all"
                  placeholder="Mô tả chi tiết về dự án: diện tích, vị trí, phong cách mong muốn, thời gian dự kiến..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full mt-8 bg-primary hover:bg-primary/90 text-primary-foreground h-14 text-base font-semibold rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/30 transition-all"
              >
                <Send className="mr-2 h-5 w-5" />
                Gửi yêu cầu tư vấn miễn phí
              </Button>

              <p className="mt-6 text-sm text-muted-foreground text-center">
                Thông tin của bạn được bảo mật theo{" "}
                <a href="/chinh-sach-bao-mat" className="text-primary hover:underline">
                  chính sách bảo mật
                </a>{" "}
                của chúng tôi.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
