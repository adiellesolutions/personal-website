import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

const BlogPost = () => {
  const { id } = useParams();

  const post = {
    title: "Too Young? Too Early? My Mindset on Chasing Dreams at 21 ✨",
    category: "Personal Growth",
    date: "October 21, 2025",
    readTime: "7 min read",
    content: `
      <p>Every time I sit at a table here in Germany—whether it’s with co-workers, classmates, or even random people I meet—I almost always end up being the youngest in the room. And trust me, people notice. 😅</p>

      <p>“You’re only 21?!”<br/>“How can you already be abroad?”<br/>“Aren’t you too young for this?”</p>

      <p>At first, those comments used to feel heavy. Like, should I even be here? Should I wait until I’m 25, 28, or 30 to make these big moves? Should I let my age hold me back? But then I realized something important: dreams don’t have a minimum age requirement.</p>

      <p>When I was younger (lol younger than young 😂), I had this image in my head of how life should go: study, graduate, work, maybe move abroad later when I’m “ready.” But let’s be real—are we ever really ready? Life doesn’t give us a green signal like traffic lights. Opportunities pop up, and either you jump or you stand there waiting until it’s too late.</p>

      <p>So I jumped.</p>

      <p>And yes, I’m still figuring things out. I don’t know everything (my German grammar mistakes prove that daily 🤣), but that’s the point. I didn’t come here because I had it all together. I came here because I wanted to grow, to learn, to fail sometimes, and to get back up again.</p>

      <p>A lot of people think age equals experience—and okay, fair. Older people have lived longer, and that deserves respect. But being young has its own power: energy, flexibility, and fresh perspective. I can adapt fast, I’m not too scared of change, and I have decades ahead to build, rebuild, and rebuild again if I need to. That’s not a weakness—it’s actually my strength.</p>

      <p>And let me be savage for a second 😌: Some people will use your age against you in everything—your opinions, your grades, your body, even your perspectives on life. They’ll say, “You’re too young to understand.” But here’s the truth: if I waited until I was “old enough” by their standards, I’d miss years of experience that could only come by starting early.</p>

      <p>Think of it this way: while others are still “waiting to be ready,” I’m already here—messing up, learning, growing, and stacking those experiences. And by the time I reach the age they call “ready,” I’ll have already lived through what they’re just starting.</p>

      <p>So my mindset is simple: It’s never too early to chase what you want. Age is not the measure of maturity, courage is. And honestly? If I fail, I can still get back up, because I started young.</p>

      <p>I don’t want to waste my 20s being afraid. I want to look back at 30, 40, 50 and say, “Thank God I started when I did.”</p>

      <p>So whenever someone asks me why I’m already here at 21, my answer is: Because waiting never guaranteed success. But starting gave me a chance.</p>
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

          {/* Main blog content with proper spacing and readable stanzas */}
          <Card className="bg-card shadow-float border-2 border-primary/10 p-8 md:p-12">
            <div
              className="text-muted-foreground leading-relaxed space-y-6 text-justify [&>p]:indent-8 [&>p]:mb-6"
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
