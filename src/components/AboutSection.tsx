import profileImage from "@/assets/profile-about.png";
const AboutSection = () => {
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
  return <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        {/* About Me Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-portfolio-cyan">Me</span>
          </h2>
          <p className="text-xl text-portfolio-text-muted max-w-2xl mx-auto">
            Learn more about my journey and what drives my passion for development
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => <div key={index} className="bg-card rounded-2xl p-8 text-center hover:bg-secondary transition-all duration-300">
              <div className="text-4xl md:text-5xl font-bold text-portfolio-cyan mb-4">
                {stat.number}
              </div>
              <div className="text-lg text-portfolio-text-muted">
                {stat.label}
              </div>
            </div>)}
        </div>

        {/* My Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-portfolio-cyan mb-8">
              My Story
            </h3>
            
            <div className="space-y-6 text-lg text-portfolio-text-muted leading-relaxed">
              <p>I began my journey with programming and competitive coding, solving problems across several online judges for almost two years. During this time, I became a Pupil on Codeforces and achieved a 2★  rating on CodeChef, which helped me sharpen my problem-solving skills and logical thinking.</p>
              
              <p>
                After building a strong foundation in algorithms and data structures, I explored mobile app development and later transitioned into full-stack web development. This allowed me to design and develop responsive, modern applications with seamless user experiences and reliable backend systems.
              </p>
              
              <p>
                Currently, I am expanding my expertise in Machine Learning and Data Science, driven by a passion for creating intelligent, data-driven solutions. My focus is on combining practical software engineering skills with data-driven insights to build impactful applications that bridge technology and real-world needs.
              </p>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-portfolio-cyan/20 to-portfolio-cyan-glow/20 blur-2xl"></div>
                <img src={profileImage} alt="About Rifat" className="w-full h-full rounded-full object-cover relative z-10 bg-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;