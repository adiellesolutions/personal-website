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
      question: "How old are you?",
      answer: "I’m 21 — the baby of many tables I sit at hehe 😅",
    },
    {
      question: "Why Germany?",
      answer:
        "I wanted to challenge myself where growth feels real. Plus, world-class education (and tuition-free universities 👀). Also, blame Einstein — little me thought, “If he’s German, then I wanna study there too.”",
    },
    {
      question: "What do you do in Germany?",
      answer:
        "I’m currently an Azubi (trainee) while navigating the ups and downs of life abroad, studying the language, and building a lifestyle brand along the way.",
    },
    {
      question: "What languages do you speak?",
      answer:
        "Fluent in English, Tagalog, and Hiligaynon/Ilonggo 💕 + some Spanish 🌸 and German (still learning, pero laban lang 🥲💪).",
    },
    {
      question: "Favorite German word?",
      answer:
        "Feierabend ✨ (nothing beats that feeling of clocking out and actually living life).",
    },
    {
      question: "Do you miss home?",
      answer:
        "Always. Rice 3x a day and family chikahan 🥹 But I balance that homesickness with discovering new experiences here.",
    },
    {
      question: "What kind of content do you share?",
      answer:
        "Lifestyle + travel diaries + OOTDs + study abroad tips + self-care — basically, my life abroad as a Filipina in pastel and glow. ✨",
    },
    {
      question: "What inspires you?",
      answer:
        "The little girl who dreamed of being a scientist, and the future me who’s on her way to becoming one.",
    },
    {
      question: "Favorite travel so far?",
      answer:
        "Lake Iseo in Italy 💙 A little less known than Como, but it stole my heart with its calm, hidden-gem vibe.",
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
