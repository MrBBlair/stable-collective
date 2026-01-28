import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Calendar } from "lucide-react";
import { blogPosts } from "@/lib/blog-posts";

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
