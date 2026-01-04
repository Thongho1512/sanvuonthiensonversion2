"use client"

import { motion } from "framer-motion"
import { Layers, Hammer, CheckCircle2, AlertCircle } from "lucide-react"

const structures = [
  {
    title: "Bê tông cốt thép",
    description: "Áp dụng cho các hồ cá trung bình và lớn, độ ổn định cao. Loại này được sử dụng phổ biến nhất.",
    pros: [
      "Độ bền cao, tuổi thọ lâu dài",
      "Chịu lực tốt, ổn định",
      "Phù hợp mọi kích thước",
    ],
    cons: [
      "Chi phí khá cao",
      "Thời gian thi công lâu",
    ],
    rating: 5,
    recommended: true,
  },
  {
    title: "Xây gạch",
    description: "Độ ổn định ở mức trung bình. Chi phí khá rẻ nhưng cần thợ thi công có kinh nghiệm và tay nghề cao.",
    pros: [
      "Chi phí hợp lý",
      "Dễ sửa chữa, cải tạo",
      "Phù hợp hồ nhỏ, trung bình",
    ],
    cons: [
      "Độ bền trung bình",
    ],
    rating: 4,
    recommended: false,
  },
  {
    title: "Bạt cao su",
    description: "Thi công nhanh và dễ, cải tạo nhanh chóng nhưng độ ổn định thấp và ít được sử dụng.",
    pros: [
      "Thi công nhanh",
      "Chi phí thấp nhất",
      "Dễ di chuyển, cải tạo",
    ],
    cons: [
      "Độ bền kém",
      "Dễ thủng, rách",
      "Không thẩm mỹ",
    ],
    rating: 2,
    recommended: false,
  },
  {
    title: "Kính cường lực",
    description: "Hồ cá bằng kính rất dễ bám bẩn và rêu nên cần vệ sinh thường xuyên.",
    pros: [
      "Thẩm mỹ cao",
      "Quan sát cá rõ ràng",
      "Phù hợp trong nhà",
    ],
    cons: [
      "Cần vệ sinh thường xuyên",
    ],
    rating: 4,
    recommended: false,
  },
]

export function KoiPondStructure() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 mb-6">
            <Layers className="h-8 w-8 text-primary" />
          </div>
<h3 className="text-3xl sm:text-4xl font-semibold text-accent tracking-tight">
  Vật liệu xây dựng
</h3>          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-foreground tracking-tight">
            Kết cấu hồ cá Koi
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Kết cấu của hồ cá Koi rất quan trọng. Bởi nó quyết định độ ổn định và chi phí khi hoàn thiện.
            Dưới đây là các loại vật liệu phổ biến nhất.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-8">
          {structures.map((structure, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {structure.recommended && (
                <div className="absolute -top-3 right-6 z-10">
                  <span className="inline-flex items-center gap-1 px-4 py-1.5 bg-accent text-accent-foreground text-sm font-semibold rounded-full shadow-lg">
                    <Hammer className="h-4 w-4" />
                    Khuyên dùng
                  </span>
                </div>
              )}

              <div className={`bg-card p-8 rounded-2xl border transition-all duration-300 h-full ${
                structure.recommended 
                  ? 'border-accent/50 shadow-lg shadow-accent/10' 
                  : 'border-border hover:border-primary/30 hover:shadow-lg'
              }`}>
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-foreground">
                    {structure.title}
                  </h3>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 rounded-full ${
                          i < structure.rating ? 'bg-amber-400' : 'bg-border'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {structure.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                    Ưu điểm
                  </h4>
                  <ul className="space-y-2">
                    {structure.pros.map((pro, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-emerald-500 mt-0.5">✓</span>
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-amber-500" />
                    Nhược điểm
                  </h4>
                  <ul className="space-y-2">
                    {structure.cons.map((con, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-amber-500 mt-0.5">!</span>
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl border border-primary/20 text-center"
        >
          <h3 className="text-xl font-semibold text-foreground mb-3">
            Không biết chọn loại kết cấu nào?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Liên hệ với chúng tôi để được tư vấn miễn phí về loại kết cấu phù hợp nhất 
            với ngân sách và nhu cầu sử dụng của bạn.
          </p>
          <a
            href="tel:0938386679"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            <Hammer className="h-5 w-5" />
            Tư vấn ngay
          </a>
        </motion.div>
      </div>
    </section>
  )
}