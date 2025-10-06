import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "My Study Routine in Germany 📚",
      category: "Study",
      excerpt: "How I balance productivity and self-care while studying abroad...",
      gradient: "gradient-ocean",
    },
    {
      id: 2,
      title: "Glow Up Diaries: Self Care Edition ✨",
      category: "Glow-up",
      excerpt: "My favorite routines for feeling confident and radiant every day...",
      gradient: "gradient-sunset",
    },
    {
      id: 3,
      title: "Weekend in Bavaria 🏔️",
      category: "Travel",
      excerpt: "Exploring the most dreamy villages and castles in southern Germany...",
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
            <Link key={post.id} to={`/blog/${post.id}`}>
              <Card className="group bg-card shadow-float border-2 border-primary/10 overflow-hidden hover:shadow-glow transition-smooth h-full">
                <div className={`${post.gradient} p-6`}>
                  <Badge className="bg-white/20 text-white border-white/40 mb-3">
                    {post.category}
                  </Badge>
                  <h3 className="font-quicksand font-bold text-xl text-white mb-2 group-hover:scale-105 transition-bounce">
                    {post.title}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground">
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
