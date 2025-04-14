import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Skeleton } from "@/components/ui/skeleton";
import { useCart } from '@/context/CartContext';
import { toast } from "sonner";
import { ChevronRight } from 'lucide-react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

// --- Định nghĩa kiểu dữ liệu Book ---
// (Nên định nghĩa ở một file riêng và import, ví dụ: src/types/index.ts)
interface Book {
  id: number;
  title: string;
  // author?: string; // Thêm nếu có dữ liệu tác giả
  categorySlug: string;
  price: number; // Sử dụng number cho giá
  image: string;
}

// --- Dữ liệu sách mẫu (Giả lập API) ---
const allBooks: Book[] = [
  { id: 1, title: "Nhà Giả Kim", categorySlug: "fiction", price: 120000, image: "https://cdn0.fahasa.com/media/catalog/product/i/m/image_195509_1_36793.jpg" },
  { id: 2, title: "Hoàng Tử Bé", categorySlug: "fiction", price: 150000, image: "https://cdn0.fahasa.com/media/catalog/product/i/m/image_195509_1_36793.jpg" },
  { id: 3, title: "Lược Sử Loài Người", categorySlug: "history", price: 130000, image: "https://cdn0.fahasa.com/media/catalog/product/i/m/image_195509_1_36793.jpg" },
  { id: 4, title: "Sapiens: Lược Sử Tương Lai", categorySlug: "history", price: 100000, image: "https://cdn0.fahasa.com/media/catalog/product/i/m/image_195509_1_36793.jpg" },
  { id: 5, title: "Đắc Nhân Tâm", categorySlug: "self-help", price: 180000, image: "https://cdn0.fahasa.com/media/catalog/product/i/m/image_195509_1_36793.jpg" },
  { id: 6, title: "Nghĩ Giàu và Làm Giàu", categorySlug: "business", price: 95000, image: "https://cdn0.fahasa.com/media/catalog/product/i/m/image_195509_1_36793.jpg" },
  { id: 7, title: "Muôn Kiếp Nhân Sinh", categorySlug: "education", price: 110000, image: "https://cdn0.fahasa.com/media/catalog/product/m/u/muon-kiep-nhan-sinh-tap-1.jpg" },
  { id: 8, title: "Cây Cam Ngọt Của Tôi", categorySlug: "fiction", price: 140000, image: "https://cdn0.fahasa.com/media/catalog/product/i/m/image_197132.jpg" },
];

// --- Hàm giả lập gọi API ---
const fetchBooksByCategory = async (slug: string | undefined): Promise<Book[]> => {
  console.log(`Fetching books for category: ${slug}`);
  // Giả lập độ trễ mạng
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Giả lập lỗi ngẫu nhiên (20% khả năng lỗi)
  // if (Math.random() < 0.2) {
  //   throw new Error("Không thể tải danh sách sách. Vui lòng thử lại.");
  // }

  if (!slug) {
    return [];
  }
  return allBooks.filter(book => book.categorySlug === slug);
};


// --- Danh sách thể loại (để lấy tên) ---
const categories = [
    { name: "Tiểu Thuyết", slug: "fiction" },
    { name: "Khoa Học Viễn Tưởng", slug: "sci-fi" },
    { name: "Lịch Sử", slug: "history" },
    { name: "Kinh Doanh", slug: "business" },
    { name: "Tự Lực", slug: "self-help" },
    { name: "Giáo Dục", slug: "education" },
];

const getCategoryName = (slug: string | undefined): string => {
  const category = categories.find(cat => cat.slug === slug);
  return category ? category.name : "Thể loại không xác định";
};

// --- Component Skeleton Card ---
const BookCardSkeleton = () => (
  <div className="border rounded-lg overflow-hidden shadow-lg">
    <Skeleton className="w-full h-48" />
    <div className="p-4 space-y-2">
      <Skeleton className="h-5 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
      <Skeleton className="h-10 w-full mt-2" />
    </div>
  </div>
);

// --- Component Chính ---
const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const categoryName = getCategoryName(slug);
  const { addToCart } = useCart();

  // Sử dụng useQuery để fetch dữ liệu
  const { data: booksInCategory, isLoading, isError, error } = useQuery<Book[], Error>({
    queryKey: ['books', slug], // Khóa query phụ thuộc vào slug
    queryFn: () => fetchBooksByCategory(slug),
    // enabled: !!slug, // Chỉ fetch khi có slug (mặc định là true nếu queryKey thay đổi)
  });

  // Hàm xử lý thêm vào giỏ
  const handleAddToCart = (book: Book) => {
    // CartContext mong đợi price là string, cần chuyển đổi
    const bookToAdd = {
        ...book,
        price: String(book.price), // Chuyển giá thành string
        // Giả sử CartContext không cần category và author trong hàm addToCart
        // Nếu cần, bạn phải đảm bảo object book có đủ các trường đó
        category: categories.find(c => c.slug === book.categorySlug)?.name || 'Unknown', // Thêm category name
        author: 'Unknown Author' // Thêm author giả
    };
    addToCart(bookToAdd);
    toast.success(`"${book.title}" đã được thêm vào giỏ hàng!`);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8 min-h-screen">
        {/* Breadcrumbs */}
        <nav className="mb-6 text-sm text-gray-500 flex items-center space-x-2">
          <Link to="/" className="hover:text-food-purple transition-colors">Trang Chủ</Link>
          <ChevronRight className="h-4 w-4" />
          <span>Thể loại</span>
          <ChevronRight className="h-4 w-4" />
          <span className="font-medium text-gray-700">{categoryName}</span>
        </nav>

        {/* Category Title */}
        <h1 className="text-3xl font-bold mb-8 border-b pb-4">{categoryName}</h1>

        {isLoading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, index) => <BookCardSkeleton key={index} />)}
          </div>
        )}

        {isError && (
          <div className="text-center text-red-600 bg-red-100 p-4 rounded-md">
            <p>Đã xảy ra lỗi: {error.message}</p>
          </div>
        )}

        {!isLoading && !isError && booksInCategory && booksInCategory.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {booksInCategory.map((book) => (
              <div key={book.id} className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                <img
                  src={book.image || "/placeholder-book.jpg"}
                  alt={book.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 flex flex-col flex-grow">
                  <h2 className="text-lg font-semibold mb-2 flex-grow">{book.title}</h2>
                  <p className="text-gray-700 font-medium mb-4">{book.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</p>
                  <button
                    onClick={() => handleAddToCart(book)}
                    className="mt-auto w-full bg-food-purple text-white py-2 px-4 rounded hover:bg-food-purple-dark transition-colors focus:outline-none focus:ring-2 focus:ring-food-purple focus:ring-opacity-50"
                  >
                    Thêm vào giỏ
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {!isLoading && !isError && (!booksInCategory || booksInCategory.length === 0) && (
          <p className="text-center text-gray-500">Không tìm thấy sách nào trong thể loại này.</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default CategoryPage; 