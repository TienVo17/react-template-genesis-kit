
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const bookData = [
  {
    id: 1,
    title: "The Art of Reading",
    author: "Sarah Johnson",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "Self-Help",
    price: "$24.99",
  },
  {
    id: 2,
    title: "Mystery of the Ancient Library",
    author: "Michael Smith",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "Fiction",
    price: "$19.99",
  },
  {
    id: 3,
    title: "Programming Fundamentals",
    author: "David Wilson",
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "Education",
    price: "$34.99",
  },
  {
    id: 4,
    title: "The History of Literature",
    author: "Emily Adams",
    image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "History",
    price: "$29.99",
  },
  {
    id: 5,
    title: "Modern Poetry Collection",
    author: "Robert Evans",
    image: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "Poetry",
    price: "$18.99",
  },
  {
    id: 6,
    title: "Science and Discovery",
    author: "Jessica Thompson",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "Science",
    price: "$27.99",
  },
];

const BookList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {bookData.map((book) => (
        <Card key={book.id} className="group">
          <CardHeader className="p-0 overflow-hidden rounded-t-lg">
            <div className="overflow-hidden h-64">
              <img 
                src={book.image} 
                alt={book.title} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </CardHeader>
          <CardContent className="p-4">
            <CardTitle className="text-xl font-semibold mb-1">{book.title}</CardTitle>
            <CardDescription className="text-gray-600 mb-2">by {book.author}</CardDescription>
            <div className="flex justify-between items-center">
              <span className="text-gray-700">{book.category}</span>
              <span className="font-bold text-food-purple">{book.price}</span>
            </div>
          </CardContent>
          <CardFooter className="border-t p-4">
            <Button className="w-full bg-food-purple hover:bg-food-purple/90">
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default BookList;
