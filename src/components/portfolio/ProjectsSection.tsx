import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Code, Shield, Search, Monitor, Keyboard } from "lucide-react";

export const ProjectsSection = () => {
  const projects = [
    {
      title: "DNS Enumeration Tool",
      description: "Custom Python-based DNS enumeration tool for automated reconnaissance, reducing manual effort by 40% in penetration testing engagements.",
      icon: Search,
      technologies: ["Python", "DNS", "Reconnaissance", "Automation"],
      achievements: ["40% reduction in manual effort", "Automated reconnaissance", "Custom tool development"],
      type: "Security Tool",
      github: "#"
    },
    {
      title: "Honeypot Deployment",
      description: "Designed and deployed a comprehensive honeypot system to simulate vulnerable services, capturing attacker behavior and enhancing threat intelligence.",
      icon: Shield,
      technologies: ["Network Security", "Threat Intelligence", "Monitoring", "Docker"],
      achievements: ["Enhanced threat intelligence", "Attacker behavior analysis", "Simulated vulnerable services"],
      type: "Defense System",
      github: "#"
    },
    {
      title: "Security Keylogger",
      description: "Developed a proof-of-concept keylogger for red team demonstrations, highlighting endpoint security risks and reinforcing security awareness training.",
      icon: Keyboard,
      technologies: ["Python", "Red Team", "Endpoint Security", "POC"],
      achievements: ["Red team demonstrations", "Security awareness", "Endpoint risk assessment"],
      type: "Red Team Tool",
      github: "#"
    },
    {
      title: "Intrusion Detection System",
      description: "Created a Python-based IDS to monitor network traffic and detect suspicious activities, reducing manual log analysis time by 60%.",
      icon: Monitor,
      technologies: ["Python", "Network Monitoring", "Machine Learning", "Log Analysis"],
      achievements: ["60% reduction in analysis time", "Automated threat detection", "Real-time monitoring"],
      type: "Monitoring System",
      github: "#"
    },
    {
      title: "PortSwigger Labs Mastery",
      description: "Completed 40+ advanced security labs covering OWASP Top 10 vulnerabilities including XSS, CSRF, SSRF, and SQL Injection.",
      icon: Code,
      technologies: ["Web Security", "OWASP Top 10", "XSS", "CSRF", "SSRF", "SQLi"],
      achievements: ["40+ labs completed", "OWASP Top 10 expertise", "Advanced web security skills"],
      type: "Skill Development",
      github: "#"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Security Tool":
        return "bg-cyber-green text-cyber-dark";
      case "Defense System":
        return "bg-cyber-blue text-cyber-dark";
      case "Red Team Tool":
        return "bg-destructive text-destructive-foreground";
      case "Monitoring System":
        return "bg-accent text-accent-foreground";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <section className="py-20 bg-cyber-darker">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Security <span className="text-cyber-blue">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-cyber mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Innovative cybersecurity projects demonstrating technical expertise and real-world impact
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-gradient-card border-cyber-gray hover:border-cyber-green transition-all duration-300 hover:shadow-cyber group">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-cyber-green/20">
                      <project.icon className="w-6 h-6 text-cyber-green" />
                    </div>
                    <Badge className={getTypeColor(project.type)} variant="secondary">
                      {project.type}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-cyber-green transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-sm font-semibold text-cyber-green mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {project.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                            <div className="w-1 h-1 bg-cyber-blue rounded-full"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-cyber-blue mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="border-cyber-gray text-cyber-light-gray text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex-1 border-cyber-green text-cyber-green hover:bg-cyber-green hover:text-cyber-dark transition-all duration-300"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-cyber-dark transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
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