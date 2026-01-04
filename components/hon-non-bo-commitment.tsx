"use client"

import { motion } from "framer-motion"
import { Clock, Award, ThumbsUp, Palette, Shield } from "lucide-react"

const commitments = [
  {
    icon: Clock,
    title: "Thời Gian Tiến Độ",
    description: "Thi công nhanh chóng và đúng tiến độ",
  },
  {
    icon: Award,
    title: "Chất Lượng Uy Tín",
    description: "Công trình hòn non bộ chuyên nghiệp và giá rẻ",
  },
  {
    icon: ThumbsUp,
    title: "Sự Hài Lòng",
    description: "Đảm bảo sự hài lòng về chất lượng dịch vụ",
  },
  {
    icon: Palette,
    title: "Thiết Kế Độc Đáo",
    description: "Mẫu hòn non bộ độc đáo, đẹp mắt và hài hòa",
  },
  {
    icon: Shield,
    title: "Phù Hợp Phong Thủy",
    description: "Hài hòa với không gian và gia chủ",
  },
]

export function HonNonBoCommitment() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptMC00aDJ2Mmgtdi0yem0wIDhoMnYyaC0ydi0yem0wIDRoMnYyaC0ydi0yem0tNC0xNnYyaC0ydi0yaDF6bTAtNGgydjJoLTJ2LTJ6bTAgOGgydjJoLTJ2LTJ6bTAgNGgydjJoLTJ2LTJ6bS00LTE2djJoLTJ2LTJoMnptMC00aDJ2Mmgtdi0yem0wIDhoMnYyaC0ydi0yem0wIDRoMnYyaC0ydi0yem0tNC0xNnYyaC0ydi0yaDJ6bTAtNGgydjJoLTJ2LTJ6bTAgOGgydjJoLTJ2LTJ6bTAgNGgydjJoLTJ2LTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] bg-repeat" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
            Cam Kết Dịch Vụ
            <br />
            <span className="text-accent">SÂN VƯỜN THIÊN SƠN</span>
          </h2>
          <p className="text-xl lg:text-2xl text-primary-foreground/90 max-w-4xl mx-auto leading-relaxed">
            Chúng tôi cam kết mang đến cho bạn dịch vụ thi công hòn non bộ chuyên nghiệp nhất
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {commitments.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-primary-foreground/10 backdrop-blur-sm p-8 rounded-xl border border-primary-foreground/20 hover:bg-primary-foreground/15 hover:border-accent/50 transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-7 w-7 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl lg:text-2xl font-semibold text-primary-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="text-base lg:text-lg text-primary-foreground/80 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <div className="inline-block p-10 lg:p-14 bg-primary-foreground/10 backdrop-blur-sm rounded-2xl border border-primary-foreground/20">
            <p className="text-3xl lg:text-4xl font-semibold text-primary-foreground mb-6">
              Hãy để chúng tôi làm nên sự khác biệt
            </p>
            <p className="text-xl lg:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
              Thiên Sơn Landscape luôn sẵn sàng đồng hành và phục vụ bạn. 
              Hãy liên hệ ngay để có một không gian sống hài hòa và đẹp tự nhiên nhất!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}