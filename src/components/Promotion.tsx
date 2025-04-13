import React from 'react';
import { Button } from "@/components/ui/button";

const Promotion = () => {
  return (
    <section className="py-16 bg-food-purple text-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Tham Gia Câu Lạc Bộ Sách</h2>
            <p className="mb-6">
              Trở thành thành viên Câu lạc bộ Sách của chúng tôi và tận hưởng những lợi ích độc quyền:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <svg className="mr-2 mt-1 w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Giảm giá 10% cho tất cả các đơn hàng</span>
              </li>
              <li className="flex items-start">
                <svg className="mr-2 mt-1 w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Tiếp cận sớm các sách mới phát hành</span>
              </li>
              <li className="flex items-start">
                <svg className="mr-2 mt-1 w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Gợi ý sách hàng tháng</span>
              </li>
              <li className="flex items-start">
                <svg className="mr-2 mt-1 w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Lời mời tham gia các buổi gặp gỡ tác giả</span>
              </li>
            </ul>
            <Button className="bg-white text-food-purple hover:bg-gray-100 font-semibold">
              Tham Gia Ngay
            </Button>
          </div>
          
          <div className="flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Câu lạc bộ đọc sách"
              className="rounded-lg shadow-lg max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotion;
