export interface Book {
  id: number;
  title: string;
  author: string;
  image: string;
  category: string;
  price: string;
  description: string; // Thêm mô tả
}

export const bookData: Book[] = [
  {
    id: 1,
    title: "The Art of Reading",
    author: "Sarah Johnson",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "Self-Help",
    price: "$14900213",
    description: "Khám phá niềm vui và sức mạnh của việc đọc sách với hướng dẫn sâu sắc này. Tìm hiểu các kỹ thuật để nâng cao khả năng hiểu, tốc độ và tư duy phản biện của bạn.",
  },
  {
    id: 2,
    title: "Mystery of the Ancient Library",
    author: "Michael Smith",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "Fiction",
    price: "$19.99",
    description: "Một cuộc phiêu lưu ly kỳ xuyên qua các hành lang bụi bặm của một thư viện bị lãng quên từ lâu, nơi những bí mật cổ xưa và những mối nguy hiểm tiềm ẩn đang chờ đợi.",
  },
  {
    id: 3,
    title: "Programming Fundamentals",
    author: "David Wilson",
    image:  "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "Education",
    price: "$34.99",
    description: "Hướng dẫn toàn diện về các nguyên tắc cơ bản của lập trình. Hoàn hảo cho người mới bắt đầu và những người muốn củng cố nền tảng kiến thức của mình.",
  },
  {
    id: 4,
    title: "The History of Literature",
    author: "Emily Adams",
    image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "History",
    price: "$29.99",
    description: "Một cuộc hành trình hấp dẫn qua lịch sử văn học, khám phá các phong trào, tác giả và tác phẩm chính đã định hình nên thế giới văn chương.",
  },
  {
    id: 5,
    title: "Modern Poetry Collection",
    author: "Robert Evans",
    image: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "Poetry",
    price: "$18.99",
    description: "Tuyển tập các bài thơ đương đại đầy cảm hứng khám phá các chủ đề về tình yêu, mất mát và trải nghiệm của con người.",
  },
  {
    id: 6,
    title: "Science and Discovery",
    author: "Jessica Thompson",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "Science",
    price: "$27.99",
    description: "Đi sâu vào thế giới hấp dẫn của khoa học và khám phá những đột phá và đổi mới mới nhất đang định hình tương lai của chúng ta.",
  },
]; 