import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { GraduationCap, Mail, Shield } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const StudentVerification = () => {
  const [email, setEmail] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const { toast } = useToast();

  const handleVerify = () => {
    if (!email.endsWith(".edu")) {
      toast({
        title: "Invalid Email",
        description: "Please use a valid .edu email address",
        variant: "destructive",
      });
      return;
    }

    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      toast({
        title: "Verification Sent!",
        description: "Check your email to complete verification",
      });
    }, 2000);
  };

  return (
    <Card className="w-full max-w-md p-6 space-y-6 bg-gradient-to-br from-card via-card to-primary/5 border-primary/20 shadow-[var(--shadow-soft)]">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="w-16 h-16 bg-gradient-to-br from-primary to-[hsl(280,90%,65%)] rounded-2xl flex items-center justify-center mx-auto shadow-[var(--shadow-glow)]">
          <GraduationCap className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-foreground">Student Verification</h2>
        <p className="text-sm text-muted-foreground">
          Unlock exclusive student discounts by verifying your .edu email
        </p>
      </div>

      {/* Benefits */}
      <div className="space-y-3">
        {[
          { icon: Shield, text: "Extra 10-30% off at 1000+ stores" },
          { icon: Mail, text: "One-time verification, lifetime access" },
          { icon: GraduationCap, text: "Exclusive student-only deals" },
        ].map((benefit, index) => (
          <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <benefit.icon className="w-5 h-5 text-primary" />
            </div>
            <p className="text-sm text-foreground">{benefit.text}</p>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="space-y-2">
        <Input
          type="email"
          placeholder="yourname@university.edu"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-12 border-primary/20 focus:border-primary"
        />
        <Button
          onClick={handleVerify}
          disabled={isVerifying}
          className="w-full h-12 bg-gradient-to-r from-primary to-[hsl(280,90%,65%)] hover:opacity-90 text-white font-semibold"
        >
          {isVerifying ? "Verifying..." : "Verify Student Status"}
        </Button>
      </div>

      <p className="text-xs text-center text-muted-foreground">
        Your information is secure and only used for verification
      </p>
    </Card>
  );
};
