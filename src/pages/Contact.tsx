import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-16 md:py-24 mt-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-center mb-8">Liên Hệ Chúng Tôi</h1>
          <p className="text-lg text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Có câu hỏi về sách, đơn hàng, hoặc chỉ muốn gửi lời chào? Chúng tôi rất muốn nghe từ bạn!
          </p>
          
          <div className="mb-16">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835253576489!2d144.95372995775788!3d-37.81725037199335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ5JzAyLjEiUyAxNDTCsDU3JzE5LjAiRQ!5e0!3m2!1sen!2sau!4v1634789695067!5m2!1sen!2sau" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              className="rounded-lg shadow-md"
              title="Bản đồ vị trí cửa hàng"
            ></iframe>
          </div>
          
          <ContactSection />
          
          <section className="pt-16">
            <h2 className="text-3xl font-bold text-center mb-10">Các Câu Hỏi Thường Gặp</h2>
            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Giờ mở cửa của cửa hàng là gì?</h3>
                <p className="text-gray-600">
                  Cửa hàng của chúng tôi mở cửa từ Thứ Hai đến Thứ Sáu, 9:00 - 20:00, Thứ Bảy từ 10:00 - 18:00, và Chủ Nhật từ 12:00 - 17:00.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Bạn có giao hàng quốc tế không?</h3>
                <p className="text-gray-600">
                  Có, chúng tôi giao hàng đến hầu hết các quốc gia trên thế giới. Phí vận chuyển quốc tế thay đổi tùy thuộc vào điểm đến 
                  và trọng lượng gói hàng. Vui lòng liên hệ với chúng tôi để biết báo giá vận chuyển cụ thể.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Tôi có thể trả lại hoặc đổi sách không?</h3>
                <p className="text-gray-600">
                  Chúng tôi chấp nhận đổi trả trong vòng 30 ngày kể từ ngày mua kèm theo hóa đơn. Sách phải ở trong tình trạng ban đầu. 
                  Đối với đơn hàng trực tuyến, vui lòng liên hệ với chúng tôi để bắt đầu quy trình đổi trả.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Bạn có cung cấp dịch vụ gói quà không?</h3>
                <p className="text-gray-600">
                  Có, chúng tôi cung cấp dịch vụ gói quà miễn phí cho tất cả các đơn hàng. Bạn có thể chọn tùy chọn này trong quá trình thanh toán 
                  cho đơn hàng trực tuyến hoặc yêu cầu tại cửa hàng.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
