import Navigation from "@/components/Navigation";
import AchievementsSection from "@/components/AchievementsSection";

const Achievements = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <div className="pt-20">
        <AchievementsSection />
      </div>
    </div>
  );
};

export default Achievements;
