import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Star, Users, Clock } from "lucide-react";

const programs = [
  {
    id: 1,
    title: "Dr. Kathy Kirkland's Mentorship",
    description: "Comprehensive one-on-one mentorship program with Dr. Kathy Kirkland. Learn advanced trading strategies, risk management, and psychological frameworks for long-term success.",
    price: "Premium",
    features: ["1-on-1 Sessions", "Custom Strategy Development", "Lifetime Access", "Community Support"],
    featured: true,
  },
  {
    id: 2,
    title: "Advanced FX Trading Course",
    description: "Master the fundamentals and advanced techniques of Forex trading. From market analysis to execution, this course covers everything you need to trade confidently.",
    price: "$497",
    features: ["50+ Video Lessons", "Live Trading Sessions", "Trading Templates", "Email Support"],
    featured: false,
  },
  {
    id: 3,
    title: "Psychology Mastery Program",
    description: "Deep dive into the psychological aspects of trading. Learn to manage emotions, build discipline, and develop the mindset of a successful trader.",
    price: "$297",
    features: ["Mindset Training", "Emotional Regulation", "Discipline Framework", "Weekly Q&A"],
    featured: false,
  },
  {
    id: 4,
    title: "Futures Trading Bootcamp",
    description: "Intensive bootcamp focused on futures trading. Learn to analyze markets, manage risk, and execute profitable trades in the futures market.",
    price: "$697",
    features: ["Live Market Analysis", "Risk Management", "Trade Journaling", "Mentor Access"],
    featured: false,
  },
];

export default function ProgramsPage() {
  return (
    <div className="min-h-screen">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Trading Programs & Mentorships</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Elevate your trading journey with our comprehensive educational programs
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {programs.map((program) => (
              <Card
                key={program.id}
                className={`flex flex-col ${program.featured ? "border-2 border-primary" : ""}`}
              >
                {program.featured && (
                  <div className="bg-primary/10 text-primary px-4 py-2 text-center font-semibold">
                    Featured Program
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-2xl">{program.title}</CardTitle>
                    {program.featured && <Star className="h-5 w-5 text-primary fill-primary" />}
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {program.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>Limited Spots</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>Self-Paced</span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {program.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <span className="text-primary">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl font-bold text-primary">{program.price}</span>
                    </div>
                    <Button
                      asChild
                      className="w-full"
                      size="lg"
                    >
                      <a
                        href="https://iBuildLegacies.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Buy Now
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                    <p className="text-xs text-muted-foreground text-center mt-2">
                      Checkout powered by iBuildLegacies.com
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
