import { Trophy, Users, Rocket, Code } from "lucide-react";

const ParticipationSection = () => {
  const participations = [
    {
      placement: "5th Place",
      event: "GSTU Programming Club Contest (Junior Category)",
      date: "August 2024",
      icon: Trophy,
      highlight: "Showcased problem-solving and algorithmic skills among junior-level coders",
      color: "text-yellow-500"
    },
    {
      placement: "31st Place",
      event: "SynergyX 2024 powered by Khulna University",
      date: "10 November 2024",
      team: "BSMRSTU_MICKY_MOUSE",
      icon: Code,
      highlight: "Collaborated in a competitive coding environment, tackling real-world programming challenges",
      color: "text-blue-500"
    },
    {
      placement: "Top 100",
      event: "Solvio AI Hackathon 2025",
      date: "2025",
      team: "Team Lead",
      icon: Rocket,
      highlight: "Led the development of an AI-driven, real-world problem-solving solution focused on innovation, practical impact, and effective execution in a nationwide hackathon",
      color: "text-cyan-500"
    },
    {
      placement: "Participant",
      event: "NASA Space App Challenge 2025",
      date: "October 2025",
      team: "Aqua Avenger",
      icon: Rocket,
      highlight: "Contributed to innovative solutions in space and technology-themed problem statements",
      color: "text-purple-500"
    },
    {
      placement: "Participant",
      event: "NWU CSE FEST 2025 powered by North Western University, Khulna",
      date: "11 November 2025",
      team: "GSTU_Syntax_Samurais",
      icon: Users,
      highlight: "Participated as team lead in inter-university tech competition",
      color: "text-green-500"
    }
  ];

  return (
    <section id="participation" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-foreground">Events • Competitions • </span>
            <span className="text-portfolio-cyan">Hackathons</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Engaging in competitive programming and collaborative tech events to push boundaries and learn
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {participations.map((item, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/50"
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg bg-secondary/50 ${item.color} group-hover:scale-110 transition-transform`}>
                  <item.icon className="w-6 h-6" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="font-bold text-lg text-foreground">
                      {item.placement}
                    </span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-primary font-medium">
                      {item.event}
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-2">
                    <span>{item.date}</span>
                    {item.team && (
                      <>
                        <span>•</span>
                        <span className="font-medium">Team: {item.team}</span>
                      </>
                    )}
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.highlight}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ParticipationSection;
