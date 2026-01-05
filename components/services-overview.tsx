"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const services = [
  {
    number: "01",
    title: "Thi công Hồ cá Koi",
    description: "Thiết kế và thi công hồ cá Koi theo tiêu chuẩn Nhật Bản, đảm bảo môi trường sống lý tưởng cho cá với hệ thống lọc nước hiện đại.",
    image: "/beautiful-japanese-koi-pond-with-colorful-koi-fish.jpg",
    href: "/dich-vu/ho-ca-koi",
    features: ["Thiết kế theo tiêu chuẩn Nhật Bản", "Hệ thống lọc đa tầng", "Bảo hành 10 năm"]
  },
  {
    number: "02",
    title: "Hòn Non Bộ & Tiểu Cảnh",
    description: "Tạo tác hòn non bộ, tiểu cảnh nghệ thuật theo phong thủy với đá tự nhiên cao cấp và nghệ nhân lành nghề hơn 15 năm kinh nghiệm.",
    image: "/elegant-rock-garden-bonsai-miniature-landscape-wit.jpg",
    href: "/dich-vu/hon-non-bo",
    features: ["Tư vấn phong thủy", "Đá tự nhiên cao cấp", "Thiết kế độc quyền"]
  },
  {
    number: "03",
    title: "Thiết Kế Sân Vườn",
    description: "Quy hoạch và thiết kế sân vườn biệt thự, resort cao cấp với phong cách đa dạng, tích hợp công nghệ thông minh và hệ thống tưới tự động.",
    image: "/luxury-villa-garden-design-with-pathway-fountain-a.jpg",
    href: "/dich-vu/thiet-ke-san-vuon",
    features: ["Thiết kế 3D chuyên nghiệp", "Cây xanh nhập khẩu", "Hệ thống tưới thông minh"]
  },
]

export function ServicesOverview() {
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
          <span className="text-sm tracking-widest uppercase text-accent">Dịch vụ của chúng tôi</span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-semibold text-foreground tracking-tight">
            Giải pháp toàn diện cho không gian xanh
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Từ thiết kế, thi công đến bảo trì, chúng tôi cung cấp dịch vụ trọn gói để biến không gian của bạn thành
            thiên đường xanh mát.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="space-y-20">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={service.href} className="group block">
                <div
                  className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image */}
                  <div className={`relative overflow-hidden rounded-2xl ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute top-6 left-6">
                      <span className="text-6xl lg:text-8xl font-semibold text-card/30">{service.number}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <h2 className="text-3xl sm:text-4xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{service.description}</p>
                    
                    {/* Features */}
                    <ul className="mt-6 space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                      <span>Tìm hiểu thêm</span>
                      <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 p-8 lg:p-12 bg-muted rounded-2xl"
        >
          {[
            { value: "50+", label: "Dự án hoàn thành" },
            { value: "15+", label: "Năm kinh nghiệm" },
            { value: "100%", label: "Khách hài lòng" },
            { value: "50+", label: "Đội ngũ chuyên gia" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl sm:text-4xl font-semibold text-primary">{stat.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}