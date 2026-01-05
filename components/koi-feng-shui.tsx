"use client"

import { motion } from "framer-motion"
import { Compass, Hash, Palette, MapPin } from "lucide-react"

const fengShuiFactors = [
  {
    icon: MapPin,
    title: "Vị trí bố trí hồ cá Koi",
    description: "Hãy đặt hồ ở vị trí tối ưu, ví dụ như phía Đông hoặc Đông Nam để tận dụng ánh nắng sớm, tượng trưng cho sự sáng sủa và tươi mới. Để tránh ánh nắng chiều tây, có thể sử dụng cỏ cây hoặc bóng râm.",
    color: "from-blue-500/20 to-blue-500/5",
    iconColor: "text-blue-500",
  },
  {
    icon: Hash,
    title: "Số lượng cá Koi trong hồ",
    description: "Số lượng cá Koi trong hồ cần được tính toán dựa trên diện tích và dung tích hồ, và chọn những con số mang ý nghĩa tài lộc, tránh quá nhiều để đảm bảo cá Koi có không gian thoải mái và phát triển khỏe mạnh.",
    color: "from-emerald-500/20 to-emerald-500/5",
    iconColor: "text-emerald-500",
  },
  {
    icon: Palette,
    title: "Màu sắc của cá Koi trong hồ",
    description: "Màu sắc của cá Koi có thể được lựa chọn dựa trên nguyên tắc của ngũ hành. Ví dụ, màu đỏ tượng trưng cho hỏa, màu đen cho thủy, và màu vàng cho kim. Sự kết hợp này mang ý nghĩa phong thủy, tạo nên sự cân bằng trong không gian.",
    color: "from-amber-500/20 to-amber-500/5",
    iconColor: "text-amber-500",
  },
]

export function KoiFengShui() {
  return (
    <section className="py-20 lg:py-28 bg-muted relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMSI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptMC00aDJ2Mmgtdi0yem0wIDhoMnYyaC0ydi0yem0wIDRoMnYyaC0ydi0yem0tNC0xNnYyaC0ydi0yaDF6bTAtNGgydjJoLTJ2LTJ6bTAgOGgydjJoLTJ2LTJ6bTAgNGgydjJoLTJ2LTJ6bS00LTE2djJoLTJ2LTJoMnptMC00aDJ2Mmgtdi0yem0wIDhoMnYyaC0ydi0yem0wIDRoMnYyaC0ydi0yem0tNC0xNnYyaC0ydi0yaDJ6bTAtNGgydjJoLTJ2LTJ6bTAgOGgydjJoLTJ2LTJ6bTAgNGgydjJoLTJ2LTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] bg-repeat" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm tracking-widest uppercase text-accent">Phong thủy</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-foreground tracking-tight">
            Các yếu tố phong thủy của hồ cá Koi
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Không chỉ giúp không gian sống trở nên sinh động hơn mà hồ Koi còn mang tới vượng khí cho gia chủ. 
            Cá Koi là "Quốc Ngư" chắc chắn sẽ đem tới vượng khí, sự may mắn cho gia đình bạn.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {fengShuiFactors.map((factor, index) => {
            const Icon = factor.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative bg-card p-8 rounded-2xl border border-border group-hover:border-primary/30 transition-all duration-300 h-full">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${factor.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`h-8 w-8 ${factor.iconColor}`} />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {factor.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {factor.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl border border-primary/20"
        >
          <p className="text-foreground font-medium text-center text-lg">
            💡 <strong>Lưu ý:</strong> Khi thiết kế thi công hồ cá Koi, cần tuân thủ các nguyên tắc về phong thủy 
            để mang lại vượng khí và sự may mắn cho gia đình bạn.
          </p>
        </motion.div>
      </div>
    </section>
  )
}