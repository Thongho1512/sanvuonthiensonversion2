"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const services = [
  {
    number: "01",
    title: "Thi công Hồ cá Koi",
    description: "Thiết kế và thi công hồ cá Koi đẹp, độc đáo, đảm bảo môi trường sống lý tưởng cho cá.",
    // Hình ảnh thực tế đẹp hơn placeholder
    image: "https://images.squarespace-cdn.com/content/v1/57843c49440243c511147fed/1596575842029-Q7Q3PEBW54PCPBL1UZU4/Koi+by+Aurora+Santiago.jpg",
    href: "/dich-vu/ho-ca-koi",
  },
  {
    number: "02",
    title: "Hòn non bộ & Tiểu cảnh",
    description: "Tạo tác hòn non bộ, tiểu cảnh nghệ thuật mang vẻ đẹp thiên nhiên thu nhỏ vào không gian sống.",
    image: "https://i.pinimg.com/736x/f7/e8/a8/f7e8a811c12ee6a1268eb6181b211fa6.jpg",
    href: "/dich-vu/hon-non-bo",
  },
  {
    number: "03",
    title: "Thiết kế Sân vườn",
    description: "Quy hoạch và thiết kế sân vườn biệt thự, resort với phong cách hiện đại kết hợp thiên nhiên.",
    image: "https://antonovich-design.ae/uploads/post/2024/9/antonovich-design-2024vAZAtsV6UiBI.jpg",
    href: "/dich-vu/thiet-ke-san-vuon",
  },
]

export function ServicesSection() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-24"
        >
          <span className="text-2xl lg:text-3xl tracking-widest uppercase text-accent font-medium">
            Dịch vụ của chúng tôi
          </span>

          {/* Tiêu đề chính nhỏ lại để cân bằng */}
          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight text-balance">
            Giải pháp toàn diện cho
            <br />
            không gian xanh của bạn
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="space-y-16 lg:space-y-24">
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
                  <div className={`relative overflow-hidden rounded-lg ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute top-6 left-6">
                      {/* Tăng độ tương phản cho số thứ tự */}
                      <span className="text-6xl lg:text-8xl font-semibold text-foreground/30">{service.number}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    {/* Tăng cỡ chữ tiêu đề */}
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    {/* Tăng cỡ chữ và độ đậm cho mô tả */}
                    <p className="mt-6 text-xl text-foreground/90 leading-relaxed">{service.description}</p>
                    <div className="mt-10 flex items-center gap-3 text-lg font-semibold text-primary">
                      <span>Tìm hiểu thêm</span>
                      <ArrowUpRight className="h-6 w-6 transition-transform group-hover:translate-x-2 group-hover:-translate-y-2" />
                    </div>
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