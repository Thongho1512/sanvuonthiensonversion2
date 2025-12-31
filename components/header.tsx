"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Trang chủ", href: "/" },
  {
    name: "Dịch vụ",
    href: "/dich-vu",
    children: [
      { name: "Hồ cá Koi", href: "/dich-vu/ho-ca-koi" },
      { name: "Hòn non bộ", href: "/dich-vu/hon-non-bo" },
      { name: "Thiết kế sân vườn", href: "/dich-vu/thiet-ke-san-vuon" },
    ],
  },
  { name: "Dự án", href: "/du-an" },
  { name: "Về chúng tôi", href: "/ve-chung-toi" },
  { name: "Liên hệ", href: "/lien-he" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative">
              <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-semibold text-xl">TS</span>
              </div>
            </div>
            <div className="hidden sm:block">
              <p className={`text-xl font-semibold tracking-wide ${scrolled ? "text-foreground" : "text-card"}`}>
                Thiên Sơn
              </p>
              <p className={`text-xs tracking-widest uppercase ${scrolled ? "text-muted-foreground" : "text-card/70"}`}>
                Sân Vườn
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 text-sm font-medium tracking-wide transition-colors hover:text-accent ${
                    scrolled ? "text-foreground" : "text-card"
                  }`}
                >
                  {item.name}
                  {item.children && <ChevronDown className="h-4 w-4" />}
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {item.children && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-card rounded-lg shadow-xl border border-border overflow-hidden"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-3 text-sm text-card-foreground hover:bg-muted transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA & Mobile Menu */}
          <div className="flex items-center gap-4">
            <a href="tel:0901234567" className="hidden md:flex items-center gap-2 text-sm">
              <Phone className={`h-4 w-4 ${scrolled ? "text-primary" : "text-accent"}`} />
              <span className={scrolled ? "text-foreground" : "text-card"}>090 123 4567</span>
            </a>
            <Button asChild className="hidden sm:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/lien-he">Liên hệ tư vấn</Link>
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 ${scrolled ? "text-foreground" : "text-card"}`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-card rounded-lg mt-2 overflow-hidden shadow-xl"
            >
              <div className="px-4 py-6 space-y-4">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block py-2 text-foreground font-medium"
                    >
                      {item.name}
                    </Link>
                    {item.children && (
                      <div className="pl-4 space-y-2 mt-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            onClick={() => setIsOpen(false)}
                            className="block py-1 text-muted-foreground text-sm"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Button asChild className="w-full mt-4 bg-primary text-primary-foreground">
                  <Link href="/lien-he">Liên hệ tư vấn</Link>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}
