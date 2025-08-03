import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, TrendingUp, Users, Target, Calendar } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from "recharts";

interface TrendingSkillsProps {
  onBack?: () => void;
}

const TrendingSkills = ({ onBack }: TrendingSkillsProps) => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const statsData = [
    { title: "300+", subtitle: "Skills Tracked", icon: Target },
    { title: "52", subtitle: "Career Roles", icon: Users },
    { title: "95%", subtitle: "Growth in Tech Skills", icon: TrendingUp },
    { title: "2025", subtitle: "Latest Data", icon: Calendar },
  ];

  const topSkillsData = [
    { skill: "Data Science", demand: 85, growth: 92 },
    { skill: "Cybersecurity", demand: 80, growth: 88 },
    { skill: "AI/ML", demand: 90, growth: 95 },
    { skill: "Cloud", demand: 75, growth: 85 },
    { skill: "DevOps", demand: 70, growth: 80 },
  ];

  const salaryDistribution = [
    { role: "Data Scientist", min: 120, max: 180, avg: 150 },
    { role: "AI Engineer", min: 130, max: 200, avg: 165 },
    { role: "Cloud Architect", min: 140, max: 220, avg: 180 },
  ];

  const skillCategories = {
    development: ["Python", "JavaScript", "React", "Node.js"],
    cloud: ["AWS", "Azure", "Kubernetes", "Docker"],
    dataAI: ["Machine Learning", "TensorFlow", "SQL", "PyTorch"],
    security: ["Cybersecurity", "Ethical Hacking", "Encryption", "Compliance"]
  };

  const topRelatedRoles = [
    { role: "AI Engineer", salary: "$130,000 avg" },
    { role: "ML Engineer", salary: "$125,000 avg" },
    { role: "Data Scientist", salary: "$145,000 avg" },
  ];

  const skillAnalysis = {
    demandTrend: "High Growth",
    avgSalary: "$145,000",
    rolesCoverage: "87% of Tech Roles",
    learningResources: "1200+ Courses"
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
            Trending Skills Analysis
          </h1>
          <p className="text-xl text-muted-foreground">
            Discover the most in-demand skills with interactive visualizations
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {statsData.map((stat, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="p-6 text-center">
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                <div className="text-3xl font-bold text-primary mb-1">{stat.title}</div>
                <div className="text-sm text-muted-foreground">{stat.subtitle}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Top Skills Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Top Skills by Demand & Growth</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={topSkillsData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="skill" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="demand" fill="hsl(var(--primary))" name="Demand" />
                  <Bar dataKey="growth" fill="hsl(var(--secondary))" name="Growth" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Salary Distribution */}
          <Card>
            <CardHeader>
              <CardTitle>Salary Distribution by Role ($K)</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={salaryDistribution}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="role" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="min" fill="hsl(var(--muted))" name="Min" />
                  <Bar dataKey="avg" fill="hsl(var(--primary))" name="Average" />
                  <Bar dataKey="max" fill="hsl(var(--secondary))" name="Max" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Skill Popularity Cloud */}
          <Card>
            <CardHeader>
              <CardTitle>Skill Popularity Cloud</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-sm">#AI</Badge>
                <Badge variant="secondary" className="text-sm">#Cloud</Badge>
                <Badge variant="secondary" className="text-sm">#ML</Badge>
                <Badge variant="secondary" className="text-sm">#Cybersecurity</Badge>
                <Badge variant="secondary" className="text-sm">#DataScience</Badge>
                <Badge variant="secondary" className="text-sm">#DevOps</Badge>
                <Badge variant="secondary" className="text-sm">#Python</Badge>
                <Badge variant="secondary" className="text-sm">#JavaScript</Badge>
                <Badge variant="secondary" className="text-sm">#React</Badge>
                <Badge variant="secondary" className="text-sm">#Kubernetes</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Skill Analysis */}
          <Card>
            <CardHeader>
              <CardTitle>Skill Analysis: AI & Machine Learning</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Demand Trend:</span>
                <Badge variant="secondary" className="bg-green-100 text-green-800">{skillAnalysis.demandTrend}</Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Avg. Salary:</span>
                <span className="font-semibold">{skillAnalysis.avgSalary}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Role Coverage:</span>
                <span className="font-semibold">{skillAnalysis.rolesCoverage}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Learning Resources:</span>
                <span className="font-semibold">{skillAnalysis.learningResources}</span>
              </div>
            </CardContent>
          </Card>

          {/* Top Related Roles */}
          <Card>
            <CardHeader>
              <CardTitle>Top Related Roles</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {topRelatedRoles.map((role, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <Users className="h-4 w-4 text-primary" />
                      </div>
                      <span className="font-medium">{role.role}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{role.salary}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Skills by Category */}
        <Card>
          <CardHeader>
            <CardTitle>Skills by Category</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-blue-600">Development</h4>
                <div className="space-y-2">
                  {skillCategories.development.map((skill, index) => (
                    <Badge key={index} variant="outline" className="w-full justify-center border-blue-200 text-blue-700">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-cyan-600">Cloud</h4>
                <div className="space-y-2">
                  {skillCategories.cloud.map((skill, index) => (
                    <Badge key={index} variant="outline" className="w-full justify-center border-cyan-200 text-cyan-700">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-orange-600">Data & AI</h4>
                <div className="space-y-2">
                  {skillCategories.dataAI.map((skill, index) => (
                    <Badge key={index} variant="outline" className="w-full justify-center border-orange-200 text-orange-700">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-red-600">Security</h4>
                <div className="space-y-2">
                  {skillCategories.security.map((skill, index) => (
                    <Badge key={index} variant="outline" className="w-full justify-center border-red-200 text-red-700">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TrendingSkills;