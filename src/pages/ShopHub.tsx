import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, GraduationCap, FileText, Calendar, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

/* ===== Product Images (replace with your own) ===== */
import deskImg from "@/assets/pictest.jpg";
import jewelryImg from "@/assets/pictest.jpg";
import skincareImg from "@/assets/pictest.jpg";
import travelImg from "@/assets/pictest.jpg";
import loungewearImg from "@/assets/pictest.jpg";
import gadgetsImg from "@/assets/pictest.jpg";

/* ---- Inline CoursesSection (unchanged content, styled to match) ---- */
const CoursesSection = () => {
  const courses = [
    { id: 1, title: "Ultimate Study Guide", icon: GraduationCap, description: "My complete system for acing exams and staying organized", price: "$19", gradient: "gradient-ocean" },
    { id: 2, title: "Productivity Templates", icon: FileText, description: "Aesthetic Notion templates for planning your dream life", price: "$12", gradient: "gradient-sunset" },
    { id: 3, title: "Travel Itinerary Pack", icon: Calendar, description: "Ready-to-use travel planners for your European adventures", price: "$15", gradient: "gradient-dreamy" },
  ];

  return (
    <section id="courses" className="py-20 px-4 bg-accent/10 rounded-3xl mt-16">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-pacifico text-4xl md:text-5xl text-center mb-4 text-primary">Digital Products</h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">Templates & guides to help you thrive 💕</p>

        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Card
              key={course.id}
              className="group bg-white border-2 border-accent/20 shadow-float hover:shadow-glow transition-smooth overflow-hidden"
            >
              <div className={`${course.gradient} p-8 text-center`}>
                <course.icon className="w-20 h-20 mx-auto text-white mb-4 group-hover:scale-110 transition-bounce" />
                <h3 className="font-quicksand font-bold text-2xl text-white">{course.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground mb-4 min-h-[3rem]">{course.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-bold text-primary">{course.price}</span>
                </div>
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground transition-bounce">
                  Get This Template
                  <Download className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
/* ---- End CoursesSection ---- */

const ShopHub = () => {
  const products = [
    {
      id: 1,
      name: "Aesthetic Study Desk Setup 📚",
      type: "Affiliate",
      price: "€45–120",
      description: "All the cozy items that make my study space dreamy and productive!",
      image: deskImg,
    },
    {
      id: 2,
      name: "My Everyday Jewelry Collection ✨",
      type: "Affiliate",
      price: "€15–65",
      description: "Dainty, minimal pieces that I wear every single day. Simple elegance!",
      image: jewelryImg,
    },
    {
      id: 3,
      name: "Favorite Skincare Routine 🌸",
      type: "Affiliate",
      price: "€20–80",
      description: "The products that transformed my skin! Gentle, effective, and student-friendly.",
      image: skincareImg,
    },
    {
      id: 4,
      name: "Travel Essentials Kit ✈️",
      type: "Affiliate",
      price: "€25–95",
      description: "Everything I pack for weekend trips and long adventures across Europe!",
      image: travelImg,
    },
    {
      id: 5,
      name: "Cozy Loungewear Collection 💕",
      type: "Affiliate",
      price: "€30–75",
      description: "Cute and comfy pieces for study sessions and relaxing at home.",
      image: loungewearImg,
    },
    {
      id: 6,
      name: "Tech & Productivity Gadgets 💻",
      type: "Affiliate",
      price: "€35–150",
      description: "The tech that makes my student life easier and more organized!",
      image: gadgetsImg,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-10 md:mb-12">
            <h1 className="font-pacifico text-5xl md:text-6xl mb-4 text-primary">Shop My Favorites 🛍️</h1>
            <p className="text-muted-foreground text-lg">All the things I love and genuinely recommend! ✨</p>
          </div>

          {/* Products Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <Link key={p.id} to={`/shop/${p.id}`}>
                <Card className="group bg-card border border-primary/10 shadow-float hover:shadow-glow transition-smooth overflow-hidden h-full">
                  {/* Image Block */}
                  <div className="relative">
                    <div className="aspect-[4/3] w-full overflow-hidden">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                        loading="lazy"
                      />
                    </div>

                    {/* Top-left badges */}
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <Badge className="bg-black/60 text-white border-white/30 backdrop-blur">{p.type}</Badge>
                    </div>

                    {/* Bottom gradient overlay with name + price */}
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4">
                      <div className="rounded-xl bg-gradient-to-t from-black/70 via-black/40 to-transparent p-4">
                        <h3 className="font-quicksand font-bold text-white text-lg leading-tight">
                          {p.name}
                        </h3>
                        <p className="text-white/90 text-sm mt-1">{p.price}</p>
                      </div>
                    </div>
                  </div>

                  {/* Description + CTA */}
                  <div className="p-5">
                    <p className="text-muted-foreground mb-4 line-clamp-3">{p.description}</p>
                    <div className="flex items-center text-primary font-medium group-hover:translate-x-1 transition-smooth">
                      View Details
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>


               {/* Disclosure */}
          <Card className="gradient-sunset shadow-glow p-8 md:p-12 mt-12 border-2 border-white/50 text-center">
            <h3 className="font-pacifico text-3xl text-white mb-4">Disclosure 💕</h3>
            <p className="text-white/95 text-lg max-w-2xl mx-auto">
              Some links are affiliate links, which means I may earn a small commission at no extra cost to you. 
              I only recommend products I genuinely love and use! Your support helps me keep creating content. Thank you! ✨
            </p>
          </Card>

          {/* Courses / Digital Products */}
          <CoursesSection />

         
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ShopHub;
