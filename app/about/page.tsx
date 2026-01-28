import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Users, BookOpen, Zap, ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen trading-bg">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="max-w-6xl mx-auto">
          <Image
            src="/stable-collective-logo.png"
            alt="Stable Collective"
            width={216}
            height={216}
            className="mx-auto mb-6 rounded-full object-contain"
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">About Stable Collective</h1>
          <p className="text-xl text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
            A precision trading approach using psychology, strategy, and clean confirmations—taught by traders, for traders.
          </p>

          {/* Mission Statement */}
          <div className="mb-16">
            <Card className="border-2 border-primary">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl mb-4">Scribe of the market.</CardTitle>
                <CardTitle className="text-2xl mb-2">This is not a hobby.</CardTitle>
                <CardDescription className="text-lg">
                  Stable Collective exists to help traders master the markets and build lasting wealth through disciplined,
                  psychology-aware trading. We teach structure, clarity, and execution—not shortcuts or hype.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Our Approach */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Approach</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Most traders consistently lose because they&apos;re trading without a system. Indicators, signals, and
                guesswork lead to frustration. Real consistency comes from understanding the fundamentals: market
                structure, bias, timing, price cycles, and institutional intent.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Stable Collective teaches a systematic approach to reading the market. We don&apos;t promise quick wins
                or easy money. We teach discipline, risk management, and the patience to let your edge play out over
                time.
              </p>
            </div>
          </div>

          {/* What We Offer */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">What We Offer</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <BookOpen className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Trading Programs</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    We teach traders how to read the market with clarity—not confusion. Our comprehensive courses and
                    mentorships, including Dr. Kathy Kirkland&apos;s ECC11 approach, focus on market structure, bias
                    and direction, timing windows, price cycles, and institutional intent.
                  </CardDescription>
                  <Button asChild variant="outline" className="mt-4 w-full">
                    <Link href="/programs">
                      View Programs
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <Brain className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">The Blog Space</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    The Blog Space is split into two tracks: <strong>Psychology</strong> (mindset, discipline, emotional
                    control) and <strong>Trading</strong> (practical tips, structure, and execution). Psychology releases
                    on the 1st, Trading on the 15th.
                  </CardDescription>
                  <Button asChild variant="outline" className="mt-4 w-full">
                    <Link href="/blog">
                      Visit The Blog Space
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <Zap className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Jubilee Market Scanner</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Real-time market scanning across Forex, Crypto, and Futures markets. Surface high-probability
                    setups based on structure, timing, and institutional flow. Our AI Intelligence Bot (in development)
                    will provide additional analysis and insight—you stay in control of every trade.
                  </CardDescription>
                  <Button asChild variant="outline" className="mt-4 w-full">
                    <Link href="/scanner">
                      Explore Scanner
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Card className="border-dashed max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl mb-2">Ready to Get Started?</CardTitle>
                <CardDescription className="text-base">
                  Join the Stable Collective community and start building your trading edge today.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <Link href="/join">
                    JOIN THE COMMUNITY
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
