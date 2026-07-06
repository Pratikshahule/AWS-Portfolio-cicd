import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Trash2, ExternalLink, Github } from "lucide-react";

const projectsData = [
  {
    title: "Threat Detection System",
    description: "Advanced security system designed to identify and alert about potential threats in real-time. Implemented during diploma studies with focus on computer vision and machine learning techniques.",
    icon: Shield,
    iconColor: "text-red-500",
    tags: ["Security", "Machine Learning", "Computer Vision", "Real-time Processing"],
    features: [
      "Real-time threat monitoring",
      "Alert notification system",
      "Computer vision integration",
      "Machine learning algorithms"
    ]
  },
  {
    title: "Garbo-Smart Dustbin",
    description: "IoT-enabled smart waste management solution that automates garbage collection and monitoring. Features intelligent sorting and real-time status tracking for efficient waste management.",
    icon: Trash2,
    iconColor: "text-green-500", 
    tags: ["IoT", "Automation", "Sensors", "Smart City"],
    features: [
      "Automatic waste detection",
      "Smart sorting mechanism",
      "Real-time monitoring",
      "Mobile app integration"
    ]
  }
];

const Projects = () => {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions I've developed during my academic journey, focusing on real-world applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <Card 
              key={index} 
              className="shadow-card hover:shadow-glow transition-smooth hover:-translate-y-2 bg-card"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg bg-background ${project.iconColor}`}>
                    <project.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                    <CardDescription className="text-base">
                      {project.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-sm text-muted-foreground uppercase tracking-wide">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-2 pt-4">
                  <Button size="sm" variant="default" className="flex-1">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Details
                  </Button>
                  <Button size="sm" variant="outline">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;