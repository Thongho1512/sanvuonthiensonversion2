"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Home, Droplets, Mountain, TreePalm, Briefcase, Users, Mail } from "lucide-react"
import { usePathname } from "next/navigation"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Lock body scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const navItems = [
    { label: "Trang Chủ", href: "/", icon: Home },
    { label: "Dịch Vụ", href: "/dich-vu", icon: Briefcase },
    { label: "Hồ Cá Koi", href: "/dich-vu/ho-ca-koi", icon: Droplets },
    { label: "Hòn Non Bộ", href: "/dich-vu/hon-non-bo", icon: Mountain },
    { label: "Thiết Kế Sân Vườn", href: "/dich-vu/thiet-ke-san-vuon", icon: TreePalm },
    { label: "Dự Án", href: "/du-an", icon: Briefcase },
    { label: "Về Chúng Tôi", href: "/ve-chung-toi", icon: Users },
    { label: "Liên Hệ", href: "/lien-he", icon: Mail },
  ]

  return (
    <>
      {/* Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white/80 backdrop-blur-sm"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center z-50">
            <div className="relative h-12 sm:h-14 md:h-16 w-auto">
              <div className="h-full w-12 sm:w-14 md:w-16 rounded-full bg-primary flex items-center justify-center hover:scale-105 transition-transform duration-300">
                <span className="text-primary-foreground font-semibold text-xl sm:text-2xl">TS</span>
              </div>
            </div>
            <div className="ml-3 hidden sm:block">
              <p className="text-lg sm:text-xl font-semibold tracking-wide text-foreground">
                Thiên Sơn
              </p>
              <p className="text-xs tracking-widest uppercase text-muted-foreground">
                Sân Vườn
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-sm xl:text-base font-medium transition-colors hover:text-primary relative group ${
                  pathname === item.href ? "text-primary font-semibold" : "text-foreground"
                }`}
              >
                {item.label}
                {pathname === item.href && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full" />
                )}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary rounded-full transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 rounded-full transition-all z-50 ${
              isOpen 
                ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                : "hover:bg-muted text-foreground"
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        </nav>
      </header>

      {/* Overlay with blur */}
      <div
        className={`fixed inset-0 bg-black/30 backdrop-blur-md z-40 lg:hidden transition-all duration-500 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Glassmorphism Floating Sidebar */}
      <div
        className={`fixed top-4 right-4 bottom-4 w-[360px] rounded-3xl z-40 lg:hidden transition-all duration-500 ease-in-out ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-[400px] opacity-0"
        }`}
        style={{
          background: 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          border: '1px solid rgba(255, 255, 255, 0.5)',
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.3) inset'
        }}
      >
        <div className="h-full flex flex-col p-6 pt-20 overflow-y-auto">
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/40 backdrop-blur-sm hover:bg-white/60 flex items-center justify-center transition-all border border-white/50"
            aria-label="Close menu"
          >
            <X size={20} className="text-gray-800" />
          </button>

          {/* Title */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground drop-shadow-sm">Menu</h2>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 space-y-3">
            {navItems.map((item, index) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-4 px-5 py-4 rounded-xl transition-all duration-300 group backdrop-blur-sm ${
                    pathname === item.href 
                      ? "bg-white/60 text-primary shadow-sm border border-white/50" 
                      : "text-foreground hover:bg-white/40 hover:text-primary border border-transparent hover:border-white/30"
                  }`}
                  style={{
                    animation: isOpen ? `slideIn 0.3s ease-out ${index * 0.05}s both` : "none"
                  }}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all backdrop-blur-sm ${
                    pathname === item.href
                      ? "bg-primary/20 border border-primary/30"
                      : "bg-white/30 group-hover:bg-primary/20 border border-white/30 group-hover:border-primary/30"
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-semibold text-base drop-shadow-sm">{item.label}</span>
                </Link>
              )
            })}
          </nav>

          {/* Contact Info in Sidebar */}
          <div className="mt-6 pt-6 border-t border-white/30">
            <div className="bg-white/40 backdrop-blur-sm rounded-xl p-4 border border-white/50">
              <p className="text-sm font-semibold text-foreground mb-2">Liên hệ tư vấn</p>
              <a 
                href="tel:0901234567" 
                className="text-primary font-bold text-lg hover:text-primary/80 transition-colors"
              >
                090 123 4567
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  )
}