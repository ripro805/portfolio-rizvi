import Navigation from "@/components/Navigation";
import ParticipationSection from "@/components/ParticipationSection";

const Participation = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <div className="pt-20">
        <ParticipationSection />
      </div>
    </div>
  );
};

export default Participation;
