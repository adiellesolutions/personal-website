import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import useScrollToTop from "@/hooks/useScrollToTop";
import { Button } from "@/components/ui/button";
const BlogHub = () => {
  useScrollToTop();
  const blogPosts = [
    {
      id: 1,
      title: "Why Germany? The Real Reason I Chose It Over Other EU Countries 📚",
      category: "Life Abroad",
      excerpt: "When people ask me, “Why Germany of all places?” I always laugh a little...",
      date: "October 20, 2025",
      readTime: "6 min read",
    },
    {
      id: 2,
      title: "Too Young? Too Early? My Mindset on Chasing Dreams at 21 ✨",
      category: "Personal Growth",
      excerpt: "Every time I sit at a table here in Germany—whether it’s with co-workers...",
      date: "October 21, 2025",
      readTime: "7 min read",
    },
    {
      id: 3,
      title: "Figuring Life Out Abroad (a.k.a. How I’m Surviving, Thriving, and Sometimes Crying 😅)",
      category: "Journey",
      excerpt: "Moving abroad sounds glamorous, right? ✈️ New country, new people, new adventures...",
      date: "November 4, 2025",
      readTime: "8 min read",
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Life Abroad":
        return "gradient-ocean";
      case "Personal Growth":
        return "gradient-sunset";
      case "Journey":
        return "gradient-dreamy";
      default:
        return "gradient-ocean";
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="font-pacifico text-5xl md:text-6xl mb-4 text-primary">
              Blog 📝
            </h1>
            <p className="text-muted-foreground text-lg">
              Study tips, glow-up diaries, and travel adventures ✨
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link key={post.id} to={`/BlogPost/BlogPost${post.id}`}>
                <Card className="group bg-card shadow-float border-2 border-primary/10 overflow-hidden hover:shadow-glow transition-smooth h-full">
                  <div className={`${getCategoryColor(post.category)} p-6`}>
                    <Badge className="bg-white/20 text-white border-white/40 mb-3">
                      {post.category}
                    </Badge>
                    <h3 className="font-quicksand font-bold text-xl text-white mb-2 group-hover:scale-105 transition-bounce">
                      {post.title}
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="text-muted-foreground mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                    
                        <div className="mt-4 flex items-center text-primary font-medium group-hover:translate-x-1 transition-smooth">
                          <Link to={`/BlogPost/BlogPost${post.id}`}>
                            <Button variant="secondary">
                                Read More <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                          </Link>
                        </div>

                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogHub;
