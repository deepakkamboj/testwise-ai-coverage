import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, Sparkles, GitBranch, Settings, TrendingUp, Layout } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Database,
      title: "Multi-Source Extraction",
      description: "Currently supports ADO and Outlook; Teams, SharePoint, and Figma integration planned",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Sparkles,
      title: "Automated Generation",
      description: "Instantly creates detailed, traceable test cases and comprehensive test steps",
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      icon: GitBranch,
      title: "Risk & Dependencies",
      description: "Highlights dependencies and assesses risk level for each test case",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      icon: Settings,
      title: "Automation Ready",
      description: "Flags which test cases can be automated and recommends appropriate tools",
      color: "text-success",
      bgColor: "bg-success/10"
    },
    {
      icon: TrendingUp,
      title: "Real-Time Updates",
      description: "User-initiated now; autonomous, real-time test case updates are planned",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Layout,
      title: "Intuitive Dashboard",
      description: "View, edit, and export test cases; input requirements for instant suggestions",
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Key Features</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Powerful capabilities designed to transform your testing workflow
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 hover:border-primary/30 transition-all shadow-md hover:shadow-xl hover:-translate-y-1 duration-300">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg ${feature.bgColor}`}>
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
