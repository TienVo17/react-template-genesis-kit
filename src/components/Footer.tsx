import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-food-teal text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-4">Book Haven</h3>
            <p className="mb-2 text-sm">123 Đường Sách</p>
            <p className="mb-2 text-sm">Thị Trấn Văn Học, BK 12345</p>
            <p className="mb-2 text-sm">Việt Nam</p>
            <p className="mb-2 text-sm">lienhe@bookhaven.com</p>
            <p className="text-sm">+1 (555) 123-4567</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Khám Phá</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:underline">Trang Chủ</Link></li>
              <li><Link to="/about" className="hover:underline">Giới Thiệu</Link></li>
              <li><Link to="/contact" className="hover:underline">Liên Hệ</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Hỗ Trợ</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Câu Hỏi Thường Gặp</a></li>
              <li><a href="#" className="hover:underline">Chính Sách Giao Hàng</a></li>
              <li><a href="#" className="hover:underline">Đổi Trả & Hoàn Tiền</a></li>
              <li><a href="#" className="hover:underline">Chính Sách Bảo Mật</a></li>
              <li><a href="#" className="hover:underline">Điều Khoản Dịch Vụ</a></li>
            </ul>
          </div>
          
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center text-food-teal font-bold">
                B
              </div>
              <span className="font-semibold text-white">Book Haven</span>
            </div>
            
            <p className="mb-4 text-sm">Đăng ký nhận bản tin để cập nhật về sách mới và ưu đãi đặc biệt!</p>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-10 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()}BookStore. Đã đăng ký Bản quyền.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
