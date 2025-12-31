"use client"

import { motion } from "framer-motion"
import { Phone, MessageCircle } from "lucide-react"

export function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Zalo Button */}
      <motion.a
        href="https://zalo.me/0901234567"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#0068FF] text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
        whileHover={{ rotate: [0, -10, 10, -10, 0] }}
        aria-label="Nhắn tin Zalo"
      >
        <MessageCircle className="h-6 w-6" />

        <span className="absolute right-full mr-3 whitespace-nowrap rounded-lg bg-foreground px-3 py-2 text-sm font-medium text-background opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
          Chat Zalo
        </span>

        {/* Pulse effect */}
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#0068FF]/40" />
      </motion.a>

      {/* Phone Button */}
      <motion.a
        href="tel:0901234567"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all hover:scale-110 hover:shadow-xl"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
        whileHover={{ rotate: [0, -10, 10, -10, 0] }}
        aria-label="Gọi điện thoại"
      >
        <Phone className="h-6 w-6" />

        <span className="absolute right-full mr-3 whitespace-nowrap rounded-lg bg-foreground px-3 py-2 text-sm font-medium text-background opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
          Gọi ngay
        </span>

        {/* Pulse effect */}
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-primary/40" />
      </motion.a>
    </div>
  )
}
