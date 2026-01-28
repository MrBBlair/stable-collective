import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Clock, TrendingUp } from "lucide-react";

const plannedFeatures = [
  {
    icon: Shield,
    title: "Planned Risk Intelligence",
    description:
      "AI-driven guidance on position sizing, stop placement, and portfolio-level risk—you make the final call on every trade.",
  },
  {
    icon: Clock,
    title: "24/7 Market Watch (Planned)",
    description:
      "Continuous AI monitoring of key markets to surface high-quality opportunities and alerts; you decide when to act.",
  },
  {
    icon: TrendingUp,
    title: "Trend & Structure Alignment",
    description:
      "Intelligence built to align with market structure, timing windows, and bias—so the AI reinforces, not replaces, your strategy.",
  },
];

export default function ToolsPage() {
  return (
    <div className="min-h-screen trading-bg">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="max-w-5xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <Image
              src="/stable-collective-logo.png"
              alt="Stable Collective"
              width={216}
              height={216}
              className="mx-auto mb-6 rounded-full object-contain"
            />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Stable Collective AI Intelligence Bot</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
              Future home of the Stable Collective AI Intelligence Bot—an AI-powered analysis and insight tool built to
              extend, not replace, the way you already read the market.
            </p>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              We&apos;re currently testing and refining the logic offline. When it&apos;s ready, this page will become the
              hub for configuration, risk parameters, and AI-driven market insight—you stay in control of every trade.
            </p>
          </div>

          {/* Planned Capabilities */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Planned Capabilities</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {plannedFeatures.map((feature, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 mx-auto">
                      <feature.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Status / Call to Action */}
          <Card className="border-dashed">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl mb-2">Currently in Development</CardTitle>
              <CardDescription className="text-base max-w-2xl mx-auto">
                The Stable Collective AI Intelligence Bot is being developed and validated offline to ensure it aligns
                with our philosophy of disciplined, psychology-aware trading. We&apos;ll never rush AI tools just to ship
                software.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-sm text-muted-foreground">
                For now, focus on mastering structure, psychology, and execution through our programs, Psychology Blog,
                and Jubilee Market Scanner. When the AI Intelligence Bot is ready, the traders who understand the
                process will get the most from it.
              </p>
              <Button asChild size="lg" variant="outline">
                <a href="/join">
                  Join the Community for AI Bot Updates
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
