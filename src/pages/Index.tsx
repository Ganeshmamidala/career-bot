import { useState } from "react";
import Hero from "@/components/Hero";
import CareerAssessment from "@/components/CareerAssessment";
import AssessmentResults from "@/components/AssessmentResults";
import SalaryAnalysis from "@/components/SalaryAnalysis";
import Roadmap from "@/components/Roadmap";
import ChatBot from "@/components/ChatBot";
import TrendingSkills from "@/components/TrendingSkills";
import JobInsights from "@/components/JobInsights";
import ResumeAnalyzer from "@/components/ResumeAnalyzer";
import CareerPathAdvisor from "@/components/CareerPathAdvisor";

type AppState = "hero" | "assessment" | "results" | "salary" | "roadmap" | "chatbot" | "trending" | "jobs" | "resume" | "career-path";

interface AssessmentData {
  name: string;
  currentRole: string;
  experienceLevel: string;
  interests: string;
  skills: string;
  goals: string;
}

const Index = () => {
  const [appState, setAppState] = useState<AppState>("hero");
  const [assessmentData, setAssessmentData] = useState<AssessmentData | null>(null);

  const handleStartAssessment = () => {
    setAppState("assessment");
  };

  const handleViewSalaryAnalysis = () => {
    setAppState("salary");
  };

  const handleViewRoadmap = () => {
    setAppState("roadmap");
  };

  const handleViewChatBot = () => {
    setAppState("chatbot");
  };

  const handleViewTrendingSkills = () => {
    setAppState("trending");
  };

  const handleViewJobInsights = () => {
    setAppState("jobs");
  };

  const handleViewResumeAnalyzer = () => {
    setAppState("resume");
  };

  const handleViewCareerPath = () => {
    setAppState("career-path");
  };

  const handleAssessmentComplete = (data: AssessmentData) => {
    setAssessmentData(data);
    setAppState("results");
  };

  const handleRestart = () => {
    setAppState("hero");
    setAssessmentData(null);
  };

  const handleBackToHero = () => {
    setAppState("hero");
  };

  return (
    <div className="min-h-screen">
      {appState === "hero" && (
        <Hero 
          onStartAssessment={handleStartAssessment} 
          onViewSalaryAnalysis={handleViewSalaryAnalysis}
          onViewRoadmap={handleViewRoadmap}
          onViewChatBot={handleViewChatBot}
          onViewTrendingSkills={handleViewTrendingSkills}
          onViewJobInsights={handleViewJobInsights}
          onViewResumeAnalyzer={handleViewResumeAnalyzer}
          onViewCareerPath={handleViewCareerPath}
        />
      )}
      {appState === "assessment" && (
        <CareerAssessment 
          onComplete={handleAssessmentComplete} 
          onBack={handleBackToHero}
        />
      )}
      {appState === "results" && assessmentData && (
        <AssessmentResults 
          data={assessmentData} 
          onRestart={handleRestart}
        />
      )}
      {appState === "salary" && <SalaryAnalysis onBack={handleBackToHero} />}
      {appState === "roadmap" && <Roadmap onBack={handleBackToHero} />}
      {appState === "chatbot" && <ChatBot onBack={handleBackToHero} />}
      {appState === "trending" && <TrendingSkills onBack={handleBackToHero} />}
      {appState === "jobs" && <JobInsights onBack={handleBackToHero} />}
      {appState === "resume" && <ResumeAnalyzer onBack={handleBackToHero} />}
      {appState === "career-path" && <CareerPathAdvisor onBack={handleBackToHero} />}
    </div>
  );
};

export default Index;
