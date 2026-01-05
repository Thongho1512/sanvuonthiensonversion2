"use client"

import { motion } from "framer-motion"
import { Shovel, Recycle, Droplets, CheckCircle2 } from "lucide-react"

const notes = [
  {
    icon: Shovel,
    title: "Đào và Xây Dựng Nền",
    description: "Nền của cấu trúc hòn non bộ được chôn sâu vào đất, sử dụng đa dạng loại đá để tạo nên bề mặt độc đáo.",
    image: "/39.jpg",
  },
  {
    icon: Recycle,
    title: "Sử Dụng Vật Liệu Phù Hợp",
    description: "Gạch cũ, than xỉ và các vật liệu tái chế được tận dụng để tạo nên cấu trúc vững chắc và đẹp mắt.",
    image: "/40.jpg",
  },
  {
    icon: Droplets,
    title: "Tận Dụng Nguồn Nước",
    description: "Hòn non bộ không chỉ làm đẹp mà còn tận dụng nguồn nước, tạo ra không khí dễ chịu và thoải mái.",
    image: "/43.jpg",
  },
]

export function HonNonBoDesignNotes() {
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
            Lưu Ý Khi Thiết Kế Hòn Non Bộ
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Để đạt được kết quả tốt nhất với mức giá phải chăng, chúng tôi lưu ý các điểm quan trọng sau:
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {notes.map((note, index) => {
            const Icon = note.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group"
              >
                <div className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300">
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={note.image}
                      alt={note.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="w-14 h-14 rounded-lg bg-primary/20 backdrop-blur-sm border border-primary/30 flex items-center justify-center">
                        <Icon className="h-7 w-7 text-primary" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <h3 className="text-2xl lg:text-3xl font-semibold text-foreground">
                        {note.title}
                      </h3>
                    </div>
                    <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                      {note.description}
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
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 p-10 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl border border-primary/20 text-center"
        >
          <p className="text-xl lg:text-2xl text-foreground">
            <strong>Cam kết:</strong> Mang đến cho bạn giá cả phải chăng với chất lượng tốt nhất, 
            kết hợp hài hòa giữa nghệ thuật và kỹ thuật xây dựng.
          </p>
        </motion.div>
      </div>
    </section>
  )
}