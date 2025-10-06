import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const BlogHub = () => {
  const blogPosts = [
    {
      id: 1,
      title: "My Ultimate Study Routine for Exam Season 📚",
      category: "Study Tips",
      excerpt: "How I ace my exams with these simple but effective study techniques...",
      date: "March 15, 2025",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Glow Up Diaries: My Self-Care Sunday Routine ✨",
      category: "Glow-up",
      excerpt: "All my favorite self-care rituals for the perfect relaxing Sunday...",
      date: "March 12, 2025",
      readTime: "4 min read",
    },
    {
      id: 3,
      title: "Weekend in Prague: A Dreamy Travel Guide 🏰",
      category: "Travel",
      excerpt: "Exploring the magical streets of Prague and all the must-see spots...",
      date: "March 8, 2025",
      readTime: "7 min read",
    },
    {
      id: 4,
      title: "How I Stay Organized as a University Student 📝",
      category: "Study Tips",
      excerpt: "My digital and analog planning system that keeps me on track...",
      date: "March 5, 2025",
      readTime: "6 min read",
    },
    {
      id: 5,
      title: "Morning Routine for Productive Days ☀️",
      category: "Glow-up",
      excerpt: "Start your day right with these simple habits that changed my life...",
      date: "March 1, 2025",
      readTime: "5 min read",
    },
    {
      id: 6,
      title: "Exploring Munich: Hidden Gems & Cozy Cafes ☕",
      category: "Travel",
      excerpt: "My favorite spots in Munich that aren't in every tourist guide...",
      date: "February 28, 2025",
      readTime: "8 min read",
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Study Tips":
        return "gradient-ocean";
      case "Glow-up":
        return "gradient-sunset";
      case "Travel":
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
              <Link key={post.id} to={`/blog/${post.id}`}>
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
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
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
