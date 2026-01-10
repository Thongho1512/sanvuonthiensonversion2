"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MessageCircle, MapPin, Clock, CheckCircle2, Shield, Sparkles } from "lucide-react"

const ZaloIcon = ({ className }: { className?: string }) => (
  <img src="/zalo-logo.png" alt="Zalo" className={className} />
)

const benefits = [
  { icon: CheckCircle2, text: "Tư vấn miễn phí tại nhà" },
  { icon: Shield, text: "Bảo hành công trình 5 năm" },
  { icon: Sparkles, text: "Thiết kế 3D trước thi công" },
]

const contactMethods = [
  {
    icon: Phone,
    title: "Gọi điện thoại",
    value: "0907 99 77 59",
    href: "tel:0907997759",
    description: "Hotline tư vấn 24/7",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: ZaloIcon,
    title: "Chat Zalo",
    value: "0907 99 77 59",
    href: "https://zalo.me/0907997759",
    description: "Phản hồi nhanh trong 5 phút",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Mail,
    title: "Email",
    value: "sanvuonthienson@gmail.com",
    href: "mailto:sanvuonthienson@gmail.com",
    description: "Gửi yêu cầu chi tiết",
    color: "text-red-500",
    bgColor: "bg-red-500/10",
  },
]

const officeInfo = [
  {
    icon: MapPin,
    title: "Trụ sở chính",
    content: "385 Phan Huy Ích, Phường 14, Gò Vấp, Thành phố Hồ Chí Minh",
  },
]

export function ContactFormSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-32 bg-muted/50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <span className="text-sm sm:text-base lg:text-lg tracking-widest uppercase text-accent font-semibold">
            Liên hệ với chúng tôi
          </span>
          <h2 className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight px-4">
            Sẵn sàng hỗ trợ bạn mọi lúc
          </h2>
          <p className="mt-4 sm:mt-6 lg:mt-8 text-base sm:text-lg lg:text-xl xl:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto px-4">
            Hãy liên hệ với chúng tôi qua các kênh dưới đây để được tư vấn chi tiết và nhận báo giá phù hợp với nhu cầu của bạn.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 sm:gap-12 lg:gap-20 items-start">
          {/* Left Content - Benefits & Office */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6 sm:mb-8 lg:mb-10">
              Cam kết của chúng tôi
            </h3>
            
            {/* Benefits */}
            <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <motion.div
                    key={benefit.text}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3 sm:gap-5"
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                    </div>
                    <span className="text-base sm:text-lg lg:text-xl xl:text-2xl font-semibold text-foreground">
                      {benefit.text}
                    </span>
                  </motion.div>
                )
              })}
            </div>

            {/* Office Info */}
            <div className="space-y-4 sm:space-y-6">
              {officeInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: (benefits.length + index) * 0.1 }}
                    className="flex items-start gap-3 sm:gap-5"
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-accent" />
                    </div>
                    <div>
                      <p className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-foreground">{info.title}</p>
                      <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-muted-foreground mt-1 sm:mt-2 leading-relaxed">
                        {info.content}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Right Content - Contact Methods */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="space-y-4 sm:space-y-6">
              {contactMethods.map((method, index) => {
                const Icon = method.icon
                return (
                  <motion.a
                    key={method.title}
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="block group"
                  >
                    <div className="bg-card border border-border rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 hover:shadow-2xl hover:border-primary/50 transition-all duration-300">
                      <div className="flex items-start gap-4 sm:gap-6">
                        <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl ${method.bgColor} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className={`h-8 w-8 sm:h-10 sm:w-10 ${method.color}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-foreground group-hover:text-primary transition-colors break-words">
                            {method.title}
                          </h3>
                          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-muted-foreground mt-1 sm:mt-2">{method.description}</p>
                          <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-foreground mt-2 sm:mt-4 break-all">{method.value}</p>
                        </div>
                        <svg 
                          className="hidden sm:block w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-2 transition-all mt-2 flex-shrink-0" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </motion.a>
                )
              })}
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 sm:mt-12 p-6 sm:p-8 lg:p-10 bg-primary/5 border border-primary/20 rounded-2xl sm:rounded-3xl"
            >
              <div className="flex items-start gap-3 sm:gap-5">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
                <div>
                  <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-foreground mb-2 sm:mb-3">
                    Phản hồi nhanh chóng
                  </p>
                  <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-muted-foreground leading-relaxed">
                    Chúng tôi cam kết phản hồi mọi yêu cầu trong vòng <strong>2 giờ làm việc</strong>. 
                    Với các trường hợp khẩn cấp, vui lòng gọi điện trực tiếp để được hỗ trợ ngay lập tức.
                  </p>
                </div>
              </div>
            </motion.div>

            <p className="mt-6 sm:mt-8 lg:mt-10 text-xs sm:text-sm lg:text-base xl:text-lg text-muted-foreground text-center">
              Thông tin của bạn được bảo mật theo{" "}
              <a href="/chinh-sach-bao-mat" className="text-primary hover:underline font-medium">
                chính sách bảo mật
              </a>{" "}
              của chúng tôi.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}