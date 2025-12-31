import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { ServicesOverview } from "@/components/services-overview"
import { ServiceCTA } from "@/components/service-cta"

export const metadata: Metadata = {
  title: "Dịch Vụ | Sân Vườn Thiên Sơn",
  description:
    "Dịch vụ thiết kế và thi công sân vườn chuyên nghiệp: hồ cá Koi, hòn non bộ, tiểu cảnh, thiết kế cảnh quan. Hơn 15 năm kinh nghiệm.",
  keywords: ["dịch vụ sân vườn", "thi công sân vườn", "hồ cá koi", "hòn non bộ", "thiết kế cảnh quan"],
}

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Dịch vụ" }]} />
        </div>
        <ServicesOverview />
        <ServiceCTA
          title="Bạn cần tư vấn dịch vụ phù hợp?"
          description="Đội ngũ chuyên gia của chúng tôi sẵn sàng tư vấn miễn phí và đề xuất giải pháp tối ưu cho không gian của bạn."
        />
      </main>
      <Footer />
    </>
  )
}
