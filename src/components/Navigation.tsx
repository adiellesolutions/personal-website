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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border shadow-float z-100">
      <div className="container mx-auto px-4 py-4">
        {/* whole nav line */}
        <div className="flex items-center justify-between">
          
          {/* LEFT: Brand + Toggle beside */}
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="font-pacifico text-2xl text-primary hover:text-secondary transition-smooth"
            >
              Life with Dary
            </Link>
            {/* toggle bar beside logo */}
            <ThemePillToggle />
          </div>

          {/* ✅ RIGHT: Desktop navigation links with active highlight */}
          <div className="hidden md:flex items-center gap-6">
            {[
              { to: "/about", label: "About", icon: Sparkles },
              { to: "/blog", label: "Blog", icon: BookOpen },
              { to: "/shop", label: "Shop", icon: ShoppingBag },
              { to: "/travel", label: "Travel", icon: Plane },
              { to: "/contact", label: "Contact", icon: MessageCircle },
              { to: "/faq", label: "FAQ", icon: HelpCircle },
            ].map(({ to, label, icon: Icon }) => {
              const isActive = location.pathname.startsWith(to);
              return (
                <Link key={to} to={to}>
                  <Button
                    variant="ghost"
                    size="sm"
                    className={[
                      "transition-smooth flex items-center relative",
                      isActive
                        ? "bg-primary/10 text-primary font-semibold after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-2/3 after:h-[2px] after:bg-primary after:rounded-full after:animate-pulse"
                        : "text-foreground hover:text-primary hover:bg-primary/5",
                    ].join(" ")}
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {label}
                  </Button>
                </Link>
              );
            })}
          </div>

          {/* Mobile: toggle + menu icon */}
          
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
