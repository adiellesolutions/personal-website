import { BookOpen, ShoppingBag, MessageCircle, Shell } from "lucide-react";

const FloatingIcons = () => {
  const icons = [
    { Icon: BookOpen, label: "Blog", section: "blog", color: "bg-primary" },
    { Icon: ShoppingBag, label: "Shop", section: "shop", color: "bg-secondary" },
    { Icon: MessageCircle, label: "Contact", section: "contact", color: "bg-accent" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4">
      {icons.map(({ Icon, label, section, color }) => (
        <button
          key={section}
          onClick={() => scrollToSection(section)}
          className={`group relative ${color} text-white p-3 rounded-full shadow-glow hover:scale-110 transition-bounce`}
          aria-label={label}
        >
          <Icon className="w-6 h-6" />
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-foreground text-background px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-smooth whitespace-nowrap">
            {label}
          </span>
        </button>
      ))}
      
      <div className="w-12 h-12 bg-muted/50 rounded-full flex items-center justify-center mt-2 animate-float">
        <Shell className="w-6 h-6 text-primary" />
      </div>
    </div>
  );
};

export default FloatingIcons;
