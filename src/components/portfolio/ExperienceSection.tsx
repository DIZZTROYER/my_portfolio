import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, TrendingUp } from "lucide-react";

export const ExperienceSection = () => {
  const experiences = [
    {
      title: "Vulnerability Assessment and Penetration Testing (VAPT)",
      company: "Covenant University",
      location: "Ogun State, Nigeria",
      period: "October 2023 – Present",
      type: "Current Position",
      achievements: [
        "Conducted advanced penetration tests and red team operations across diverse network environments using Metasploit, Burp Suite, Nmap, Nessus, and Cobalt Strike",
        "Reduced security incidents by 85% through comprehensive vulnerability assessments",
        "Performed adversary emulation to simulate real-world cyber threats, identifying critical vulnerabilities",
        "Developed and maintained custom Python scripts for automation, improving efficiency by 96%",
        "Led cross-functional security teams, reducing incident response time and operational costs by 79%",
        "Ensured compliance with NIST and ISO 27001 standards through aligned security practices"
      ],
      technologies: ["Metasploit", "Burp Suite", "Nmap", "Nessus", "Cobalt Strike", "Python", "NIST", "ISO 27001"]
    },
    {
      title: "Project Management & Coordinator",
      company: "Covenant University",
      location: "Ogun State, Nigeria",
      period: "May 2025 – July 2025",
      type: "Leadership Role",
      achievements: [
        "Directed cross-functional teams to deliver projects on schedule and within scope using Agile methodologies",
        "Facilitated sprint planning and retrospectives, improving project turnaround time by 30%",
        "Maintained accurate records and streamlined data management systems using Python automation",
        "Identified workflow inefficiencies and recommended process optimizations to enhance team productivity"
      ],
      technologies: ["Agile", "Python", "Project Management", "Team Leadership"]
    },
    {
      title: "Network Configuration and Support Technician",
      company: "Higher Ground Integrated Academy",
      location: "Ekiti, Nigeria",
      period: "June 2021 – December 2023",
      type: "Technical Role",
      achievements: [
        "Led cross-functional teams to identify and remediate infrastructure weaknesses",
        "Achieved industry standard 99.999% network uptime through proactive monitoring and rapid issue resolution",
        "Configured network devices for stable campus connectivity with integrated vulnerability assessments",
        "Implemented security best practices across network infrastructure"
      ],
      technologies: ["Network Security", "Infrastructure", "Vulnerability Assessment", "Network Configuration"]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Current Position":
        return "bg-cyber-green text-cyber-dark";
      case "Leadership Role":
        return "bg-cyber-blue text-cyber-dark";
      default:
        return "bg-accent text-accent-foreground";
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Professional <span className="text-cyber-green">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-cyber mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A proven track record of delivering measurable security improvements and leading high-impact projects
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-gradient-cyber"></div>
            
            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyber-green rounded-full border-4 border-background shadow-cyber z-10"></div>
                  
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} ml-8 md:ml-0`}>
                    <Card className="bg-gradient-card border-cyber-gray hover:border-cyber-green transition-all duration-300 hover:shadow-cyber">
                      <CardContent className="p-6">
                        <div className="flex flex-wrap items-center gap-2 mb-4">
                          <Badge className={getTypeColor(experience.type)}>
                            {experience.type}
                          </Badge>
                          <div className="flex items-center text-cyber-light-gray text-sm">
                            <Calendar className="w-4 h-4 mr-1" />
                            {experience.period}
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-foreground mb-2">{experience.title}</h3>
                        
                        <div className="flex items-center text-cyber-blue mb-4">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span className="font-medium">{experience.company}</span>
                          <span className="mx-2">•</span>
                          <span>{experience.location}</span>
                        </div>
                        
                        <div className="space-y-3 mb-6">
                          {experience.achievements.map((achievement, achievementIndex) => (
                            <div key={achievementIndex} className="flex items-start gap-2">
                              <TrendingUp className="w-4 h-4 text-cyber-green mt-0.5 flex-shrink-0" />
                              <p className="text-muted-foreground text-sm leading-relaxed">{achievement}</p>
                            </div>
                          ))}
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline" className="border-cyber-gray text-cyber-light-gray hover:border-cyber-green hover:text-cyber-green transition-colors duration-300">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
