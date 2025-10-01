import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Percent, TrendingDown, Zap } from "lucide-react";
import { useState } from "react";

interface Discount {
  id: string;
  code: string;
  amount: string;
  type: "percentage" | "fixed";
  source: string;
  isStudent?: boolean;
}

interface ExtensionPopupProps {
  variant?: "control" | "variantA" | "variantB";
}

const mockDiscounts: Discount[] = [
  { id: "1", code: "STUDENT20", amount: "20%", type: "percentage", source: "Student Beans", isStudent: true },
  { id: "2", code: "SAVE15", amount: "15%", type: "percentage", source: "Honey" },
  { id: "3", code: "FREESHIP", amount: "Free Shipping", type: "fixed", source: "Retailer" },
];

export const ExtensionPopup = ({ variant = "control" }: ExtensionPopupProps) => {
  const [applied, setApplied] = useState(false);
  const totalSavings = "$45.32";
  const potentialSavings = "$12.50";

  const handleApplyAll = () => {
    setApplied(true);
    setTimeout(() => setApplied(false), 3000);
  };

  return (
    <Card className="w-[380px] overflow-hidden border-0 shadow-[var(--shadow-soft)]">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-[hsl(280,90%,65%)] p-4 text-primary-foreground">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
              <Percent className="w-4 h-4" />
            </div>
            <h2 className="font-bold text-lg">Discount Compiler</h2>
          </div>
          <Badge variant="secondary" className="bg-accent text-accent-foreground border-0">
            <Zap className="w-3 h-3 mr-1" />
            Active
          </Badge>
        </div>
        <p className="text-sm text-primary-foreground/90">
          {mockDiscounts.length} discounts found • Stackable
        </p>
      </div>

      {/* Variant-specific content */}
      <div className="p-4 space-y-4">
        {variant !== "control" && (
          <div className="bg-gradient-to-r from-accent/10 to-accent/5 rounded-lg p-3 border border-accent/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Your Savings Today</p>
                <p className="text-2xl font-bold text-accent">{totalSavings}</p>
              </div>
              <TrendingDown className="w-8 h-8 text-accent" />
            </div>
          </div>
        )}

        {/* Discounts List */}
        <div className="space-y-2">
          <p className="text-sm font-semibold text-foreground">Available Discounts</p>
          {mockDiscounts.map((discount) => (
            <div
              key={discount.id}
              className="flex items-center justify-between p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Percent className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground flex items-center gap-2">
                    {discount.code}
                    {discount.isStudent && (
                      <Badge variant="outline" className="text-xs border-primary text-primary">
                        Student
                      </Badge>
                    )}
                  </p>
                  <p className="text-xs text-muted-foreground">{discount.source}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-primary">{discount.amount}</p>
              </div>
            </div>
          ))}
        </div>

        {variant === "variantB" && (
          <div className="bg-gradient-to-r from-primary/5 to-transparent rounded-lg p-3 border border-primary/20">
            <p className="text-sm font-semibold text-foreground mb-2">💡 Recommended Deals</p>
            <p className="text-xs text-muted-foreground">
              Add $15 more to unlock additional {potentialSavings} in savings
            </p>
          </div>
        )}

        {/* Apply Button */}
        <Button
          onClick={handleApplyAll}
          disabled={applied}
          className="w-full h-12 bg-gradient-to-r from-primary to-[hsl(280,90%,65%)] hover:opacity-90 text-white font-semibold shadow-[var(--shadow-glow)] transition-all"
        >
          {applied ? (
            <>
              <Check className="w-5 h-5 mr-2" />
              Discounts Applied!
            </>
          ) : (
            <>
              <Zap className="w-5 h-5 mr-2" />
              Apply All Discounts
            </>
          )}
        </Button>
      </div>

      {/* Footer */}
      <div className="px-4 pb-4 text-center">
        <p className="text-xs text-muted-foreground">
          Verified student? <span className="text-primary font-semibold cursor-pointer hover:underline">Connect .edu email</span>
        </p>
      </div>
    </Card>
  );
};
