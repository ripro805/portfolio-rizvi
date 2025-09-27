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
        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-8">
          <a 
            href="https://www.facebook.com/ripro.805/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center hover:bg-portfolio-cyan hover:text-background transition-all duration-300 cursor-pointer"
            aria-label="Facebook"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
          </a>
          <a 
            href="https://www.linkedin.com/in/md-rifat-islam-rizvi-9b5273328/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center hover:bg-portfolio-cyan hover:text-background transition-all duration-300 cursor-pointer"
            aria-label="LinkedIn"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a 
            href="https://github.com/ripro805" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center hover:bg-portfolio-cyan hover:text-background transition-all duration-300 cursor-pointer"
            aria-label="GitHub"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a 
            href="https://www.researchgate.net/profile/Md-Rifat-Rizvi?ev=hdr_xprf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center hover:bg-portfolio-cyan hover:text-background transition-all duration-300 cursor-pointer"
            aria-label="ResearchGate"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.5 6h3c1.105 0 2 .895 2 2v8c0 1.105-.895 2-2 2h-3c-1.105 0-2-.895-2-2V8c0-1.105.895-2 2-2zm4.5 3.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5v5c0 .276.224.5.5.5s.5-.224.5-.5v-5zm-6 2c0-.276-.224-.5-.5-.5s-.5.224-.5.5v3c0 .276.224.5.5.5s.5-.224.5-.5v-3z"/>
            </svg>
          </a>
        </div>

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