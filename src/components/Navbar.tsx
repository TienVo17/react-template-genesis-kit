import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, ChevronDown } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const categories = [
  { name: "Tiểu Thuyết", slug: "fiction" },
  { name: "Khoa Học Viễn Tưởng", slug: "sci-fi" },
  { name: "Lịch Sử", slug: "history" },
  { name: "Kinh Doanh", slug: "business" },
  { name: "Tự Lực", slug: "self-help" },
  { name: "Giáo Dục", slug: "education" },
];

const Navbar = () => {
  const { getCartItemCount } = useCart();
  const itemCount = getCartItemCount();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white py-4 px-6 md:px-12 flex items-center justify-between border-b">
      <div className="flex items-center gap-2">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-full bg-food-yellow flex items-center justify-center text-black font-bold">
            B
          </div>
          <span className="font-semibold">Book Store</span>
        </Link>
      </div>
      
      <div className="hidden md:flex items-center gap-8">
        <Link to="/" className="hover:text-food-purple transition-colors font-medium">
          Trang Chủ
        </Link>
        
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-1 hover:text-food-purple transition-colors font-medium cursor-pointer outline-none">
            Thể Loại <ChevronDown className="h-4 w-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-56 p-1">
            {categories.map((category) => (
              <DropdownMenuItem key={category.slug} asChild className="cursor-pointer focus:bg-gray-100">
                <Link to={`/category/${category.slug}`} className="block px-3 py-1.5 text-sm">
                  {category.name}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <Link to="/about" className="hover:text-food-purple transition-colors font-medium">
          Giới Thiệu
        </Link>
        <Link to="/contact" className="hover:text-food-purple transition-colors font-medium">
          Liên Hệ
        </Link>
      </div>
      
      <div className="flex items-center gap-4">
        <Link to="/login">
          <Button variant="ghost" size="icon">
            <User className="h-6 w-6" />
          </Button>
        </Link>
        <Link to="/cart">
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-6 w-6" />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Button>
        </Link>
        <div className="block md:hidden">
          <button className="text-2xl">☰</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
