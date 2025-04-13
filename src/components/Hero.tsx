import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative overflow-hidden pb-20 pt-16">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-2/3 h-3/4 yellow-blob -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 teal-blob -z-10"></div>
      
      <div className="container mx-auto px-6 pt-10 md:pt-20 grid md:grid-cols-2 gap-10 items-center">
        <div className="max-w-xl">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Khám Phá Thế Giới Tri Thức Qua Từng Trang Sách
          </h1>
          <p className="text-gray-600 mb-8">
            Khám phá bộ sưu tập sách phong phú của chúng tôi thuộc nhiều thể loại khác nhau. Từ tiểu thuyết đến sách phi hư cấu, 
            sách học thuật đến sách giải trí, chúng tôi có mọi thứ cho mọi người yêu sách.
          </p>
          <Button className="bg-food-teal hover:bg-food-teal/90 text-black font-medium px-8 py-2 rounded-md">
            Xem Sách Ngay
          </Button>
        </div>
        
        <div className="flex justify-center relative">
          <img 
            src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
            alt="Trưng bày sách"
            className="max-w-full hidden md:block rounded-lg shadow-lg"
          />
          {/* Các element trang trí */}
          {/* <div className="absolute -right-6 top-1/4 squiggly-line"></div> */}
          {/* <div className="absolute -left-6 bottom-1/4 squiggly-line"></div> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
