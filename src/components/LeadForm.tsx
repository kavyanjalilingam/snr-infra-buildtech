import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { ChevronRight, ChevronLeft, CheckCircle } from "lucide-react";

interface LeadFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CITIES = [
  "Hyderabad",
  "Shamshabad",
  "Rajendranagar",
  "Maheshwaram",
  "Shadnagar",
  "L.B Nagar",
  "Nagole",
  "Uppal",
  "Meerpet",
  "Others"
];

const BUDGETS = [
  "20 Lakhs – 30 Lakhs",
  "30 Lakhs – 50 Lakhs",
  "50 Lakhs – 1 Crore",
  "1 Crore – 2 Crore"
];

const LeadForm = ({ open, onOpenChange }: LeadFormProps) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    plotOwnership: "",
    city: "",
    budget: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const totalSteps = 5;
  const progress = (step / totalSteps) * 100;

  const validatePhone = (phone: string) => {
    return /^\d{10}$/.test(phone);
  };

  const validateEmail = (email: string) => {
    if (!email) return true; // Email is optional
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.name.trim() !== "" && validatePhone(formData.phone) && validateEmail(formData.email);
      case 2:
        return formData.plotOwnership !== "";
      case 3:
        return formData.city !== "";
      case 4:
        return formData.budget !== "";
      default:
        return true;
    }
  };

  const handleNext = () => {
    if (canProceed()) {
      setStep(step + 1);
    } else {
      toast({
        title: "Please complete all required fields",
        variant: "destructive"
      });
    }
  };
const handleSubmit = async () => {
  if (!formData.name || !formData.phone || !formData.plotOwnership || !formData.city || !formData.budget) {
    toast({
      title: "Please complete all required fields",
      variant: "destructive",
    });
    return;
  }

  const dataToSend = {
    name: formData.name,
    phone: formData.phone,
    email: formData.email || "",
    plotOwnership: formData.plotOwnership === "yes" ? "I own a plot" : "Planning to buy",
    city: formData.city,
    budgetRange: formData.budget,
    priceReference: "₹1,799 / sqft", // you can calculate dynamically if needed
  };

  try {
    const response = await fetch("/api/submitLead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataToSend),
    });

    const result = await response.json();

    if (result.success) {
      toast({
        title: "Lead submitted successfully!",
        variant: "default",
      });
      setSubmitted(true);
    } else {
      toast({
        title: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  } catch (error) {
    console.error(error);
    toast({
      title: "Server error. Please try again later.",
      variant: "destructive",
    });
  }
};


  const handleClose = () => {
    setStep(1);
    setFormData({
      name: "",
      phone: "",
      email: "",
      plotOwnership: "",
      city: "",
      budget: ""
    });
    setSubmitted(false);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        {!submitted ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl font-bold">Get Your Quote</DialogTitle>
              <Progress value={progress} className="mt-2" />
              <p className="text-sm text-muted-foreground mt-2">Step {step} of {totalSteps}</p>
            </DialogHeader>

            <div className="space-y-6 py-4">
              {step === 1 && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="10-digit mobile number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      onBlur={(e) => {
                        if (!validatePhone(e.target.value) && e.target.value) {
                          toast({
                            title: "Please enter a valid 10-digit phone number",
                            variant: "destructive"
                          });
                        }
                      }}
                      className="mt-1"
                      maxLength={10}
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email (Optional)</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="mt-1"
                    />
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <Label>Do you own a plot? *</Label>
                  <RadioGroup value={formData.plotOwnership} onValueChange={(value) => setFormData({ ...formData, plotOwnership: value })}>
                    <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-secondary cursor-pointer">
                      <RadioGroupItem value="yes" id="yes" />
                      <Label htmlFor="yes" className="cursor-pointer flex-1">Yes, I own a plot</Label>
                    </div>
                    <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-secondary cursor-pointer">
                      <RadioGroupItem value="planning" id="planning" />
                      <Label htmlFor="planning" className="cursor-pointer flex-1">I am planning to buy a plot</Label>
                    </div>
                  </RadioGroup>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4">
                  <Label htmlFor="city">Select City *</Label>
                  <Select value={formData.city} onValueChange={(value) => setFormData({ ...formData, city: value })}>
                    <SelectTrigger id="city">
                      <SelectValue placeholder="Choose your city" />
                    </SelectTrigger>
                    <SelectContent>
                      {CITIES.map((city) => (
                        <SelectItem key={city} value={city}>
                          {city}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-4">
                  <Label>Select Your Budget Range *</Label>
                  <div className="grid grid-cols-1 gap-2">
                    {BUDGETS.map((budget) => (
                      <button
                        key={budget}
                        onClick={() => setFormData({ ...formData, budget })}
                        className={`p-4 border rounded-lg text-left transition-all ${
                          formData.budget === budget
                            ? "bg-primary text-primary-foreground border-primary"
                            : "hover:bg-secondary"
                        }`}
                      >
                        {budget}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 5 && (
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Review Your Details</h3>
                  <div className="space-y-2 text-sm bg-secondary/50 p-4 rounded-lg">
                    <p><strong>Name:</strong> {formData.name}</p>
                    <p><strong>Phone:</strong> {formData.phone}</p>
                    {formData.email && <p><strong>Email:</strong> {formData.email}</p>}
                    <p><strong>Plot Ownership:</strong> {formData.plotOwnership === "yes" ? "I own a plot" : "Planning to buy"}</p>
                    <p><strong>City:</strong> {formData.city}</p>
                    <p><strong>Budget:</strong> {formData.budget}</p>
                  </div>
                  <div className="bg-accent/10 border border-accent/20 p-4 rounded-lg">
                    <p className="text-sm"><strong>Price reference:</strong> ₹1,799 / sqft</p>
                  </div>
                </div>
              )}
            </div>

            <div className="flex gap-2">
              {step > 1 && (
                <Button variant="outline" onClick={() => setStep(step - 1)} className="flex-1">
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  Back
                </Button>
              )}
              {step < 5 ? (
                <Button onClick={handleNext} disabled={!canProceed()} className="flex-1">
                  Next
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              ) : (
                <Button onClick={handleSubmit} className="flex-1 btn-gradient">
                  Request Quote
                </Button>
              )}
            </div>
          </>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="flex justify-center">
              <CheckCircle className="w-16 h-16 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Thank You!</h3>
            <p className="text-muted-foreground">
              Thank you for choosing SNR Infra BuildTech! Our team will contact you shortly to discuss your project.
            </p>
            <p className="text-xs text-muted-foreground italic">
              Built on Trust, Rooted in Quality
            </p>
            <Button onClick={handleClose} className="w-full btn-gradient">
              Close
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default LeadForm;
