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
import ShopHub from "./pages/ShopHub";
import ProductDetails from "./pages/ProductDetails/Product1";
import TravelHub from "./pages/TravelHub";
import ContactPage from "./pages/ContactPage";
import FAQPage from "./pages/FAQPage";
import Product1 from "./pages/ProductDetails/Product1";
import Product2 from "./pages/ProductDetails/Product2";
import Product3 from "./pages/ProductDetails/Product3";
import Product4 from "./pages/ProductDetails/Product4";
import Product5 from "./pages/ProductDetails/Product5";
import Product6 from "./pages/ProductDetails/Product6";

import TravelPost1 from "./pages/TravelPost/TravelPost1";
import TravelPost2 from "./pages/TravelPost/TravelPost2";
import TravelPost3 from "./pages/TravelPost/TravelPost3";
import TravelPost4 from "./pages/TravelPost/TravelPost4";
import TravelPost5 from "./pages/TravelPost/TravelPost5";
import TravelPost6 from "./pages/TravelPost/TravelPost6";
import TravelPost7 from "./pages/TravelPost/TravelPost7";
import TravelPost8 from "./pages/TravelPost/TravelPost8";

import BlogPost1 from "./pages/BlogPost/BlogPost1";
import BlogPost2 from "./pages/BlogPost/BlogPost2";
import BlogPost3 from "./pages/BlogPost/BlogPost3";


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
          <Route path="/shop" element={<ShopHub />} />
          <Route path="/shop/:id" element={<ProductDetails />} />
          <Route path="/travel" element={<TravelHub />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FAQPage />} />

          <Route path="/ProductDetails/Product1" element={<Product1 />} />
          <Route path="/ProductDetails/Product2" element={<Product2 />} />
          <Route path="/ProductDetails/Product3" element={<Product3 />} />
          <Route path="/ProductDetails/Product4" element={<Product4 />} />
          <Route path="/ProductDetails/Product5" element={<Product5 />} />
          <Route path="/ProductDetails/Product6" element={<Product6 />} />
          
          <Route path="/TravelPost/TravelPost1" element={<TravelPost1 />} />
          <Route path="/TravelPost/TravelPost2" element={<TravelPost2 />} />
          <Route path="/TravelPost/TravelPost3" element={<TravelPost3 />} />
          <Route path="/TravelPost/TravelPost4" element={<TravelPost4 />} />
          <Route path="/TravelPost/TravelPost5" element={<TravelPost5 />} />
          <Route path="/TravelPost/TravelPost6" element={<TravelPost6 />} />
          <Route path="/TravelPost/TravelPost7" element={<TravelPost7 />} />
          <Route path="/TravelPost/TravelPost8" element={<TravelPost8 />} />

          <Route path="/BlogPost/BlogPost1" element={<BlogPost1 />} />
          <Route path="/BlogPost/BlogPost2" element={<BlogPost2 />} />
          <Route path="/BlogPost/BlogPost3" element={<BlogPost3 />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
