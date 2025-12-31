import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactHero } from "@/components/contact-hero"
import { ContactFormSection } from "@/components/contact-form-section"
import { ContactInfo } from "@/components/contact-info"
import { ContactFAQ } from "@/components/contact-faq"

export const metadata: Metadata = {
  title: "Liên Hệ | Sân Vườn Thiên Sơn",
  description:
    "Liên hệ Thiên Sơn để được tư vấn miễn phí về thiết kế sân vườn, hồ cá Koi, hòn non bộ. Hotline: 090 123 4567.",
  keywords: ["liên hệ thiên sơn", "tư vấn sân vườn", "báo giá hồ koi", "thiết kế sân vườn miễn phí"],
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="bg-background">
        <ContactHero />
        <ContactFormSection />
        <ContactInfo />
        <ContactFAQ />
      </main>
      <Footer />
    </>
  )
}
