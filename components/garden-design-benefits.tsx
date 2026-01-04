"use client"

import { motion } from "framer-motion"
import { Coffee, Users, Wind, TrendingUp, User } from "lucide-react"

const benefits = [
  {
    icon: Coffee,
    title: "Tạo Không Gian Thư Giãn",
    description: "Sân vườn xanh tươi là nơi lý tưởng để thư giãn và nạp năng lượng sau một ngày làm việc căng thẳng.",
  },
  {
    icon: Users,
    title: "Gắn Kết Gia Đình",
    description: "Cảnh quan sân vườn tạo điểm tụ họp cho gia đình, giúp tăng cường mối quan hệ gia đình.",
  },
  {
    icon: Wind,
    title: "Giảm Stress",
    description: "Tiếng nước chảy, cây cỏ xanh mướt, và không khí trong lành giúp giảm căng thẳng và tạo cảm giác thư thái.",
  },
  {
    icon: TrendingUp,
    title: "Tăng Giá Trị Tài Sản",
    description: "Một sân vườn đẹp sẽ tăng giá trị của ngôi nhà và tài sản của bạn.",
  },
  {
    icon: User,
    title: "Thiết Kế Cá Nhân Hóa",
    description: "Có thể tạo nên không gian theo phong cách riêng, phản ánh cá tính và sở thích của gia chủ.",
  },
]

export function GardenDesignBenefits() {
  return (
    <section className="py-20 lg:py-28 bg-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight mb-6">
            Những Giá Trị Tuyệt Vời
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Khi sở hữu cảnh quan sân vườn đẹp
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-8 rounded-2xl border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mb-6">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-semibold text-foreground mb-4">
                  {benefit.title}
                </h3>
                <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}