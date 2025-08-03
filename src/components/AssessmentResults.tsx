import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Target, TrendingUp, Lightbulb, ArrowRight, RotateCcw } from "lucide-react";

interface AssessmentData {
  name: string;
  currentRole: string;
  experienceLevel: string;
  interests: string;
  skills: string;
  goals: string;
}

interface AssessmentResultsProps {
  data: AssessmentData;
  onRestart: () => void;
}

const AssessmentResults = ({ data, onRestart }: AssessmentResultsProps) => {
  // Mock AI-generated results based on the assessment data
  const generateResults = () => {
    const skillsArray = data.skills.split(',').map(s => s.trim()).filter(s => s);
    const interestsArray = data.interests.split(',').map(s => s.trim()).filter(s => s);
    
    return {
      careerMatch: 85,
      recommendedRoles: [
        "Senior Software Engineer",
        "Technical Lead",
        "Product Manager"
      ],
      skillGaps: [
        "Cloud Architecture",
        "Leadership & Management",
        "Data Analysis"
      ],
      growthAreas: [
        "Advanced technical certifications",
        "Leadership training",
        "Industry networking"
      ],
      strengths: skillsArray.slice(0, 4),
      nextSteps: [
        "Enroll in cloud computing certification",
        "Seek mentorship opportunities",
        "Join professional tech communities",
        "Consider taking on team lead responsibilities"
      ]
    };
  };

  const careerRecommendations = [
    {
      title: "Full Stack Developer",
      match: 92,
      description: "Perfect blend of frontend and backend development skills",
      skills: ["React", "Node.js", "JavaScript", "Python"],
      salaryRange: "$75,000 - $120,000",
      growth: "22%",
      demand: "High",
      timeToRole: "8-12 months"
    },
    {
      title: "Data Scientist",
      match: 87,
      description: "Analyze data to derive insights and build predictive models",
      skills: ["Python", "Machine Learning", "SQL", "Statistics"],
      salaryRange: "$85,000 - $140,000",
      growth: "31%",
      demand: "High",
      timeToRole: "10-14 months"
    },
    {
      title: "Cloud Solutions Architect",
      match: 85,
      description: "Design and implement scalable cloud infrastructure",
      skills: ["AWS", "Azure", "DevOps", "System Design"],
      salaryRange: "$110,000 - $180,000",
      growth: "28%",
      demand: "High",
      timeToRole: "12-18 months"
    },
    {
      title: "Cybersecurity Specialist",
      match: 82,
      description: "Protect systems and data from security threats",
      skills: ["Network Security", "Penetration Testing", "Risk Assessment"],
      salaryRange: "$90,000 - $160,000",
      growth: "31%",
      demand: "High",
      timeToRole: "10-16 months"
    },
    
    {
      title: "Product Manager",
      match: 78,
      description: "Bridge technical and business requirements",
      skills: ["Strategy", "Analytics", "Communication", "Leadership"],
      salaryRange: "$90,000 - $150,000",
      growth: "19%",
      demand: "High",
      timeToRole: "6-12 months"
    },
    
    {
      title: "AI/ML Engineer",
      match: 89,
      description: "Build and deploy machine learning models and AI systems",
      skills: ["TensorFlow", "PyTorch", "Deep Learning", "NLP"],
      salaryRange: "$120,000 - $200,000",
      growth: "42%",
      demand: "Very High",
      timeToRole: "12-18 months"
    },
    {
      title: "DevOps Engineer",
      match: 84,
      description: "Automate and streamline software deployment processes",
      skills: ["Docker", "Kubernetes", "CI/CD", "Infrastructure as Code"],
      salaryRange: "$95,000 - $150,000",
      growth: "25%",
      demand: "High",
      timeToRole: "8-14 months"
    },
    {
      title: "Mobile App Developer",
      match: 81,
      description: "Create native and cross-platform mobile applications",
      skills: ["React Native", "Flutter", "iOS", "Android"],
      salaryRange: "$80,000 - $130,000",
      growth: "18%",
      demand: "High",
      timeToRole: "6-10 months"
    },
    {
      title: "Blockchain Developer",
      match: 76,
      description: "Develop decentralized applications and smart contracts",
      skills: ["Solidity", "Web3", "Ethereum", "DeFi"],
      salaryRange: "$100,000 - $170,000",
      growth: "35%",
      demand: "Medium",
      timeToRole: "10-16 months"
    },
    {
      title: "UX/UI Designer",
      match: 73,
      description: "Design user-centered digital experiences",
      skills: ["Figma", "User Research", "Prototyping", "Design Systems"],
      salaryRange: "$70,000 - $120,000",
      growth: "15%",
      demand: "Medium",
      timeToRole: "4-8 months"
    },
    {
      title: "QA Engineer",
      match: 70,
      description: "Ensure software quality through testing and automation",
      skills: ["Test Automation", "Selenium", "API Testing", "Performance Testing"],
      salaryRange: "$65,000 - $110,000",
      growth: "12%",
      demand: "Medium",
      timeToRole: "4-8 months"
    },
    {
      title: "Database Administrator",
      match: 75,
      description: "Manage and optimize database systems and data infrastructure",
      skills: ["SQL", "PostgreSQL", "MongoDB", "Database Optimization"],
      salaryRange: "$70,000 - $125,000",
      growth: "14%",
      demand: "Medium",
      timeToRole: "6-12 months"
    },
    {
      title: "System Administrator",
      match: 72,
      description: "Manage and maintain IT infrastructure and systems",
      skills: ["Linux", "Windows Server", "Networking", "System Monitoring"],
      salaryRange: "$60,000 - $100,000",
      growth: "8%",
      demand: "Medium",
      timeToRole: "4-8 months"
    },
    {
      title: "Technical Writer",
      match: 68,
      description: "Create technical documentation and user guides",
      skills: ["Documentation", "API Writing", "Technical Communication"],
      salaryRange: "$55,000 - $95,000",
      growth: "10%",
      demand: "Medium",
      timeToRole: "3-6 months"
    },
    {
      title: "Business Analyst",
      match: 74,
      description: "Bridge business needs with technical solutions",
      skills: ["Requirements Analysis", "Process Modeling", "SQL", "Stakeholder Management"],
      salaryRange: "$70,000 - $115,000",
      growth: "16%",
      demand: "High",
      timeToRole: "4-8 months"
    }
  ];

  const results = generateResults();

  return (
    <section className="min-h-screen py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <CheckCircle className="h-8 w-8 text-success" />
            <h2 className="text-3xl font-bold">Your Career Assessment Results</h2>
          </div>
          <p className="text-xl text-muted-foreground">
            Hello {data.name}! Here's your personalized career roadmap.
          </p>
        </div>

        <div className="grid gap-6">
          {/* Career Match Score */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-6 w-6 text-primary" />
                Career Alignment Score
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-medium">Overall Match</span>
                  <span className="text-2xl font-bold text-primary">{results.careerMatch}%</span>
                </div>
                <Progress value={results.careerMatch} className="h-3" />
                <p className="text-muted-foreground">
                  Based on your skills, interests, and goals, you have strong alignment with your career direction.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Recommended Roles */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-6 w-6 text-primary" />
                Recommended Career Paths
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {careerRecommendations.map((rec, index) => (
                  <Card key={index} className="shadow-card">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold mb-2">{rec.title}</h3>
                          <p className="text-muted-foreground mb-3">{rec.description}</p>
                        </div>
                        <Badge variant="secondary" className="ml-4">
                          {rec.match}% Match
                        </Badge>
                      </div>
                      
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <Badge variant={rec.demand === "High" ? "default" : "outline"}>
                            {rec.demand} Demand
                          </Badge>
                          <Badge variant="outline">+{rec.growth} Growth</Badge>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-primary">{rec.salaryRange}</div>
                          <div className="text-sm text-muted-foreground">{rec.timeToRole}</div>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {rec.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Strengths */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-success" />
                  Your Strengths
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {results.strengths.map((strength, index) => (
                    <Badge key={index} variant="secondary" className="mr-2 mb-2">
                      {strength}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Skill Gaps */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Areas for Growth
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {results.skillGaps.map((gap, index) => (
                    <Badge key={index} variant="outline" className="mr-2 mb-2">
                      {gap}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Next Steps */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-6 w-6 text-primary" />
                Recommended Next Steps
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {results.nextSteps.map((step, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-gradient-card rounded-lg">
                    <div className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <p className="flex-1">{step}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button variant="hero" size="lg" className="group">
              Download Full Report
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" onClick={onRestart}>
              <RotateCcw className="mr-2 h-4 w-4" />
              Retake Assessment
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssessmentResults;