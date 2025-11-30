import { Code2, Globe, Database, Wrench, BarChart3 } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      iconColor: "text-blue-400",
      skills: ["C", "C++", "Java", "Python", "JavaScript", "TypeScript"]
    },
    {
      title: "Web Technologies",
      icon: Globe,
      iconColor: "text-green-400",
      skills: ["HTML", "CSS", "React", "Node.js", "Express", "REST APIs"]
    },
    {
      title: "Database",
      icon: Database,
      iconColor: "text-purple-400",
      skills: ["MySQL", "MongoDB"]
    },
    {
      title: "Data Analysis & Visualization",
      icon: BarChart3,
      iconColor: "text-cyan-400",
      skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn"]
    },
    {
      title: "Development Tools",
      icon: Wrench,
      iconColor: "text-orange-400",
      skills: ["Git", "VS Code", "Docker", "GitHub", "Proteus", "MS Office", "LaTeX"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto">
        {/* Skills Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-portfolio-cyan">Skills</span>
          </h2>
          <p className="text-xl text-portfolio-text-muted max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 hover:bg-secondary transition-all duration-300 group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`w-16 h-16 rounded-2xl bg-secondary/50 flex items-center justify-center mb-6 group-hover:bg-portfolio-cyan/10 transition-all duration-300`}>
                    <IconComponent className={`h-8 w-8 ${category.iconColor}`} />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-6 text-foreground">
                    {category.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-secondary rounded-lg text-sm text-portfolio-text-muted hover:bg-portfolio-cyan hover:text-background transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;