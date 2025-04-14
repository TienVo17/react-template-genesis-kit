import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import BookDetail from "./pages/BookDetail";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import CategoryPage from "./pages/CategoryPage";

// Import Admin pages
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminBooks from "./pages/admin/AdminBooks";
// Thêm import cho các trang admin khác khi tạo (AdminOrders, AdminUsers, etc.)

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          {/* Bỏ các route không dùng */}
          {/* <Route path="/menu" element={<Menu />} /> */}
          {/* <Route path="/blog" element={<Blog />} /> */}
          {/* <Route path="/store" element={<Store />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/books/:bookId" element={<BookDetail />} />
          <Route path="/category/:slug" element={<CategoryPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Admin Routes */}
          {/* Redirect /admin to /admin/dashboard */}
          <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} /> 
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/books" element={<AdminBooks />} />
          {/* Thêm route cho các trang admin khác ở đây */}
          {/* <Route path="/admin/orders" element={<AdminOrders />} /> */}
          {/* <Route path="/admin/users" element={<AdminUsers />} /> */}
          {/* <Route path="/admin/settings" element={<AdminSettings />} /> */}

          {/* Not Found Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
