import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Search, Building, TrendingUp } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface JobInsightsProps {
  onBack?: () => void;
}

const JobInsights = ({ onBack }: JobInsightsProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const jobData = [
    {
      title: "Data Scientist",
      category: "Data & Analytics",
      salaryRange: { entry: 85000, mid: 120000, senior: 165000 },
      companies: ["Google", "Amazon", "Meta", "Netflix"],
      growthTrend: [60, 65, 72, 78, 85, 92],
      outlook: "Excellent",
      color: "bg-blue-500"
    },
    {
      title: "AI Engineer",
      category: "Artificial Intelligence", 
      salaryRange: { entry: 95000, mid: 135000, senior: 180000 },
      companies: ["Tesla", "OpenAI", "Google", "Apple"],
      growthTrend: [50, 58, 68, 79, 88, 95],
      outlook: "Exceptional",
      color: "bg-purple-500"
    },
    {
      title: "Software Engineer",
      category: "Software Development",
      salaryRange: { entry: 75000, mid: 110000, senior: 150000 },
      companies: ["Google", "Amazon", "Microsoft", "Apple"],
      growthTrend: [70, 72, 75, 78, 82, 85],
      outlook: "Excellent",
      color: "bg-green-500"
    },
    {
      title: "Frontend Developer",
      category: "Web Development",
      salaryRange: { entry: 65000, mid: 95000, senior: 130000 },
      companies: ["Google", "Meta", "Netflix", "Airbnb"],
      growthTrend: [65, 67, 70, 73, 76, 80],
      outlook: "Very Good",
      color: "bg-cyan-500"
    },
    {
      title: "Backend Developer",
      category: "Web Development",
      salaryRange: { entry: 70000, mid: 105000, senior: 140000 },
      companies: ["Amazon", "Google", "Microsoft", "Uber"],
      growthTrend: [68, 70, 73, 76, 80, 83],
      outlook: "Excellent",
      color: "bg-indigo-500"
    },
    {
      title: "Full Stack Developer",
      category: "Web Development",
      salaryRange: { entry: 75000, mid: 115000, senior: 145000 },
      companies: ["Tesla", "GitHub", "Microsoft", "Stripe"],
      growthTrend: [62, 65, 69, 74, 78, 82],
      outlook: "Excellent",
      color: "bg-orange-500"
    },
    {
      title: "DevOps Engineer",
      category: "Infrastructure & Operations",
      salaryRange: { entry: 80000, mid: 120000, senior: 160000 },
      companies: ["AWS", "Google", "Microsoft", "Red Hat"],
      growthTrend: [55, 60, 66, 72, 78, 85],
      outlook: "Excellent",
      color: "bg-teal-500"
    },
    {
      title: "Cloud Architect",
      category: "Infrastructure & Operations",
      salaryRange: { entry: 90000, mid: 135000, senior: 180000 },
      companies: ["AWS", "Azure", "Google Cloud", "IBM"],
      growthTrend: [45, 52, 60, 68, 76, 85],
      outlook: "Exceptional",
      color: "bg-sky-500"
    },
    {
      title: "Cybersecurity Analyst",
      category: "Security",
      salaryRange: { entry: 75000, mid: 105000, senior: 140000 },
      companies: ["Palo Alto", "CrowdStrike", "Cisco", "FireEye"],
      growthTrend: [50, 55, 62, 69, 76, 83],
      outlook: "Excellent",
      color: "bg-red-500"
    },
    {
      title: "Mobile Developer",
      category: "Mobile Development",
      salaryRange: { entry: 70000, mid: 100000, senior: 135000 },
      companies: ["Apple", "Google", "Meta", "Uber"],
      growthTrend: [58, 62, 66, 70, 74, 78],
      outlook: "Very Good",
      color: "bg-pink-500"
    },
    {
      title: "UI/UX Designer",
      category: "Design",
      salaryRange: { entry: 60000, mid: 85000, senior: 120000 },
      companies: ["Apple", "Google", "Adobe", "Figma"],
      growthTrend: [55, 58, 62, 66, 70, 74],
      outlook: "Very Good",
      color: "bg-violet-500"
    },
    {
      title: "Product Manager",
      category: "Product Management",
      salaryRange: { entry: 85000, mid: 125000, senior: 170000 },
      companies: ["Google", "Meta", "Apple", "Amazon"],
      growthTrend: [60, 64, 68, 72, 76, 80],
      outlook: "Excellent",
      color: "bg-amber-500"
    }
  ];

  const categories = [
    "all",
    "Data & Analytics",
    "Artificial Intelligence",
    "Software Development", 
    "Web Development",
    "Infrastructure & Operations",
    "Security",
    "Mobile Development",
    "Design",
    "Product Management"
  ];

  const filteredJobs = jobData.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || job.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const formatSalary = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getOutlookColor = (outlook: string) => {
    switch (outlook) {
      case "Exceptional": return "bg-green-100 text-green-800";
      case "Excellent": return "bg-blue-100 text-blue-800";
      case "Very Good": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
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
            Job Insights
          </h1>
          <p className="text-xl text-muted-foreground">
            Market insights and trends for different roles
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search roles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full md:w-64">
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category === "all" ? "All Categories" : category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Job Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 rounded-lg ${job.color} flex items-center justify-center`}>
                    <Building className="h-6 w-6 text-white" />
                  </div>
                  <Badge className={getOutlookColor(job.outlook)}>
                    {job.outlook}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{job.title}</CardTitle>
                <CardDescription>{job.category}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Salary Range */}
                  <div>
                    <h4 className="font-semibold mb-2">Salary Range:</h4>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Entry:</span>
                        <span className="font-medium">{formatSalary(job.salaryRange.entry)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Mid:</span>
                        <span className="font-medium">{formatSalary(job.salaryRange.mid)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Senior:</span>
                        <span className="font-medium">{formatSalary(job.salaryRange.senior)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Top Companies */}
                  <div>
                    <h4 className="font-semibold mb-2">Top Companies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {job.companies.slice(0, 4).map((company, companyIndex) => (
                        <Badge key={companyIndex} variant="outline" className="text-xs">
                          {company}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Growth Trend */}
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <TrendingUp className="h-4 w-4" />
                      Growth Trend:
                    </h4>
                    <ResponsiveContainer width="100%" height={80}>
                      <LineChart data={job.growthTrend.map((value, idx) => ({ month: idx, value }))}>
                        <Line 
                          type="monotone" 
                          dataKey="value" 
                          stroke="hsl(var(--primary))" 
                          strokeWidth={2}
                          dot={false}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No jobs found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default JobInsights;