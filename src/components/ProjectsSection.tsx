import { ExternalLink, Github, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import riprocareImage from "@/assets/riprocare-project-new.png";
import bmiCalculatorImage from "@/assets/bmi-calculator-project-new.png";
import riprophonicImage from "@/assets/riprophonic-project-new.png";
import { useState } from "react";
const ProjectsSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const projects = [{
    title: "RiproCare",
    description: "Riprocare is an innovative healthcare app designed to simplify patient care and bridge the gap between individuals and medical professionals. It provides users with easy access to health records, appointment scheduling, medication reminders, and real-time health tips.",
    image: riprocareImage,
    technologies: ["JavaScript", "Java", "PostgreSQL"],
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

        {/* Featured Projects - Horizontal Layout */}
        <div className="space-y-12 mb-16">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="bg-card border-border/20 overflow-hidden">
              <div className={`flex flex-col lg:flex-row ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} items-center gap-8 p-8`}>
                {/* Project Image */}
                <div className="flex-1 relative group">
                  <div className="relative overflow-hidden rounded-xl">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-80 object-cover cursor-pointer transition-transform duration-300 group-hover:scale-105" 
                      onClick={() => setSelectedImage(project.image)}
                    />
                    <div className="absolute top-4 left-4">
                      <div className="inline-flex items-center px-4 py-2 bg-portfolio-cyan text-background rounded-full text-sm font-medium shadow-lg">
                        Featured
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="flex-1 space-y-6">
                  <h3 className="text-3xl lg:text-4xl font-bold text-foreground">
                    {project.title}
                  </h3>
                  
                  <p className="text-portfolio-text-muted text-lg leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="px-4 py-2 bg-secondary rounded-lg text-sm font-medium text-portfolio-text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Project Links */}
                  <div className="flex gap-4 pt-4">
                    <Button 
                      className="bg-portfolio-cyan text-background hover:bg-portfolio-cyan-glow shadow-lg hover:shadow-portfolio-cyan/25 transition-all duration-300" 
                      size="lg"
                      onClick={() => window.open(project.liveDemo, "_blank")}
                    >
                      <ExternalLink className="mr-2 h-5 w-5" />
                      Live Demo
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="border-portfolio-cyan text-portfolio-cyan hover:bg-portfolio-cyan hover:text-background shadow-lg transition-all duration-300" 
                      size="lg"
                      onClick={() => window.open(project.sourceCode, "_blank")}
                    >
                      <Github className="mr-2 h-5 w-5" />
                      Source Code
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && <div className="mb-16">
            {/* BMI Calculator - Special Horizontal Layout */}
            {otherProjects.filter(p => p.title === "BMICalculator").map((project, index) => (
              <Card key={index} className="bg-card border-border/20 overflow-hidden mb-12">
                <div className="flex flex-col lg:flex-row items-center gap-8 p-8">
                  {/* Project Content */}
                  <div className="flex-1 space-y-6">
                    <h3 className="text-3xl lg:text-4xl font-bold text-foreground">
                      {project.title}
                    </h3>
                    
                    <p className="text-portfolio-text-muted text-lg leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className="px-4 py-2 bg-secondary rounded-lg text-sm font-medium text-portfolio-text-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Project Links */}
                    <div className="flex gap-4 pt-4">
                      <Button 
                        className="bg-portfolio-cyan text-background hover:bg-portfolio-cyan-glow shadow-lg hover:shadow-portfolio-cyan/25 transition-all duration-300" 
                        size="lg"
                        onClick={() => window.open(project.liveDemo, "_blank")}
                      >
                        <ExternalLink className="mr-2 h-5 w-5" />
                        Live Demo
                      </Button>
                      
                      <Button 
                        variant="outline" 
                        className="border-portfolio-cyan text-portfolio-cyan hover:bg-portfolio-cyan hover:text-background shadow-lg transition-all duration-300" 
                        size="lg"
                        onClick={() => window.open(project.sourceCode, "_blank")}
                      >
                        <Github className="mr-2 h-5 w-5" />
                        Source Code
                      </Button>
                    </div>
                  </div>

                  {/* Project Image */}
                  <div className="flex-1 relative group">
                    <div className="relative overflow-hidden rounded-xl">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-80 object-cover cursor-pointer transition-transform duration-300 group-hover:scale-105" 
                        onClick={() => setSelectedImage(project.image)}
                      />
                    </div>
                  </div>
                </div>
              </Card>
            ))}

            {/* Other Regular Projects Grid */}
            {otherProjects.filter(p => p.title !== "BMICalculator").length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherProjects.filter(p => p.title !== "BMICalculator").map((project, index) => <Card key={index} className="bg-card border-border/20 overflow-hidden">
                    <div className="relative">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-48 object-cover cursor-pointer transition-transform hover:scale-105" 
                        onClick={() => setSelectedImage(project.image)}
                      />
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
            )}
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

        {/* Image Zoom Modal with Lighting Effect */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full animate-scale-in">
              <div className="absolute inset-0 bg-gradient-radial from-white/20 via-transparent to-transparent rounded-lg blur-xl"></div>
              <img 
                src={selectedImage} 
                alt="Zoomed project image" 
                className="relative max-w-full max-h-full object-contain rounded-lg shadow-2xl shadow-portfolio-cyan/20"
                onClick={(e) => e.stopPropagation()}
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-4 -right-4 bg-portfolio-cyan text-background rounded-full p-3 hover:bg-portfolio-cyan-glow transition-all duration-300 shadow-lg hover:shadow-portfolio-cyan/50"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>;
};
export default ProjectsSection;