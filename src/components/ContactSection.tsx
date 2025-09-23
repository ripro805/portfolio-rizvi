import { Mail, Phone, MapPin, Github, Linkedin, Facebook, Send, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { useState } from "react";

// Form validation schema
const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  // EmailJS Configuration
  const SERVICE_ID = "service_0xwmyzv";
  const TEMPLATE_ID = "template_7ccw6e6";  
  const PUBLIC_KEY = "92GuRLjQ43noEzNKl";

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Initialize EmailJS with your public key
      emailjs.init(PUBLIC_KEY);
      
      // EmailJS template params - these variable names should match your EmailJS template
      const templateParams = {
        from_name: `${data.firstName} ${data.lastName}`,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
        to_name: "Rifat Rizvi",
        reply_to: data.email,
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);
      
      toast({
        title: "Message sent successfully!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      
      form.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
    { icon: Github, label: "GitHub", href: "https://github.com/ripro805" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/md-rifat-islam-rizvi-9b5273328/" },
    { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/ripro.805/" },
    { icon: GraduationCap, label: "ResearchGate", href: "https://www.researchgate.net/profile/Md-Rifat-Rizvi?ev=hdr_xprf" }
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
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="John"
                            className="bg-secondary border-border focus:border-portfolio-cyan"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Doe"
                            className="bg-secondary border-border focus:border-portfolio-cyan"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input 
                          type="email"
                          placeholder="john@example.com"
                          className="bg-secondary border-border focus:border-portfolio-cyan"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Project Discussion"
                          className="bg-secondary border-border focus:border-portfolio-cyan"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell me about your project..."
                          rows={6}
                          className="bg-secondary border-border focus:border-portfolio-cyan resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-portfolio-cyan text-background hover:bg-portfolio-cyan-glow font-medium py-3 disabled:opacity-50"
                >
                  <Send className="mr-2 h-4 w-4" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
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
                      target="_blank"
                      rel="noopener noreferrer"
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