import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutPage from "./pages/AboutPage";
import MoodboardPage from "./pages/MoodboardPage";
import BlogHub from "./pages/BlogHub";
import BlogPost from "./pages/BlogPost";
import ShopHub from "./pages/ShopHub";
import ProductDetails from "./pages/ProductDetails/Product1";
import TravelHub from "./pages/TravelHub";
import TravelPost from "./pages/TravelPost";
import ContactPage from "./pages/ContactPage";
import FAQPage from "./pages/FAQPage";
import Product1 from "./pages/ProductDetails/Product1";
import Product2 from "./pages/ProductDetails/Product2";
import Product3 from "./pages/ProductDetails/Product3";
import Product4 from "./pages/ProductDetails/Product4";
import Product5 from "./pages/ProductDetails/Product5";
import Product6 from "./pages/ProductDetails/Product6";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/moodboard" element={<MoodboardPage />} />
          <Route path="/blog" element={<BlogHub />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/shop" element={<ShopHub />} />
          <Route path="/shop/:id" element={<ProductDetails />} />
          <Route path="/travel" element={<TravelHub />} />
          <Route path="/travel/:id" element={<TravelPost />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/ProductDetails/Product1" element={<Product1 />} />
          <Route path="/ProductDetails/Product2" element={<Product2 />} />
          <Route path="/ProductDetails/Product3" element={<Product3 />} />
          <Route path="/ProductDetails/Product4" element={<Product4 />} />
          <Route path="/ProductDetails/Product5" element={<Product5 />} />
          <Route path="/ProductDetails/Product6" element={<Product6 />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
