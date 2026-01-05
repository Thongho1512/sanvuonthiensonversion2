"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function RelatedServices() {
  // Chỉ hiển thị đúng 2 dịch vụ cụ thể - bạn có thể dễ dàng thay đổi ảnh, link, nội dung
  const relatedServices = [
    {
      title: "Hòn Non Bộ & Tiểu Cảnh",
      description: "Tạo tác hòn non bộ, tiểu cảnh nghệ thuật theo phong thủy, mang lại sự hài hòa và vượng khí cho không gian sống.",
      image: "/43.jpg", // Thay bằng ảnh đẹp của bạn
      href: "/dich-vu/hon-non-bo",
    },
    {
      title: "Hồ Cá Koi",
      description: "Thiết kế và thi công hồ cá Koi theo tiêu chuẩn Nhật Bản, đảm bảo môi trường sống lý tưởng cho cá với hệ thống lọc nước hiện đại.",
      image: "/44.jpg", // Thay bằng ảnh đẹp của bạn
      href: "/dich-vu/ho-ca-koi",
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm tracking-widest uppercase text-accent font-medium">
            Dịch vụ liên quan
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight">
            Khám phá thêm dịch vụ khác
          </h2>
        </motion.div>

        {/* 2 Dịch vụ cố định - Grid 1 hoặc 2 cột tùy màn hình */}
        <div className="grid sm:grid-cols-2 gap-8 lg:gap-12">
          {relatedServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Link href={service.href} className="group block">
                <div className="relative aspect-[16/9] overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                    <h3 className="text-2xl lg:text-3xl font-bold text-white flex items-center gap-3 group-hover:gap-4 transition-all">
                      {service.title}
                      <ArrowUpRight className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="mt-3 text-base lg:text-lg text-white/90 leading-relaxed">
                      {service.description}
                    </p>
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