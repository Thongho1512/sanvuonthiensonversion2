import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section - Logo, Info & Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 mb-8 pb-8 border-b border-slate-700">
          {/* Company Logo & Info */}
          <div className="lg:col-span-1">
            <div className="mb-8 transition-transform duration-300 hover:scale-105">
              <Image
                src="/logo-removebg-preview.png"
                alt="Thiên Sơn Logo"
                width={200}
                height={80}
                className="h-24 w-auto object-contain drop-shadow-lg"
                priority
              />
            </div>
            <h3 className="font-bold text-xl lg:text-2xl mb-3 text-white">
              Thiên Sơn Landscape
            </h3>
            <p className="text-white text-base lg:text-lg leading-relaxed mb-3">
              Công ty TNHH Sân Vườn Thiên Sơn
            </p>
            <p className="text-gray-300 text-base lg:text-lg leading-relaxed mb-6">
              Thiết kế & thi công hồ cá Koi, hòn non bộ, cảnh quan sân vườn
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-emerald-400 flex-shrink-0" />
                <a
                  href="mailto:sanvuonthienson@gmail.com"
                  className="text-white hover:text-emerald-400 transition-colors text-base lg:text-lg"
                >
                  sanvuonthienson@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-emerald-400 flex-shrink-0" />
                <a
                  href="tel:0907997759"
                  className="text-white hover:text-emerald-400 transition-colors text-base lg:text-lg font-bold"
                >
                  0907 99 77 59
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/SanVuonThienSon"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-slate-700 hover:bg-emerald-500 flex items-center justify-center transition-all text-lg font-semibold"
                title="Facebook"
              >
                f
              </a>
              <a
                href="https://www.youtube.com/@sanvuonthienson"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-slate-700 hover:bg-emerald-500 flex items-center justify-center transition-all text-lg"
                title="YouTube"
              >
                ▶
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg lg:text-xl mb-5 text-white">Dịch Vụ</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/dich-vu/ho-ca-koi"
                  className="text-gray-300 hover:text-emerald-400 transition-colors text-base lg:text-lg"
                >
                  Thi Công Hồ Cá Koi
                </Link>
              </li>
              <li>
                <Link
                  href="/dich-vu/hon-non-bo"
                  className="text-gray-300 hover:text-emerald-400 transition-colors text-base lg:text-lg"
                >
                  Thi Công Hòn Non Bộ
                </Link>
              </li>
              <li>
                <Link
                  href="/dich-vu/thiet-ke-san-vuon"
                  className="text-gray-300 hover:text-emerald-400 transition-colors text-base lg:text-lg"
                >
                  Thiết Kế Sân Vườn
                </Link>
              </li>
              <li>
                <Link
                  href="/du-an"
                  className="text-gray-300 hover:text-emerald-400 transition-colors text-base lg:text-lg"
                >
                  Dự Án
                </Link>
              </li>
              <li>
                <Link
                  href="/lien-he"
                  className="text-gray-300 hover:text-emerald-400 transition-colors text-base lg:text-lg"
                >
                  Liên Hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* Branches Info */}
          <div>
            <h3 className="font-bold text-lg lg:text-xl mb-5 text-white">Cơ Sở</h3>
            <ul className="space-y-4">
              <li>
                <p className="font-semibold text-white text-base lg:text-lg mb-2">Cơ Sở 1</p>
                <p className="text-gray-300 text-base lg:text-lg leading-relaxed">
                  315 Hùng Vương, TT Ngãi Giao, Châu Đức – BR-VT
                </p>
              </li>
              <li>
                <p className="font-semibold text-white text-base lg:text-lg mb-2">Cơ Sở 2</p>
                <p className="text-gray-300 text-base lg:text-lg leading-relaxed">
                  Phonghenh, Campuchia
                </p>
              </li>
            </ul>
          </div>

          {/* Main Office */}
          <div className="lg:col-span-2">
            <h3 className="font-bold text-lg lg:text-xl mb-5 text-white">Trụ Sở Chính</h3>
            <div className="flex items-start gap-3 mb-6">
              <MapPin size={22} className="text-emerald-400 flex-shrink-0 mt-1" />
              <p className="text-gray-300 text-base lg:text-lg leading-relaxed">
                385 Phan Huy Ích, Phường 14, Gò Vấp, Thành phố Hồ Chí Minh
              </p>
            </div>

            {/* Google Maps Embed - Updated with correct coordinates and removed grayscale */}
            <div className="aspect-video rounded-lg overflow-hidden border border-slate-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.4!2d106.646!3d10.863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDUxJzQ2LjgiTiAxMDbCsDM4JzQ1LjYiRQ!5e0!3m2!1svi!2s!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bản đồ văn phòng Thiên Sơn"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-6">
          {/* Copyright */}
          <div className="text-sm lg:text-base text-gray-400">
            <p>© 2025 Sân Vườn Thiên Sơn. All rights reserved.</p>
          </div>

          {/* Policies */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-sm lg:text-base">
            <Link
              href="/dieu-khoan-dich-vu"
              className="text-gray-300 hover:text-emerald-400 transition-colors"
            >
              Điều Khoản Dịch Vụ
            </Link>
            <span className="text-gray-500 hidden sm:inline">|</span>
            <Link
              href="/chinh-sach-bao-mat"
              className="text-gray-300 hover:text-emerald-400 transition-colors"
            >
              Chính Sách Bảo Mật
            </Link>
            <span className="text-gray-500 hidden sm:inline">|</span>
            <Link
              href="/chinh-sach-thanh-toan"
              className="text-gray-300 hover:text-emerald-400 transition-colors"
            >
              Chính Sách Thanh Toán
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}