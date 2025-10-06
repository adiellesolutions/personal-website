import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import BlogSection from "@/components/BlogSection";
import ShopSection from "@/components/ShopSection";
import CoursesSection from "@/components/CoursesSection";
import TravelSection from "@/components/TravelSection";
import ReviewsSection from "@/components/ReviewSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingIcons from "@/components/FloatingIcons";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <AboutMe />
      <BlogSection />
      <ShopSection />
      <CoursesSection />
      <TravelSection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
      <FloatingIcons />
    </div>
  );
};

export default Index;