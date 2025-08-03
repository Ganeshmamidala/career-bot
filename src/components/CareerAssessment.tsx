import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, Briefcase } from "lucide-react";

interface AssessmentData {
  name: string;
  currentRole: string;
  experienceLevel: string;
  interests: string;
  skills: string;
  goals: string;
}

interface CareerAssessmentProps {
  onComplete: (data: AssessmentData) => void;
  onBack: () => void;
}

const CareerAssessment = ({ onComplete, onBack }: CareerAssessmentProps) => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<AssessmentData>({
    name: "",
    currentRole: "",
    experienceLevel: "",
    interests: "",
    skills: "",
    goals: ""
  });

  const totalSteps = 4;
  const progress = (step / totalSteps) * 100;

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      onComplete(data);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      onBack();
    }
  };

  const updateData = (field: keyof AssessmentData, value: string) => {
    setData(prev => ({ ...prev, [field]: value }));
  };

  const isStepValid = () => {
    switch (step) {
      case 1:
        return data.name && data.currentRole;
      case 2:
        return data.experienceLevel;
      case 3:
        return data.interests && data.skills;
      case 4:
        return data.goals;
      default:
        return false;
    }
  };

  return (
    <section className="min-h-screen py-20 bg-background">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Briefcase className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Career Assessment</h2>
          </div>
          <Progress value={progress} className="mb-4" />
          <p className="text-muted-foreground">Step {step} of {totalSteps}</p>
        </div>

        <Card className="shadow-elegant">
          <CardHeader>
            <CardTitle>
              {step === 1 && "Personal Information"}
              {step === 2 && "Experience Level"}
              {step === 3 && "Skills & Interests"}
              {step === 4 && "Career Goals"}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {step === 1 && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={data.name}
                    onChange={(e) => updateData("name", e.target.value)}
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="currentRole">Current Role/Position</Label>
                  <Input
                    id="currentRole"
                    value={data.currentRole}
                    onChange={(e) => updateData("currentRole", e.target.value)}
                    placeholder="e.g., Software Developer, Student, Marketing Manager"
                  />
                </div>
              </>
            )}

            {step === 2 && (
              <div className="space-y-2">
                <Label htmlFor="experience">Experience Level</Label>
                <Select value={data.experienceLevel} onValueChange={(value) => updateData("experienceLevel", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="entry">Entry Level (0-2 years)</SelectItem>
                    <SelectItem value="mid">Mid Level (3-5 years)</SelectItem>
                    <SelectItem value="senior">Senior Level (6-10 years)</SelectItem>
                    <SelectItem value="executive">Executive Level (10+ years)</SelectItem>
                    <SelectItem value="student">Student/Recent Graduate</SelectItem>
                    <SelectItem value="career-change">Career Changer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            {step === 3 && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="interests">Areas of Interest</Label>
                  <Textarea
                    id="interests"
                    value={data.interests}
                    onChange={(e) => updateData("interests", e.target.value)}
                    placeholder="What fields, industries, or activities excite you? (e.g., technology, healthcare, creative arts, finance)"
                    rows={3}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="skills">Current Skills</Label>
                  <Textarea
                    id="skills"
                    value={data.skills}
                    onChange={(e) => updateData("skills", e.target.value)}
                    placeholder="List your key skills, both technical and soft skills (e.g., Python, leadership, communication, project management)"
                    rows={3}
                  />
                </div>
              </>
            )}

            {step === 4 && (
              <div className="space-y-2">
                <Label htmlFor="goals">Career Goals</Label>
                <Textarea
                  id="goals"
                  value={data.goals}
                  onChange={(e) => updateData("goals", e.target.value)}
                  placeholder="What are your short-term and long-term career goals? What do you want to achieve in the next 1-5 years?"
                  rows={4}
                />
              </div>
            )}

            <div className="flex justify-between pt-6">
              <Button variant="outline" onClick={handleBack}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
              <Button 
                onClick={handleNext} 
                disabled={!isStepValid()}
                variant={step === totalSteps ? "hero" : "default"}
              >
                {step === totalSteps ? "Get My Assessment" : "Next"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CareerAssessment;