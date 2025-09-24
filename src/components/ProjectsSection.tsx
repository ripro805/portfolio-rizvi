import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import riprocareImage from "@/assets/riprocare-project.jpg";
import bmiCalculatorImage from "@/assets/bmi-calculator-project.jpg";
import riprophonicImage from "@/assets/riprophonic-project.jpg";
const ProjectsSection = () => {
  const projects = [{
    title: "RiproCare",
    description: "Riprocare is an innovative healthcare app designed to simplify patient care and bridge the gap between individuals and medical professionals. It provides users with easy access to health records, appointment scheduling, medication reminders, and real-time health tips.",
    image: riprocareImage,
    technologies: ["JavaScript", "PostgreSQL"],
    featured: true,
    liveDemo: "https://www.linkedin.com/feed/update/urn:li:activity:7349841134015115264/",
    sourceCode: "https://github.com/ripro805/Riprocaree"
  }, {
    title: "BMICalculator",
    description: "A lightweight and user-friendly mobile application designed to calculate Body Mass Index (BMI) and provide instant feedback on health categories such as underweight, healthy, overweight, and obese. Built with a clean interface for quick health insights.",
    image: bmiCalculatorImage,
    technologies: ["Kotlin"],
    featured: false,
    liveDemo: "https://www.linkedin.com/feed/update/urn:li:activity:7370966538314743809/",
    sourceCode: "https://github.com/ripro805/BMI-Calculator"
  }, {
    title: "RiproPhonic",
    description: "Riprophonic is a sleek, user-friendly music application designed to bring an immersive listening experience to music lovers. It allows users to explore, organize, and enjoy their favorite tracks with an intuitive interface and smooth performance.",
    image: riprophonicImage,
    technologies: ["Kotlin"],
    featured: true,
    liveDemo: "https://www.linkedin.com/feed/update/urn:li:activity:7348087516383617025/",
    sourceCode: "https://github.com/ripro805/Riprophonic"
  }];
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);
  return <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        {/* Projects Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-portfolio-cyan">Projects</span>
          </h2>
          <p className="text-xl text-portfolio-text-muted max-w-2xl mx-auto">
            A showcase of my recent work and the impact they've made
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => <Card key={index} className="bg-card border-border/20 overflow-hidden">
              <div className="relative">
                <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
                <div className="absolute top-4 left-4">
                  <div className="inline-flex items-center px-3 py-1 bg-portfolio-cyan/10 border border-portfolio-cyan/20 rounded-full text-sm text-portfolio-cyan font-medium">
                    Featured
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  {project.title}
                </h3>
                
                <p className="text-portfolio-text-muted mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => <span key={techIndex} className="px-3 py-1 bg-secondary rounded-lg text-sm text-portfolio-text-muted">
                      {tech}
                    </span>)}
                </div>
                
                {/* Project Links */}
                <div className="flex gap-3">
                  <Button 
                    className="bg-portfolio-cyan text-background hover:bg-portfolio-cyan-glow" 
                    size="sm"
                    onClick={() => window.open(project.liveDemo, "_blank")}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="border-portfolio-cyan text-portfolio-cyan hover:bg-portfolio-cyan hover:text-background" 
                    size="sm"
                    onClick={() => window.open(project.sourceCode, "_blank")}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Source Code
                  </Button>
                </div>
              </CardContent>
            </Card>)}
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => <Card key={index} className="bg-card border-border/20 overflow-hidden">
                  <div className="relative">
                    <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                  </div>
                  <CardContent className="p-4">
                    <h4 className="text-xl font-bold mb-3 text-foreground">
                      {project.title}
                    </h4>
                    
                    <p className="text-portfolio-text-muted mb-4 text-sm leading-relaxed">
                      {project.description.length > 120 ? `${project.description.substring(0, 120)}...` : project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => <span key={techIndex} className="px-2 py-1 bg-secondary rounded text-xs text-portfolio-text-muted">
                          {tech}
                        </span>)}
                    </div>
                    
                    {/* Project Links */}
                    <div className="flex gap-2">
                      <Button 
                        className="bg-portfolio-cyan text-background hover:bg-portfolio-cyan-glow" 
                        size="sm"
                        onClick={() => window.open(project.liveDemo, "_blank")}
                      >
                        <ExternalLink className="mr-1 h-3 w-3" />
                        Demo
                      </Button>
                      
                      <Button 
                        variant="outline" 
                        className="border-portfolio-cyan text-portfolio-cyan hover:bg-portfolio-cyan hover:text-background" 
                        size="sm"
                        onClick={() => window.open(project.sourceCode, "_blank")}
                      >
                        <Github className="mr-1 h-3 w-3" />
                        Code
                      </Button>
                    </div>
                  </CardContent>
                </Card>)}
            </div>
          </div>}

        {/* More Projects Section */}
        <div className="text-center">
          <div className="bg-card rounded-2xl p-12">
            <h3 className="text-3xl font-bold mb-6">
              More <span className="text-portfolio-cyan">Projects</span>
            </h3>
            <p className="text-xl text-portfolio-text-muted mb-8 max-w-2xl mx-auto">
              These are just a few highlights. I've worked on many more projects ranging from
              simple landing pages to complex enterprise applications.
            </p>
            
            <Button 
              variant="outline" 
              className="border-portfolio-cyan text-portfolio-cyan hover:bg-portfolio-cyan hover:text-background px-8 py-3"
              onClick={() => window.open("https://github.com/ripro805?tab=repositories", "_blank")}
            >
              <Github className="mr-2 h-5 w-5" />
              View All on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default ProjectsSection;