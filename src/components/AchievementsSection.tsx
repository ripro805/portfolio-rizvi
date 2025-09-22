import { Trophy, Star, CheckCircle, Award, Code } from "lucide-react";

const AchievementsSection = () => {
  const competitiveProgramming = [
    {
      icon: Code,
      title: "Pupil at Codeforces",
      username: "rifatrizvi2.o",
      description: "Active competitive programmer on Codeforces platform",
      color: "text-purple-400"
    },
    {
      icon: Star,
      title: "2-Star Coder at CodeChef",
      username: "zest_fleck_20",
      description: "Achieved 2-star rating through consistent performance",
      color: "text-yellow-400"
    },
    {
      icon: CheckCircle,
      title: "47+ Problems Solved on LeetCode",
      username: "rifatrizvi2o",
      description: "Successfully solved diverse algorithmic challenges",
      color: "text-green-400"
    },
    {
      icon: Trophy,
      title: "50+ Problems Solved",
      username: "rifatrizvi2_o",
      description: "Solved challenging problems across multiple online judges",
      color: "text-blue-400"
    },
    {
      icon: Code,
      title: "Active on AtCoder",
      username: "rifatrizvi2o",
      description: "Participating in AtCoder competitive programming contests",
      color: "text-red-400"
    }
  ];

  const certificates = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      category: "Cloud Computing",
      date: "March 2024",
      description: "Professional level certification for designing distributed systems on AWS"
    },
    {
      title: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      category: "Cloud Computing", 
      date: "January 2024",
      description: "Professional certification for building scalable applications on Google Cloud"
    },
    {
      title: "React Developer Certification",
      issuer: "Meta",
      category: "Frontend Development",
      date: "December 2023", 
      description: "Advanced React development concepts and best practices"
    }
  ];

  return (
    <section id="achievements" className="py-20 px-6">
      <div className="container mx-auto">
        {/* Competitive Programming Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <Trophy className="inline-block h-12 w-12 text-portfolio-cyan mr-4" />
              Competitive <span className="text-portfolio-cyan">Programming</span>
            </h2>
            <p className="text-xl text-portfolio-text-muted max-w-3xl mx-auto">
              Showcasing my problem-solving skills and algorithmic thinking through
              competitive programming
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {competitiveProgramming.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-8 hover:bg-secondary transition-all duration-300 group"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-secondary/50 flex items-center justify-center group-hover:bg-portfolio-cyan/10 transition-all duration-300">
                      <IconComponent className={`h-8 w-8 ${achievement.color}`} />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 text-foreground">
                      {achievement.title}
                    </h3>
                    
                    <p className="text-portfolio-cyan font-medium mb-4">
                      {achievement.username}
                    </p>
                    
                    <p className="text-portfolio-text-muted">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Certificates Section */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-portfolio-cyan">Certificates</span>
            </h2>
            <p className="text-xl text-portfolio-text-muted max-w-3xl mx-auto">
              Professional certifications and achievements that validate my expertise in
              various technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 hover:bg-secondary transition-all duration-300 group"
              >
                <div className="mb-6">
                  <div className="w-12 h-12 bg-portfolio-cyan/10 rounded-lg flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 text-portfolio-cyan" />
                  </div>
                  
                  <span className="text-sm text-portfolio-cyan font-medium">
                    {cert.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-foreground">
                  {cert.title}
                </h3>
                
                <p className="text-portfolio-text-muted mb-4">
                  {cert.issuer}
                </p>
                
                <p className="text-sm text-portfolio-text-muted mb-6">
                  {cert.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-portfolio-text-muted">
                    📅 Issued {cert.date}
                  </span>
                  
                  <button className="text-portfolio-cyan hover:text-portfolio-cyan-glow transition-colors duration-300 text-sm font-medium">
                    View Certificate ↗
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;