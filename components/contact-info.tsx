"use client"

import { motion } from "framer-motion"

export function ContactInfo() {
  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm tracking-widest uppercase text-accent">Địa chỉ văn phòng</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-foreground tracking-tight">
            Ghé thăm showroom của chúng tôi
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="aspect-[4/3] lg:aspect-auto lg:h-full min-h-[400px] rounded-xl overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4946!2d106.6998!3d10.7757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ2JzMyLjUiTiAxMDbCsDQxJzU5LjMiRQ!5e0!3m2!1sen!2s!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bản đồ văn phòng Thiên Sơn"
            />
          </motion.div>

          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-semibold text-foreground text-lg">Văn phòng TP. Hồ Chí Minh</h3>
              <p className="mt-2 text-muted-foreground">123 Đường ABC, Phường XYZ</p>
              <p className="text-muted-foreground">Quận 1, TP. Hồ Chí Minh</p>
              <div className="mt-4 flex items-center gap-6 text-sm">
                <span className="text-muted-foreground">
                  <span className="font-medium text-foreground">Hotline:</span> 090 123 4567
                </span>
                <span className="text-muted-foreground">
                  <span className="font-medium text-foreground">Fax:</span> (028) 1234 5678
                </span>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-semibold text-foreground text-lg">Văn phòng Hà Nội</h3>
              <p className="mt-2 text-muted-foreground">456 Đường DEF, Phường GHI</p>
              <p className="text-muted-foreground">Quận Hoàn Kiếm, Hà Nội</p>
              <div className="mt-4 flex items-center gap-6 text-sm">
                <span className="text-muted-foreground">
                  <span className="font-medium text-foreground">Hotline:</span> 091 234 5678
                </span>
                <span className="text-muted-foreground">
                  <span className="font-medium text-foreground">Fax:</span> (024) 1234 5678
                </span>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-semibold text-foreground text-lg">Giờ làm việc</h3>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Thứ 2 - Thứ 6</span>
                  <span className="font-medium text-foreground">8:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Thứ 7</span>
                  <span className="font-medium text-foreground">8:00 - 12:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Chủ nhật</span>
                  <span className="font-medium text-foreground">Nghỉ</span>
                </div>
              </div>
            </div>

            <div className="bg-primary text-primary-foreground rounded-xl p-6">
              <h3 className="font-semibold text-lg">Tư vấn tại nhà miễn phí</h3>
              <p className="mt-2 text-primary-foreground/80">
                Đội ngũ kỹ sư sẵn sàng đến tận nơi khảo sát và tư vấn miễn phí trong bán kính 50km từ văn phòng.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
