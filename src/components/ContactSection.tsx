import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold mb-6">Liên Hệ Với Chúng Tôi</h2>
            <form className="space-y-6">
              <div>
                <Input placeholder="Tên của bạn" className="w-full p-3 border rounded-md" />
              </div>
              <div>
                <Input placeholder="Email của bạn" type="email" className="w-full p-3 border rounded-md" />
              </div>
              <div>
                <Input placeholder="Tiêu đề" className="w-full p-3 border rounded-md" />
              </div>
              <div>
                <Textarea 
                  placeholder="Nội dung tin nhắn" 
                  rows={4} 
                  className="w-full p-3 border rounded-md"
                />
              </div>
              <Button className="bg-food-teal hover:bg-food-teal/90 text-black px-8 py-2 rounded-md font-semibold">
                Gửi Tin Nhắn
              </Button>
            </form>
          </div>
          
          <div>
            <div className="bg-white p-8 rounded-lg shadow-md h-full">
              <h3 className="text-xl font-bold mb-4">Ghé Thăm Hiệu Sách</h3>
              <div className="space-y-4 text-gray-700">
                <p className="flex items-start">
                  <span className="mr-3 mt-1">📍</span>
                  <span>123 Đường Sách, Thị Trấn Văn Học, BK 12345</span>
                </p>
                <p className="flex items-start">
                  <span className="mr-3 mt-1">📞</span>
                  <span>+1 (555) 123-4567</span>
                </p>
                <p className="flex items-start">
                  <span className="mr-3 mt-1">✉️</span>
                  <span>lienhe@bookhaven.com</span>
                </p>
                <p className="flex items-start">
                  <span className="mr-3 mt-1">🕒</span>
                  <span>
                    Thứ Hai - Thứ Sáu: 9:00 - 20:00<br />
                    Thứ Bảy: 10:00 - 18:00<br />
                    Chủ Nhật: 12:00 - 17:00
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
