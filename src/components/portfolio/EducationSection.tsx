import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Shield, Cloud, Network, Lock } from "lucide-react";

export const EducationSection = () => {
  const certifications = [
    { name: "AWC Cloud Practitioner", icon: Cloud, color: "cyber-blue" },
    { name: "CEH (Certified Ethical Hacker)", icon: Shield, color: "cyber-green" },
    { name: "ISC2 Certified in Cybersecurity (CC)", icon: Lock, color: "cyber-green" },
    { name: "Google Cybersecurity Professional", icon: Shield, color: "cyber-blue" },
    { name: "CompTIA Network+", icon: Network, color: "accent" },
    { name: "CompTIA Security+", icon: Shield, color: "cyber-green" },
    { name: "Cisco Ethical Hacker", icon: Shield, color: "cyber-blue" },
    { name: "OBTranslate Prompt Engineering", icon: Award, color: "accent" }
  ];

  const getIconColor = (color: string) => {
    switch (color) {
      case "cyber-green":
        return "text-cyber-green";
      case "cyber-blue":
        return "text-cyber-blue";
      default:
        return "text-accent";
    }
  };

  const getBorderColor = (color: string) => {
    switch (color) {
      case "cyber-green":
        return "border-cyber-green";
      case "cyber-blue":
        return "border-cyber-blue";
      default:
        return "border-accent";
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Education & <span className="text-cyber-green">Certifications</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-cyber mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Continuous learning and professional development in cybersecurity and technology
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Education */}
            <Card className="bg-gradient-card border-cyber-gray hover:border-cyber-green transition-all duration-300 hover:shadow-cyber">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyber-green/20 mr-4">
                    <GraduationCap className="w-8 h-8 text-cyber-green" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Education</h3>
                    <div className="w-12 h-1 bg-cyber-green mt-2"></div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">Bachelor's Degree in Computer Science</h4>
                    <p className="text-cyber-blue font-medium mb-2">Covenant University</p>
                    <p className="text-muted-foreground">Ota, Nigeria</p>
                  </div>
                  
                  <div className="pt-4 border-t border-cyber-gray">
                    <p className="text-muted-foreground leading-relaxed">
                      Comprehensive computer science education with focus on cybersecurity, 
                      network security, and software development. Gained strong foundation 
                      in programming, system administration, and security principles.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Key Stats */}
            <Card className="bg-gradient-card border-cyber-gray hover:border-cyber-blue transition-all duration-300 hover:shadow-blue">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyber-blue/20 mr-4">
                    <Award className="w-8 h-8 text-cyber-blue" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Achievements</h3>
                    <div className="w-12 h-1 bg-cyber-blue mt-2"></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyber-green mb-2">8+</div>
                    <p className="text-muted-foreground">Professional Certifications</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyber-blue mb-2">40+</div>
                    <p className="text-muted-foreground">PortSwigger Labs</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent mb-2">5+</div>
                    <p className="text-muted-foreground">Security Projects</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyber-green mb-2">2+</div>
                    <p className="text-muted-foreground">Years Experience</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Certifications Grid */}
          <div>
            <h3 className="text-2xl font-bold text-center text-foreground mb-8">
              Professional <span className="text-cyber-blue">Certifications</span>
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className={`bg-gradient-card border-cyber-gray hover:${getBorderColor(cert.color)} transition-all duration-300 hover:shadow-cyber group`}>
                  <CardContent className="p-6 text-center">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-${cert.color}/20 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <cert.icon className={`w-6 h-6 ${getIconColor(cert.color)}`} />
                    </div>
                    <h4 className="font-semibold text-foreground text-sm leading-tight group-hover:text-cyber-green transition-colors duration-300">
                      {cert.name}
                    </h4>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};