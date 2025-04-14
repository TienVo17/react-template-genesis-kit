import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Book, ShoppingBag, Users, Settings, LogOut } from 'lucide-react';

const AdminSidebar = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname.startsWith(path);

  const menuItems = [
    { path: '/admin/dashboard', icon: LayoutDashboard, label: 'Tổng Quan' },
    { path: '/admin/books', icon: Book, label: 'Quản Lý Sách' },
    { path: '/admin/orders', icon: ShoppingBag, label: 'Quản Lý Đơn Hàng' },
    { path: '/admin/users', icon: Users, label: 'Quản Lý Người Dùng' },
    { path: '/admin/settings', icon: Settings, label: 'Cài Đặt' },
  ];

  return (
    <aside className="w-64 bg-gray-800 text-white flex flex-col min-h-screen">
      <div className="p-6 text-center border-b border-gray-700">
        <Link to="/admin/dashboard" className="text-2xl font-semibold text-white hover:text-gray-300">
          Admin Panel
        </Link>
      </div>
      <nav className="flex-1 mt-6">
        <ul className="space-y-2 px-4">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`flex items-center px-4 py-2.5 rounded-md transition-colors duration-200 ${ 
                  isActive(item.path)
                    ? 'bg-gray-700 text-white' 
                    : 'text-gray-400 hover:bg-gray-700 hover:text-white'
                }`}
              >
                <item.icon className="w-5 h-5 mr-3" />
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4 border-t border-gray-700 mt-auto">
        <Link
          to="/" // Hoặc link đến trang logout nếu có
          className="flex items-center px-4 py-2.5 rounded-md text-gray-400 hover:bg-gray-700 hover:text-white transition-colors duration-200"
        >
          <LogOut className="w-5 h-5 mr-3" />
          <span>Đăng Xuất</span>
        </Link>
      </div>
    </aside>
  );
};

export default AdminSidebar; // Đảm bảo có default export 