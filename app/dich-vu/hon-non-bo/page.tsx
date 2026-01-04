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
  title: "Hòn Non Bộ & Tiểu Cảnh | Sân Vườn Thiên Sơn",
  description:
    "Dịch vụ thiết kế và thi công hòn non bộ, tiểu cảnh nghệ thuật theo phong thủy. Nghệ nhân lành nghề với đá tự nhiên cao cấp.",
  keywords: ["hòn non bộ", "tiểu cảnh", "hòn non bộ phong thủy", "tiểu cảnh sân vườn", "đá non bộ"],
}

const features = [
  {
    icon: "Compass",
    title: "Tư vấn phong thủy chuyên sâu",
    description: "Đội ngũ chuyên gia phong thủy tư vấn vị trí, hướng đặt và các yếu tố ngũ hành phù hợp.",
  },
  {
    icon: "Gem",
    title: "Đá tự nhiên cao cấp",
    description: "Sử dụng các loại đá quý hiếm như đá vân mây, đá hoa cương, đá thạch anh từ các mỏ uy tín.",
  },
  {
    icon: "Mountain",
    title: "Nghệ nhân lành nghề",
    description: "Đội ngũ nghệ nhân với hơn 15 năm kinh nghiệm tạo tác hòn non bộ truyền thống.",
  },
  {
    icon: "Palette",
    title: "Thiết kế độc quyền",
    description: "Mỗi tác phẩm là một thiết kế độc nhất, không trùng lặp, phản ánh cá tính chủ nhân.",
  },
  {
    icon: "Wind",
    title: "Hệ thống nước tuần hoàn",
    description: "Tích hợp thác nước, suối nhân tạo với hệ thống bơm tuần hoàn tiết kiệm năng lượng.",
  },
  {
    icon: "Leaf",
    title: "Cây cảnh nghệ thuật",
    description: "Kết hợp các loại cây bonsai, dương xỉ, rêu tạo nên cảnh quan thiên nhiên thu nhỏ.",
  },
]

const processSteps = [
  {
    number: "01",
    title: "Khảo sát & Tư vấn",
    description: "Khảo sát không gian, tư vấn phong thủy và phong cách thiết kế phù hợp.",
  },
  {
    number: "02",
    title: "Thiết kế & Lựa chọn đá",
    description: "Phác thảo thiết kế, đưa khách hàng chọn đá trực tiếp tại kho.",
  },
  {
    number: "03",
    title: "Tạo tác nghệ thuật",
    description: "Nghệ nhân tạo tác hòn non bộ theo bản thiết kế đã duyệt.",
  },
  {
    number: "04",
    title: "Lắp đặt & Hoàn thiện",
    description: "Vận chuyển, lắp đặt tại công trình và hoàn thiện hệ thống nước.",
  },
]

const galleryImages = [
  {
    src: "/traditional-vietnamese-rock-garden-with-waterfall.jpg",
    alt: "Hòn non bộ truyền thống",
    caption: "Hòn non bộ biệt thự Phú Mỹ Hưng",
  },
  {
    src: "/zen-rock-garden-japanese-style-meditation.jpg",
    alt: "Tiểu cảnh Zen",
    caption: "Tiểu cảnh Zen - Spa & Resort",
  },
  {
    src: "/miniature-mountain-landscape-bonsai-waterfall.jpg",
    alt: "Non bộ với thác nước",
    caption: "Non bộ thác nước - Văn phòng",
  },
  {
    src: "/rock-garden-entrance-gate-feng-shui.jpg",
    alt: "Tiểu cảnh cổng vào",
    caption: "Tiểu cảnh phong thủy - Biệt thự Q9",
  },
  {
    src: "/indoor-rock-garden-lobby-corporate.jpg",
    alt: "Tiểu cảnh trong nhà",
    caption: "Tiểu cảnh sảnh - Tòa nhà văn phòng",
  },
  {
    src: "/rock-garden-with-koi-pond-integration.jpg",
    alt: "Non bộ kết hợp hồ Koi",
    caption: "Non bộ + hồ Koi - Villa Vũng Tàu",
  },
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

export default function RockGardenServicePage() {
  return (
    <>
      <Header />
      <main>
        <ServiceHero
          title="Hòn Non Bộ & Tiểu Cảnh"
          subtitle="Nghệ thuật tự nhiên thu nhỏ"
          description="Tạo tác hòn non bộ, tiểu cảnh nghệ thuật mang vẻ đẹp núi non sông suối vào không gian sống của bạn. Kết hợp phong thủy cổ truyền và thẩm mỹ hiện đại."
          image="/elegant-rock-garden-bonsai-miniature-landscape-wit.jpg"
          breadcrumbs={[{ label: "Dịch vụ", href: "/dich-vu" }, { label: "Hòn non bộ" }]}
        />
        <ServiceFeatures title="Giá trị khác biệt" subtitle="Tại sao chọn chúng tôi" features={features} />
        <ServiceProcess title="Quy trình tạo tác" subtitle="4 bước nghệ thuật" steps={processSteps} />
        <ServiceGallery title="Tác phẩm tiêu biểu" subtitle="Bộ sưu tập" images={galleryImages} />
        <ServiceCTA
          title="Sở hữu tác phẩm nghệ thuật độc bản?"
          description="Liên hệ ngay để được tư vấn phong thủy miễn phí và thiết kế hòn non bộ riêng cho không gian của bạn."
        />
        <RelatedServices currentService="Hòn Non Bộ & Tiểu Cảnh" services={relatedServices} />
      </main>
      <Footer />
    </>
  )
}