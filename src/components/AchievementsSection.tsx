import { Trophy, Star, CheckCircle, Award, Code, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const AchievementsSection = () => {
  const competitiveProgramming = [
    {
      icon: Code,
      title: "Pupil at Codeforces",
      username: "rifatrizvi2.o",
      description: "Active competitive programmer on Codeforces platform",
      color: "text-purple-400",
      url: "https://codeforces.com/profile/rifatrizvi2.o"
    },
    {
      icon: Star,
      title: "2-Star Coder at CodeChef",
      username: "zest_fleck_20",
      description: "Achieved 2-star rating through consistent performance",
      color: "text-yellow-400",
      url: "https://www.codechef.com/users/zest_fleck_20"
    },
    {
      icon: CheckCircle,
      title: "47+ Problems Solved on LeetCode",
      username: "rifatrizvi2o",
      description: "Successfully solved diverse algorithmic challenges",
      color: "text-green-400",
      url: "https://leetcode.com/u/rifatrizvi2o/"
    },
    {
      icon: Trophy,
      title: "50+ Problems Solved on Vjudge",
      username: "rifatrizvi2_o",
      description: "Solved challenging problems across multiple online judges",
      color: "text-blue-400",
      url: "https://vjudge.net/group/xpsc-06-super-zone"
    },
    {
      icon: Code,
      title: "Active on AtCoder",
      username: "rifatrizvi2o",
      description: "Participating in AtCoder competitive programming contests",
      color: "text-red-400",
      url: "https://atcoder.jp/users/rifatrizvi2o"
    }
  ];

  const certificates = [
    {
      title: "CodeChef 2★ Coder Rank",
      issuer: "Phitron.io",
      category: "Programming & Problem Solving",
      date: "September 2025",
      description: "Achieved outstanding results in CodeChef with 2 Star Coder Rank from Phitron Batch 6.",
      url: "https://drive.google.com/file/d/1LdUNgHnXTNlSGCPvev31ySLdfniIu4II/view?usp=sharing"
    },
    {
      title: "Introduction to 2D Animation",
      issuer: "Grameenphone Academy",
      category: "Creative Skills & Animation",
      date: "November 21, 2025",
      description: "Completed a certified training program on 2D Animation, covering animation principles, movement, timing, and storytelling. Awarded Certificate of Excellence.",
      url: "https://drive.google.com/file/d/1tAlkRg578_acFiPk-N0k7zO3wbzjo-wg/view?usp=drive_link"
    },
    {
      title: "Excel Essentials for Workplace Productivity",
      issuer: "Passport to Earning Bangladesh (under UNICEF & Generation Unlimited)",
      category: "Professional Development",
      date: "November 03, 2025",
      recipient: "Md. Rifat Islam Rizvi",
      description: "Comprehensive training in workplace Excel productivity and data management skills.",
      url: "#"
    },
    {
      title: "Stepping into Data Analytics",
      issuer: "Data Solution 360 (UNICEF GenU P2E Program)",
      category: "Data Analytics & Business Intelligence",
      date: "25 November 2025",
      recipient: "Md. Rifat Islam Rizvi",
      description: "Completed an intensive 5-day certified course covering Excel navigation, data cleaning, core and conditional functions, logical formulas, error handling, Pivot Tables, Charts, Slicers, Data Validation, and Excel Tables. Awarded Certificate of Excellence for outstanding performance.",
      url: "https://drive.google.com/file/d/14wl40JQsjXTZDpm8S3nu7Z4nMtDKkyjm/view?usp=sharing"
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
                    
                    <a
                      href={achievement.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-portfolio-cyan font-medium mb-4 hover:text-portfolio-cyan-glow transition-colors duration-300 cursor-pointer block"
                    >
                      {achievement.username}
                    </a>
                    
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
                  
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-portfolio-cyan hover:text-portfolio-cyan-glow transition-colors duration-300 text-sm font-medium"
                  >
                    View Certificate ↗
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Button
              asChild
              size="lg"
              className="rounded-full"
            >
              <a
                href="https://drive.google.com/drive/folders/1VhgdveqKXIybtdd70aBjfAOcN7TMbiEv?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                View All Certificates
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;