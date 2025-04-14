import React from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PlusCircle, Search } from 'lucide-react';

// Dữ liệu sách mẫu
const sampleBooks = [
  { id: 1, title: 'The Art of Reading', author: 'Sarah Johnson', price: '$24.99', stock: 50 },
  { id: 2, title: 'Mystery of the Ancient Library', author: 'Michael Smith', price: '$19.99', stock: 35 },
  { id: 3, title: 'Programming Fundamentals', author: 'David Wilson', price: '$34.99', stock: 100 },
  { id: 4, title: 'The History of Literature', author: 'Emily Adams', price: '$29.99', stock: 20 },
];

const AdminBooks = () => {
  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Quản Lý Sách</h1>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" /> Thêm Sách Mới
        </Button>
      </div>

      {/* Thanh tìm kiếm */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <Input placeholder="Tìm kiếm sách..." className="pl-10" />
        </div>
      </div>

      {/* Bảng dữ liệu sách */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Tiêu Đề</TableHead>
              <TableHead>Tác Giả</TableHead>
              <TableHead>Giá</TableHead>
              <TableHead>Tồn Kho</TableHead>
              <TableHead>Hành Động</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sampleBooks.map((book) => (
              <TableRow key={book.id}>
                <TableCell>{book.id}</TableCell>
                <TableCell className="font-medium">{book.title}</TableCell>
                <TableCell>{book.author}</TableCell>
                <TableCell>{book.price}</TableCell>
                <TableCell>{book.stock}</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm" className="mr-2">Sửa</Button>
                  <Button variant="destructive" size="sm">Xóa</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </AdminLayout>
  );
};

export default AdminBooks; 