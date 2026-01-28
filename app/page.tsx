import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Target, Brain, TrendingUp, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen trading-bg">
      {/* Hero Section - iBuildLegacies Style */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center max-w-5xl mx-auto">
          <Image
            src="/stable-collective-logo.png"
            alt="Stable Collective"
            width={336}
            height={336}
            className="mx-auto mb-8 rounded-full object-contain"
            priority
          />
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
            <span className="block">MASTER THE MARKETS.</span>
            <span className="block text-primary">BUILD YOUR LEGACY.</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
            A precision trading approach using psychology, strategy, and clean confirmations — taught by Stable Collective.
          </p>
          <div className="mb-10 space-y-2">
            <p className="text-lg md:text-xl font-semibold text-foreground italic">
              Scribe of the market.
            </p>
            <p className="text-base md:text-lg text-muted-foreground font-medium">
              This is not a hobby.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link href="/join">
                JOIN THE COMMUNITY
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6">
              <Link href="/scanner">
                LEARN ABOUT THE JUBILEE SCANNER
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Whether you&apos;re new to trading or ready to elevate your skill, the Stable Collective ecosystem gives you structure, clarity, and advanced trading insight you can actually apply immediately—from the <strong>Jubilee Market Scanner</strong> and <strong>AI Intelligence Bot</strong> to comprehensive <strong>trading programs</strong>, mindset mastery in our <strong>Psychology Blog</strong>, and long-term <strong>legacy-building</strong> strategies.
          </p>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8">
            Most Traders Consistently Lose Because They&apos;re Trading Without a System.
          </h2>
          <p className="text-2xl md:text-3xl font-bold text-center text-primary mb-12">
            Stable Collective Fixes That.
          </p>
          <p className="text-lg text-muted-foreground text-center mb-8">
            Indicators, signals, and guesswork lead to frustration.<br />
            Real consistency comes from understanding:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-4xl mx-auto">
            {[
              "Market structure",
              "Bias and direction",
              "Timing windows",
              "Price cycles",
              "Institutional intent"
            ].map((item, index) => (
              <div key={index} className="text-center p-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <p className="font-semibold">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-lg text-muted-foreground text-center mt-12">
            Stable Collective teaches traders how to read the market with clarity — not confusion.
          </p>
          <div className="text-center mt-8">
            <Button asChild size="lg" variant="outline">
              <Link href="/blog">
                LEARN ABOUT THE STRATEGY
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trading Is Technical. Surviving It Is Mental. */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border-2 border-primary/20 rounded-lg p-8 md:p-12 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              Trading Is Technical. Surviving It Is Mental.
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Most traders spend years learning how to find entries. Indicators. Levels. Setups. Models. And for a while, it feels like progress.
              </p>
              <p className="font-semibold text-foreground">
                But the market doesn&apos;t break traders at the entry. It breaks them after.
              </p>
              <p>
                Once money is on the line, the chart stops being neutral—and the mind takes over.
              </p>
              <div className="grid md:grid-cols-2 gap-4 my-8">
                <div className="p-4 bg-background rounded-lg border border-border">
                  <p className="font-semibold text-foreground mb-2">Fear shows up as hesitation.</p>
                  <p className="text-sm">Greed shows up as overconfidence.</p>
                </div>
                <div className="p-4 bg-background rounded-lg border border-border">
                  <p className="font-semibold text-foreground mb-2">Patience gets tested during pauses.</p>
                  <p className="text-sm">Discipline erodes during chop.</p>
                </div>
              </div>
              <p>
                That&apos;s where most strategies quietly fail—not because they&apos;re bad, but because they&apos;re executed emotionally instead of intentionally.
              </p>
              <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg my-8">
                <p className="font-bold text-xl text-foreground mb-3">
                  The real separation in trading isn&apos;t who can spot a setup.
                </p>
                <p className="font-bold text-xl text-primary">
                  It&apos;s who can stay aligned while price moves, pauses, pulls back, and tests conviction.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-4 my-8 text-center">
                <div className="p-4">
                  <p className="font-bold text-primary text-xl mb-2">Structure</p>
                  <p className="text-sm">gets you in.</p>
                </div>
                <div className="p-4">
                  <p className="font-bold text-primary text-xl mb-2">Psychology</p>
                  <p className="text-sm">keeps you in.</p>
                </div>
                <div className="p-4">
                  <p className="font-bold text-primary text-xl mb-2">Discipline</p>
                  <p className="text-sm">decides how you exit.</p>
                </div>
              </div>
              <p className="text-center font-semibold text-foreground text-xl">
                Market structure, psychology, and discipline aren&apos;t separate skills. They&apos;re a system.
              </p>
              <p className="text-center text-lg mt-6">
                And trading isn&apos;t just about reading price. It&apos;s about reading yourself—while the market applies pressure.
              </p>
            </div>
            <p className="text-center text-muted-foreground mt-6">
              Build the psychological resilience to navigate volatility—and master your trading mindset with insights on discipline, fear management, and emotional control in our Psychology Blog.
            </p>
            <p className="text-center text-xs text-muted-foreground mt-3">
              Inspired by{" "}
              <a
                href="https://www.tradingview.com/chart/SILH2026/FFqGxyu6-Trading-Is-Technical-Surviving-It-Is-Mental/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-primary"
              >
                Trading Is Technical. Surviving It Is Mental.
              </a>{" "}
              on TradingView.
            </p>
            <div className="mt-8 text-center">
              <Button asChild size="lg">
                <Link href="/blog">
                  Explore Our Psychology Blog
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Scanner Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Edge in the Market Starts Here.
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            The Jubilee Market Scanner delivers real-time market analysis across Forex, Crypto, and Futures with live entry signals—designed to simplify your trading and bring clean confirmations directly to your screen.
          </p>
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8 text-left">
            {[
              "Real-time alerts",
              "Buy/sell bias confirmation",
              "Clean setups",
              "Perfect pairing with strategy",
              "Beginner-friendly data",
              "High-probability opportunities",
              "Advanced filtering",
              "Weekly Live Trading Sessions"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p className="text-lg text-muted-foreground mb-8">
            It works <em>hand-in-hand</em> with the Stable Collective strategy to help traders avoid noise and focus on clarity.
          </p>
          <Button asChild size="lg">
            <Link href="/join">
              JOIN THE COMMUNITY
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            A COMPLETE SYSTEM BUILT TO MAKE YOU A STRONG TRADER
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12">
            You&apos;re not just joining a group — you&apos;re learning inside a structured environment that supports your growth:
          </p>
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
              <h3 className="text-xl font-semibold mb-3">Legacy Building</h3>
              <p className="text-muted-foreground">
                Long-term wealth strategies focused on generational financial success through disciplined, strategic trading.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Real Traders. Real Growth. Real Success.
          </h2>
          <p className="text-xl text-muted-foreground">
            Our traders are improving their understanding of market structure, timing, and direction every week.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="/join">
                JOIN THE COMMUNITY
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section - iBuildLegacies Style */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-2xl font-semibold text-muted-foreground mb-4">STILL NOT SURE?</p>
            <h2 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
          </div>
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border border-border rounded-lg px-4">
              <AccordionTrigger className="text-left font-semibold">
                Do I need trading experience?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                No. Stable Collective is designed for all skill levels, from beginners to advanced traders.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border border-border rounded-lg px-4">
              <AccordionTrigger className="text-left font-semibold">
                What platform do I need to use?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                The Jubilee Scanner is through TradingView. Traders can execute trades through various platforms including MetaTrader 4, MetaTrader 5, and other supported brokers.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border border-border rounded-lg px-4">
              <AccordionTrigger className="text-left font-semibold">
                How do I access the community?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Once you subscribe to a program, you will receive an automatic invite to the community with full access to resources and support.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border border-border rounded-lg px-4">
              <AccordionTrigger className="text-left font-semibold">
                Will I get access to the replays?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes, all of the training sessions and live calls are recorded and available in the replay vault.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="border border-border rounded-lg px-4">
              <AccordionTrigger className="text-left font-semibold">
                Will this guarantee profits?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                No strategy can guarantee results. We focus on education, discipline, and structure to help you develop the skills needed for consistent trading.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-32">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build Your Legacy?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join a structured community, learn proven strategies, master the markets, and build lasting wealth—with clarity.
          </p>
          <Button asChild size="lg" className="text-lg px-8 py-6">
            <Link href="/join">
              JOIN THE COMMUNITY
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
