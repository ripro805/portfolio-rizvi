import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { MessageCircle, X, Send, Minimize2 } from 'lucide-react';
import { cn } from '@/lib/utils';
interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}
const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{
    id: '1',
    content: "Hey there! I'm Ripro, a passionate software developer. Feel free to ask me anything about my projects, skills, or experience!",
    isUser: false,
    timestamp: new Date()
  }]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Demo responses for portfolio showcase
  const getDemoResponse = (message: string): string => {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return "Hello! Great to meet you! I'm Rifat, a passionate software developer. What would you like to know about my journey or projects?";
    }
    
    if (lowerMessage.includes('project') || lowerMessage.includes('work')) {
      return "I've worked on several exciting projects! RiproCare is a healthcare platform I built with modern web technologies, RiproPhonic is a music streaming app using Kotlin, and I've created various web applications using React, JavaScript, and PostgreSQL. Which one interests you most?";
    }
    
    if (lowerMessage.includes('skill') || lowerMessage.includes('technology') || lowerMessage.includes('tech')) {
      return "My tech stack includes JavaScript, Kotlin, React, PostgreSQL, and modern web frameworks. I'm currently expanding into Machine Learning and Data Science to build intelligent, data-driven solutions. I love staying updated with the latest technologies!";
    }
    
    if (lowerMessage.includes('experience') || lowerMessage.includes('background')) {
      return "I started with algorithms and data structures, then moved into mobile development with Kotlin, and later transitioned to full-stack web development. Now I'm exploring ML and Data Science to create impactful applications that solve real-world problems.";
    }
    
    if (lowerMessage.includes('contact') || lowerMessage.includes('hire') || lowerMessage.includes('work together')) {
      return "I'd love to discuss opportunities! You can reach me through the contact section below, or connect with me on LinkedIn. I'm always excited about new challenges and collaborative projects.";
    }
    
    if (lowerMessage.includes('machine learning') || lowerMessage.includes('ml') || lowerMessage.includes('data science')) {
      return "I'm currently diving deep into Machine Learning and Data Science! My goal is to combine my software engineering background with data-driven insights to build intelligent applications that can make real impact.";
    }
    
    return "That's a great question! I'm passionate about software development and always eager to discuss technology, projects, or potential collaborations. Feel free to ask me anything about my experience, projects, or technical interests!";
  };
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  useEffect(() => {
    if (isOpen && !isMinimized) {
      inputRef.current?.focus();
    }
  }, [isOpen, isMinimized]);
  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;
    
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      isUser: true,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    const currentMessage = inputMessage;
    setInputMessage('');
    setIsLoading(true);
    
    // Simulate API delay for realistic experience
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: getDemoResponse(currentMessage),
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  };
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };
  if (!isOpen) {
    return <Button onClick={() => setIsOpen(true)} className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-portfolio-cyan text-background hover:bg-portfolio-cyan-glow shadow-lg z-50" size="icon">
        <MessageCircle className="h-6 w-6" />
      </Button>;
  }
  return <Card className={cn("fixed bottom-6 right-6 w-80 h-96 shadow-2xl z-50 border-portfolio-cyan/20", isMinimized && "h-14")}>
      <CardHeader className="flex flex-row items-center justify-between p-4 pb-2">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
          <span className="font-semibold text-sm">Chat with Rifat
        </span>
        </div>
        <div className="flex gap-1">
          <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => setIsMinimized(!isMinimized)}>
            <Minimize2 className="h-3 w-3" />
          </Button>
          <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => setIsOpen(false)}>
            <X className="h-3 w-3" />
          </Button>
        </div>
      </CardHeader>

      {!isMinimized && <CardContent className="flex flex-col h-80 p-0">
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map(message => <div key={message.id} className={cn("flex", message.isUser ? "justify-end" : "justify-start")}>
                  <div className={cn("max-w-[80%] rounded-lg px-3 py-2 text-sm", message.isUser ? "bg-portfolio-cyan text-background" : "bg-muted text-foreground")}>
                    {message.content}
                  </div>
                </div>)}
              {isLoading && <div className="flex justify-start">
                  <div className="bg-muted rounded-lg px-3 py-2 text-sm">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-foreground/60 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-foreground/60 rounded-full animate-bounce" style={{
                  animationDelay: '0.1s'
                }}></div>
                      <div className="w-2 h-2 bg-foreground/60 rounded-full animate-bounce" style={{
                  animationDelay: '0.2s'
                }}></div>
                    </div>
                  </div>
                </div>}
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>

          <div className="border-t p-4">
            <div className="flex gap-2">
              <Input ref={inputRef} value={inputMessage} onChange={e => setInputMessage(e.target.value)} onKeyPress={handleKeyPress} placeholder="Ask me anything..." disabled={isLoading} className="flex-1" />
              <Button onClick={sendMessage} disabled={isLoading || !inputMessage.trim()} size="icon" className="bg-portfolio-cyan text-background hover:bg-portfolio-cyan-glow">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>}
    </Card>;
};
export default Chatbot;