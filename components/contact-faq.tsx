"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronDown, MessageCircleQuestion } from "lucide-react"

const faqs = [
  {
    question: "Chi phí tư vấn và khảo sát có miễn phí không?",
    answer:
      "Có, chúng tôi hoàn toàn miễn phí tư vấn và khảo sát tại nhà trong bán kính 50km từ văn phòng. Đội ngũ kỹ sư sẽ đến tận nơi để đo đạc, tư vấn thiết kế và báo giá chi tiết.",
  },
  {
    question: "Thời gian thi công một hồ cá Koi mất bao lâu?",
    answer:
      "Tùy thuộc vào quy mô và độ phức tạp, thời gian thi công dao động từ 2-6 tuần. Hồ cá Koi nhỏ (dưới 20m³) thường hoàn thành trong 2-3 tuần, hồ lớn hơn có thể mất 4-6 tuần.",
  },
  {
    question: "Thiên Sơn có bảo hành công trình không?",
    answer:
      "Có, tất cả công trình của Thiên Sơn được bảo hành 15 năm về kết cấu, chống thấm và hệ thống lọc. Chúng tôi cũng cung cấp dịch vụ bảo trì định kỳ với mức phí ưu đãi.",
  },
  {
    question: "Tôi có thể xem các mẫu thiết kế trước khi thi công không?",
    answer:
      "Chắc chắn rồi! Sau khi khảo sát, đội ngũ thiết kế sẽ cung cấp bản vẽ 3D chi tiết để bạn hình dung được công trình hoàn thiện. Bạn có thể điều chỉnh cho đến khi hài lòng 100%.",
  },
  {
    question: "Thiên Sơn có thi công ở tỉnh thành khác không?",
    answer:
      "Có, chúng tôi nhận thi công trên toàn quốc. Đối với các tỉnh thành ngoài TP.HCM và Hà Nội, sẽ có phụ phí vận chuyển và di chuyển tùy theo khoảng cách.",
  },
]

export function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-20 lg:py-28 bg-muted/50">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-6">
            <MessageCircleQuestion className="h-7 w-7 text-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground tracking-tight">Câu hỏi thường gặp</h2>
          <p className="mt-4 text-muted-foreground">Tìm câu trả lời cho những thắc mắc phổ biến nhất</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="w-full text-left">
                <div
                  className={`p-6 rounded-2xl border transition-all ${
                    openIndex === index
                      ? "bg-card border-primary/30 shadow-lg shadow-primary/5"
                      : "bg-card border-border hover:border-primary/20"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-semibold text-foreground text-lg pr-4">{faq.question}</h3>
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                        openIndex === index ? "bg-primary text-primary-foreground" : "bg-muted"
                      }`}
                    >
                      <ChevronDown
                        className={`h-5 w-5 transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                      />
                    </div>
                  </div>

                  <motion.div
                    initial={false}
                    animate={{
                      height: openIndex === index ? "auto" : 0,
                      opacity: openIndex === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="mt-4 text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </motion.div>
                </div>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Still Have Questions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center p-8 bg-card border border-border rounded-2xl"
        >
          <p className="text-foreground font-medium">Còn thắc mắc khác?</p>
          <p className="mt-2 text-muted-foreground">
            Liên hệ trực tiếp hotline{" "}
            <a href="tel:0907997759" className="text-primary font-semibold hover:underline">
              090 799 77 59
            </a>{" "}
            để được giải đáp ngay.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
