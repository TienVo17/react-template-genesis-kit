import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Đăng Nhập</CardTitle>
          <CardDescription>Chào mừng bạn trở lại! Vui lòng nhập thông tin.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="nhap@email.com" required />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Mật khẩu</Label>
              <Link to="#" className="text-sm text-food-purple hover:underline">
                Quên mật khẩu?
              </Link>
            </div>
            <Input id="password" type="password" required />
          </div>
          <Button type="submit" className="w-full bg-food-purple hover:bg-food-purple/90">
            Đăng Nhập
          </Button>
        </CardContent>
        <div className="mt-4 p-6 pt-0 text-center text-sm">
          Chưa có tài khoản?
          <Link to="/register" className="font-medium text-food-purple hover:underline ml-1">
            Đăng ký ngay
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Login; 