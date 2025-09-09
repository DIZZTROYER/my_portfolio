import { Button } from "@/components/ui/button";
import { Github, Mail, Phone } from "lucide-react";
import { GlitchText } from "@/components/GlitchText";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-dark relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-cyber-green opacity-5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyber-blue opacity-5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-cyber bg-clip-text text-transparent">
            MOJETIOLUWA BOLAJI-BUSOLA
          </h1>
          
          <div className="text-xl md:text-2xl text-cyber-light-gray mb-8 font-light">
            <GlitchText text="Cybersecurity Engineer" className="text-cyber-green font-medium" glitchIntensity={0.08} /> | 
            <GlitchText text=" Penetration Tester" className="text-cyber-blue font-medium" glitchIntensity={0.06} /> | 
            <GlitchText text=" Ethical Hacker" className="text-cyber-green font-medium" glitchIntensity={0.07} />
          </div>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            2+ years of experience in penetration testing, vulnerability assessment, and red team operations. 
            Passionate about securing digital infrastructure and enhancing organizational cybersecurity posture.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <a 
              href="tel:+2347042665679" 
              className="flex items-center gap-2 text-cyber-light-gray hover:text-cyber-green transition-all duration-300 hover:shadow-cyber"
            >
              <Phone className="w-5 h-5" />
              <span>+234 704 266 5679</span>
            </a>
            
            <a 
              href="mailto:princeheriatge1@gmail.com" 
              className="flex items-center gap-2 text-cyber-light-gray hover:text-cyber-blue transition-all duration-300 hover:shadow-blue"
            >
              <Mail className="w-5 h-5" />
              <span>princeheriatge1@gmail.com</span>
            </a>
            
            <a 
              href="https://github.com/DIZZTROYER" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-cyber-light-gray hover:text-cyber-green transition-all duration-300 hover:shadow-cyber"
            >
              <Github className="w-5 h-5" />
              <span>github.com/DIZZTROYER</span>
            </a>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              variant="default" 
              size="lg" 
              className="bg-cyber-green hover:bg-cyber-green-glow text-cyber-dark font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-cyber transform hover:scale-105"
            >
              View Projects
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-cyber-dark font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-blue transform hover:scale-105"
            >
              Download Resume
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyber-green rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyber-green rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};