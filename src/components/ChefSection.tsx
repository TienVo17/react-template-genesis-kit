import React from 'react';

const ChefSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Tác Giả Nổi Bật</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Gặp gỡ một số bộ óc xuất sắc đằng sau những cuốn sách bán chạy nhất của chúng tôi.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Tác giả 1"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Sarah Johnson</h3>
            <p className="text-food-purple font-medium mb-3">Tác giả Tiểu thuyết</p>
            <p className="text-gray-600 mb-4">
              Tác giả đoạt giải thưởng với hơn 15 tiểu thuyết bán chạy khám phá các mối liên hệ của con người.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Tác giả 2"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Michael Smith</h3>
            <p className="text-food-purple font-medium mb-3">Nhà văn Trinh thám</p>
            <p className="text-gray-600 mb-4">
              Cựu thám tử trở thành nhà văn, tạo ra những bí ẩn ly kỳ dựa trên các vụ án có thật.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
              <img 
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Tác giả 3"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Emily Adams</h3>
            <p className="text-food-purple font-medium mb-3">Tác giả Khoa học</p>
            <p className="text-gray-600 mb-4">
              Giáo sư và nhà truyền thông khoa học giúp mọi người tiếp cận các khái niệm phức tạp.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChefSection;
