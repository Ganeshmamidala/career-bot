import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, User, Target, Trophy, CheckCircle, BookOpen } from "lucide-react";

interface CareerPathAdvisorProps {
  onBack?: () => void;
}

const CareerPathAdvisor = ({ onBack }: CareerPathAdvisorProps) => {
  const [currentSkills, setCurrentSkills] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("");
  const [preferredIndustry, setPreferredIndustry] = useState("");
  const [careerGoals, setCareerGoals] = useState("");
  const [showResults, setShowResults] = useState(false);

  const experienceLevels = [
    "Entry Level (0-2 years)",
    "Mid Level (3-5 years)", 
    "Senior Level (6-10 years)",
    "Lead Level (10+ years)"
  ];

  const industries = [
    "Technology",
    "Healthcare",
    "Finance",
    "Education",
    "E-commerce",
    "Gaming",
    "Consulting",
    "Startup"
  ];

  const careerPaths = [
    {
      role: "Data Scientist",
      category: "Data & Analytics",
      salary: "$120,000",
      description: "Analyze complex data to drive business decisions"
    },
    {
      role: "AI Engineer", 
      category: "Artificial Intelligence",
      salary: "$135,000",
      description: "Build and deploy AI/ML systems and models"
    },
    {
      role: "Software Engineer",
      category: "Software Development", 
      salary: "$110,000",
      description: "Design and develop software applications"
    }
  ];

  const nextSteps = [
    "Strengthen core technical skills",
    "Build portfolio projects", 
    "Network with industry professionals",
    "Consider relevant certifications"
  ];

  const learningPath = [
    {
      title: "IBM Data Science Professional Certificate",
      provider: "Coursera",
      type: "Certificate",
      status: "recommended"
    },
    {
      title: "Advanced Machine Learning Specialization", 
      provider: "Coursera",
      type: "Specialization",
      status: "recommended"
    },
    {
      title: "Deep Learning Specialization",
      provider: "Coursera", 
      type: "Specialization",
      status: "recommended"
    },
    {
      title: "Natural Language Processing Specialization",
      provider: "Coursera",
      type: "Specialization", 
      status: "recommended"
    }
  ];

  const handleGetCareerPath = () => {
    if (currentSkills && experienceLevel && preferredIndustry && careerGoals) {
      setShowResults(true);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      <div className="container mx-auto px-4 py-8">
        {onBack && (
          <Button
            variant="ghost"
            onClick={onBack}
            className="mb-6 text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        )}

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-4">
            Career Path Advisor
          </h1>
          <p className="text-xl text-muted-foreground">
            Discover your personalized career progression path
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Career Assessment Form */}
          <Card className="bg-gradient-to-br from-primary/5 to-purple-500/5">
            <CardHeader>
              <CardTitle>Career Assessment</CardTitle>
              <CardDescription>
                Tell us about your skills and goals to get personalized recommendations
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Current Skills */}
              <div>
                <label className="block text-sm font-medium mb-2">Current Skills</label>
                <Textarea
                  placeholder="e.g., python, sql, java, c"
                  value={currentSkills}
                  onChange={(e) => setCurrentSkills(e.target.value)}
                  className="h-20"
                />
                <p className="text-xs text-muted-foreground mt-1">Separate skills with commas</p>
              </div>

              {/* Experience Level */}
              <div>
                <label className="block text-sm font-medium mb-2">Experience Level</label>
                <Select value={experienceLevel} onValueChange={setExperienceLevel}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    {experienceLevels.map((level) => (
                      <SelectItem key={level} value={level}>
                        {level}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Preferred Industry */}
              <div>
                <label className="block text-sm font-medium mb-2">Preferred Industry</label>
                <Select value={preferredIndustry} onValueChange={setPreferredIndustry}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your preferred industry" />
                  </SelectTrigger>
                  <SelectContent>
                    {industries.map((industry) => (
                      <SelectItem key={industry} value={industry}>
                        {industry}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Career Goals */}
              <div>
                <label className="block text-sm font-medium mb-2">Career Goals</label>
                <Textarea
                  placeholder="e.g., data scientist"
                  value={careerGoals}
                  onChange={(e) => setCareerGoals(e.target.value)}
                  className="h-20"
                />
              </div>

              {/* Get Career Path Button */}
              <Button 
                onClick={handleGetCareerPath}
                disabled={!currentSkills || !experienceLevel || !preferredIndustry || !careerGoals}
                className="w-full"
                size="lg"
              >
                Get Career Path
              </Button>
            </CardContent>
          </Card>

          {/* Your Career Path */}
          <Card>
            <CardHeader>
              <CardTitle>Your Career Path</CardTitle>
              <CardDescription>
                Personalized career progression recommendations
              </CardDescription>
            </CardHeader>
            <CardContent>
              {!showResults ? (
                <div className="text-center py-12 text-muted-foreground">
                  Complete the assessment to see your personalized career path
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Career Progression */}
                  <div className="flex items-center justify-between">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                        <User className="h-8 w-8 text-blue-600" />
                      </div>
                      <p className="font-medium text-blue-600">Current</p>
                      <p className="text-sm text-muted-foreground">Entry</p>
                    </div>
                    <ArrowRight className="h-6 w-6 text-muted-foreground" />
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-2">
                        <Target className="h-8 w-8 text-green-600" />
                      </div>
                      <p className="font-medium text-green-600">Target Role</p>
                      <p className="text-sm text-muted-foreground">Data Scientist</p>
                    </div>
                    <ArrowRight className="h-6 w-6 text-muted-foreground" />
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mb-2">
                        <Trophy className="h-8 w-8 text-yellow-600" />
                      </div>
                      <p className="font-medium text-yellow-600">Future</p>
                      <p className="text-sm text-muted-foreground">Leadership</p>
                    </div>
                  </div>

                  {/* Recommended Career Paths */}
                  <div>
                    <h4 className="font-semibold mb-3">Recommended Career Paths</h4>
                    <div className="space-y-3">
                      {careerPaths.map((path, index) => (
                        <div key={index} className="p-4 border rounded-lg hover:border-primary/50 transition-colors">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h5 className="font-medium">{path.role}</h5>
                              <p className="text-sm text-muted-foreground">{path.category}</p>
                            </div>
                            <Badge variant="secondary">{path.salary}</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{path.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Next Steps */}
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Next Steps
                    </h4>
                    <div className="space-y-2">
                      {nextSteps.map((step, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-medium text-primary">
                            {index + 1}
                          </div>
                          <span className="text-sm">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Learning Path */}
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-blue-500" />
                      Learning Path
                    </h4>
                    <div className="space-y-3">
                      {learningPath.map((course, index) => (
                        <div key={index} className="p-3 bg-green-50 rounded-lg border border-green-200">
                          <div className="flex items-start gap-3">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <div className="flex-1">
                              <h6 className="font-medium text-green-900">{course.title}</h6>
                              <p className="text-sm text-green-700">{course.provider} • {course.type}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CareerPathAdvisor;