import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExtensionPopup } from "@/components/ExtensionPopup";
import { StudentVerification } from "@/components/StudentVerification";
import { SavingsDashboard } from "@/components/SavingsDashboard";
import { Sparkles, Chrome, GraduationCap, Zap } from "lucide-react";

const Index = () => {
  const [variant, setVariant] = useState<"control" | "variantA" | "variantB">("control");

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center space-y-6 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Chrome Extension Prototype</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-foreground">
            Discount <span className="bg-gradient-to-r from-primary to-[hsl(280,90%,65%)] bg-clip-text text-transparent">Compiler</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Automatically find and apply the best student discounts at checkout. Save time, save money, shop smarter.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Button size="lg" className="bg-gradient-to-r from-primary to-[hsl(280,90%,65%)] hover:opacity-90 text-white shadow-[var(--shadow-glow)]">
              <Chrome className="w-5 h-5 mr-2" />
              Add to Chrome (Demo)
            </Button>
            <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/5">
              View Case Study
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
            {[
              { icon: Zap, title: "Auto-Apply", desc: "Instant discount detection" },
              { icon: GraduationCap, title: "Student Focus", desc: "Exclusive .edu deals" },
              { icon: Sparkles, title: "Stack Savings", desc: "Combine multiple codes" },
            ].map((feature, index) => (
              <div key={index} className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Demo Sections */}
        <Tabs defaultValue="popup" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="popup">Extension Popup</TabsTrigger>
            <TabsTrigger value="verification">Student Verification</TabsTrigger>
            <TabsTrigger value="dashboard">Savings Dashboard</TabsTrigger>
          </TabsList>

          <TabsContent value="popup" className="space-y-6">
            <div className="text-center space-y-4 mb-8">
              <h2 className="text-2xl font-bold text-foreground">A/B Test Variants</h2>
              <p className="text-muted-foreground">Compare different popup designs to maximize engagement</p>
              <div className="flex items-center justify-center gap-4">
                <Button
                  variant={variant === "control" ? "default" : "outline"}
                  onClick={() => setVariant("control")}
                >
                  Control
                </Button>
                <Button
                  variant={variant === "variantA" ? "default" : "outline"}
                  onClick={() => setVariant("variantA")}
                >
                  Variant A (+ Savings)
                </Button>
                <Button
                  variant={variant === "variantB" ? "default" : "outline"}
                  onClick={() => setVariant("variantB")}
                >
                  Variant B (+ Recommendations)
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <ExtensionPopup variant={variant} />
            </div>
          </TabsContent>

          <TabsContent value="verification">
            <div className="flex justify-center">
              <StudentVerification />
            </div>
          </TabsContent>

          <TabsContent value="dashboard">
            <SavingsDashboard />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
