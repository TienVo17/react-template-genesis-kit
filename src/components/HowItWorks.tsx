import React from 'react';

const HowItWorks = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Cách Đặt Sách</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Thực hiện theo các bước đơn giản sau để tìm và đặt cuốn sách yêu thích tiếp theo của bạn từ bộ sưu tập của chúng tôi.
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-10">
          <div className="text-center">
            <div className="w-16 h-16 bg-food-yellow rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              1
            </div>
            <h3 className="text-xl font-semibold mb-2">Tìm Kiếm</h3>
            <p className="text-gray-600">
              Khám phá bộ sưu tập sách phong phú của chúng tôi thuộc nhiều thể loại và danh mục khác nhau.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-food-teal rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              2
            </div>
            <h3 className="text-xl font-semibold mb-2">Chọn Sách</h3>
            <p className="text-gray-600">
              Thêm những cuốn sách yêu thích của bạn vào giỏ hàng để thanh toán.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-food-purple rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              3
            </div>
            <h3 className="text-xl font-semibold mb-2">Đặt Hàng</h3>
            <p className="text-gray-600">
              Hoàn tất việc mua hàng bằng cách cung cấp thông tin giao hàng và thanh toán.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-food-pink rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              4
            </div>
            <h3 className="text-xl font-semibold mb-2">Thưởng Thức</h3>
            <p className="text-gray-600">
              Nhận sách của bạn và đắm mình vào thế giới tri thức và trí tưởng tượng.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
