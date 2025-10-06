import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQPage = () => {
  const faqs = [
    {
      question: "How did you end up studying in Germany?",
      answer: "I always dreamed of studying abroad, and Germany's amazing universities with low tuition fees made it possible! I applied through uni-assist, got my student visa, and here I am living my best life! ✨",
    },
    {
      question: "What do you study?",
      answer: "I'm studying [Your Major]! It's challenging but so rewarding. I love sharing my study tips and routines to help other students succeed too! 📚",
    },
    {
      question: "How do you balance studying, content creation, and traveling?",
      answer: "It's all about time management and planning! I batch content when I can, study consistently (not just during exam season!), and book trips during semester breaks. Some weeks are busier than others, but I make it work! 💪",
    },
    {
      question: "What camera/equipment do you use?",
      answer: "I keep it pretty simple! I mainly use my iPhone for photos and videos, and I have a ring light for better lighting. You don't need expensive gear to create content - just get started with what you have! 📱",
    },
    {
      question: "How do you afford to travel so much as a student?",
      answer: "Budget travel is my specialty! I hunt for cheap flights, stay in hostels or budget Airbnbs, cook my own meals, and use student discounts everywhere. Plus, many European destinations are surprisingly affordable! Check out my travel guides for all my tips! ✈️",
    },
    {
      question: "Can you help me plan my trip to [destination]?",
      answer: "I'd love to! Check out my travel diaries and itineraries first - I have detailed guides for all the places I've visited. If you have specific questions, feel free to DM me on Instagram! 💕",
    },
    {
      question: "Are your product recommendations really genuine?",
      answer: "100% yes! I only recommend products I actually own, use, and love. If I wouldn't buy it myself, I won't recommend it to you. Some links are affiliate links (which help support this blog), but that never influences what I recommend! ✨",
    },
    {
      question: "How do I start a blog/social media like yours?",
      answer: "Just start! I began by sharing what I was already doing - studying, traveling, and trying new things. Be authentic, post consistently, and engage with your community. It takes time to grow, but if you love creating content, it's so worth it! 🌸",
    },
    {
      question: "What's your best study tip?",
      answer: "Active recall is a game-changer! Instead of just re-reading notes, test yourself constantly. Make flashcards, do practice problems, teach concepts out loud - anything that forces your brain to retrieve information. Trust me, it works! 📝",
    },
    {
      question: "How do you stay motivated?",
      answer: "I focus on my 'why' - remembering why I'm working toward my goals. I also break big goals into tiny steps, celebrate small wins, and don't beat myself up on off days. Progress isn't linear, and that's okay! Some days I'm super productive, other days I just rest and recharge. Balance is key! 💕",
    },
    {
      question: "Do you offer 1-on-1 coaching or consultations?",
      answer: "Not at the moment, but I have digital guides and templates that cover study strategies, productivity, and travel planning! Check out my courses section. If I start offering coaching in the future, I'll announce it on my socials! ✨",
    },
    {
      question: "What's the best way to stay updated with your content?",
      answer: "Follow me on Instagram and TikTok for daily updates! I also share longer-form content here on my blog. Turn on post notifications so you don't miss anything! 💕",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="font-pacifico text-5xl md:text-6xl mb-4 text-primary">
              FAQ 💭
            </h1>
            <p className="text-muted-foreground text-lg">
              Got questions? I've got answers! ✨
            </p>
          </div>

          <Card className="gradient-dreamy shadow-glow p-8 md:p-12 border-2 border-white/50 mb-12 text-center">
            <HelpCircle className="w-16 h-16 mx-auto text-white mb-6 animate-float" />
            <h2 className="font-pacifico text-3xl text-white mb-4">
              Can't find what you're looking for?
            </h2>
            <p className="text-white/95 text-lg">
              Send me a DM on Instagram or use the anonymous ask box on my Contact page! 
              I love hearing from you! 💕
            </p>
          </Card>

          <Card className="bg-card shadow-float border-2 border-primary/10 p-8 md:p-12">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-quicksand font-bold text-lg text-foreground hover:text-primary transition-smooth">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-base pt-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQPage;
