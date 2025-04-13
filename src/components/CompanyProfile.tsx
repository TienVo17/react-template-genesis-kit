import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const CompanyProfile = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Nội thất hiệu sách"
              className="rounded-lg shadow-lg"
            />
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6">Về Book Haven</h2>
            <p className="text-gray-600 mb-4">
              Được thành lập vào năm 2010, Book Haven đã phát triển từ một hiệu sách nhỏ ở góc phố thành một trong những hiệu sách được yêu thích nhất 
              trong nước. Sứ mệnh của chúng tôi là kết nối độc giả với những cuốn sách truyền cảm hứng, giáo dục và giải trí.
            </p>
            <p className="text-gray-600 mb-6">
              Chúng tôi cẩn thận lựa chọn bộ sưu tập của mình để bao gồm các tiếng nói và quan điểm đa dạng, đảm bảo rằng mọi độc giả 
              có thể tìm thấy những cuốn sách phù hợp với trải nghiệm và sở thích của họ. Đội ngũ nhân viên am hiểu của chúng tôi luôn sẵn sàng 
              giúp bạn khám phá cuốn sách yêu thích tiếp theo.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="font-bold text-food-purple text-2xl mb-2">20K+</h3>
                <p className="text-gray-600">Đầu Sách</p>
              </div>
              <div>
                <h3 className="font-bold text-food-purple text-2xl mb-2">50+</h3>
                <p className="text-gray-600">Thể Loại</p>
              </div>
              <div>
                <h3 className="font-bold text-food-purple text-2xl mb-2">10+</h3>
                <p className="text-gray-600">Năm Phục Vụ</p>
              </div>
              <div>
                <h3 className="font-bold text-food-purple text-2xl mb-2">100K+</h3>
                <p className="text-gray-600">Độc Giả Hài Lòng</p>
              </div>
            </div>
            
            <Link to="/about">
              <Button className="bg-food-purple hover:bg-food-purple/90">
                Tìm Hiểu Thêm
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyProfile;
