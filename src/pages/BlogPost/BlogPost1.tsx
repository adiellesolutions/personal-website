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
    title: "Why Germany? The Real Reason I Chose It Over Other EU Countries 📚",
    category: "Life Abroad",
    date: "October 20, 2025",
    readTime: "6 min read",
    content: `
      <p>When people ask me, “Why Germany of all places?” I always laugh a little,
      because the answer goes way, way back—back to when I was just a kid sitting in
      class, already fascinated by science.</p>

      <p>I was that child who mixed shampoos, perfumes, and bath soaps in the bathroom
      like it was a mini-lab. My mom noticed it early on, and deep down I knew—I
      wanted to be a scientist. I wanted to create something impactful.</p>

      <p>Then came the “Einstein moment.” I learned from a book that Albert Einstein was
      German. Yes, that Einstein. The icon who made physics feel like magic. And my
      little-kid brain immediately thought: “Ohhh, if Einstein is German, then Germany
      must be where great scientists are made.” That was it—the seed was planted.
      Germany was already glowing in my imagination. 🌍✨</p>

      <p>As I grew older, the reasons became more real. On the practical side, Germany
      offers world-class education—public universities are tuition-free (only semester
      fees, which is wild when you compare it to million-peso tuition back home in the
      Philippines). For someone dreaming of chemical engineering or biochemistry,
      that’s literally heaven.</p>

      <p>But Germany isn’t the “easy route.” It doesn’t hold your hand. Instead, it throws
      paperwork nightmares, culture shocks, freezing winters 🥶, and German
      grammar (enough said). Honestly? Germany beat me up a few times 🤣 but that’s
      exactly what excites me. I get bored if things feel too easy. Germany makes you
      work for it. It’s like the universe said, “Okay, you really want this dream? Let’s test
      your patience—with Behörden, train delays, and every small thing in between.”
      And me? I said: “Bet. Let’s go.” 💪</p>

      <p>Culturally, it’s such a wild mix. One moment you’re standing in front of a
      centuries-old castle, the next you’re walking into futuristic labs. Germans value
      order, education, and discipline—but they also know how to actually stop
      working. Feierabend? Feierabend. Best word ever. It’s basically the art of
      clocking out and living life, and I’ve proudly adapted that mindset.</p>

      <p>And let’s not forget: travel. Being in the middle of Europe means I can hop on a
      train and end up in France, Italy, Austria, or the Netherlands. Moving here was
      never just about career; it was about building myself, collecting memories, and
      exploring the world while I’m still young.</p>

      <p>So why Germany? Because it’s the perfect storm: my childhood dream, my
      academic goals, my love for challenges, and the adventures I crave. It’s not the
      easy choice—but it’s the right one for me.</p>

      <p>Sometimes I still laugh at how my tiny “Einstein moment” as a kid turned into me
      actually living here, studying, working, and carving my own path. Germany is
      tough, but it’s shaping me into the scientist, dreamer, and person I want to
      become.</p>

      <p>And if you ask me again today, “Why Germany?” my answer will always be:
      Because it’s where I feel both terrified and thrilled—exactly the mix you need
      when you’re chasing a dream.</p>
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
