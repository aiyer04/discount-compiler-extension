import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DollarSign, TrendingUp, Package, Calendar } from "lucide-react";

interface StatCardProps {
  icon: React.ElementType;
  label: string;
  value: string;
  change?: string;
  gradient?: boolean;
}

const StatCard = ({ icon: Icon, label, value, change, gradient }: StatCardProps) => (
  <Card className={`p-6 ${gradient ? 'bg-gradient-to-br from-primary to-[hsl(280,90%,65%)] text-white' : 'bg-card'} border-0 shadow-[var(--shadow-soft)]`}>
    <div className="flex items-start justify-between mb-4">
      <div className={`w-12 h-12 ${gradient ? 'bg-white/20' : 'bg-primary/10'} rounded-xl flex items-center justify-center`}>
        <Icon className={`w-6 h-6 ${gradient ? 'text-white' : 'text-primary'}`} />
      </div>
      {change && (
        <Badge variant="secondary" className={gradient ? "bg-white/20 text-white border-0" : ""}>
          {change}
        </Badge>
      )}
    </div>
    <div>
      <p className={`text-sm mb-1 ${gradient ? 'text-white/80' : 'text-muted-foreground'}`}>{label}</p>
      <p className={`text-3xl font-bold ${gradient ? 'text-white' : 'text-foreground'}`}>{value}</p>
    </div>
  </Card>
);

export const SavingsDashboard = () => {
  const recentSavings = [
    { store: "Nike", amount: "$23.40", date: "Today", discount: "20% Student" },
    { store: "Amazon", amount: "$15.00", date: "Yesterday", discount: "Prime Day" },
    { store: "Apple", amount: "$120.00", date: "3 days ago", discount: "Student Bundle" },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          icon={DollarSign}
          label="Total Saved"
          value="$2,847"
          gradient
        />
        <StatCard
          icon={TrendingUp}
          label="This Month"
          value="$345"
          change="+12%"
        />
        <StatCard
          icon={Package}
          label="Discounts Applied"
          value="47"
          change="+8"
        />
        <StatCard
          icon={Calendar}
          label="Avg. Per Purchase"
          value="$18.50"
        />
      </div>

      {/* Recent Activity */}
      <Card className="p-6 border-0 shadow-[var(--shadow-soft)]">
        <h3 className="text-lg font-bold text-foreground mb-4">Recent Savings</h3>
        <div className="space-y-3">
          {recentSavings.map((saving, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-[hsl(280,90%,65%)] rounded-xl flex items-center justify-center text-white font-bold">
                  {saving.store[0]}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{saving.store}</p>
                  <p className="text-sm text-muted-foreground">{saving.discount}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-accent text-lg">{saving.amount}</p>
                <p className="text-xs text-muted-foreground">{saving.date}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};
