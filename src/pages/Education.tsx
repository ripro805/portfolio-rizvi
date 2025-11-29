import Navigation from "@/components/Navigation";
import { GraduationCap, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Education = () => {
  const [showAllCourses, setShowAllCourses] = useState(false);

  const educationData = [
    {
      degree: "B.Sc. in Computer Science and Engineering",
      institution: "Gopalganj Science and Technology University (GSTU)",
      duration: "2023–Present",
      icon: "🎓",
      majorCourses: [
        "Structured Programming Language",
        "Discrete Mathematics",
        "Differential and Integral Calculus",
        "Object Oriented Programming I (C++ & Java)",
        "Electronic Devices and Circuits",
        "Coordinate Geometry and Ordinary Differential Equation",
        "Physics",
        "Data Structure",
        "Digital Logic Design",
        "Electrical Drives and Instrumentation",
        "Object Oriented Programming II (Python)",
        "Vector Analysis and Linear Algebra",
        "Algorithm Analysis and Design",
        "Numerical Methods",
        "Computer Architecture and Organization",
        "Theory of Computation",
        "Complex Variable, Partial Differential Equation and Harmonic Analysis",
        "Database and Information System",
        "Computer Graphics",
        "Microprocessors, Microcontrollers and Assembly Language",
        "Computer Networks",
        "Applied Statistics and Probability",
        "Operating System",
        "Communication Engineering",
        "Software Engineering",
        "Artificial Intelligence",
        "Compiler Design"
      ]
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Kushtia Government College",
      duration: "2019–2021",
      icon: "🎓",
      details: "Science, GPA: 5.00"
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Kushtia Zilla School",
      duration: "2014–2019",
      icon: "🎓",
      details: "Science, GPA: 5.00"
    }
  ];

  const displayedCourses = showAllCourses 
    ? educationData[0].majorCourses 
    : educationData[0].majorCourses.slice(0, 8);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <section className="py-20 px-6 pt-32">
        <div className="container mx-auto max-w-5xl">
          {/* Education Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="text-portfolio-cyan">Education</span>
            </h1>
            <p className="text-xl text-portfolio-text-muted max-w-2xl mx-auto">
              Academic journey and the courses that shaped my technical expertise
            </p>
          </div>

          {/* Education Timeline */}
          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 hover:bg-secondary transition-all duration-300 border border-border/20"
              >
                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-portfolio-cyan/10 flex items-center justify-center text-3xl flex-shrink-0">
                    <GraduationCap className="h-8 w-8 text-portfolio-cyan" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-lg text-portfolio-cyan font-medium mb-2">
                      {edu.institution}
                    </p>
                    <p className="text-portfolio-text-muted mb-4">
                      📅 {edu.duration}
                    </p>

                    {/* Details or Courses */}
                    {edu.details && (
                      <p className="text-foreground font-medium">
                        {edu.details}
                      </p>
                    )}

                    {edu.majorCourses && (
                      <div>
                        <h4 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                          <span className="text-portfolio-cyan">📚</span>
                          Major Courses
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {displayedCourses.map((course, courseIndex) => (
                            <div
                              key={courseIndex}
                              className="flex items-start gap-2 text-sm"
                            >
                              <span className="text-portfolio-cyan mt-1">•</span>
                              <span className="text-portfolio-text-muted">
                                {course}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Show More/Less Button */}
                        {edu.majorCourses.length > 8 && (
                          <Button
                            variant="outline"
                            onClick={() => setShowAllCourses(!showAllCourses)}
                            className="mt-6 border-portfolio-cyan text-portfolio-cyan hover:bg-portfolio-cyan hover:text-background"
                          >
                            {showAllCourses ? "Show Less" : `Show All ${edu.majorCourses.length} Courses`}
                            <ChevronDown 
                              className={`ml-2 h-4 w-4 transition-transform duration-300 ${
                                showAllCourses ? "rotate-180" : ""
                              }`}
                            />
                          </Button>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;
