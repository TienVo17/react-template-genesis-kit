import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { Link } from 'react-router-dom';
import { bookData, Book } from "@/data/books";

const BookList = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>, book: Book) => {
    e.preventDefault();
    addToCart(book);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
      {bookData.map((book) => (
        <Link key={book.id} to={`/books/${book.id}`} className="group block">
          <Card className="flex flex-col h-full overflow-hidden transition-shadow duration-300 hover:shadow-lg">
            <CardHeader className="p-0 overflow-hidden">
              <div className="aspect-w-3 aspect-h-4 bg-gray-100">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </CardHeader>
            <CardContent className="p-4 flex-grow">
              <CardTitle className="text-lg font-semibold mb-1 leading-tight line-clamp-2">{book.title}</CardTitle>
              <CardDescription className="text-sm text-gray-600 mb-2">Tác giả: {book.author}</CardDescription>
              <div className="flex justify-between items-center mt-2">
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded">{book.category}</span>
                <span className="font-bold text-food-purple text-base">{(typeof book.price === 'number' ? book.price : parseFloat(book.price.replace(/[^\d.-]/g, ''))).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
              </div>
            </CardContent>
            <CardFooter className="border-t p-3 mt-auto">
              <Button
                className="w-full bg-food-purple hover:bg-food-purple/90 text-sm py-2 h-auto"
                onClick={(e) => handleAddToCart(e, book)}
              >
                Thêm vào giỏ
              </Button>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default BookList;
