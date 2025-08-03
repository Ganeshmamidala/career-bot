import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Circle, Clock, Star, ArrowLeft, BookOpen, Users, Trophy } from "lucide-react";

interface RoadmapProps {
  onBack?: () => void;
}

interface RoadmapStep {
  id: string;
  title: string;
  description: string;
  duration: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  type: "course" | "project" | "certification" | "experience";
  completed: boolean;
  skills: string[];
}

interface CareerPath {
  title: string;
  description: string;
  totalDuration: string;
  averageSalary: string;
  steps: RoadmapStep[];
}

const Roadmap = ({ onBack }: RoadmapProps) => {
  const [selectedPath, setSelectedPath] = useState("fullstack");
  const [completedSteps, setCompletedSteps] = useState<Set<string>>(new Set());

  const careerPaths: Record<string, CareerPath> = {
    fullstack: {
      title: "Full Stack Developer",
      description: "Master both frontend and backend development",
      totalDuration: "8-12 months",
      averageSalary: "$95,000 - $140,000",
      steps: [
        {
          id: "html-css",
          title: "HTML, CSS & JavaScript Fundamentals",
          description: "Learn the building blocks of web development",
          duration: "4-6 weeks",
          difficulty: "Beginner",
          type: "course",
          completed: false,
          skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design"]
        },
        {
          id: "react",
          title: "React Framework",
          description: "Build dynamic user interfaces with React",
          duration: "6-8 weeks",
          difficulty: "Intermediate",
          type: "course",
          completed: false,
          skills: ["React", "JSX", "Hooks", "State Management"]
        },
        {
          id: "backend",
          title: "Backend Development",
          description: "Learn server-side programming with Node.js",
          duration: "8-10 weeks",
          difficulty: "Intermediate",
          type: "course",
          completed: false,
          skills: ["Node.js", "Express", "APIs", "Databases"]
        },
        {
          id: "project1",
          title: "Full Stack Project",
          description: "Build a complete web application",
          duration: "4-6 weeks",
          difficulty: "Advanced",
          type: "project",
          completed: false,
          skills: ["Integration", "Deployment", "Testing"]
        },
        {
          id: "portfolio",
          title: "Portfolio Development",
          description: "Create a professional portfolio",
          duration: "2-3 weeks",
          difficulty: "Intermediate",
          type: "project",
          completed: false,
          skills: ["Portfolio", "Personal Branding"]
        }
      ]
    },
    dataScience: {
      title: "Data Scientist",
      description: "Analyze data and build predictive models",
      totalDuration: "10-14 months",
      averageSalary: "$110,000 - $160,000",
      steps: [
        {
          id: "python-basics",
          title: "Python Programming",
          description: "Master Python for data analysis",
          duration: "6-8 weeks",
          difficulty: "Beginner",
          type: "course",
          completed: false,
          skills: ["Python", "NumPy", "Pandas", "Data Structures"]
        },
        {
          id: "statistics",
          title: "Statistics & Mathematics",
          description: "Learn statistical concepts and probability",
          duration: "8-10 weeks",
          difficulty: "Intermediate",
          type: "course",
          completed: false,
          skills: ["Statistics", "Probability", "Linear Algebra"]
        },
        {
          id: "ml",
          title: "Machine Learning",
          description: "Build predictive models and algorithms",
          duration: "10-12 weeks",
          difficulty: "Advanced",
          type: "course",
          completed: false,
          skills: ["Scikit-learn", "TensorFlow", "ML Algorithms"]
        },
        {
          id: "visualization",
          title: "Data Visualization",
          description: "Create compelling data visualizations",
          duration: "4-6 weeks",
          difficulty: "Intermediate",
          type: "course",
          completed: false,
          skills: ["Matplotlib", "Seaborn", "Plotly", "Tableau"]
        },
        {
          id: "capstone",
          title: "Capstone Project",
          description: "Complete end-to-end data science project",
          duration: "6-8 weeks",
          difficulty: "Advanced",
          type: "project",
          completed: false,
          skills: ["End-to-End ML", "Business Impact"]
        }
      ]
    },
    cybersecurity: {
      title: "Cybersecurity Specialist",
      description: "Protect systems and data from cyber threats",
      totalDuration: "12-16 months",
      averageSalary: "$95,000 - $150,000",
      steps: [
        {
          id: "security-fundamentals",
          title: "Security Fundamentals",
          description: "Learn core cybersecurity concepts",
          duration: "6-8 weeks",
          difficulty: "Beginner",
          type: "course",
          completed: false,
          skills: ["Network Security", "Risk Assessment", "Compliance"]
        },
        {
          id: "ethical-hacking",
          title: "Ethical Hacking",
          description: "Learn penetration testing techniques",
          duration: "10-12 weeks",
          difficulty: "Advanced",
          type: "course",
          completed: false,
          skills: ["Penetration Testing", "Vulnerability Assessment"]
        },
        {
          id: "security-plus",
          title: "CompTIA Security+ Certification",
          description: "Industry-recognized security certification",
          duration: "8-10 weeks",
          difficulty: "Intermediate",
          type: "certification",
          completed: false,
          skills: ["CompTIA Security+", "Industry Standards"]
        },
        {
          id: "incident-response",
          title: "Incident Response",
          description: "Handle security incidents and forensics",
          duration: "6-8 weeks",
          difficulty: "Advanced",
          type: "course",
          completed: false,
          skills: ["Incident Response", "Digital Forensics"]
        },
        {
          id: "internship",
          title: "Security Internship",
          description: "Gain real-world security experience",
          duration: "12-16 weeks",
          difficulty: "Advanced",
          type: "experience",
          completed: false,
          skills: ["Real-world Application", "Professional Experience"]
        }
      ]
    }
  };

  const toggleStepCompletion = (stepId: string) => {
    const newCompleted = new Set(completedSteps);
    if (newCompleted.has(stepId)) {
      newCompleted.delete(stepId);
    } else {
      newCompleted.add(stepId);
    }
    setCompletedSteps(newCompleted);
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "course": return <BookOpen className="h-4 w-4" />;
      case "project": return <Star className="h-4 w-4" />;
      case "certification": return <Trophy className="h-4 w-4" />;
      case "experience": return <Users className="h-4 w-4" />;
      default: return <Circle className="h-4 w-4" />;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-success/10 text-success border-success/20";
      case "Intermediate": return "bg-primary/10 text-primary border-primary/20";
      case "Advanced": return "bg-destructive/10 text-destructive border-destructive/20";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const currentPath = careerPaths[selectedPath];
  const completedCount = currentPath.steps.filter(step => completedSteps.has(step.id)).length;
  const progressPercentage = (completedCount / currentPath.steps.length) * 100;

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        {onBack && (
          <div className="mb-6">
            <Button variant="outline" onClick={onBack}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </div>
        )}
        
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Career Learning Roadmap</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Follow structured learning paths to achieve your career goals
          </p>
        </div>

        {/* Career Path Selection */}
        <Tabs value={selectedPath} onValueChange={setSelectedPath} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="fullstack">Full Stack Dev</TabsTrigger>
            <TabsTrigger value="dataScience">Data Science</TabsTrigger>
            <TabsTrigger value="cybersecurity">Cybersecurity</TabsTrigger>
          </TabsList>

          {Object.entries(careerPaths).map(([key, path]) => (
            <TabsContent key={key} value={key}>
              {/* Path Overview */}
              <Card className="shadow-elegant mb-8">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{path.title}</h3>
                      <p className="text-muted-foreground mb-4">{path.description}</p>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Duration: {path.totalDuration}</span>
                          <span>Salary: {path.averageSalary}</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-2">
                          <span>Progress</span>
                          <span>{completedCount}/{path.steps.length} completed</span>
                        </div>
                        <Progress value={progressPercentage} className="h-2" />
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {progressPercentage === 100 ? "🎉 Congratulations! Path completed!" 
                         : progressPercentage > 0 ? "Keep going! You're making great progress!" 
                         : "Ready to start your learning journey?"}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Learning Steps */}
              <div className="space-y-6">
                {path.steps.map((step, index) => (
                  <Card key={step.id} className={`shadow-card transition-all duration-200 ${
                    completedSteps.has(step.id) ? 'border-success/50 bg-success/5' : ''
                  }`}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 mt-1">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => toggleStepCompletion(step.id)}
                            className="p-0 h-auto"
                          >
                            {completedSteps.has(step.id) ? (
                              <CheckCircle className="h-6 w-6 text-success" />
                            ) : (
                              <Circle className="h-6 w-6 text-muted-foreground" />
                            )}
                          </Button>
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-4 mb-3">
                            <div>
                              <h4 className="text-lg font-semibold mb-1">
                                Step {index + 1}: {step.title}
                              </h4>
                              <p className="text-muted-foreground">{step.description}</p>
                            </div>
                            <div className="flex items-center gap-2 flex-shrink-0">
                              <Badge variant="outline" className={getDifficultyColor(step.difficulty)}>
                                {step.difficulty}
                              </Badge>
                              <Badge variant="secondary" className="flex items-center gap-1">
                                {getTypeIcon(step.type)}
                                {step.type}
                              </Badge>
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                {step.duration}
                              </span>
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {step.skills.slice(0, 3).map((skill, skillIndex) => (
                                <Badge key={skillIndex} variant="outline" className="text-xs">
                                  {skill}
                                </Badge>
                              ))}
                              {step.skills.length > 3 && (
                                <Badge variant="outline" className="text-xs">
                                  +{step.skills.length - 3} more
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Roadmap;