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
import ProductDetails from "./pages/ProductDetails";
import TravelHub from "./pages/TravelHub";
import TravelPost from "./pages/TravelPost";
import ContactPage from "./pages/ContactPage";
import FAQPage from "./pages/FAQPage";

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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
