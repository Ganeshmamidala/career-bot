import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";
import { TrendingUp, DollarSign, Search, Filter, MapPin, Calendar, ArrowLeft, BarChart3 } from "lucide-react";

interface SalaryAnalysisProps {
  onBack?: () => void;
}

interface SkillSalary {
  skill: string;
  avgSalary: number;
  growth: number;
  demand: "High" | "Medium" | "Low";
  experienceLevels: {
    entry: number;
    mid: number;
    senior: number;
    executive: number;
  };
  locations: {
    [key: string]: number;
  };
}

const SalaryAnalysis = ({ onBack }: SalaryAnalysisProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Mock salary data - in a real app, this would come from APIs like Glassdoor, Indeed, or BLS
  const skillsData: SkillSalary[] = [
    {
      skill: "Artificial Intelligence/Machine Learning",
      avgSalary: 145000,
      growth: 23,
      demand: "High",
      experienceLevels: { entry: 95000, mid: 135000, senior: 180000, executive: 250000 },
      locations: { "San Francisco": 185000, "New York": 165000, "Seattle": 155000, "Austin": 135000, "Remote": 140000, "London": 120000, "Berlin": 105000, "Toronto": 115000, "Singapore": 125000, "Sydney": 118000 }
    },
    {
      skill: "Cloud Architecture (AWS/Azure/GCP)",
      avgSalary: 135000,
      growth: 28,
      demand: "High",
      experienceLevels: { entry: 85000, mid: 125000, senior: 165000, executive: 220000 },
      locations: { "San Francisco": 175000, "New York": 155000, "Seattle": 145000, "Austin": 125000, "Remote": 130000, "London": 115000, "Berlin": 98000, "Toronto": 108000, "Singapore": 118000, "Sydney": 112000 }
    },
    {
      skill: "DevOps/Site Reliability Engineering",
      avgSalary: 128000,
      growth: 25,
      demand: "High",
      experienceLevels: { entry: 80000, mid: 118000, senior: 155000, executive: 200000 },
      locations: { "San Francisco": 165000, "New York": 145000, "Seattle": 135000, "Austin": 115000, "Remote": 125000, "London": 110000, "Berlin": 92000, "Toronto": 102000, "Singapore": 112000, "Sydney": 108000 }
    },
    {
      skill: "Cybersecurity",
      avgSalary: 125000,
      growth: 31,
      demand: "High",
      experienceLevels: { entry: 75000, mid: 115000, senior: 150000, executive: 195000 },
      locations: { "San Francisco": 160000, "New York": 140000, "Seattle": 130000, "Austin": 110000, "Remote": 120000, "London": 108000, "Berlin": 88000, "Toronto": 98000, "Singapore": 105000, "Sydney": 102000 }
    },
    {
      skill: "Data Science/Analytics",
      avgSalary: 122000,
      growth: 22,
      demand: "High",
      experienceLevels: { entry: 78000, mid: 112000, senior: 145000, executive: 185000 },
      locations: { "San Francisco": 155000, "New York": 135000, "Seattle": 125000, "Austin": 105000, "Remote": 115000, "London": 105000, "Berlin": 85000, "Toronto": 95000, "Singapore": 100000, "Sydney": 98000 }
    },
    {
      skill: "React/Frontend Development",
      avgSalary: 105000,
      growth: 18,
      demand: "High",
      experienceLevels: { entry: 65000, mid: 95000, senior: 125000, executive: 160000 },
      locations: { "San Francisco": 135000, "New York": 115000, "Seattle": 110000, "Austin": 95000, "Remote": 100000, "London": 95000, "Berlin": 75000, "Toronto": 85000, "Singapore": 88000, "Sydney": 85000 }
    },
    {
      skill: "Python Development",
      avgSalary: 115000,
      growth: 20,
      demand: "High",
      experienceLevels: { entry: 70000, mid: 105000, senior: 135000, executive: 170000 },
      locations: { "San Francisco": 145000, "New York": 125000, "Seattle": 120000, "Austin": 100000, "Remote": 110000, "London": 100000, "Berlin": 80000, "Toronto": 90000, "Singapore": 95000, "Sydney": 92000 }
    },
    {
      skill: "Product Management",
      avgSalary: 140000,
      growth: 19,
      demand: "High",
      experienceLevels: { entry: 90000, mid: 130000, senior: 170000, executive: 220000 },
      locations: { "San Francisco": 180000, "New York": 160000, "Seattle": 150000, "Austin": 130000, "Remote": 135000, "London": 125000, "Berlin": 100000, "Toronto": 115000, "Singapore": 120000, "Sydney": 118000 }
    },
    {
      skill: "Blockchain Development",
      avgSalary: 142000,
      growth: 35,
      demand: "Medium",
      experienceLevels: { entry: 85000, mid: 130000, senior: 175000, executive: 230000 },
      locations: { "San Francisco": 185000, "New York": 165000, "Seattle": 155000, "Austin": 125000, "Remote": 140000, "London": 128000, "Berlin": 105000, "Toronto": 118000, "Singapore": 135000, "Sydney": 125000 }
    },
    {
      skill: "UX/UI Design",
      avgSalary: 98000,
      growth: 15,
      demand: "Medium",
      experienceLevels: { entry: 58000, mid: 88000, senior: 118000, executive: 155000 },
      locations: { "San Francisco": 125000, "New York": 110000, "Seattle": 105000, "Austin": 85000, "Remote": 92000, "London": 85000, "Berlin": 68000, "Toronto": 75000, "Singapore": 78000, "Sydney": 75000 }
    },
    {
      skill: "Data Engineering",
      avgSalary: 138000,
      growth: 30,
      demand: "High",
      experienceLevels: { entry: 88000, mid: 128000, senior: 168000, executive: 225000 },
      locations: { "San Francisco": 178000, "New York": 158000, "Seattle": 148000, "Austin": 128000, "Remote": 135000, "London": 118000, "Berlin": 95000, "Toronto": 108000, "Singapore": 115000, "Sydney": 112000 }
    },
    {
      skill: "Full Stack Development",
      avgSalary: 118000,
      growth: 22,
      demand: "High",
      experienceLevels: { entry: 75000, mid: 108000, senior: 145000, executive: 185000 },
      locations: { "San Francisco": 155000, "New York": 135000, "Seattle": 125000, "Austin": 105000, "Remote": 115000, "London": 102000, "Berlin": 82000, "Toronto": 92000, "Singapore": 98000, "Sydney": 95000 }
    },
    {
      skill: "Mobile Development (iOS/Android)",
      avgSalary: 112000,
      growth: 18,
      demand: "High",
      experienceLevels: { entry: 70000, mid: 102000, senior: 135000, executive: 175000 },
      locations: { "San Francisco": 145000, "New York": 125000, "Seattle": 118000, "Austin": 98000, "Remote": 108000, "London": 95000, "Berlin": 78000, "Toronto": 88000, "Singapore": 92000, "Sydney": 88000 }
    },
    {
      skill: "Kubernetes/Container Orchestration",
      avgSalary: 132000,
      growth: 35,
      demand: "High",
      experienceLevels: { entry: 82000, mid: 122000, senior: 158000, executive: 205000 },
      locations: { "San Francisco": 172000, "New York": 152000, "Seattle": 142000, "Austin": 122000, "Remote": 130000, "London": 115000, "Berlin": 95000, "Toronto": 105000, "Singapore": 112000, "Sydney": 108000 }
    },
    {
      skill: "System Architecture",
      avgSalary: 155000,
      growth: 25,
      demand: "High",
      experienceLevels: { entry: 98000, mid: 145000, senior: 185000, executive: 250000 },
      locations: { "San Francisco": 200000, "New York": 180000, "Seattle": 170000, "Austin": 145000, "Remote": 155000, "London": 135000, "Berlin": 115000, "Toronto": 125000, "Singapore": 140000, "Sydney": 135000 }
    },
    {
      skill: "QA/Testing Engineering",
      avgSalary: 88000,
      growth: 12,
      demand: "Medium",
      experienceLevels: { entry: 55000, mid: 80000, senior: 105000, executive: 135000 },
      locations: { "San Francisco": 115000, "New York": 98000, "Seattle": 92000, "Austin": 78000, "Remote": 85000, "London": 75000, "Berlin": 62000, "Toronto": 68000, "Singapore": 72000, "Sydney": 70000 }
    },
    {
      skill: "Database Administration",
      avgSalary: 102000,
      growth: 14,
      demand: "Medium",
      experienceLevels: { entry: 62000, mid: 92000, senior: 125000, executive: 165000 },
      locations: { "San Francisco": 135000, "New York": 115000, "Seattle": 108000, "Austin": 88000, "Remote": 98000, "London": 88000, "Berlin": 70000, "Toronto": 78000, "Singapore": 82000, "Sydney": 80000 }
    },
    {
      skill: "Network Security",
      avgSalary: 118000,
      growth: 28,
      demand: "High",
      experienceLevels: { entry: 72000, mid: 108000, senior: 142000, executive: 185000 },
      locations: { "San Francisco": 152000, "New York": 132000, "Seattle": 125000, "Austin": 105000, "Remote": 115000, "London": 102000, "Berlin": 85000, "Toronto": 92000, "Singapore": 98000, "Sydney": 95000 }
    },
    {
      skill: "Artificial Intelligence Research",
      avgSalary: 165000,
      growth: 42,
      demand: "High",
      experienceLevels: { entry: 110000, mid: 155000, senior: 200000, executive: 280000 },
      locations: { "San Francisco": 215000, "New York": 195000, "Seattle": 185000, "Austin": 155000, "Remote": 165000, "London": 145000, "Berlin": 125000, "Toronto": 135000, "Singapore": 150000, "Sydney": 145000 }
    },
    {
      skill: "Quantum Computing",
      avgSalary: 175000,
      growth: 55,
      demand: "Medium",
      experienceLevels: { entry: 120000, mid: 165000, senior: 210000, executive: 300000 },
      locations: { "San Francisco": 225000, "New York": 205000, "Seattle": 195000, "Austin": 165000, "Remote": 175000, "London": 155000, "Berlin": 135000, "Toronto": 145000, "Singapore": 160000, "Sydney": 155000 }
    }
  ];

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "tech", label: "Technology" },
    { value: "design", label: "Design" },
    { value: "management", label: "Management" },
    { value: "data", label: "Data & Analytics" }
  ];

  const locations = [
    { value: "all", label: "All Locations" },
    { value: "San Francisco", label: "San Francisco" },
    { value: "New York", label: "New York" },
    { value: "Seattle", label: "Seattle" },
    { value: "Austin", label: "Austin" },
    { value: "Remote", label: "Remote" },
    { value: "London", label: "London" },
    { value: "Berlin", label: "Berlin" },
    { value: "Toronto", label: "Toronto" },
    { value: "Singapore", label: "Singapore" },
    { value: "Sydney", label: "Sydney" }
  ];

  const filteredSkills = skillsData.filter(skill =>
    skill.skill.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatSalary = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getDemandColor = (demand: string) => {
    switch (demand) {
      case "High": return "text-success";
      case "Medium": return "text-primary";
      case "Low": return "text-muted-foreground";
      default: return "text-muted-foreground";
    }
  };

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
          <div className="flex items-center justify-center gap-3 mb-4">
            <TrendingUp className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Market Salary Analysis</h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover salary trends for the most in-demand skills in today's market
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="shadow-elegant mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search skills (e.g., Python, React, Machine Learning)"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map(location => (
                    <SelectItem key={location.value} value={location.value}>
                      {location.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Charts Overview</TabsTrigger>
            <TabsTrigger value="skills">Skills Analysis</TabsTrigger>
            <TabsTrigger value="locations">Location Comparison</TabsTrigger>
            <TabsTrigger value="experience">Experience Levels</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="space-y-8">
              {/* Salary Overview Chart */}
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-6 w-6 text-primary" />
                    Average Salary by Skill
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={filteredSkills.slice(0, 8)}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis 
                        dataKey="skill" 
                        angle={-45}
                        textAnchor="end"
                        height={100}
                        fontSize={12}
                      />
                      <YAxis 
                        tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                      />
                      <Tooltip 
                        formatter={(value: number) => [formatSalary(value), "Average Salary"]}
                        labelFormatter={(label) => `Skill: ${label}`}
                      />
                      <Bar dataKey="avgSalary" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Growth Rate Chart */}
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-6 w-6 text-primary" />
                    Growth Rate by Skill
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={filteredSkills.slice(0, 8)}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis 
                        dataKey="skill" 
                        angle={-45}
                        textAnchor="end"
                        height={80}
                        fontSize={12}
                      />
                      <YAxis 
                        tickFormatter={(value) => `${value}%`}
                      />
                      <Tooltip 
                        formatter={(value: number) => [`${value}%`, "Growth Rate"]}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="growth" 
                        stroke="hsl(var(--primary))" 
                        strokeWidth={3}
                        dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 6 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Market Demand Chart */}
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle>Market Demand Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={[
                          { name: "High Demand", value: filteredSkills.filter(s => s.demand === "High").length, fill: "hsl(var(--primary))" },
                          { name: "Medium Demand", value: filteredSkills.filter(s => s.demand === "Medium").length, fill: "hsl(var(--secondary))" },
                          { name: "Low Demand", value: filteredSkills.filter(s => s.demand === "Low").length, fill: "hsl(var(--muted))" }
                        ]}
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        dataKey="value"
                        label={({ name, value }) => `${name}: ${value}`}
                      />
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="skills">
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-6 w-6 text-primary" />
                  Detailed Skills Breakdown
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {filteredSkills.map((skill, index) => (
                    <div key={index} className="p-4 bg-gradient-card rounded-lg border">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-2">{skill.skill}</h3>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                            <div>
                              <span className="text-muted-foreground">Entry Level</span>
                              <p className="font-semibold">{formatSalary(skill.experienceLevels.entry)}</p>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Mid Level</span>
                              <p className="font-semibold">{formatSalary(skill.experienceLevels.mid)}</p>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Senior Level</span>
                              <p className="font-semibold">{formatSalary(skill.experienceLevels.senior)}</p>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Executive</span>
                              <p className="font-semibold">{formatSalary(skill.experienceLevels.executive)}</p>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary mb-1">
                            {formatSalary(skill.avgSalary)}
                          </div>
                          <div className="flex items-center gap-2 justify-end">
                            <span className="text-sm text-success">+{skill.growth}%</span>
                            <Badge variant={skill.demand === "High" ? "default" : "secondary"}>
                              {skill.demand}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="locations">
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-6 w-6 text-primary" />
                  Salary Comparison by Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={500}>
                  <BarChart 
                    data={filteredSkills.slice(0, 6).map(skill => ({
                      skill: skill.skill.split(' ')[0] + (skill.skill.split(' ').length > 1 ? '...' : ''),
                      "San Francisco": skill.locations["San Francisco"],
                      "New York": skill.locations["New York"],
                      "Seattle": skill.locations["Seattle"],
                      "Austin": skill.locations["Austin"],
                      "Remote": skill.locations["Remote"]
                    }))}
                    margin={{ top: 20, right: 30, left: 20, bottom: 80 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                      dataKey="skill" 
                      angle={-45}
                      textAnchor="end"
                      height={100}
                    />
                    <YAxis tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`} />
                    <Tooltip formatter={(value: number) => [formatSalary(value), ""]} />
                    <Legend />
                    <Bar dataKey="San Francisco" fill="#8884d8" />
                    <Bar dataKey="New York" fill="#82ca9d" />
                    <Bar dataKey="Seattle" fill="#ffc658" />
                    <Bar dataKey="Austin" fill="#ff7300" />
                    <Bar dataKey="Remote" fill="#8dd1e1" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="experience">
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-6 w-6 text-primary" />
                  Salary by Experience Level
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={500}>
                  <BarChart 
                    data={filteredSkills.slice(0, 6).map(skill => ({
                      skill: skill.skill.split(' ')[0] + (skill.skill.split(' ').length > 1 ? '...' : ''),
                      "Entry": skill.experienceLevels.entry,
                      "Mid": skill.experienceLevels.mid,
                      "Senior": skill.experienceLevels.senior,
                      "Executive": skill.experienceLevels.executive
                    }))}
                    margin={{ top: 20, right: 30, left: 20, bottom: 80 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                      dataKey="skill" 
                      angle={-45}
                      textAnchor="end"
                      height={100}
                    />
                    <YAxis tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`} />
                    <Tooltip formatter={(value: number) => [formatSalary(value), ""]} />
                    <Legend />
                    <Bar dataKey="Entry" fill="hsl(var(--success))" />
                    <Bar dataKey="Mid" fill="hsl(var(--primary))" />
                    <Bar dataKey="Senior" fill="hsl(var(--secondary))" />
                    <Bar dataKey="Executive" fill="hsl(var(--accent))" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            Salary data is aggregated from multiple sources and updated regularly. 
            Actual salaries may vary based on company size, location, and individual experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SalaryAnalysis;