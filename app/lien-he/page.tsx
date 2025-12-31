import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"

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
      <main className="pt-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Liên hệ" }]} />
        </div>
        <ContactForm />
        <ContactInfo />
      </main>
      <Footer />
    </>
  )
}
