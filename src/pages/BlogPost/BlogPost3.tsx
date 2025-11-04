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
    title: "Figuring Life Out Abroad (a.k.a. How I’m Surviving, Thriving, and Sometimes Crying 😅)",
    category: "Journey",
    date: "November 4, 2025",
    readTime: "8 min read",
    content: `
      <p>Moving abroad sounds glamorous, right? ✈️ New country, new people, new adventures. And yes, sometimes it is like that. But let me be the Ate here and say it straight: most days, it’s also messy, confusing, and tiring.</p>

      <p>When I first moved to Germany, I thought it would be like in the movies—studying in cafés, strolling in pretty old towns, effortlessly learning the language like my brain is Google Translate. 🤣 Reality check? Nope. I was suddenly living alone, facing discrimination and heavy paperworks, struggling with culture shock, and realizing that even groceries aren’t as simple when you don’t know which cheese is which.</p>

      <p>And then there’s the people side. Back home, I was surrounded by family, friends, my safe space. Here? I had to start all over. And making friends abroad is tricky. Some people will vibe with you instantly (shoutout to my friends who stuck with me 💙). Others? Not so much. Some will underestimate you because of your age. Some will test your patience. Some will remind you exactly why your peace is priceless. (And trust me, peace is everything when you’re in a shared apartment with... noisy roommates 😅).</p>

      <p>But here’s the thing: every challenge abroad feels 10x heavier—language, loneliness, responsibility, money. Yet, every win also feels 10x sweeter. The first time I understood a whole conversation in German without translating in my head? Victory. The first time I budgeted my allowance and actually saved something? Success. Even cooking rice three times a day in a tiny German kitchen? Achievement unlocked. 😂</p>

      <p>And let’s talk about age again because people never forget to remind me that I’m “too young.” At 21, I’m often the youngest in my workplace, my school, my circles. People use my age as a reason for everything—“Oh, that’s why she’s tired,” “That’s why she doesn’t get it yet,” “That’s why her opinions aren’t mature.” 🙄 But guess what? Being young means I still have time to figure life out. To make mistakes, to laugh at them, and to grow stronger because of them.</p>

      <p>Abroad, I learned that independence is not just doing everything by yourself—it’s also choosing yourself. It’s protecting your energy, setting boundaries, and saying no to things (or people) that drain you. It’s learning to celebrate small wins without needing a whole audience to clap for you.</p>

      <p>So yeah, I’m still figuring life out. Some days, I cry from homesickness. Some days, I feel unstoppable, like I can conquer the world. And most days, I’m just somewhere in between, eating rice, hustling in Ausbildung, learning German, and dreaming bigger than ever.</p>

      <p>And if there’s one thing I’ve realized, it’s this: you don’t need to have it all figured out to start. You just need the courage to begin, the patience to keep going, and the faith that all the puzzle pieces will make sense one day.</p>

      <p>So here I am, 21, Filipina in Germany, not perfect, not done, not fully “settled.” Just living proof that you can be a work-in-progress and still be proud of yourself. Because figuring life out abroad isn’t about getting everything right—it’s about showing up for yourself every single day.</p>
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
