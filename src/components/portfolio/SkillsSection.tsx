import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sword, Wrench, Award } from "lucide-react";

export const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Sword,
      title: "Offensive Security",
      color: "cyber-green",
      skills: [
        "Penetration Testing",
        "Red Teaming", 
        "Adversary Emulation",
        "Vulnerability Assessment",
        "Ethical Hacking",
        "Web Application Testing",
        "Network Troubleshooting",
        "Python Scripting",
        "PowerShell"
      ]
    },
    {
      icon: Wrench,
      title: "Tools & Frameworks",
      color: "cyber-blue",
      skills: [
        "Metasploit",
        "Burp Suite",
        "Kali Linux", 
        "Nmap",
        "Nessus",
        "Cobalt Strike",
        "CAIDO"
      ]
    },
    {
      icon: Award,
      title: "Compliance & Leadership",
      color: "accent",
      skills: [
        "Project Management",
        "Team Leadership",
        "Mentoring", 
        "Data Analysis",
        "Security Policy Development",
        "NIST Framework",
        "ISO 27001",
        "Communication",
        "Public Speaking"
      ]
    }
  ];


  return (
    <section className="py-20 bg-cyber-darker">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Technical <span className="text-cyber-blue">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-cyber mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive skill set spanning offensive security, industry-standard tools, and leadership capabilities
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="bg-gradient-card border-cyber-gray hover:border-cyber-green transition-all duration-300 hover:shadow-cyber">
                <CardHeader className="text-center pb-4">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 mx-auto bg-${category.color}/20`}>
                    <category.icon className={`w-8 h-8 text-${category.color}`} />
                  </div>
                  <CardTitle className="text-xl text-foreground">{category.title}</CardTitle>
                </CardHeader>
                
                <CardContent>
                  <div className="grid grid-cols-1 gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className={`text-sm font-medium py-2 px-4 bg-${category.color}/10 text-${category.color} border border-${category.color}/20 hover:bg-${category.color}/20 transition-all duration-300`}
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
      </div>
    </section>
  );
};