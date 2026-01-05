"use client"

import { motion } from "framer-motion"
import { Award, Sparkles } from "lucide-react"

export function GardenDesignCommitment() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptMC00aDJ2Mmgtdi0yem0wIDhoMnYyaC0ydi0yem0wIDRoMnYyaC0ydi0yem0tNC0xNnYyaC0ydi0yaDF6bTAtNGgydjJoLTJ2LTJ6bTAgOGgydjJoLTJ2LTJ6bTAgNGgydjJoLTJ2LTJ6bS00LTE2djJoLTJ2LTJoMnptMC00aDJ2Mmgtdi0yem0wIDhoMnYyaC0ydi0yem0wIDRoMnYyaC0ydi0yem0tNC0xNnYyaC0ydi0yaDJ6bTAtNGgydjJoLTJ2LTJ6bTAgOGgydjJoLTJ2LTJ6bTAgNGgydjJoLTJ2LTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] bg-repeat" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Phần tiêu đề */}
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
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
            Mê Mẩn Với Các Mẫu Thiết Kế
          </h2>
          <p className="text-xl lg:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Tiểu cảnh sân vườn đẹp theo phong thủy, đẳng cấp tại Thiên Sơn Landscape
          </p>
        </motion.div>

        {/* Phần nội dung chính + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <div className="inline-block p-10 lg:p-14 bg-primary-foreground/10 backdrop-blur-sm rounded-2xl border border-primary-foreground/20">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Sparkles className="h-8 w-8 text-accent" />
              <p className="text-3xl lg:text-4xl font-semibold text-primary-foreground">
                Đơn vị thiết kế thi công cảnh quan sân vườn chuyên nghiệp
              </p>
              <Sparkles className="h-8 w-8 text-accent" />
            </div>
            <p className="text-xl lg:text-2xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
              Với hơn 15 năm kinh nghiệm, chúng tôi tự hào là đối tác tin cậy của hàng trăm gia đình 
              và doanh nghiệp trong việc tạo nên những không gian xanh đẳng cấp.
            </p>
            
            <a
              href="tel:0907997759"
              className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-accent-foreground rounded-xl font-semibold hover:bg-accent/90 transition-all text-lg shadow-lg hover:shadow-xl"
            >
              <span>Liên hệ ngay</span>
              <span className="text-2xl">→</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}