import React, { ReactNode } from 'react';
import AdminSidebar from './AdminSidebar'; // Component Sidebar sẽ tạo ở bước sau

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar />
      <div className="flex-1 flex flex-col">
        {/* Có thể thêm Header cho Admin ở đây nếu cần */}
        <main className="flex-1 p-6 md:p-8">
          {children} {/* Nội dung của từng trang admin sẽ được hiển thị ở đây */}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout; 