import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Brain, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Master the Markets with Stable Collective
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Psychology, Strategy, and Legacy Building
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link href="/scanner">
                Access Jubilee Scanner
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6">
              <Link href="/programs">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Our Mission
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-card border border-border">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Stability</h3>
              <p className="text-muted-foreground">
                Building consistent, sustainable trading practices that stand the test of time.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-card border border-border">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Brain className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Mindset</h3>
              <p className="text-muted-foreground">
                Developing the psychological resilience needed to navigate market volatility.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-card border border-border">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Long-term Wealth</h3>
              <p className="text-muted-foreground">
                Creating generational wealth through disciplined, strategic trading approaches.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
