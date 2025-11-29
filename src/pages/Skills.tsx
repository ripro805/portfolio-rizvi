import Navigation from "@/components/Navigation";
import SkillsSection from "@/components/SkillsSection";

const Skills = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <div className="pt-20">
        <SkillsSection />
      </div>
    </div>
  );
};

export default Skills;
