import {
  Shell, Sparkles, BookOpen, ShoppingBag,
  GraduationCap, Plane, MessageCircle, HelpCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import ThemePillToggle from "@/pages/ThemePillToggle"; // adjust path if needed

const Navigation = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const scrollToSection = (id: string) => {
    if (!isHomePage) {
      window.location.href = `/#${id}`;
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border shadow-float">
      <div className="container mx-auto px-4 py-4">
        {/* whole nav line */}
        <div className="flex items-center justify-between">
          
          {/* LEFT: Brand + Toggle beside */}
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="font-pacifico text-2xl text-primary hover:text-secondary transition-smooth"
            >
              Coastal Sanctuary
            </Link>
            {/* toggle bar beside logo */}
            <ThemePillToggle />
          </div>

          {/* RIGHT: Desktop navigation links */}
          <div className="hidden md:flex items-center gap-6">
            <Button variant="ghost" size="sm" onClick={() => scrollToSection("about")} className="text-foreground hover:text-primary transition-smooth">
              <Sparkles className="w-4 h-4 mr-2" />
              About
            </Button>
            <Button variant="ghost" size="sm" onClick={() => scrollToSection("blog")} className="text-foreground hover:text-primary transition-smooth">
              <BookOpen className="w-4 h-4 mr-2" />
              Blog
            </Button>
            <Button variant="ghost" size="sm" onClick={() => scrollToSection("shop")} className="text-foreground hover:text-primary transition-smooth">
              <ShoppingBag className="w-4 h-4 mr-2" />
              Shop
            </Button>
            <Button variant="ghost" size="sm" onClick={() => scrollToSection("courses")} className="text-foreground hover:text-primary transition-smooth">
              <GraduationCap className="w-4 h-4 mr-2" />
              Courses
            </Button>
            <Button variant="ghost" size="sm" onClick={() => scrollToSection("travel")} className="text-foreground hover:text-primary transition-smooth">
              <Plane className="w-4 h-4 mr-2" />
              Travel
            </Button>
            <Link to="/contact">
              <Button variant="ghost" size="sm" className="text-foreground hover:text-primary transition-smooth">
                <MessageCircle className="w-4 h-4 mr-2" />
                Contact
              </Button>
            </Link>
            <Link to="/faq">
              <Button variant="ghost" size="sm" className="text-foreground hover:text-primary transition-smooth">
                <HelpCircle className="w-4 h-4 mr-2" />
                FAQ
              </Button>
            </Link>
          </div>

          {/* Mobile: toggle + menu icon */}
          <div className="flex md:hidden items-center gap-2">
            <ThemePillToggle />
            <Shell className="w-6 h-6 text-primary" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
