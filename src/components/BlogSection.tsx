import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Why Germany? The Real Reason I Chose It Over Other EU Countries 📚",
      category: "Life Abroad",
      excerpt: "When people ask me, “Why Germany of all places?” I always laugh a little...",
      gradient: "gradient-ocean",
    },
    {
      id: 2,
      title: "Too Young? Too Early? My Mindset on Chasing Dreams at 21 ✨",
      category: "Personal Growth",
      excerpt: "Every time I sit at a table here in Germany—whether it’s with co-workers...",
      gradient: "gradient-sunset",
    },
    {
      id: 3,
      title: "Figuring Life Out Abroad (a.k.a. How I’m Surviving, Thriving, and Sometimes Crying 😅)",
      category: "Journey",
      excerpt: "Moving abroad sounds glamorous, right? ✈️ New country, new people, new adventures...",
      gradient: "gradient-dreamy",
    },
  ];

  return (
    <section id="blog" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-pacifico text-4xl md:text-5xl text-center mb-4 text-primary">
          Blog Posts
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Cute little stories from my life ✨
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {blogPosts.map((post) => (
            <Link key={post.id} to={`/BlogPost/BlogPost${post.id}`}>
              <Card className="group bg-card shadow-float border-2 border-primary/10 overflow-hidden hover:shadow-glow transition-smooth h-full">
                <div className={`${post.gradient} p-6`}>
                  <Badge className="bg-white/20 text-white border-white/40 mb-3">
                    {post.category}
                  </Badge>
                  <h3 className="font-quicksand font-bold text-xl text-white mb-2 group-hover:scale-105 transition-bounce line-clamp-2">
                    {post.title}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link to="/blog">
            <Button 
              className="bg-primary text-white hover:bg-primary/90 transition-bounce shadow-float px-8"
              size="lg"
            >
              View All Posts
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
