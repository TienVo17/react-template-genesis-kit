import React from 'react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Trash2 } from 'lucide-react';
import Navbar from '@/components/Navbar'; // Import Navbar
import Footer from '@/components/Footer'; // Import Footer

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, getCartTotal } = useCart();

  const handleQuantityChange = (bookId: number, newQuantity: string) => {
    const quantity = parseInt(newQuantity, 10);
    if (!isNaN(quantity)) {
      updateQuantity(bookId, quantity);
    }
  };

  // Hàm trợ giúp để lấy giá trị số từ chuỗi giá tiền (vd: "$24.99" -> 24.99)
  const parsePrice = (priceString: string): number => {
    return parseFloat(priceString.replace(/[^\d.-]/g, ''));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Giỏ Hàng Của Bạn</h1>
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-600">Giỏ hàng của bạn đang trống.</p>
        ) : (
          <div className="space-y-6">
            {cartItems.map((item) => {
              const itemPrice = parsePrice(item.price);
              const itemTotal = itemPrice * item.quantity;
              return (
                <div key={item.id} className="flex items-center border-b pb-4 last:border-b-0">
                  <img src={item.image} alt={item.title} className="w-20 h-28 object-cover rounded mr-4" />
                  <div className="flex-grow">
                    <h2 className="text-lg font-semibold">{item.title}</h2>
                    <p className="text-sm text-gray-500">Tác giả: {item.author}</p>
                    <p className="text-sm font-medium text-food-purple">{item.price}</p>
                  </div>
                  <div className="flex items-center space-x-3 w-32 justify-end">
                    <Input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                      className="w-16 h-9 text-center"
                    />
                  </div>
                   <div className="w-24 text-right font-semibold">
                     {`$${itemTotal.toFixed(2)}`}
                   </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeFromCart(item.id)}
                    className="ml-4 text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="h-5 w-5" />
                  </Button>
                </div>
              );
            })}
            <div className="text-right mt-8">
              <h2 className="text-2xl font-bold">
                Tổng cộng: ${getCartTotal().toFixed(2)}
              </h2>
              <Button className="mt-4 bg-food-teal hover:bg-food-teal/90 text-black">
                Tiến hành thanh toán
              </Button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Cart; 