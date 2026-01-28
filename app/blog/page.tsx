import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Calendar } from "lucide-react";

const blogPosts = [
  { id: 1, title: "Position Sizing That Protects Your Account", description: "One of the most overlooked skills in trading is how much to risk per trade. Learn practical rules for position sizing—including fixed fractional and percentage-of-equity methods—so drawdowns stay manageable and you can stay in the game.", date: "January 1, 2026", publishDate: "2026-01-01", readTime: "7 min read" },
  { id: 2, title: "Reading Market Structure: Where Price Wants to Go", description: "Higher highs, lower lows, and break of structure aren't just jargon—they're the language of the market. A clear look at how to read structure on the chart and use it to improve entries and avoid fighting the trend.", date: "January 15, 2026", publishDate: "2026-01-15", readTime: "9 min read" },
  { id: 3, title: "Why Trade Journaling Beats Memory Every Time", description: "Your brain edits the past. A trade journal doesn't. We break down what to log after every trade, how to review your journal weekly, and why the best traders treat journaling as non-negotiable.", date: "February 1, 2026", publishDate: "2026-02-01", readTime: "6 min read" },
  { id: 4, title: "Building a Trading Plan You'll Actually Follow", description: "A plan in a drawer is useless. Here's how to write a simple, actionable trading plan—rules for entries, exits, risk, and sessions—and tie it to your calendar so it becomes part of your routine instead of a one-time document.", date: "February 15, 2026", publishDate: "2026-02-15", readTime: "8 min read" },
  { id: 5, title: "Support and Resistance: Drawing Lines That Matter", description: "Not every level is created equal. Learn how to identify high-probability support and resistance—and when to redraw or drop a level so your chart stays clean and actionable.", date: "March 1, 2026", publishDate: "2026-03-01", readTime: "8 min read" },
  { id: 6, title: "The London–New York Overlap: When Liquidity Peaks", description: "The busiest hours of the day often produce the cleanest moves. We break down the London–New York overlap: why it matters, which pairs to watch, and how to avoid the traps.", date: "March 15, 2026", publishDate: "2026-03-15", readTime: "7 min read" },
  { id: 7, title: "Risk Per Trade: Why 1% Isn't Magic (But Works)", description: "The 1% rule is a starting point, not a religion. Explore how to choose a risk level that fits your account size, psychology, and edge—and when it makes sense to adjust.", date: "April 1, 2026", publishDate: "2026-04-01", readTime: "6 min read" },
  { id: 8, title: "Drawdowns Are Inevitable. How You Respond Isn't.", description: "Every trader faces drawdowns. The difference is how you manage them: position size, emotional reset, and when to step back. Practical steps to protect capital and mindset when the curve dips.", date: "April 15, 2026", publishDate: "2026-04-15", readTime: "7 min read" },
  { id: 9, title: "Backtesting Without Fooling Yourself", description: "Backtests can lie if you're not careful. Learn how to avoid curve-fitting, account for spread and slippage, and run tests that actually tell you something about real-world performance.", date: "May 1, 2026", publishDate: "2026-05-01", readTime: "9 min read" },
  { id: 10, title: "From Backtest to Live: Forward Testing Your Edge", description: "The gap between backtest and live trading is where many edges die. How to forward test properly—paper or micro size—and when you're ready to go live.", date: "May 15, 2026", publishDate: "2026-05-15", readTime: "8 min read" },
  { id: 11, title: "R-Multiples: Measuring Reward Before You Enter", description: "Knowing your risk is half the picture. R-multiples help you size reward relative to risk and set targets that keep your expectancy positive. A simple framework that scales.", date: "June 1, 2026", publishDate: "2026-06-01", readTime: "6 min read" },
  { id: 12, title: "When to Scale In and When to Walk Away", description: "Adding to winners can boost returns—or blow up discipline. We look at rules for scaling in, when to avoid it, and how to keep position sizing under control.", date: "June 15, 2026", publishDate: "2026-06-15", readTime: "7 min read" },
  { id: 13, title: "Trading Sessions: Asia, London, New York", description: "Each session has its own character. A guide to session times, typical volatility, and which pairs and styles tend to work best in each window.", date: "July 1, 2026", publishDate: "2026-07-01", readTime: "8 min read" },
  { id: 14, title: "Scalping vs. Swing: Matching Style to Your Life", description: "Your schedule and personality should inform your timeframe. We compare scalping and swing trading—time commitment, psychology, and how to choose without chasing someone else's style.", date: "July 15, 2026", publishDate: "2026-07-15", readTime: "7 min read" },
  { id: 15, title: "Emotional Regulation After a Losing Streak", description: "Losing streaks test even disciplined traders. Practical ways to reset: when to reduce size, when to take a day off, and how to separate one bad week from your long-term edge.", date: "August 1, 2026", publishDate: "2026-08-01", readTime: "6 min read" },
  { id: 16, title: "The ECC11 Approach: Structure and Timing", description: "Market structure and timing go hand in hand. An introduction to the ECC11 framework—how it fits into reading the chart and planning entries—and where to go deeper.", date: "August 15, 2026", publishDate: "2026-08-15", readTime: "8 min read" },
  { id: 17, title: "Liquidity Pools and Where Price Often Reverses", description: "Institutional order flow leaves clues. We explore how liquidity pools form, where stops often cluster, and how to use that context without overcomplicating your chart.", date: "September 1, 2026", publishDate: "2026-09-01", readTime: "9 min read" },
  { id: 18, title: "Automation and Alerts: Let the Market Come to You", description: "You don't have to watch the screen all day. How to use alerts and light automation to catch setups on your terms—without giving up discretion at the trigger.", date: "September 15, 2026", publishDate: "2026-09-15", readTime: "7 min read" },
  { id: 19, title: "Community and Mentorship in Trading", description: "Trading is solitary, but learning doesn't have to be. Why community and mentorship matter, how to find the right fit, and what to expect—and avoid—in groups and programs.", date: "October 1, 2026", publishDate: "2026-10-01", readTime: "6 min read" },
  { id: 20, title: "Reviewing Your Week: A 15-Minute Ritual", description: "A short weekly review can sharpen your edge. What to look at: win rate, average R, biggest mistake, and one change for next week. A template that sticks.", date: "October 15, 2026", publishDate: "2026-10-15", readTime: "5 min read" },
  { id: 21, title: "Trend Following Without Chasing", description: "Trend following works—until you enter too late. How to define the trend, wait for pullbacks or structure, and avoid buying every new high.", date: "November 1, 2026", publishDate: "2026-11-01", readTime: "8 min read" },
  { id: 22, title: "When Not to Trade: Patience as an Edge", description: "Sitting on your hands is a skill. When to skip a session, sit out a choppy market, or pass on a marginal setup—and why that protects your capital and your head.", date: "November 15, 2026", publishDate: "2026-11-15", readTime: "6 min read" },
  { id: 23, title: "Year in Review: Auditing Your Trading", description: "Before you set new goals, look back. How to audit your year: metrics that matter, patterns in your mistakes, and one or two focus areas for the year ahead.", date: "December 1, 2026", publishDate: "2026-12-01", readTime: "7 min read" },
  { id: 24, title: "Setting Up 2027: Goals That Stick", description: "Vague resolutions don't survive February. How to set trading goals that are specific, measurable, and tied to process—so you actually follow through.", date: "December 15, 2026", publishDate: "2026-12-15", readTime: "6 min read" },
];

// Recompute on each request so timed releases use the current date
export const dynamic = "force-dynamic";

function getTodayYYYYMMDD(): string {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export default function BlogPage() {
  const today = getTodayYYYYMMDD();
  const visiblePosts = blogPosts.filter((post) => post.publishDate <= today);
  const upcomingPosts = blogPosts.filter((post) => post.publishDate > today);

  return (
    <div className="min-h-screen trading-bg-pattern">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="max-w-6xl mx-auto">
          <Image
            src="/stable-collective-logo.png"
            alt="Stable Collective"
            width={216}
            height={216}
            className="mx-auto mb-6 rounded-full object-contain"
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">The Psychology of Trading</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Master your trading mindset with insights on discipline, fear management, emotional control, and the psychological resilience needed to navigate market volatility with confidence
          </p>

          {visiblePosts.length === 0 ? (
            <p className="text-muted-foreground">
              New posts are on the way. Check back soon.
            </p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visiblePosts.map((post) => (
                <Card key={post.id} className="flex flex-col hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {post.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto pt-0">
                    <Link
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center text-primary hover:underline group"
                    >
                      Read more
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {upcomingPosts.length > 0 && (
            <div className="mt-16 pt-12 border-t border-border">
              <h2 className="text-2xl font-bold mb-6">Upcoming</h2>
              <p className="text-muted-foreground mb-6">
                New posts are scheduled to release on the dates below.
              </p>
              <ul className="space-y-4">
                {upcomingPosts.map((post) => (
                  <li key={post.id} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 py-3 border-b border-border last:border-0">
                    <span className="font-medium">{post.title}</span>
                    <span className="text-sm text-muted-foreground flex items-center gap-1.5 shrink-0">
                      <Calendar className="h-4 w-4" />
                      Release: {post.date}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
