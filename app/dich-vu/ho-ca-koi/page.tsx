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
  title: "Thi Công Hồ Cá Koi Chuẩn Nhật Bản | Thiên Sơn Landscape",
  description:
    "Chuyên thiết kế thi công hồ cá Koi đẹp theo tiêu chuẩn Nhật Bản. Hệ thống lọc hiện đại, bảo hành 5 năm. Tư vấn miễn phí 24/7. Hotline: 0938 38 66 79",
  keywords: [
    "hồ cá koi",
    "thi công hồ koi",
    "thiết kế hồ koi",
    "hồ koi nhật bản",
    "xây hồ koi",
    "hồ cá koi đẹp",
    "làm hồ cá koi",
    "hồ koi chuẩn nhật",
    "giá hồ cá koi",
    "thi công hồ cá koi tphcm",
    "hồ cá koi mini",
    "thiết kế hồ cá koi sân vườn"
  ],
  openGraph: {
    title: "Thi Công Hồ Cá Koi Chuẩn Nhật Bản | Thiên Sơn",
    description: "Chuyên thiết kế thi công hồ cá Koi đẹp. Hệ thống lọc hiện đại, bảo hành 5 năm",
    images: ["/beautiful-japanese-koi-pond-with-colorful-koi-fish.jpg"],
  },
}

const features = [
  {
    icon: "Waves",
    title: "Thiết kế theo tiêu chuẩn Nhật Bản",
    description: "Áp dụng các nguyên tắc thiết kế hồ Koi truyền thống Nhật Bản với tỷ lệ vàng, đảm bảo tính thẩm mỹ cao và môi trường sống lý tưởng cho cá Koi phát triển khỏe mạnh.",
  },
  {
    icon: "Filter",
    title: "Hệ thống lọc đa tầng hiện đại",
    description: "Trang bị hệ thống lọc 3-4 tầng (lọc cơ, lọc sinh học, lọc UV), máy bơm tiết kiệm điện, hệ thống sục khí tự động duy trì chất lượng nước tối ưu 24/7.",
  },
  {
    icon: "Thermometer",
    title: "Kiểm soát nhiệt độ thông minh",
    description: "Hệ thống điều hòa nhiệt độ tự động, máy sưởi/làm mát phù hợp khí hậu nhiệt đới Việt Nam, giúp cá Koi thoải mái quanh năm.",
  },
  {
    icon: "Wrench",
    title: "Thi công bởi kỹ thuật viên chuyên nghiệp",
    description: "Đội ngũ kỹ thuật viên có chứng chỉ chuyên môn, đào tạo bài bản về xây dựng hồ Koi, thi công theo quy trình nghiêm ngặt từng bước.",
  },
  {
    icon: "ShieldCheck",
    title: "Chống thấm tuyệt đối - Bảo hành 5 năm",
    description: "Sử dụng màng chống thấm HDPE cao cấp nhập khẩu hoặc sơn Epoxy chuyên dụng, đảm bảo không rò rỉ, nứt vỡ. Bảo hành kết cấu 5 năm.",
  },
  {
    icon: "Trees",
    title: "Thiết kế cảnh quan tích hợp hài hòa",
    description: "Kết hợp hồ Koi với sân vườn, thác nước, đá non bộ, ánh sáng cảnh quan tạo nên không gian thư giãn hoàn hảo, tăng giá trị bất động sản.",
  },
]

const processSteps = [
  {
    number: "01",
    title: "Tư vấn & Khảo sát chi tiết",
    description: "Đội ngũ kỹ sư khảo sát thực địa miễn phí, đo đạc chính xác, tư vấn thiết kế phù hợp với không gian, phong thủy và ngân sách của bạn.",
  },
  {
    number: "02",
    title: "Thiết kế 3D & Báo giá minh bạch",
    description: "Bản vẽ 3D chi tiết giúp bạn hình dung rõ công trình, lựa chọn vật liệu và trang thiết bị. Báo giá chi tiết từng hạng mục, minh bạch 100%.",
  },
  {
    number: "03",
    title: "Thi công chuyên nghiệp đúng tiến độ",
    description: "Thi công theo đúng bản vẽ đã duyệt, giám sát chất lượng chặt chẽ từng công đoạn, đảm bảo tiến độ và an toàn tuyệt đối.",
  },
  {
    number: "04",
    title: "Bàn giao & Hướng dẫn vận hành",
    description: "Bàn giao công trình hoàn thiện, hướng dẫn chi tiết cách vận hành hệ thống lọc, chăm sóc cá và chế độ bảo hành dài hạn.",
  },
]

const galleryImages = [
  {
    src: "/koi-pond-luxury-villa-night-lighting-waterfall.jpg",
    alt: "Hồ Koi biệt thự cao cấp với hệ thống đèn LED đẹp lung linh",
    caption: "Hồ Koi biệt thự Vinhomes - 50m²",
  },
  {
    src: "/japanese-style-koi-pond-with-bridge-and-lantern.jpg",
    alt: "Hồ Koi phong cách Nhật Bản với cầu gỗ và đèn lồng",
    caption: "Hồ Koi phong cách Nhật - Resort Nha Trang",
  },
  {
    src: "/modern-koi-pond-glass-wall-viewing-panel.jpg",
    alt: "Hồ Koi hiện đại với tấm kính ngắm cá độc đáo",
    caption: "Hồ Koi kính - Penthouse Quận 1",
  },
  {
    src: "/natural-koi-pond-with-rocks-and-waterfall.jpg",
    alt: "Hồ Koi tự nhiên với thác nước và đá tự nhiên",
    caption: "Hồ Koi tự nhiên - Biệt thự Thảo Điền",
  },
  {
    src: "/koi-pond-with-wooden-deck-and-gazebo.jpg",
    alt: "Hồ Koi với sàn gỗ và chòi nghỉ sang trọng",
    caption: "Hồ Koi sàn gỗ - Villa Đà Lạt",
  },
  {
    src: "/indoor-koi-pond-lobby-design.jpg",
    alt: "Hồ Koi trong nhà thiết kế hiện đại",
    caption: "Hồ Koi sảnh - Khách sạn 5 sao",
  },
]

const pricingTiers = [
  {
    name: "Gói Cơ Bản",
    price: "3-5 triệu",
    description: "Phù hợp cho hồ Koi nhỏ, sân vườn hẹp",
    features: [
      "Hồ Koi từ 10-20m²",
      "Hệ thống lọc 2 tầng cơ bản",
      "Máy bơm tiêu chuẩn",
      "Chống thấm sơn Epoxy",
      "Bảo hành 2 năm",
      "Tư vấn thiết kế miễn phí",
    ],
  },
  {
    name: "Gói Tiêu Chuẩn",
    price: "5-8 triệu",
    description: "Lựa chọn tốt nhất cho gia đình",
    features: [
      "Hồ Koi từ 20-50m²",
      "Hệ thống lọc 3 tầng + UV",
      "Máy bơm tiết kiệm điện",
      "Chống thấm màng HDPE",
      "Hệ thống sục khí tự động",
      "Đèn LED dưới nước",
      "Bảo hành 3 năm",
      "Tư vấn phong thủy miễn phí",
    ],
    highlighted: true,
  },
  {
    name: "Gói Cao Cấp",
    price: "8-15 triệu",
    description: "Hồ Koi đẳng cấp, biệt thự sang trọng",
    features: [
      "Hồ Koi từ 50m² trở lên",
      "Hệ thống lọc 4 tầng cao cấp",
      "Máy bơm biến tần Nhật Bản",
      "Chống thấm đa lớp",
      "Hệ thống điều hòa nhiệt độ",
      "Đèn LED RGB điều khiển từ xa",
      "Thác nước nghệ thuật",
      "Cầu gỗ, đá tự nhiên cao cấp",
      "Bảo hành 5 năm",
      "Bảo trì miễn phí 1 năm",
    ],
  },
]

const koiFAQs = [
  {
    question: "Thi công hồ cá Koi mất bao lâu?",
    answer: `Thời gian thi công phụ thuộc vào quy mô:

- Hồ nhỏ (10-20m²): 1-2 tuần
- Hồ trung bình (20-50m²): 2-4 tuần  
- Hồ lớn (trên 50m²): 4-8 tuần

Thời gian có thể kéo dài hơn nếu có yêu cầu đặc biệt về thiết kế hoặc cảnh quan phức tạp.`,
  },
  {
    question: "Chi phí thi công hồ cá Koi bao nhiêu?",
    answer: `Chi phí dao động từ 3-15 triệu/m² tùy thuộc:

- Kích thước hồ
- Chất liệu chống thấm (Epoxy hay màng HDPE)
- Hệ thống lọc (2 tầng, 3 tầng hay 4 tầng)
- Thiết bị phụ trợ (đèn, thác nước, sục khí)
- Cảnh quan xung quanh

Liên hệ 0938 38 66 79 để nhận báo giá chi tiết miễn phí.`,
  },
  {
    question: "Hồ cá Koi có cần thay nước thường xuyên không?",
    answer: `Với hệ thống lọc hiện đại, bạn KHÔNG cần thay nước thường xuyên:

- Hệ thống lọc hoạt động 24/7 tự động làm sạch nước
- Chỉ cần bổ sung nước do bay hơi (khoảng 5-10% mỗi tuần)
- Thay nước lớn 6 tháng/lần hoặc 1 năm/lần tùy chất lượng

Điều quan trọng là vệ sinh bộ lọc định kỳ theo hướng dẫn.`,
  },
  {
    question: "Hồ Koi có phù hợp với khí hậu Việt Nam không?",
    answer: `Hoàn toàn phù hợp! Chúng tôi thiết kế hồ Koi chuyên biệt cho khí hậu nhiệt đới:

- Hệ thống che nắng tránh nước nóng quá mức
- Máy sục khí đủ oxy khi trời nóng
- Độ sâu hồ phù hợp (tối thiểu 1.2m)
- Cây xanh tạo bóng mát tự nhiên

Cá Koi thích hợp với nhiệt độ 15-28°C, hoàn toàn phù hợp khí hậu Việt Nam.`,
  },
  {
    question: "Bảo hành và bảo trì như thế nào?",
    answer: `Chế độ bảo hành và bảo trì toàn diện:

BẢO HÀNH:
- Kết cấu hồ: 5 năm
- Hệ thống lọc: 3 năm
- Máy bơm, thiết bị: 1-2 năm (theo nhà sản xuất)

BẢO TRÌ:
- Hướng dẫn vận hành chi tiết khi bàn giao
- Hỗ trợ kỹ thuật qua điện thoại miễn phí
- Dịch vụ bảo trì định kỳ với giá ưu đãi
- Cung cấp phụ tùng chính hãng`,
  },
  {
    question: "Hồ Koi cần diện tích tối thiểu bao nhiêu?",
    answer: `Diện tích hồ Koi phụ thuộc vào số lượng và kích thước cá:

- Hồ mini (10-15m²): Nuôi 5-8 con cá nhỏ
- Hồ trung bình (20-40m²): Nuôi 10-15 con
- Hồ lớn (50m² trở lên): Nuôi 20+ con

Nguyên tắc: 1 con cá Koi trưởng thành cần khoảng 1.5-2m³ nước để phát triển khỏe mạnh. Độ sâu tối thiểu 1.2m, lý tưởng là 1.5-2m.`,
  },
  {
    question: "Có cần giấy phép để xây hồ cá Koi không?",
    answer: `Tùy thuộc vào quy mô và vị trí:

- Hồ trong sân nhà riêng: Thường không cần giấy phép
- Hồ lớn thay đổi kết cấu: Có thể cần báo cáo với chính quyền địa phương
- Hồ ở chung cư, chung cư: Cần xin phép ban quản lý

Chúng tôi sẽ tư vấn chi tiết về các thủ tục cần thiết và hỗ trợ làm hồ sơ nếu cần.`,
  },
  {
    question: "Làm hồ Koi có ồn không?",
    answer: `Hệ thống hồ Koi hiện đại rất yên tĩnh:

- Máy bơm chất lượng cao hoạt động êm ái
- Hệ thống lọc được thiết kế giảm âm
- Tiếng nước chảy nhẹ nhàng, thư giãn (nếu có thác)
- Không gây ồn ảo cho gia đình và hàng xóm

Nhiều khách hàng phản hồi tiếng nước chảy nhẹ còn giúp họ thư giãn và ngủ ngon hơn.`,
  },
]

const relatedServices = [
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