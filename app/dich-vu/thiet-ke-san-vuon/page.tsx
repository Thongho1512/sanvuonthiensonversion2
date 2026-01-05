import { ServiceCTA } from "@/components/service-cta";
import { RelatedServices } from "@/components/related-services";
import { GardenDesignIntro } from "@/components/garden-design-intro";
import { GardenDesignBenefits } from "@/components/garden-design-benefits";
import { GardenDesignCommitment } from "@/components/garden-design-commitment";

// Change all default imports → named imports
import { ServiceHero } from "@/components/service-hero";
import { ServiceFeatures } from "@/components/service-features";
import { ServiceProcess } from "@/components/service-process";
import { ServiceGallery } from "@/components/service-gallery";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thiết Kế Tiểu Cảnh Sân Vườn | Thiên Sơn Landscape",
  description:
    "Dịch vụ thiết kế và thi công tiểu cảnh sân vườn chuyên nghiệp. Tư vấn tận tâm, chất lượng đỉnh cao, chi phí hợp lý. Hotline: 0938 38 66 79",
  keywords: [
    "thiết kế sân vườn",
    "tiểu cảnh sân vườn",
    "thi công sân vườn",
    "thiết kế cảnh quan",
    "sân vườn đẹp",
    "thiết kế tiểu cảnh",
    "cảnh quan sân vườn",
    "sân vườn biệt thự",
  ],
};

const features = [
  {
    icon: "Heart",
    title: "Dịch vụ Tận Tâm",
    description: "Chúng tôi luôn lắng nghe ý kiến của khách hàng, đảm bảo tiểu cảnh sân vườn đẹp đúng ý muốn và phong cách riêng của bạn.",
  },
  {
    icon: "Award",
    title: "Chất Lượng Đỉnh Cao",
    description: "Đội ngũ chuyên nghiệp và có kinh nghiệm sẽ tạo ra các tiểu cảnh độc đáo và thú vị, bằng việc sử dụng nguyên vật liệu chất lượng cao.",
  },
  {
    icon: "Coins",
    title: "Chi Phí Hợp Lý",
    description: "Chúng tôi luôn nỗ lực để đảm bảo dự án thiết kế tiểu cảnh sân vườn của bạn được thực hiện với mức chi phí hợp lý và luôn cung cấp các ưu đãi.",
  },
  {
    icon: "Palette",
    title: "Thiết Kế Cá Nhân Hóa",
    description: "Có thể tạo nên không gian theo phong cách riêng, phản ánh cá tính và sở thích của gia chủ.",
  },
  {
    icon: "Leaf",
    title: "Không Gian Xanh Tự Nhiên",
    description: "Kết nối con người với thiên nhiên, tạo nên môi trường sống tốt cho tâm hồn và sức khỏe.",
  },
  {
    icon: "TrendingUp",
    title: "Tăng Giá Trị Bất Động Sản",
    description: "Một sân vườn đẹp sẽ tăng giá trị của ngôi nhà và tài sản của bạn đáng kể.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Khảo sát hiện trạng của không gian sân vườn",
    description: "Nhận cuộc gọi của khách hàng và tiến hành tư vấn, báo giá sơ bộ. Đi khảo sát, tư vấn chi tiết và thu thập những dữ liệu cần thiết cho thiết kế.",
  },
  {
    number: "02",
    title: "Thiết Kế",
    description: "Chỉnh sửa, hoàn thiện không gian 3D. Lên hồ sơ thi công chi tiết và trả hồ sơ thiết kế cho khách hàng phê duyệt.",
  },
  {
    number: "03",
    title: "Báo giá thi công sân vườn",
    description: "Lập mục lục danh sách các loại hoa và cây sử dụng, bảng khối lượng tạm tính và bảng dự toán đính kèm chi tiết.",
  },
  {
    number: "04",
    title: "Triển khai thi công",
    description: "Triển khai thi công theo đúng thiết kế đã duyệt và tiến hành giám sát chất lượng.",
  },
  {
    number: "05",
    title: "Hoàn thiện và hướng dẫn kỹ thuật",
    description: "Bàn giao công trình hoàn thiện, hướng dẫn kỹ thuật chăm sóc và bảo dưỡng sân vườn cho gia chủ.",
  },
];

const galleryImages = [
  { src: "/21.jpg", alt: "Sân vườn biệt thự hiện đại" },
  { src: "/44.jpg", alt: "Sân vườn resort nhiệt đới" },
  { src: "/26.png", alt: "Sân vườn Nhật Bản" },
];

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
];

export default function GardenDesignServicePage() {
  return (
    <>
      <Header />
      <main>
        <ServiceHero
          title="Thiết Kế Tiểu Cảnh Sân Vườn"
          subtitle="Nghệ thuật tạo không gian xanh"
          description="Thiết kế tiểu cảnh sân vườn là nghệ thuật tạo ra không gian ngoại trời hài hòa và thú vị bằng cách sắp xếp cây cỏ, hoa lá, đá, nước, và các chi tiết trang trí theo cách độc đáo và sáng tạo."
          image="/44.jpg"
          breadcrumbs={[
            { label: "Dịch vụ", href: "/dich-vu" },
            { label: "Thiết kế sân vườn" },
          ]}
        />

        <GardenDesignIntro />
        <GardenDesignBenefits />

        <ServiceFeatures
          title="Dịch vụ thiết kế tiểu cảnh sân vườn của Thiên Sơn Landscape"
          subtitle="Có gì đặc biệt?"
          features={features}
        />

        <ServiceProcess
          title="Quy trình triển khai thiết kế thi công"
          subtitle="5 giai đoạn chuyên nghiệp"
          steps={processSteps}
        />

        <ServiceGallery
          title="Dự án tiểu cảnh sân vườn tiêu biểu"
          subtitle="Công trình thực tế"
          images={galleryImages}
        />

        <GardenDesignCommitment />

        <ServiceCTA
          title="Bạn muốn sở hữu một sân vườn đẹp?"
          description="Liên hệ ngay để được tư vấn miễn phí tận nơi và nhận báo giá chi tiết cho dự án của bạn."
        />

        {/* Fixed: remove currentService prop if the component doesn't support it */}
        <RelatedServices services={relatedServices} />
      </main>
      <Footer />
    </>
  );
}