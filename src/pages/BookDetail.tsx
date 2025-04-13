import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { bookData, Book } from '@/data/books';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NotFound from './NotFound'; // Import NotFound page
import { ArrowLeft } from 'lucide-react';

const BookDetail = () => {
  const { bookId } = useParams<{ bookId: string }>();
  const { addToCart } = useCart();

  // Tìm sách dựa trên bookId từ URL
  const book = bookData.find(b => b.id === parseInt(bookId || '', 10));

  // Nếu không tìm thấy sách, hiển thị trang NotFound
  if (!book) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto py-12 px-4 mt-16"> {/* Thêm mt-16 để không bị Navbar che */}
        <div className="mb-6">
          <Link to="/" className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Quay lại Trang Chủ
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Phần hình ảnh */}
          <div className="overflow-hidden rounded-lg bg-gray-100 aspect-[3/4]">
            <img
              src={book.image}
              alt={book.title}
              className="w-full h-full object-cover shadow-md"
            />
          </div>

          {/* Phần thông tin sách */}
          <div>
            <span className="inline-block bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1 rounded-full mb-3">
              {book.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{book.title}</h1>
            <p className="text-lg text-gray-700 mb-4">Tác giả: {book.author}</p>
            <p className="text-2xl font-bold text-food-purple mb-6">{book.price}</p>

            <h2 className="text-xl font-semibold mb-2">Mô tả</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">{book.description}</p>

            <Button
              className="w-full md:w-auto bg-food-purple hover:bg-food-purple/90 px-8 py-3 text-lg"
              onClick={() => addToCart(book)}
            >
              Thêm vào giỏ
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BookDetail; 