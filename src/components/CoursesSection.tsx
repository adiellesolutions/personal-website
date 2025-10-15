import { GraduationCap, FileText, Calendar, Download } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CoursesSection = () => {
  const courses = [
    {
      id: 1,
      title: "Ultimate Study Guide",
      icon: GraduationCap,
      description: "My complete system for acing exams and staying organized",
      price: "€19",
      gradient: "gradient-ocean",
    },
    {
      id: 2,
      title: "Productivity Templates",
      icon: FileText,
      description: "Aesthetic Notion templates for planning your dream life",
      price: "€12",
      gradient: "gradient-sunset",
    },
    {
      id: 3,
      title: "Travel Itinerary Pack",
      icon: Calendar,
      description: "Ready-to-use travel planners for your European adventures",
      price: "€15",
      gradient: "gradient-dreamy",
    },
  ];

  return (
    <section id="courses" className="py-20 px-4 bg-accent/10">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-pacifico text-4xl md:text-5xl text-center mb-4 text-primary">
          Digital Products
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Templates & guides to help you thrive 💕
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Card 
              key={course.id}
              className="group bg-white border-2 border-accent/20 shadow-float hover:shadow-glow transition-smooth overflow-hidden animate-float"
              style={{ animationDelay: `${course.id * 0.2}s` }}
            >
              <div className={`${course.gradient} p-8 text-center`}>
                <course.icon className="w-20 h-20 mx-auto text-white mb-4 group-hover:scale-110 transition-bounce" />
                <h3 className="font-quicksand font-bold text-2xl text-white">
                  {course.title}
                </h3>
              </div>
              
              <div className="p-6">
                <p className="text-muted-foreground mb-4 min-h-[3rem]">
                  {course.description}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-bold text-primary">
                    {course.price}
                  </span>
                </div>
                <Button 
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground transition-bounce"
                >
                  Get This Template
                  <Download className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
