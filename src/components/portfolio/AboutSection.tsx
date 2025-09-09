import { Card, CardContent } from "@/components/ui/card";
import { Shield, Target, Code, Users } from "lucide-react";

export const AboutSection = () => {
  const highlights = [
    {
      icon: Shield,
      title: "Security First",
      description: "2+ years defending organizations against cyber threats"
    },
    {
      icon: Target,
      title: "Precision Testing",
      description: "25% reduction in security incidents through advanced pentesting"
    },
    {
      icon: Code,
      title: "Automation Expert",
      description: "96% efficiency improvement through Python automation"
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "79% reduction in incident response time leading cross-functional teams"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Professional <span className="text-cyber-green">Summary</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-cyber mx-auto mb-8"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Cybersecurity professional with over <span className="text-cyber-green font-semibold">2 years of experience</span> in 
                penetration testing, ethical hacking, and web application security. Proficient in conducting vulnerability 
                assessments, adversary emulation, and red team operations to enhance organizational security.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Skilled in <span className="text-cyber-blue font-semibold">Python scripting</span> for automation and custom tool development, 
                with expertise in <span className="text-cyber-green font-semibold">OWASP Top 10 vulnerabilities</span>. 
                Passionate about staying ahead of emerging threats and continuously improving security postures.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <Card key={index} className="bg-gradient-card border-cyber-gray hover:border-cyber-green transition-all duration-300 hover:shadow-cyber group">
                  <CardContent className="p-6 text-center">
                    <highlight.icon className="w-12 h-12 text-cyber-green mx-auto mb-4 group-hover:text-cyber-green-glow transition-colors duration-300" />
                    <h3 className="font-semibold text-foreground mb-2">{highlight.title}</h3>
                    <p className="text-sm text-muted-foreground">{highlight.description}</p>
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