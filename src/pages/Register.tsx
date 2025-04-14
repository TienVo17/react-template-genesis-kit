import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-12">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Tạo Tài Khoản</CardTitle>
          <CardDescription>Tham gia cộng đồng yêu sách của chúng tôi!</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Tên</Label>
            <Input id="name" placeholder="Tên của bạn" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="nhap@email.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Mật khẩu</Label>
            <Input id="password" type="password" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm-password">Xác nhận mật khẩu</Label>
            <Input id="confirm-password" type="password" required />
          </div>
          <Button type="submit" className="w-full bg-food-purple hover:bg-food-purple/90">
            Đăng Ký
          </Button>
        </CardContent>
        <div className="mt-4 p-6 pt-0 text-center text-sm">
          Đã có tài khoản?
          <Link to="/login" className="font-medium text-food-purple hover:underline ml-1">
            Đăng nhập
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Register; 