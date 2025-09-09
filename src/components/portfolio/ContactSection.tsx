import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Github, MessageSquare, Send } from "lucide-react";

export const ContactSection = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "princeheriatge1@gmail.com",
      href: "mailto:princeheriatge1@gmail.com",
      description: "Get in touch for professional inquiries"
    },
    
    {
      icon: Phone,
      title: "Phone",
      value: "+234 704 266 5679",
      href: "tel:+2347042665679",
      description: "Available for consultations and discussions"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "github.com/DIZZTROYER",
      href: "https://github.com/DIZZTROYER",
      description: "Explore my security projects and contributions"
    }
  ];

  return (
    <section className="py-20 bg-cyber-darker relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-20 w-64 h-64 bg-cyber-green opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-96 h-96 bg-cyber-blue opacity-5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Let's <span className="text-cyber-green">Connect</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-cyber mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to collaborate on cybersecurity projects or discuss security solutions? 
              I'm always open to new opportunities and challenges.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contact Information */}
            <div>
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  <MessageSquare className="w-6 h-6 text-cyber-blue inline mr-2" />
                  Get In Touch
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you're looking for cybersecurity expertise, penetration testing services, 
                  or want to discuss the latest security trends, I'd love to hear from you. 
                  Let's work together to build a more secure digital world.
                </p>
              </div>
              
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <Card key={index} className="bg-gradient-card border-cyber-gray hover:border-cyber-green transition-all duration-300 hover:shadow-cyber group">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-cyber-green/20 group-hover:bg-cyber-green/30 transition-colors duration-300">
                          <method.icon className="w-6 h-6 text-cyber-green" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-1">{method.title}</h4>
                          <a 
                            href={method.href}
                            target={method.title === "GitHub" ? "_blank" : undefined}
                            rel={method.title === "GitHub" ? "noopener noreferrer" : undefined}
                            className="text-cyber-blue hover:text-cyber-blue-glow transition-colors duration-300 font-medium"
                          >
                            {method.value}
                          </a>
                          <p className="text-sm text-muted-foreground mt-1">{method.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            {/* Call to Action */}
            <div>
              <Card className="bg-gradient-card border-cyber-green shadow-cyber">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-cyber-green/20 mb-6">
                    <Send className="w-10 h-10 text-cyber-green" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Secure Your Digital Assets?</h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    I specialize in penetration testing, vulnerability assessments, and red team operations. 
                    Let's discuss how I can help strengthen your organization's security posture.
                  </p>
                  
                  <div className="space-y-4">
                    <Button 
                      size="lg" 
                      className="w-full bg-cyber-green hover:bg-cyber-green-glow text-cyber-dark font-semibold py-3 transition-all duration-300 hover:shadow-cyber transform hover:scale-105"
                    >
                      <Mail className="w-5 h-5 mr-2" />
                      Send Me an Email
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="w-full border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-cyber-dark font-semibold py-3 transition-all duration-300 hover:shadow-blue transform hover:scale-105"
                    >
                      <Github className="w-5 h-5 mr-2" />
                      View My GitHub
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Footer */}
          <div className="text-center mt-16 pt-8 border-t border-cyber-gray">
            <p className="text-muted-foreground">
              © 2024 Mojetioluwa Bolaji-Busola. All rights reserved. | 
              <span className="text-cyber-green ml-2">Cybersecurity Professional</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};