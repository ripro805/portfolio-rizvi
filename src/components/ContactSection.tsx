import { Mail, Phone, MapPin, Github, Linkedin, Facebook, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "rifatrizviofficial001@gmail.com",
      color: "text-portfolio-cyan"
    },
    {
      icon: Phone,
      label: "Phone", 
      value: "+8801305612767",
      color: "text-portfolio-cyan"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kushtia, Bangladesh",
      color: "text-portfolio-cyan"
    }
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Facebook, label: "Facebook", href: "#" }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto">
        {/* Contact Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="text-portfolio-cyan">Touch</span>
          </h2>
          <p className="text-xl text-portfolio-text-muted max-w-2xl mx-auto">
            Ready to start a project or just want to chat? I'd love to hear from you
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-portfolio-cyan mb-8">
              Send Message
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    First Name
                  </label>
                  <Input 
                    placeholder="John"
                    className="bg-secondary border-border focus:border-portfolio-cyan"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Last Name
                  </label>
                  <Input 
                    placeholder="Doe"
                    className="bg-secondary border-border focus:border-portfolio-cyan"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <Input 
                  placeholder="Project Discussion"
                  className="bg-secondary border-border focus:border-portfolio-cyan"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea 
                  placeholder="Tell me about your project..."
                  rows={6}
                  className="bg-secondary border-border focus:border-portfolio-cyan resize-none"
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-portfolio-cyan text-background hover:bg-portfolio-cyan-glow font-medium py-3"
              >
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-portfolio-cyan mb-8">
              Contact Info
            </h3>
            
            <div className="space-y-8 mb-12">
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                      <IconComponent className={`h-6 w-6 ${item.color}`} />
                    </div>
                    <div>
                      <p className="text-sm text-portfolio-text-muted">
                        {item.label}
                      </p>
                      <p className="text-foreground font-medium">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="mb-12">
              <h4 className="text-xl font-bold text-portfolio-cyan mb-6">
                Follow Me
              </h4>
              
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center hover:bg-portfolio-cyan hover:text-background transition-all duration-300"
                      aria-label={social.label}
                    >
                      <IconComponent className="h-6 w-6" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Collaboration CTA */}
            <div className="bg-card rounded-2xl p-8">
              <h4 className="text-xl font-bold mb-4">Let's Collaborate</h4>
              <p className="text-portfolio-text-muted">
                I'm always open to discussing new opportunities, creative 
                projects, or just having a chat about technology and 
                development. Don't hesitate to reach out!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;