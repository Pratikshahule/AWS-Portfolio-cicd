import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Education />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default Index;
