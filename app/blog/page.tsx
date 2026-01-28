import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Calendar } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Mindset vs Strategy: The Foundation of Trading Success",
    description: "Explore why your psychological approach to trading often matters more than the technical indicators you use. Learn how to develop a winning mindset that complements your strategy.",
    date: "January 15, 2026",
    readTime: "8 min read",
  },
  {
    id: 2,
    title: "Overcoming Fear of Loss: A Trader's Guide to Emotional Mastery",
    description: "Fear of loss can paralyze even the most experienced traders. Discover practical techniques to manage anxiety, accept losses as part of the process, and maintain emotional equilibrium.",
    date: "January 10, 2026",
    readTime: "10 min read",
  },
  {
    id: 3,
    title: "Discipline in FX: Building Unshakeable Trading Habits",
    description: "Discipline separates profitable traders from the rest. Learn how to create and maintain trading routines that enforce consistency, reduce emotional decision-making, and improve long-term results.",
    date: "January 5, 2026",
    readTime: "12 min read",
  },
];

export default function BlogPage() {
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
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
        </div>
      </section>
    </div>
  );
}
