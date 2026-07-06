import { Button } from "@/components/ui/button";
import { ChevronDown, Download, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Pratiksha <span className="text-white/90">Hule</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-4">
            Electronics & Telecommunication Engineering Student
          </p>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Passionate about technology and innovation, with expertise in computer engineering 
            and a focus on practical solutions through impactful projects.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <Button size="lg" variant="secondary" className="shadow-glow">
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
          <div className="flex gap-4">
            <Button size="icon" variant="ghost" className="text-white hover:bg-white/20">
              <Github className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="ghost" className="text-white hover:bg-white/20">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="ghost" className="text-white hover:bg-white/20">
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <ChevronDown className="h-8 w-8 text-white/70 mx-auto animate-bounce cursor-pointer hover:text-white transition-smooth" />
        </div>
      </div>
    </section>
  );
};

export default Hero;