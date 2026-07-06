import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Cpu, Wifi, Wrench } from "lucide-react";

const skillsData = [
  {
    category: "Programming & Development",
    icon: Code,
    skills: ["Python", "Java", "C++", "JavaScript", "HTML/CSS", "SQL"],
    color: "text-blue-500"
  },
  {
    category: "Electronics & Hardware",
    icon: Cpu,
    skills: ["Circuit Design", "Microcontrollers", "Arduino", "Raspberry Pi", "PCB Design", "Embedded Systems"],
    color: "text-green-500"
  },
  {
    category: "Telecommunications",
    icon: Wifi,
    skills: ["Signal Processing", "Communication Systems", "Networking", "IoT", "Wireless Technologies", "5G"],
    color: "text-purple-500"
  },
  {
    category: "Tools & Technologies",
    icon: Wrench,
    skills: ["Git", "Linux", "MATLAB", "Proteus", "AutoCAD", "Machine Learning"],
    color: "text-orange-500"
  }
];

const Skills = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-primary bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technical skills and competencies developed through academic studies and practical projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((skillCategory, index) => (
            <Card 
              key={index} 
              className="shadow-card hover:shadow-lg transition-smooth hover:-translate-y-1"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-background ${skillCategory.color}`}>
                    <skillCategory.icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">{skillCategory.category}</CardTitle>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skillCategory.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="text-xs hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;