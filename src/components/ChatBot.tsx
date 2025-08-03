import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Send, Bot, User, ArrowLeft, Lightbulb, TrendingUp, BookOpen } from "lucide-react";

interface ChatBotProps {
  onBack?: () => void;
}

interface Message {
  id: string;
  type: "user" | "bot";
  content: string;
  timestamp: Date;
  suggestions?: string[];
}

const ChatBot = ({ onBack }: ChatBotProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      type: "bot",
      content: "Hi! I'm your AI Career Assistant. I can help you with career advice, skill recommendations, salary insights, and learning paths. What would you like to know?",
      timestamp: new Date(),
      suggestions: [
        "What skills are in high demand?",
        "How can I transition to tech?",
        "Salary expectations for data science?",
        "Best learning resources for coding?"
      ]
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const generateResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Skill-related responses
    if (lowerMessage.includes("skill") || lowerMessage.includes("demand")) {
      return `Based on current market trends, here are the top in-demand skills:

🔥 **Highest Demand:**
• AI/Machine Learning - Growing at 23% annually
• Cloud Architecture (AWS/Azure) - 28% growth
• Cybersecurity - 31% growth rate
• DevOps/SRE - 25% growth

💰 **Best Paying:**
• AI/ML: $145K average
• Blockchain: $142K average  
• Product Management: $140K average
• Cloud Architecture: $135K average

Would you like specific learning resources for any of these skills?`;
    }

    // Transition-related responses
    if (lowerMessage.includes("transition") || lowerMessage.includes("career change")) {
      return `Great question! Here's a roadmap for transitioning to tech:

🎯 **Step 1: Choose Your Path**
• Full Stack Development (8-12 months)
• Data Science (10-14 months)
• Cybersecurity (12-16 months)
• UX/UI Design (6-8 months)

📚 **Step 2: Learn & Build**
• Start with fundamentals
• Build portfolio projects
• Contribute to open source
• Network with professionals

💼 **Step 3: Job Search**
• Update LinkedIn profile
• Apply to entry-level positions
• Consider bootcamps or internships

Which career path interests you most?`;
    }

    // Salary-related responses
    if (lowerMessage.includes("salary") || lowerMessage.includes("pay") || lowerMessage.includes("money")) {
      return `Here's what you can expect salary-wise:

💰 **By Experience Level:**
• Entry Level: $65K - $95K
• Mid Level: $95K - $135K  
• Senior Level: $125K - $180K
• Executive: $160K - $250K

📍 **By Location:**
• San Francisco: 20-30% above average
• New York: 15-25% above average
• Seattle: 10-20% above average
• Remote: 5-15% below major cities
• Austin: 10-20% below coastal cities

Specific role you're interested in?`;
    }

    // Learning resources
    if (lowerMessage.includes("learn") || lowerMessage.includes("course") || lowerMessage.includes("resource")) {
      return `Here are my top learning resource recommendations:

🎓 **Online Platforms:**
• **FreeCodeCamp** - Free coding bootcamp
• **Coursera** - University courses with certificates
• **Udemy** - Practical project-based learning
• **Pluralsight** - Tech skill development

📚 **Specialized Learning:**
• **LeetCode** - Coding interview prep
• **Kaggle** - Data science competitions
• **Cybrary** - Cybersecurity training
• **AWS Training** - Cloud certifications

🏗️ **Project Ideas:**
• Build a personal portfolio website
• Create a data visualization dashboard
• Contribute to open source projects
• Start a tech blog

What specific technology are you looking to learn?`;
    }

    // Interview preparation
    if (lowerMessage.includes("interview") || lowerMessage.includes("job") || lowerMessage.includes("hiring")) {
      return `Let me help you ace your tech interviews:

🎯 **Technical Interview Prep:**
• Practice coding problems daily (LeetCode, HackerRank)
• Understand system design basics
• Review data structures & algorithms
• Build projects that demonstrate your skills

💼 **Behavioral Interview Tips:**
• Prepare STAR method examples
• Research the company culture
• Practice explaining technical concepts simply
• Show passion for continuous learning

📝 **Application Strategy:**
• Tailor resume to job requirements
• Write compelling cover letters
• Build an impressive portfolio
• Network through LinkedIn and events

Ready to practice some interview questions?`;
    }

    // Default response
    return `I'd be happy to help with that! I specialize in:

🎯 **Career Guidance:**
• Skill recommendations
• Career transition advice
• Industry insights
• Learning roadmaps

💰 **Salary & Market Data:**
• Compensation benchmarks
• Market trends
• Location comparisons
• Growth opportunities

📚 **Learning Resources:**
• Course recommendations
• Project ideas
• Certification paths
• Interview preparation

Could you be more specific about what you'd like to know? I'm here to help you succeed in your career journey!`;
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: "bot",
        content: generateResponse(inputValue),
        timestamp: new Date(),
        suggestions: [
          "Tell me more about this",
          "What are the next steps?",
          "Show me learning resources",
          "Compare with other options"
        ]
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 2000);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        {onBack && (
          <div className="mb-6">
            <Button variant="outline" onClick={onBack}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </div>
        )}
        
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Bot className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">AI Career Assistant</h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get personalized career advice, skill recommendations, and learning guidance
          </p>
        </div>

        <Card className="shadow-elegant h-[600px] flex flex-col">
          <CardHeader className="border-b">
            <CardTitle className="flex items-center gap-2">
              <Bot className="h-5 w-5 text-primary" />
              Career Assistant
            </CardTitle>
          </CardHeader>
          
          <CardContent className="flex-1 flex flex-col p-0">
            <ScrollArea className="flex-1 p-6" ref={scrollAreaRef}>
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-3 ${message.type === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div className={`flex gap-3 max-w-[80%] ${message.type === "user" ? "flex-row-reverse" : ""}`}>
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                        message.type === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                      }`}>
                        {message.type === "user" ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                      </div>
                      
                      <div className={`rounded-lg p-3 ${
                        message.type === "user" 
                          ? "bg-primary text-primary-foreground" 
                          : "bg-muted"
                      }`}>
                        <div className="whitespace-pre-wrap text-sm">{message.content}</div>
                        {message.suggestions && message.type === "bot" && (
                          <div className="mt-3 flex flex-wrap gap-2">
                            {message.suggestions.map((suggestion, index) => (
                              <Button
                                key={index}
                                variant="outline"
                                size="sm"
                                onClick={() => handleSuggestionClick(suggestion)}
                                className="text-xs h-auto py-1 px-2"
                              >
                                {suggestion}
                              </Button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex gap-3 justify-start">
                    <div className="flex gap-3 max-w-[80%]">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-muted">
                        <Bot className="h-4 w-4" />
                      </div>
                      <div className="rounded-lg p-3 bg-muted">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>
            
            <div className="border-t p-4">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me about careers, skills, salaries, or learning paths..."
                  className="flex-1"
                  disabled={isTyping}
                />
                <Button onClick={handleSendMessage} disabled={!inputValue.trim() || isTyping}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          <Card className="shadow-card cursor-pointer hover:shadow-lg transition-shadow">
            <CardContent className="p-4 text-center">
              <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Market Trends</h3>
              <p className="text-sm text-muted-foreground">Latest salary data and skill demands</p>
            </CardContent>
          </Card>
          
          <Card className="shadow-card cursor-pointer hover:shadow-lg transition-shadow">
            <CardContent className="p-4 text-center">
              <BookOpen className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Learning Paths</h3>
              <p className="text-sm text-muted-foreground">Structured roadmaps to your goals</p>
            </CardContent>
          </Card>
          
          <Card className="shadow-card cursor-pointer hover:shadow-lg transition-shadow">
            <CardContent className="p-4 text-center">
              <Lightbulb className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Career Tips</h3>
              <p className="text-sm text-muted-foreground">Interview prep and job search advice</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ChatBot;