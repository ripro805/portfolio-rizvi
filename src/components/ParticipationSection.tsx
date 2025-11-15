import { Trophy, Users, Rocket, Code } from "lucide-react";

const ParticipationSection = () => {
  const participations = [
    {
      placement: "5th Place",
      event: "GSTU Programming Club Contest (Junior Category)",
      date: "August 2024",
      icon: Trophy,
      highlight: "Secured top 5 position competing against talented junior programmers",
      color: "text-yellow-500"
    },
    {
      placement: "31st Place",
      event: "SynergyX 2024 powered by Khulna University",
      date: "2024",
      team: "BSMRSTU_MICKY_MOUSE",
      icon: Code,
      highlight: "Competed with university teams in a premier programming competition",
      color: "text-blue-500"
    },
    {
      placement: "Participant",
      event: "NASA Space App Challenge",
      date: "2025",
      icon: Rocket,
      highlight: "Collaborated on innovative space-themed solutions in a global hackathon",
      color: "text-purple-500"
    },
    {
      placement: "Participant",
      event: "NWU CSE FEST 2025 powered by North Western University, Khulna",
      date: "2025",
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
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Events • Competitions • Hackathons
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
