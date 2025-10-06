import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Mail, Instagram, Youtube, MessageCircle, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ReviewForm from "@/components/ReviewForm"; // <-- import it

const ContactPage = () => {
  const socials = [
    {
      name: "Instagram",
      icon: Instagram,
      handle: "@coastal.sanctuary",
      color: "gradient-sunset",
      link: "https://instagram.com/coastal.sanctuary",
    },
    {
      name: "YouTube",
      icon: Youtube,
      handle: "Coastal Sanctuary",
      color: "gradient-ocean",
      link: "https://youtube.com/@coastalsanctuary",
    },
    {
      name: "TikTok",
      icon: MessageCircle,
      handle: "@coastalsanctuary",
      color: "gradient-dreamy",
      link: "https://tiktok.com/@coastalsanctuary",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main>
        <section id="contact" className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="font-pacifico text-4xl md:text-5xl text-center mb-4 text-primary">
              Let's Connect! 💌
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Come say hi and let's be friends!
            </p>

            {/* Socials */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {socials.map((social) => (
                <Card 
                  key={social.name}
                  className="group bg-white border-2 border-primary/10 shadow-float hover:shadow-glow transition-smooth overflow-hidden"
                >
                  <div className={`${social.color} p-6 text-center`}>
                    <social.icon className="w-12 h-12 mx-auto text-white mb-3 group-hover:scale-110 transition-bounce" />
                    <h3 className="font-quicksand font-bold text-white text-lg mb-1">
                      {social.name}
                    </h3>
                    <p className="text-white/90 text-sm">
                      {social.handle}
                    </p>
                  </div>
                  <div className="p-4">
                    <a href={social.link} target="_blank" rel="noopener noreferrer">
                      <Button 
                        className="w-full bg-primary/10 hover:bg-primary/20 text-primary transition-smooth"
                        variant="ghost"
                      >
                        Follow Me
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </a>
                  </div>
                </Card>
              ))}
            </div>

            {/* Anonymous message */}
            <Card className="gradient-dreamy shadow-glow p-8 md:p-12 border-2 border-white/50 text-center mb-12">
              <Mail className="w-16 h-16 mx-auto text-white mb-6 animate-float" />
              <h3 className="font-pacifico text-3xl text-white mb-4">
                Ask Me Anything! ✨
              </h3>
              <p className="text-white/95 mb-6 text-lg max-w-lg mx-auto">
                Have a question? Want to chat? Send me an anonymous message 
                and I'll share my answer on my socials!
              </p>
              <Button 
                size="lg"
                className="bg-white text-primary hover:bg-white/90 transition-bounce shadow-float"
              >
                Send Anonymous Message
                <MessageCircle className="w-5 h-5 ml-2" />
              </Button>
            </Card>



            {/* Note */}
            <div className="mt-8 text-center">
              <p className="text-muted-foreground text-sm">
                For business inquiries, reach out via Instagram DM 💕
              </p>
            </div>

            {/* Review Form */}
            <ReviewForm />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
