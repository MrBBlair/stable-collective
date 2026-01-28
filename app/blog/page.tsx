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
  const visiblePsychology = blogPosts.filter(
    (post) => post.publishDate <= today && post.category === "psychology"
  );
  const visibleTrading = blogPosts.filter(
    (post) => post.publishDate <= today && post.category === "trading"
  );
  const upcomingPsychology = blogPosts.filter(
    (post) => post.publishDate > today && post.category === "psychology"
  );
  const upcomingTrading = blogPosts.filter(
    (post) => post.publishDate > today && post.category === "trading"
  );
  const nextPsychology =
    upcomingPsychology.length > 0
      ? [...upcomingPsychology].sort((a, b) => a.publishDate.localeCompare(b.publishDate))[0]
      : null;
  const nextTrading =
    upcomingTrading.length > 0
      ? [...upcomingTrading].sort((a, b) => a.publishDate.localeCompare(b.publishDate))[0]
      : null;

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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">The Blog Space</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Two tracks, one goal: long-term consistency. Explore the <strong>Psychology</strong> side for mindset and
            emotional mastery, and the <strong>Trading</strong> side for practical structure, tips, and execution.
            Psychology releases on the 1st, Trading on the 15th.
          </p>

          {/* Psychology posts */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Psychology</h2>
            {visiblePsychology.length === 0 ? (
              <p className="text-muted-foreground">Psychology posts are on the way. Check back soon.</p>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {visiblePsychology.map((post) => (
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
          </div>

          {/* Trading posts */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Trading</h2>
            {visibleTrading.length === 0 ? (
              <p className="text-muted-foreground">Trading posts are on the way. Check back soon.</p>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {visibleTrading.map((post) => (
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
          </div>

          {(nextPsychology || nextTrading) && (
            <div className="mt-16 pt-12 border-t border-border space-y-2">
              {nextPsychology && (
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 py-1">
                  <span className="font-medium">Next Psychology post: {nextPsychology.title}</span>
                  <span className="text-sm text-muted-foreground flex items-center gap-1.5 shrink-0">
                    <Calendar className="h-4 w-4" />
                    Release: {nextPsychology.date}
                  </span>
                </div>
              )}
              {nextTrading && (
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 py-1">
                  <span className="font-medium">Next Trading post: {nextTrading.title}</span>
                  <span className="text-sm text-muted-foreground flex items-center gap-1.5 shrink-0">
                    <Calendar className="h-4 w-4" />
                    Release: {nextTrading.date}
                  </span>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
