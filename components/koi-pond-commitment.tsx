"use client"

import { motion } from "framer-motion"
import { Users, Palette, Hammer, Settings, Shield, Sparkles, Award } from "lucide-react"

const commitments = [
  {
    icon: Users,
    text: "Nghệ nhân trực tiếp Khảo Sát – Tư Vấn tận nơi",
  },
  {
    icon: Palette,
    text: "Thiết kế mẫu 3D theo yêu cầu trước khi thi công",
  },
  {
    icon: Hammer,
    text: "Thi công chuẩn theo bản vẽ thiết kế",
  },
  {
    icon: Settings,
    text: "Lắp đặt hệ thống lọc, xử lý nước hiện đại",
  },
  {
    icon: Sparkles,
    text: "Mẫu công trình thi công độc đáo, hoàn thiện theo xu hướng hiện đại",
  },
  {
    icon: Shield,
    text: "Bảo hành công trình và cam kết chất lượng dài hạn",
  },
]

export function KoiPondCommitment() {
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
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-accent/20 mb-6">
            <Award className="h-10 w-10 text-accent" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
            Cam kết khi khách hàng lựa chọn
            <br />
            <span className="text-accent">Thiên Sơn Landscape</span>
          </h2>
          <p className="mt-6 text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Với hơn nhiều mẫu thiết kế thi công hồ cá Koi lớn nhỏ thực tế trên khắp miền Nam,
            Thiên Sơn cam kết làm gia chủ hài lòng
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {commitments.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-primary-foreground/10 backdrop-blur-sm p-6 rounded-xl border border-primary-foreground/20 hover:bg-primary-foreground/15 hover:border-accent/50 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <p className="text-primary-foreground/90 leading-relaxed pt-2">
                      {item.text}
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
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 p-8 lg:p-12 bg-primary-foreground/10 backdrop-blur-sm rounded-2xl border border-primary-foreground/20"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-semibold mb-4">
                Nghệ Nhân Lê Anh
              </h3>
              <p className="text-primary-foreground/90 leading-relaxed text-lg mb-6">
                Với hơn 15 năm kinh nghiệm và nhiều mẫu thiết kế và Thi Công Hòn Non Bộ – 
                Thi Công Hồ Cá Koi – Trang trí sân vườn tiểu cảnh – Tiểu cảnh gầm cầu thang.
              </p>
              <p className="text-primary-foreground/80 leading-relaxed">
                Thiết kế Thi Công Hồ Cá Koi THIÊN SƠN tự hào đã triển khai thi công thực tế 
                nhiều công trình tiểu cảnh sân vườn biệt thự, nhận được sự tin tưởng từ nhiều 
                nghệ sĩ và những người chơi tiểu cảnh đam mê.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-xl overflow-hidden border-4 border-accent/30">
                <img
                  src="/professional-landscaper-working-on-koi-pond-constr.jpg"
                  alt="Nghệ nhân thi công hồ cá Koi"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-full flex items-center justify-center text-center p-4 shadow-2xl">
                <div>
                  <p className="text-3xl font-bold text-accent-foreground">15+</p>
                  <p className="text-xs text-accent-foreground/80">Năm Kinh Nghiệm</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-xl text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto">
            Giờ đây, việc sở hữu một hồ cá Koi đẹp không còn quá khó. Giá cả cũng phải chăng hơn rất nhiều. 
            <strong className="text-accent"> Liên hệ ngay để được tư vấn chi tiết!</strong>
          </p>
        </motion.div>
      </div>
    </section>
  )
}