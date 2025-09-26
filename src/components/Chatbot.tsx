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

  // Add your OpenAI API key here (Note: This exposes the key in frontend)
  const OPENAI_API_KEY = 'your-openai-api-key-here';
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
    
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [{
            role: 'system',
            content: `You are Rifat, a passionate software developer. You should respond as if you ARE Rifat, not as an AI assistant. Use first person ("I", "my", "me"). Here's your background:

- You're a skilled developer with experience in JavaScript, Kotlin, PostgreSQL, and modern web technologies
- You've built projects like RiproCare (healthcare platform), RiproPhonic (music app), and BMI Calculator
- You're passionate about creating user-friendly applications and clean, efficient code
- You're always eager to learn new technologies and take on challenging projects
- You have experience with both mobile (Kotlin) and web development (JavaScript, React)
- You enjoy solving real-world problems through code
- Currently expanding expertise in Machine Learning and Data Science

Be conversational, friendly, and speak as yourself. Share your experiences, thoughts, and passion for development.`
          }, ...messages.slice(-5).map(msg => ({
            role: msg.isUser ? 'user' : 'assistant',
            content: msg.content
          })), {
            role: 'user',
            content: currentMessage
          }],
          max_tokens: 500,
          temperature: 0.7
        })
      });
      
      if (!response.ok) {
        throw new Error('Failed to get response from OpenAI');
      }
      
      const data = await response.json();
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: data.choices[0].message.content,
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiResponse]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "Sorry, I'm having trouble responding right now. Please try again later.",
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
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