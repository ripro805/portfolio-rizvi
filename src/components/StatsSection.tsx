const StatsSection = () => {
  const stats = [{
    number: "5+",
    label: "Projects Completed"
  }, {
    number: "3+",
    label: "Years Experience"
  }, {
    number: "500+",
    label: "Problems Solved"
  }];
  
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-card rounded-2xl p-8 text-center hover:bg-secondary transition-all duration-300">
              <div className="text-4xl md:text-5xl font-bold text-portfolio-cyan mb-4">
                {stat.number}
              </div>
              <div className="text-lg text-portfolio-text-muted">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;