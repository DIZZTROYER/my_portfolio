import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Sword, Wrench, Award } from "lucide-react";

export const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Sword,
      title: "Offensive Security",
      color: "cyber-green",
      skills: [
        { name: "Penetration Testing", level: 95 },
        { name: "Red Teaming", level: 90 },
        { name: "Adversary Emulation", level: 88 },
        { name: "Vulnerability Assessment", level: 92 },
        { name: "Ethical Hacking", level: 94 },
        { name: "Web Application Testing", level: 90 },
        { name: "Network Troubleshooting", level: 85 },
        { name: "Python Scripting", level: 93 },
        { name: "PowerShell", level: 80 }
      ]
    },
    {
      icon: Wrench,
      title: "Tools & Frameworks",
      color: "cyber-blue",
      skills: [
        { name: "Metasploit", level: 92 },
        { name: "Burp Suite", level: 95 },
        { name: "Kali Linux", level: 98 },
        { name: "Nmap", level: 90 },
        { name: "Nessus", level: 88 },
        { name: "Cobalt Strike", level: 85 },
        { name: "CAIDO", level: 82 }
      ]
    },
    {
      icon: Award,
      title: "Compliance & Leadership",
      color: "accent",
      skills: [
        { name: "Project Management", level: 87 },
        { name: "Team Leadership", level: 90 },
        { name: "Mentoring", level: 85 },
        { name: "Data Analysis", level: 88 },
        { name: "Security Policy Development", level: 85 },
        { name: "NIST Framework", level: 82 },
        { name: "ISO 27001", level: 80 },
        { name: "Communication", level: 92 },
        { name: "Public Speaking", level: 78 }
      ]
    }
  ];

  const getProgressColor = (color: string) => {
    switch (color) {
      case "cyber-green":
        return "bg-cyber-green";
      case "cyber-blue":
        return "bg-cyber-blue";
      default:
        return "bg-accent";
    }
  };

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
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-foreground">{skill.name}</span>
                          <Badge variant="secondary" className="text-xs bg-cyber-gray text-cyber-light-gray">
                            {skill.level}%
                          </Badge>
                        </div>
                        <div className="w-full bg-cyber-gray rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full transition-all duration-1000 ease-out ${getProgressColor(category.color)}`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
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