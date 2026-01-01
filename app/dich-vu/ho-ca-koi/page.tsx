import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceHero } from "@/components/service-hero"
import { ServiceFeatures } from "@/components/service-features"
import { ServiceProcess } from "@/components/service-process"
import { ServiceGallery } from "@/components/service-gallery"
import { ServiceCTA } from "@/components/service-cta"
import { RelatedServices } from "@/components/related-services"

export const metadata: Metadata = {
  title: "Thi Công Hồ Cá Koi | Sân Vườn Thiên Sơn",
  description:
    "Dịch vụ thiết kế và thi công hồ cá Koi theo tiêu chuẩn Nhật Bản. Đảm bảo môi trường sống lý tưởng cho cá Koi với hệ thống lọc nước hiện đại.",
  keywords: ["hồ cá koi", "thi công hồ koi", "thiết kế hồ koi", "hồ koi nhật bản", "xây hồ koi"],
}

const features = [
  {
    icon: "Fish",
    title: "Thiết kế theo tiêu chuẩn Nhật Bản",
    description: "Áp dụng các nguyên tắc thiết kế hồ Koi truyền thống Nhật Bản, đảm bảo tính thẩm mỹ và chức năng.",
  },
  {
    icon: "Droplets",
    title: "Hệ thống lọc nước tiên tiến",
    description: "Trang bị hệ thống lọc đa tầng, UV diệt khuẩn và oxy hóa, duy trì chất lượng nước tối ưu.",
  },
  {
    icon: "ThermometerSun",
    title: "Kiểm soát nhiệt độ",
    description: "Hệ thống điều hòa nhiệt độ tự động, phù hợp với khí hậu nhiệt đới Việt Nam.",
  },
  {
    icon: "Settings",
    title: "Kỹ thuật thi công chuyên nghiệp",
    description: "Đội ngũ kỹ thuật viên giàu kinh nghiệm, thi công theo quy trình nghiêm ngặt.",
  },
  {
    icon: "Shield",
    title: "Chống thấm tuyệt đối",
    description: "Sử dụng vật liệu chống thấm cao cấp, đảm bảo không rò rỉ trong suốt vòng đời công trình.",
  },
  {
    icon: "Sparkles",
    title: "Thiết kế cảnh quan tích hợp",
    description: "Kết hợp hồ Koi với cảnh quan xung quanh, tạo nên không gian hài hòa và thẩm mỹ.",
  },
]

const processSteps = [
  {
    number: "01",
    title: "Tư vấn & Khảo sát",
    description: "Đội ngũ kỹ sư khảo sát thực địa, tư vấn thiết kế phù hợp với không gian và ngân sách.",
  },
  {
    number: "02",
    title: "Thiết kế chi tiết",
    description: "Bản vẽ 2D/3D chi tiết, lựa chọn vật liệu và trang thiết bị phù hợp.",
  },
  {
    number: "03",
    title: "Thi công chuyên nghiệp",
    description: "Thi công theo đúng bản vẽ, đảm bảo tiến độ và chất lượng công trình.",
  },
  {
    number: "04",
    title: "Bàn giao & Bảo hành",
    description: "Bàn giao công trình hoàn thiện, hướng dẫn vận hành và chế độ bảo hành dài hạn.",
  },
]

const galleryImages = [
  {
    src: "/koi-pond-luxury-villa-night-lighting-waterfall.jpg",
    alt: "Hồ Koi biệt thự cao cấp",
    caption: "Hồ Koi biệt thự Vinhomes - 50m²",
  },
  {
    src: "/japanese-style-koi-pond-with-bridge-and-lantern.jpg",
    alt: "Hồ Koi phong cách Nhật Bản",
    caption: "Hồ Koi phong cách Nhật - Resort Nha Trang",
  },
  {
    src: "/modern-koi-pond-glass-wall-viewing-panel.jpg",
    alt: "Hồ Koi hiện đại với kính",
    caption: "Hồ Koi kính - Penthouse Quận 1",
  },
  {
    src: "/natural-koi-pond-with-rocks-and-waterfall.jpg",
    alt: "Hồ Koi tự nhiên",
    caption: "Hồ Koi tự nhiên - Biệt thự Thảo Điền",
  },
  {
    src: "/koi-pond-with-wooden-deck-and-gazebo.jpg",
    alt: "Hồ Koi với sàn gỗ",
    caption: "Hồ Koi sàn gỗ - Villa Đà Lạt",
  },
  { src: "/indoor-koi-pond-lobby-design.jpg", alt: "Hồ Koi trong nhà", caption: "Hồ Koi sảnh - Khách sạn 5 sao" },
]

const relatedServices = [
  {
    title: "Thi Công Hồ Cá Koi",
    description: "Thiết kế và thi công hồ cá Koi theo tiêu chuẩn Nhật Bản",
    image: "/beautiful-japanese-koi-pond-with-colorful-koi-fish.jpg",
    href: "/dich-vu/ho-ca-koi",
  },
  {
    title: "Hòn Non Bộ & Tiểu Cảnh",
    description: "Tạo tác hòn non bộ, tiểu cảnh nghệ thuật theo phong thủy",
    image: "/elegant-rock-garden-bonsai-miniature-landscape-wit.jpg",
    href: "/dich-vu/hon-non-bo",
  },
  {
    title: "Thiết Kế Sân Vườn",
    description: "Quy hoạch và thiết kế sân vườn biệt thự, resort cao cấp",
    image: "/luxury-villa-garden-design-with-pathway-fountain-a.jpg",
    href: "/dich-vu/thiet-ke-san-vuon",
  },
]

export default function KoiPondServicePage() {
  return (
    <>
      <Header />
      <main>
        <ServiceHero
          title="Thi Công Hồ Cá Koi"
          subtitle="Dịch vụ chuyên nghiệp"
          description="Thiết kế và thi công hồ cá Koi theo tiêu chuẩn Nhật Bản, kết hợp kỹ thuật hiện đại và nghệ thuật truyền thống để tạo nên không gian sống lý tưởng cho cá Koi."
          image="/beautiful-japanese-koi-pond-with-colorful-koi-fish.jpg"
          breadcrumbs={[{ label: "Dịch vụ", href: "/dich-vu" }, { label: "Hồ cá Koi" }]}
        />
        <ServiceFeatures title="Tại sao chọn dịch vụ của chúng tôi" subtitle="Ưu điểm vượt trội" features={features} />
        <ServiceProcess title="Quy trình thi công" subtitle="4 bước chuyên nghiệp" steps={processSteps} />
        <ServiceGallery title="Dự án hồ Koi tiêu biểu" subtitle="Công trình thực tế" images={galleryImages} />
        <ServiceCTA
          title="Bạn muốn sở hữu một hồ cá Koi đẳng cấp?"
          description="Liên hệ ngay để được tư vấn miễn phí và nhận báo giá chi tiết cho dự án của bạn."
        />
        <RelatedServices currentService="Thi Công Hồ Cá Koi" services={relatedServices} />
      </main>
      <Footer />
    </>
  )
}