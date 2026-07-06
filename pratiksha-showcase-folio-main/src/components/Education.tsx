import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";

const educationData = [
  {
    degree: "Bachelor of Engineering - Electronics & Telecommunication",
    institution: "Moze College",
    status: "Currently Pursuing",
    description: "Focusing on modern telecommunication systems, electronic circuits, and emerging technologies.",
    icon: "🎓"
  },
  {
    degree: "Diploma in Computer Engineering",
    institution: "JSPM College",
    status: "Completed",
    description: "Comprehensive foundation in programming, software development, and computer systems.",
    icon: "💻"
  },
  {
    degree: "Higher Secondary Certificate (12th)",
    institution: "Aditya College",
    status: "Completed",
    description: "Strong academic foundation with focus on mathematics and science subjects.",
    icon: "📚"
  }
];

const Education = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-primary bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic journey and continuous learning path in technology and engineering
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {educationData.map((education, index) => (
            <Card 
              key={index} 
              className="shadow-card hover:shadow-lg transition-smooth hover:-translate-y-1 border-l-4 border-l-primary"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{education.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        education.status === 'Currently Pursuing' 
                          ? 'bg-primary/10 text-primary' 
                          : 'bg-green-100 text-green-700'
                      }`}>
                        {education.status}
                      </span>
                    </div>
                    <CardTitle className="text-xl mb-2">{education.degree}</CardTitle>
                    <CardDescription className="text-base font-medium text-primary">
                      {education.institution}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{education.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;