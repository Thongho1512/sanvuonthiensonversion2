"use client"

import { motion } from "framer-motion"
import { Home, Trees, Sun, Building2 } from "lucide-react"

const locations = [
  {
    icon: Home,
    title: "Hồ cá Koi trong nhà",
    image: "/31.jpg",
    features: [
      "Kiểm soát nhiệt độ dễ dàng",
      "Bảo vệ cá khỏi thời tiết",
      "Tạo điểm nhấn nội thất",
      "Phù hợp không gian hạn chế",
    ],
  },
  {
    icon: Trees,
    title: "Hồ cá Koi trong sân vườn",
    image: "/10.jpg",
    features: [
      "Kết hợp cảnh quan tự nhiên",
      "Không gian rộng rãi cho cá",
      "Ánh sáng tự nhiên tốt",
      "Dễ dàng mở rộng",
    ],
  },
  {
    icon: Sun,
    title: "Hồ cá Koi ngoài trời",
    image: "/23.jpg",
    features: [
      "Chi phí hợp lý",
      "Môi trường tự nhiên",
      "Kết hợp cây xanh",
      "Dễ dàng bảo dưỡng",
    ],
  },
  {
    icon: Building2,
    title: "Hồ cá Koi sân thượng",
    image: "/36.jpg",
    features: [
      "Tận dụng không gian trống",
      "View đẹp, thoáng mát",
      "Riêng tư, yên tĩnh",
      "Tăng giá trị bất động sản",
    ],
  },
]

export function KoiPondLocations() {
  return (
    <section className="py-20 lg:py-28 bg-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
<h3 className="text-3xl sm:text-4xl font-semibold text-accent tracking-tight">
  Vị trí linh hoạt
</h3>          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-foreground tracking-tight">
            Hồ cá Koi có thể thi công ở bất cứ đâu
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Từ trong nhà đến ngoài trời, thậm chí trên sân thượng hoặc ban công. 
            Chúng tôi tư vấn và phân tích các yêu cầu kỹ thuật khác nhau cho từng vị trí.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-8">
          {locations.map((location, index) => {
            const Icon = location.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300">
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={location.image}
                      alt={location.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg bg-primary/20 backdrop-blur-sm border border-primary/30 flex items-center justify-center">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold text-white">
                          {location.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <ul className="space-y-3">
                      {location.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
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
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 p-8 bg-card rounded-2xl border border-border text-center"
        >
          <p className="text-foreground text-lg">
            <strong>Tư vấn chi tiết:</strong> Tùy thuộc vị trí yêu cầu từ chủ đầu tư, 
            các kiến trúc sư sẽ đưa ra tư vấn và phân tích các yêu cầu kỹ thuật khác nhau. 
            Điều này giúp hồ cá Koi của bạn vừa có tính thẩm mỹ, đảm bảo công năng mà vẫn 
            tiết kiệm được chi phí và sử dụng được lâu dài.
          </p>
        </motion.div>
      </div>
    </section>
  )
}