"use client"

import { motion } from "framer-motion"
import { Compass, Mountain, Wind, TrendingUp } from "lucide-react"

const benefits = [
  {
    icon: Compass,
    title: "Phong thủy hài hòa",
    description: "Vị trí của hòn non bộ được xác định theo nguyên tắc phong thủy, tạo nên sự hòa hợp và hài hòa với không gian xung quanh.",
  },
  {
    icon: Mountain,
    title: "Cân bằng năng lượng",
    description: "Đối với những ngôi nhà có nhiều tầng, chúng tôi đề xuất không đặt hòn non bộ ở các tầng trên cùng để đảm bảo sự cân bằng.",
  },
  {
    icon: Wind,
    title: "Không khí dễ chịu",
    description: "Tận dụng nguồn nước, tạo ra không khí dễ chịu và thoải mái cho gia đình bạn.",
  },
  {
    icon: TrendingUp,
    title: "Gia tăng vượng khí",
    description: "Hòn non bộ không chỉ làm đẹp mà còn mang lại may mắn, phú quý cho gia chủ.",
  },
]

export function HonNonBoFengShuiBenefits() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight mb-6">
            Lợi Ích Phong Thủy từ Thi Công Hòn Non Bộ
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Chúng tôi không chỉ tập trung vào việc tạo ra một tiểu cảnh đẹp mắt mà còn chú trọng 
            đến các yếu tố phong thủy.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mb-8">
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