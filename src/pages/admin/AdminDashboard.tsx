import React from 'react';
import AdminLayout from '@/components/admin/AdminLayout';

const AdminDashboard = () => {
  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-6">Bảng Điều Khiển</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Các thẻ thống kê mẫu */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-600 mb-2">Tổng Số Sách</h2>
          <p className="text-3xl font-bold">1,234</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-600 mb-2">Đơn Hàng Mới</h2>
          <p className="text-3xl font-bold">56</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-600 mb-2">Người Dùng Mới</h2>
          <p className="text-3xl font-bold">12</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-600 mb-2">Doanh Thu (Tháng)</h2>
          <p className="text-3xl font-bold">$5,678</p>
        </div>
      </div>
      {/* Thêm các biểu đồ hoặc bảng dữ liệu khác nếu cần */}
    </AdminLayout>
  );
};

export default AdminDashboard; 