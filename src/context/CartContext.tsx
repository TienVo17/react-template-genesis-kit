import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';

interface Book {
  id: number;
  title: string;
  author: string;
  image: string;
  category: string;
  price: string; // Giữ dạng string để đơn giản, có thể chuyển thành number nếu cần tính toán phức tạp
}

interface CartItem extends Book {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (book: Book) => void;
  updateQuantity: (bookId: number, quantity: number) => void;
  removeFromCart: (bookId: number) => void;
  getCartTotal: () => number;
  getCartItemCount: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

// Hàm trợ giúp để lấy giá trị số từ chuỗi giá tiền (vd: "$24.99" -> 24.99)
const parsePrice = (priceString: string): number => {
  return parseFloat(priceString.replace(/[^\d.-]/g, ''));
};

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    // Load giỏ hàng từ localStorage khi khởi tạo
    try {
      const localData = localStorage.getItem('cartItems');
      return localData ? JSON.parse(localData) : [];
    } catch (error) {
      console.error("Could not parse cart items from localStorage", error);
      return [];
    }
  });

  // Lưu giỏ hàng vào localStorage mỗi khi thay đổi
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (book: Book) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === book.id);
      if (existingItem) {
        // Nếu sách đã có, tăng số lượng
        return prevItems.map(item =>
          item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // Nếu sách chưa có, thêm vào giỏ với số lượng là 1
        return [...prevItems, { ...book, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (bookId: number, quantity: number) => {
    setCartItems(prevItems => {
      if (quantity <= 0) {
        // Nếu số lượng <= 0, xóa sản phẩm
        return prevItems.filter(item => item.id !== bookId);
      } else {
        // Cập nhật số lượng
        return prevItems.map(item =>
          item.id === bookId ? { ...item, quantity: quantity } : item
        );
      }
    });
  };

  const removeFromCart = (bookId: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== bookId));
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => {
        const price = parsePrice(item.price);
        return total + price * item.quantity;
    }, 0);
  };

   const getCartItemCount = () => {
     return cartItems.reduce((count, item) => count + item.quantity, 0);
   };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateQuantity, removeFromCart, getCartTotal, getCartItemCount }}>
      {children}
    </CartContext.Provider>
  );
}; 