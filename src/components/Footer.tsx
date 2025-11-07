import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-primary/5 border-t border-primary/10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          <p className="font-pacifico text-2xl text-primary mb-4">
            Life With Dary
          </p>
          <p className="text-muted-foreground flex items-center justify-center gap-2 mb-4">
            Made with 
            <Heart className="w-4 h-4 text-secondary fill-secondary animate-pulse" />
            and coastal vibes
          </p>
          <p className="text-sm text-muted-foreground">
            © 2025 Life With Dary. All rights reserved. ✨
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
