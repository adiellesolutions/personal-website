import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

const BlogPost = () => {
  const { id } = useParams();

  // Mock blog post data - in a real app, you'd fetch this based on the id
  const post = {
    title: "My Ultimate Study Routine for Exam Season 📚",
    category: "Study Tips",
    date: "March 15, 2025",
    readTime: "5 min read",
    content: `
      <p>Hey loves! Exam season can be super stressful, but with the right routine, you can totally ace it while staying sane. Here's exactly what works for me! ✨</p>
      
      <h2>1. Start with a Brain Dump 🧠</h2>
      <p>Before diving into studying, I write down everything that's on my mind. All the tasks, worries, random thoughts - everything! This clears my mental space and helps me focus better.</p>
      
      <h2>2. The Pomodoro Technique is Your BFF ⏰</h2>
      <p>I swear by 25-minute study sessions with 5-minute breaks. It keeps me fresh and prevents burnout. During breaks, I stretch, grab a snack, or just stare out the window (seriously, it helps!).</p>
      
      <h2>3. Create a Cozy Study Space 🕯️</h2>
      <p>Your environment matters SO much! I light a candle, play some lo-fi music, and make sure my desk is organized and aesthetic. When your space feels good, studying feels less like a chore.</p>
      
      <h2>4. Active Recall Over Passive Reading 📝</h2>
      <p>Instead of just re-reading notes, I test myself constantly. Flashcards, practice questions, teaching concepts to my rubber duck (yes, really!) - anything that makes my brain work for the information.</p>
      
      <h2>5. Self-Care is NOT Optional 💕</h2>
      <p>Sleep, water, movement - these aren't luxuries, they're necessities! I make sure to get at least 7 hours of sleep, drink plenty of water, and take short walks between study sessions.</p>
      
      <h2>6. Plan Your Rewards 🎀</h2>
      <p>After hitting my study goals, I reward myself! It could be a fancy coffee, watching an episode of my favorite show, or just some guilt-free scrolling time. Having something to look forward to makes studying so much easier.</p>
      
      <p>Remember, everyone's different! These tips work for me, but feel free to adjust them to fit your style. The key is finding what makes YOU feel good and productive. You've got this! 💪✨</p>
      
      <p>What are your favorite study tips? Let me know on Instagram! 💕</p>
    `,
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <Link to="/blog">
            <Button variant="ghost" className="mb-6 text-primary hover:text-primary/80">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>

          <Card className="gradient-ocean shadow-glow p-8 md:p-12 border-2 border-white/50 mb-8">
            <Badge className="bg-white/20 text-white border-white/40 mb-4">
              {post.category}
            </Badge>
            <h1 className="font-pacifico text-4xl md:text-5xl text-white mb-6">
              {post.title}
            </h1>
            <div className="flex gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </Card>

          <Card className="bg-card shadow-float border-2 border-primary/10 p-8 md:p-12">
            <div 
              className="prose prose-lg max-w-none
                prose-headings:font-quicksand prose-headings:font-bold prose-headings:text-primary
                prose-p:text-muted-foreground prose-p:leading-relaxed
                prose-strong:text-foreground
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </Card>

          <Card className="gradient-dreamy shadow-glow p-8 mt-8 border-2 border-white/50 text-center">
            <h3 className="font-pacifico text-3xl text-white mb-4">
              Enjoyed this post? 💕
            </h3>
            <p className="text-white/95 mb-6">
              Check out more of my blog posts and let's be friends on social media!
            </p>
            <div className="flex gap-4 justify-center">
              <Link to="/blog">
                <Button className="bg-white text-primary hover:bg-white/90 transition-bounce">
                  More Posts
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Connect With Me
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
