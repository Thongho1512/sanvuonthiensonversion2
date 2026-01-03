"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MessageCircle, MapPin, Clock, CheckCircle2, Shield, Sparkles } from "lucide-react"

const benefits = [
  { icon: CheckCircle2, text: "Tư vấn miễn phí tại nhà" },
  { icon: Shield, text: "Bảo hành công trình 5 năm" },
  { icon: Sparkles, text: "Thiết kế 3D trước thi công" },
]

const contactMethods = [
  {
    icon: Phone,
    title: "Gọi điện thoại",
    value: "0938 38 66 79",
    href: "tel:0938386679",
    description: "Hotline tư vấn 24/7",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: MessageCircle,
    title: "Chat Zalo",
    value: "0938 38 66 79",
    href: "https://zalo.me/0938386679",
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
    content: "178/19/33 Trương Thị Hoa, P.Tân Thới Hiệp, Q12, TP.HCM",
  },
  {
    icon: Clock,
    title: "Giờ làm việc",
    content: "Thứ 2 - Thứ 7: 8:00 - 18:00",
  },
]

export function ContactFormSection() {
  return (
    <section className="py-20 lg:py-28 bg-muted/50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm tracking-widest uppercase text-accent font-medium">Liên hệ với chúng tôi</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-foreground tracking-tight text-balance">
            Sẵn sàng hỗ trợ bạn mọi lúc
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Hãy liên hệ với chúng tôi qua các kênh dưới đây để được tư vấn chi tiết và nhận báo giá phù hợp với nhu cầu của bạn.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left Content - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <h3 className="text-2xl font-semibold text-foreground mb-6">Cam kết của chúng tôi</h3>
            
            {/* Benefits */}
            <div className="space-y-4 mb-10">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{benefit.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Office Info */}
            <div className="space-y-4">
              {officeInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (benefits.length + index) * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <info.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{info.title}</p>
                    <p className="text-muted-foreground mt-1">{info.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 p-6 bg-card border border-border rounded-2xl"
            >
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <img
                      key={i}
                      src={`/vietnamese-professional-person-portrait-.jpg?height=40&width=40&query=vietnamese professional person portrait ${i}`}
                      alt=""
                      className="w-10 h-10 rounded-full border-2 border-card object-cover"
                    />
                  ))}
                </div>
                <div>
                  <p className="font-semibold text-foreground">2,000+ khách hàng hài lòng</p>
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                    <span className="ml-2 text-sm text-muted-foreground">4.9/5</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Contact Methods */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="space-y-4">
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
                    <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-xl hover:border-primary/50 transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className={`w-14 h-14 rounded-xl ${method.bgColor} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className={`h-7 w-7 ${method.color}`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                            {method.title}
                          </h3>
                          <p className="text-muted-foreground text-sm mt-1">{method.description}</p>
                          <p className="text-foreground font-semibold mt-2 text-lg">{method.value}</p>
                        </div>
                        <svg 
                          className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" 
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
              className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-2xl"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Phản hồi nhanh chóng</p>
                  <p className="text-muted-foreground text-sm">
                    Chúng tôi cam kết phản hồi mọi yêu cầu trong vòng 2 giờ làm việc. 
                    Với các trường hợp khẩn cấp, vui lòng gọi điện trực tiếp để được hỗ trợ ngay lập tức.
                  </p>
                </div>
              </div>
            </motion.div>

            <p className="mt-6 text-sm text-muted-foreground text-center">
              Thông tin của bạn được bảo mật theo{" "}
              <a href="/chinh-sach-bao-mat" className="text-primary hover:underline">
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