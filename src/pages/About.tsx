import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-16 md:py-24 mt-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-center mb-12">Về Book Haven</h1>
          
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-2xl font-semibold mb-4">Câu Chuyện Của Chúng Tôi</h2>
                <p className="text-gray-600 mb-4">
                  Book Haven được thành lập vào năm 2010 bởi Jane và John Smith, hai người yêu sách suốt đời với niềm đam mê chia sẻ 
                  niềm vui đọc sách với người khác. Bắt đầu từ một hiệu sách nhỏ ở góc phố, nơi đây đã phát triển thành một điểm đến cộng đồng được yêu thích 
                  dành cho độc giả mọi lứa tuổi và sở thích.
                </p>
                <p className="text-gray-600 mb-4">
                  Sứ mệnh của chúng tôi rất đơn giản: kết nối độc giả với những cuốn sách truyền cảm hứng, giáo dục và giải trí. Chúng tôi tin 
                  rằng sách có sức mạnh thay đổi cuộc sống, mở mang đầu óc và xây dựng cầu nối giữa con người và các nền văn hóa.
                </p>
                <p className="text-gray-600">
                  Trong những năm qua, chúng tôi đã mở rộng bộ sưu tập của mình lên hơn 20.000 đầu sách thuộc hơn 50 thể loại, 
                  đảm bảo rằng mọi độc giả đều có thể tìm thấy thứ gì đó phù hợp với mình. Đội ngũ nhân viên am hiểu và đầy nhiệt huyết 
                  của chúng tôi luôn sẵn sàng giúp bạn khám phá cuốn sách yêu thích tiếp theo.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <img 
                  src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Nội thất hiệu sách"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </section>
          
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-center mb-8">Giá Trị Cốt Lõi</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-food-teal rounded-full flex items-center justify-center text-white mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Đa Dạng</h3>
                <p className="text-gray-600 text-sm">
                  Chúng tôi cam kết cung cấp sách từ các tiếng nói và quan điểm đa dạng, đảm bảo sự đại diện trên các kệ sách của chúng tôi.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-food-yellow rounded-full flex items-center justify-center text-black mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Cộng Đồng</h3>
                <p className="text-gray-600 text-sm">
                  Chúng tôi tin tưởng vào việc nuôi dưỡng một cộng đồng độc giả thông qua các sự kiện, câu lạc bộ sách và một bầu không khí chào đón.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-food-purple rounded-full flex items-center justify-center text-white mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Tri Thức</h3>
                <p className="text-gray-600 text-sm">
                  Chúng tôi tận tâm thúc đẩy việc đọc viết và tình yêu học hỏi cho độc giả ở mọi lứa tuổi và hoàn cảnh.
                </p>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-center mb-8">Gặp Gỡ Đội Ngũ</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                    alt="Thành viên đội ngũ"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold mb-1">Jane Smith</h3>
                <p className="text-gray-600 text-sm">Đồng Sáng Lập</p>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                    alt="Thành viên đội ngũ"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold mb-1">John Smith</h3>
                <p className="text-gray-600 text-sm">Đồng Sáng Lập</p>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                    alt="Thành viên đội ngũ"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold mb-1">Sarah Johnson</h3>
                <p className="text-gray-600 text-sm">Trưởng Thư Viện</p>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                    alt="Thành viên đội ngũ"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold mb-1">Michael Brown</h3>
                <p className="text-gray-600 text-sm">Điều Phối Sự Kiện</p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
