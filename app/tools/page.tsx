import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Shield, Clock, TrendingUp, Download, CheckCircle2 } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Automated Risk Management",
    description: "Advanced risk management algorithms protect your capital with automatic stop-loss and position sizing.",
  },
  {
    icon: Clock,
    title: "24/7 Market Watch",
    description: "Never miss an opportunity. The EA Bot monitors markets around the clock, executing trades based on your strategy.",
  },
  {
    icon: TrendingUp,
    title: "Trend Following",
    description: "Intelligent trend detection and following algorithms that adapt to changing market conditions.",
  },
];

const setupSteps = [
  {
    step: "1",
    title: "Download & Install",
    content: "Download the Stable Collective EA Bot from the link below. Extract the files to your MetaTrader 4 or MetaTrader 5 Expert Advisors folder.",
  },
  {
    step: "2",
    title: "Configure Settings",
    content: "Open the EA Bot settings in your trading platform. Configure your risk parameters, trading pairs, and strategy preferences according to your trading plan.",
  },
  {
    step: "3",
    title: "Enable AutoTrading",
    content: "Ensure AutoTrading is enabled in your MetaTrader platform. The EA Bot will now monitor markets and execute trades based on your configured parameters.",
  },
  {
    step: "4",
    title: "Monitor & Optimize",
    content: "Regularly review the EA Bot's performance through the trading journal. Adjust settings as needed to optimize results for your trading style and market conditions.",
  },
];

export default function ToolsPage() {
  return (
    <div className="min-h-screen">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="max-w-5xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Stable Collective EA Bot</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Automated trading solution designed for disciplined, risk-aware traders seeking consistent performance
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {features.map((feature, index) => (
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

          {/* Pricing Card */}
          <Card className="mb-16 border-2 border-primary">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl mb-2">Pricing</CardTitle>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-5xl font-bold text-primary">$299</span>
                <span className="text-muted-foreground">one-time</span>
              </div>
              <CardDescription className="text-lg mt-4">
                Lifetime license with free updates and support
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Full access to all EA Bot features</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Lifetime updates and improvements</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Email support and documentation</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Compatible with MT4 and MT5</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Risk management tools included</span>
                </li>
              </ul>
              <Button asChild size="lg" className="w-full">
                <a href="#download">
                  <Download className="mr-2 h-5 w-5" />
                  Download EA Bot
                </a>
              </Button>
              <p className="text-xs text-muted-foreground text-center mt-2">
                Download link will be provided after purchase
              </p>
            </CardContent>
          </Card>

          {/* Setup Guide */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Setup Guide</CardTitle>
              <CardDescription>
                Follow these steps to get your EA Bot up and running
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {setupSteps.map((step) => (
                  <AccordionItem key={step.step} value={`step-${step.step}`}>
                    <AccordionTrigger className="text-left">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold">
                          {step.step}
                        </span>
                        <span className="font-semibold">{step.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pl-11">
                      {step.content}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
