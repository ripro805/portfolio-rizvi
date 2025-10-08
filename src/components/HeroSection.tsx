import { Download, ChevronDown, MessageCircle } from "lucide-react";
import profileImage from "@/assets/profile-new.png";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { removeBackground, loadImage } from "@/utils/backgroundRemoval";
const HeroSection = () => {
  const [processedImageSrc, setProcessedImageSrc] = useState<string>(profileImage);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  useEffect(() => {
    const processImage = async () => {
      try {
        setIsProcessing(true);
        console.log('Loading image for background removal...');
        const imageElement = await loadImage(profileImage);
        console.log('Removing background...');
        const processedBlob = await removeBackground(imageElement);
        const processedUrl = URL.createObjectURL(processedBlob);
        setProcessedImageSrc(processedUrl);
        console.log('Background removed successfully!');
      } catch (error) {
        console.error('Failed to remove background:', error);
        // Keep original image on error
        setProcessedImageSrc(profileImage);
      } finally {
        setIsProcessing(false);
      }
    };

    processImage();

    // Cleanup function to revoke object URL
    return () => {
      if (processedImageSrc && processedImageSrc !== profileImage) {
        URL.revokeObjectURL(processedImageSrc);
      }
    };
  }, []);
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section id="home" className="min-h-screen flex items-center justify-center px-6 relative">
      <div className="container mx-auto text-center">
        {/* Profile Image */}
        <div className="relative mb-8">
          <div className="w-48 h-48 mx-auto relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-portfolio-cyan to-portfolio-cyan-glow opacity-30 blur-xl"></div>
            <img 
              src={processedImageSrc} 
              alt="Md. Rifat Islam Rizvi" 
              className={`w-full h-full rounded-full object-cover border-4 border-portfolio-cyan relative z-10 transition-opacity duration-300 ${
                isProcessing ? 'opacity-70' : 'opacity-100'
              }`}
            />
          </div>
        </div>

        {/* Hero Text */}
        <div className="mb-8">
          <h2 className="text-2xl text-foreground mb-4">Hi, I'm</h2>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-portfolio-cyan">Md.Rifat Islam Rizvi</span>
          </h1>
          <h3 className="text-xl md:text-2xl text-portfolio-text-muted mb-8">
            Full Stack Developer | ML & Data Science Enthusiast
          </h3>
          <p className="text-lg text-portfolio-text-muted max-w-3xl mx-auto leading-relaxed">
            From competitive programming to mobile apps and web development, now 
            diving into Machine Learning & Data Science to build intelligent, data-
            driven solutions.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button onClick={scrollToProjects} className="bg-portfolio-cyan text-background hover:bg-portfolio-cyan-glow font-medium px-8 py-3 text-lg">
            View My Work
            <ChevronDown className="ml-2 h-5 w-5" />
          </Button>
          
          <Button 
            variant="outline" 
            className="border-portfolio-cyan text-portfolio-cyan hover:bg-portfolio-cyan hover:text-background font-medium px-8 py-3 text-lg"
            onClick={() => window.open("https://docs.google.com/document/d/1p4T2bhn50Q3urxtszViynFN18NIDFNwMB_Ab6rCH7LA/edit?tab=t.0", "_blank")}
          >
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
        </div>
      </div>

      {/* Floating Contact Button */}
      
    </section>;
};
export default HeroSection;