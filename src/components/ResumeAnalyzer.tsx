import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Upload, FileText, CheckCircle, XCircle, Lightbulb } from "lucide-react";

interface ResumeAnalyzerProps {
  onBack?: () => void;
}

const ResumeAnalyzer = ({ onBack }: ResumeAnalyzerProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [targetRole, setTargetRole] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResults, setAnalysisResults] = useState<any>(null);

  const targetRoles = [
    "Data Scientist",
    "AI Engineer", 
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "DevOps Engineer",
    "Cloud Architect",
    "Cybersecurity Analyst",
    "Mobile Developer",
    "UI/UX Designer",
    "Product Manager"
  ];

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const analyzeResume = () => {
    if (!selectedFile || !targetRole) return;
    
    setIsAnalyzing(true);
    
    // Simulate analysis
    setTimeout(() => {
      const mockResults = {
        match: Math.floor(Math.random() * 30) + 70, // 70-99%
        role: targetRole,
        salaryRange: "$85,000 - $120,000",
        matchedSkills: [
          "Python", "SQL", "Machine Learning", "Git", "Problem Solving",
          "Data Analysis", "Statistics", "Communication"
        ],
        missingSkills: [
          "Pandas", "Statistics", "R", "TensorFlow", "Scikit-learn"
        ],
        improvements: [
          {
            skill: "Pandas",
            recommendation: "Learn Pandas - Recommended: IBM Data Science Professional Certificate on Coursera"
          },
          {
            skill: "Statistics", 
            recommendation: "Learn Statistics - Recommended: IBM Data Science Professional Certificate on Coursera"
          },
          {
            skill: "R",
            recommendation: "Learn R - Recommended: IBM Data Science Professional Certificate on Coursera"
          }
        ]
      };
      
      setAnalysisResults(mockResults);
      setIsAnalyzing(false);
    }, 2000);
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
            Resume Analyzer
          </h1>
          <p className="text-xl text-muted-foreground">
            Get AI-powered analysis of your resume
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upload Section */}
          <Card className="bg-gradient-to-br from-primary/5 to-purple-500/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5" />
                Upload Your Resume
              </CardTitle>
              <CardDescription>
                Upload your resume and select your target role for analysis
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* File Upload */}
              <div>
                <label className="block text-sm font-medium mb-2">Upload Resume (PDF)</label>
                <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="resume-upload"
                  />
                  <label htmlFor="resume-upload" className="cursor-pointer">
                    <FileText className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                    <p className="text-muted-foreground">
                      {selectedFile ? selectedFile.name : "Click to upload your resume"}
                    </p>
                  </label>
                </div>
              </div>

              {/* Target Role Selection */}
              <div>
                <label className="block text-sm font-medium mb-2">Target Role</label>
                <Select value={targetRole} onValueChange={setTargetRole}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your target role" />
                  </SelectTrigger>
                  <SelectContent>
                    {targetRoles.map((role) => (
                      <SelectItem key={role} value={role}>
                        {role}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Analyze Button */}
              <Button 
                onClick={analyzeResume}
                disabled={!selectedFile || !targetRole || isAnalyzing}
                className="w-full"
                size="lg"
              >
                {isAnalyzing ? "Analyzing..." : "Analyze Resume"}
              </Button>
            </CardContent>
          </Card>

          {/* Results Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Analysis Results
                {analysisResults && (
                  <Badge className="bg-green-100 text-green-800 ml-auto">
                    {analysisResults.match}% Match
                  </Badge>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {!analysisResults && !isAnalyzing && (
                <div className="text-center py-12 text-muted-foreground">
                  Upload your resume and select a target role to see analysis results
                </div>
              )}

              {isAnalyzing && (
                <div className="text-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                  <p className="text-muted-foreground">Analyzing your resume...</p>
                </div>
              )}

              {analysisResults && (
                <div className="space-y-6">
                  {/* Match Score */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Role: {analysisResults.role}</span>
                      <span className="text-sm text-muted-foreground">Salary Range: {analysisResults.salaryRange}</span>
                    </div>
                    <Progress value={analysisResults.match} className="h-3" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Matched Skills */}
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2 text-green-600">
                        <CheckCircle className="h-4 w-4" />
                        Matched Skills
                      </h4>
                      <div className="space-y-2 max-h-40 overflow-y-auto">
                        {analysisResults.matchedSkills.map((skill: string, index: number) => (
                          <div key={index} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm">{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Missing Skills */}
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2 text-red-600">
                        <XCircle className="h-4 w-4" />
                        Missing Skills
                      </h4>
                      <div className="space-y-2 max-h-40 overflow-y-auto">
                        {analysisResults.missingSkills.map((skill: string, index: number) => (
                          <div key={index} className="flex items-center gap-2">
                            <XCircle className="h-4 w-4 text-red-500 flex-shrink-0" />
                            <span className="text-sm">{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Improvement Plan */}
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Lightbulb className="h-4 w-4 text-yellow-500" />
                      Improvement Plan
                    </h4>
                    <div className="space-y-3">
                      {analysisResults.improvements.map((improvement: any, index: number) => (
                        <div key={index} className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                          <div className="flex items-start gap-3">
                            <Lightbulb className="h-4 w-4 text-blue-500 flex-shrink-0 mt-0.5" />
                            <div>
                              <span className="font-medium text-blue-900">Learn {improvement.skill}</span>
                              <p className="text-sm text-blue-700 mt-1">{improvement.recommendation}</p>
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

export default ResumeAnalyzer;