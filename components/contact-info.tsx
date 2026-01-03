"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react"
import { Button } from "@/components/ui/button"

const offices = [
  {
    city: "TP. Hồ Chí Minh",
    address: "178/19/33 Trương Thị Hoa, P.Tân Thới Hiệp, Q12",
    phone: "0938 38 66 79",
    email: "sanvuonthienson@gmail.com",
    hours: "8:00 - 18:00",
    mapUrl: "https://maps.google.com/?q=10.863,106.646",
    isMain: true,
  },
  {
    city: "Chi nhánh Bà Rịa - Vũng Tàu",
    address: "315 Hùng Vương, TT Ngãi Giao, Châu Đức – BR-VT",
    phone: "0938 38 66 79",
    email: "sanvuonthienson@gmail.com",
    hours: "8:00 - 18:00",
    mapUrl: "https://maps.google.com/?q=315+Hung+Vuong+Ngai+Giao+Chau+Duc+Ba+Ria+Vung+Tau",
    isMain: false,
  },
]

export function ContactInfo() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm tracking-widest uppercase text-accent font-medium">Showroom & Văn phòng</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-foreground tracking-tight">Ghé thăm chúng tôi</h2>
          <p className="mt-4 text-muted-foreground">
            Trải nghiệm trực tiếp các mẫu hồ cá Koi, hòn non bộ tại showroom hoặc đặt lịch tư vấn tại nhà.
          </p>
        </motion.div>

        {/* Office Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {offices.map((office, index) => (
            <motion.div
              key={office.city}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group rounded-2xl overflow-hidden ${office.isMain ? "md:row-span-1" : ""}`}
            >
              <div className="absolute inset-0 z-0">
                <img
                  src={`/modern-garden-showroom-.jpg?height=400&width=600&query=modern garden showroom ${office.city}`}
                  alt={`Văn phòng ${office.city}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
              </div>

              <div className="relative z-10 p-8 lg:p-10 h-full flex flex-col justify-end min-h-[350px]">
                {office.isMain && (
                  <span className="absolute top-6 left-6 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                    Trụ sở chính
                  </span>
                )}

                <h3 className="text-2xl font-semibold text-white mb-4">Văn phòng {office.city}</h3>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3 text-white/90">
                    <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <span>{office.address}</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/90">
                    <Phone className="h-5 w-5 flex-shrink-0" />
                    <a href={`tel:${office.phone.replace(/\s/g, "")}`} className="hover:text-white">
                      {office.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-white/90">
                    <Mail className="h-5 w-5 flex-shrink-0" />
                    <a href={`mailto:${office.email}`} className="hover:text-white">
                      {office.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-white/90">
                    <Clock className="h-5 w-5 flex-shrink-0" />
                    <span>Thứ 2 - Thứ 7: {office.hours}</span>
                  </div>
                </div>

                <Button
                  asChild
                  variant="secondary"
                  className="w-fit bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20"
                >
                  <a href={office.mapUrl} target="_blank" rel="noopener noreferrer">
                    <Navigation className="mr-2 h-4 w-4" />
                    Chỉ đường
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Full Width Map - Updated with correct coordinates and removed grayscale */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden border border-border"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.4!2d106.646!3d10.863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDUxJzQ2LjgiTiAxMDbCsDM4JzQ1LjYiRQ!5e0!3m2!1svi!2s!4v1234567890"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Bản đồ văn phòng Thiên Sơn"
          />
        </motion.div>
      </div>
    </section>
  )
}