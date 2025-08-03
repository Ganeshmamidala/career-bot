import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Sparkles, Target, TrendingUp, DollarSign } from "lucide-react";

interface HeroProps {
  onStartAssessment: () => void;
  onViewSalaryAnalysis: () => void;
  onViewRoadmap: () => void;
  onViewChatBot: () => void;
  onViewTrendingSkills: () => void;
  onViewJobInsights: () => void;
  onViewResumeAnalyzer: () => void;
  onViewCareerPath: () => void;
}

const Hero = ({ 
  onStartAssessment, 
  onViewSalaryAnalysis, 
  onViewRoadmap, 
  onViewChatBot,
  onViewTrendingSkills,
  onViewJobInsights,
  onViewResumeAnalyzer,
  onViewCareerPath
}: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl animate-float delay-3000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="h-6 w-6 text-primary animate-pulse" />
            <span className="text-muted-foreground font-medium">AI-Powered Career Guidance</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Your AI Career
            <span className="block text-primary">Advisor</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Get personalized career advice, skill assessments, and growth recommendations powered by advanced AI
          </p>
          
           {/* Primary CTA Buttons */}
           <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
             <Button 
               size="lg" 
               onClick={onStartAssessment}
               className="bg-gradient-primary hover:bg-gradient-primary/90 text-white shadow-glow"
             >
               Career Assessment
             </Button>
             <Button 
               variant="outline" 
               size="lg"
               onClick={onViewCareerPath}
               className="border-white/20 text-white hover:bg-white/10"
             >
               Career Path
             </Button>
             <Button 
               variant="outline" 
               size="lg"
               onClick={onViewTrendingSkills}
               className="border-white/20 text-white hover:bg-white/10"
             >
               Trending Skills
             </Button>
           </div>

           {/* Additional Options */}
           <div className="flex flex-wrap gap-3 justify-center mt-4 mb-12">
             <Button 
               variant="outline" 
               size="default"
               onClick={onViewResumeAnalyzer}
               className="border-white/20 text-white hover:bg-white/10"
             >
               Analyze Resume
             </Button>
             <Button 
               variant="outline" 
               size="default"
               onClick={onViewJobInsights}
               className="border-white/20 text-white hover:bg-white/10"
             >
               Job Insights
             </Button>
             <Button 
               variant="outline" 
               size="default"
               onClick={onViewSalaryAnalysis}
               className="border-white/20 text-white hover:bg-white/10"
             >
               Salary Analysis
             </Button>
             <Button 
               variant="outline" 
               size="default"
               onClick={onViewRoadmap}
               className="border-white/20 text-white hover:bg-white/10"
             >
               Learning Roadmap
             </Button>
             <Button 
               variant="outline" 
               size="default"
               onClick={onViewChatBot}
               className="border-white/20 text-white hover:bg-white/10"
             >
               AI Assistant
             </Button>
           </div>

           {/* Stats */}
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white/80 mb-12">
             <div>
               <div className="text-3xl font-bold mb-2">50,000+</div>
               <div className="text-sm">Professionals Helped</div>
             </div>
             <div>
               <div className="text-3xl font-bold mb-2">52+</div>
               <div className="text-sm">Career Paths</div>
             </div>
             <div>
               <div className="text-3xl font-bold mb-2">95%</div>
               <div className="text-sm">Success Rate</div>
             </div>
           </div>
          
          {/* Feature cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <Card className="p-6 bg-gradient-card shadow-card border-0">
              <Target className="h-8 w-8 text-primary mb-3 mx-auto" />
              <h3 className="font-semibold mb-2">Personalized Assessment</h3>
              <p className="text-sm text-muted-foreground">Comprehensive evaluation of your skills and interests</p>
            </Card>
            
            <Card className="p-6 bg-gradient-card shadow-card border-0">
              <TrendingUp className="h-8 w-8 text-primary mb-3 mx-auto" />
              <h3 className="font-semibold mb-2">Growth Roadmap</h3>
              <p className="text-sm text-muted-foreground">Clear path to achieve your career goals</p>
            </Card>
            
            <Card className="p-6 bg-gradient-card shadow-card border-0">
              <Sparkles className="h-8 w-8 text-primary mb-3 mx-auto" />
              <h3 className="font-semibold mb-2">AI Insights</h3>
              <p className="text-sm text-muted-foreground">Data-driven recommendations tailored to you</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;