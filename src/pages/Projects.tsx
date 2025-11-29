import Navigation from "@/components/Navigation";
import ProjectsSection from "@/components/ProjectsSection";

const Projects = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <div className="pt-20">
        <ProjectsSection />
      </div>
    </div>
  );
};

export default Projects;
