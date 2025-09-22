import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import riprocareImage from "@/assets/riprocare-project.jpg";

const ProjectsSection = () => {
  const featuredProject = {
    title: "RiproCare",
    description: "Riprocare is an innovative healthcare app designed to simplify patient care and bridge the gap between individuals and medical professionals. It provides users with easy access to health records, appointment scheduling, medication reminders, and real-time health tips. The app aims to empower patients by keeping their medical data organized and accessible while ensuring seamless communication with doctors.",
    image: riprocareImage,
    technologies: ["JavaScript", "PostgreSQL"],
    featured: true,
    liveDemo: "#",
    sourceCode: "#"
  };

  return (
    <section id="projects" className="py-20 px-6">
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

        {/* Featured Project */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Project Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
              </div>
            </div>

            {/* Project Details */}
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center px-3 py-1 bg-portfolio-cyan/10 border border-portfolio-cyan/20 rounded-full text-sm text-portfolio-cyan font-medium mb-6">
                Featured
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                {featuredProject.title}
              </h3>
              
              <p className="text-lg text-portfolio-text-muted mb-8 leading-relaxed">
                {featuredProject.description}
              </p>
              
              {/* Technologies */}
              <div className="flex flex-wrap gap-3 mb-8">
                {featuredProject.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-secondary rounded-lg text-sm text-portfolio-text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* Project Links */}
              <div className="flex gap-4">
                <Button
                  className="bg-portfolio-cyan text-background hover:bg-portfolio-cyan-glow"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Button>
                
                <Button
                  variant="outline"
                  className="border-portfolio-cyan text-portfolio-cyan hover:bg-portfolio-cyan hover:text-background"
                >
                  <Github className="mr-2 h-4 w-4" />
                  Source Code
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* More Projects Section */}
        <div className="text-center">
          <div className="bg-card rounded-2xl p-12 mb-12">
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
            >
              <Github className="mr-2 h-5 w-5" />
              View All on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;