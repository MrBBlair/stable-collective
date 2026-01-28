import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Calendar, ArrowLeft } from "lucide-react";
import { getPostById } from "@/lib/blog-posts";

type Props = {
  params: { id: string };
};

export default function BlogPostPage({ params }: Props) {
  const { id } = params;
  const postId = parseInt(id, 10);
  if (Number.isNaN(postId)) notFound();

  const post = getPostById(postId);
  if (!post) notFound();

  return (
    <div className="min-h-screen trading-bg-pattern">
      <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to blog
          </Link>

          <Image
            src="/stable-collective-logo.png"
            alt="Stable Collective"
            width={120}
            height={120}
            className="mb-6 rounded-full object-contain"
          />

          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Calendar className="h-4 w-4" />
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-8">{post.title}</h1>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
            {post.body.map((paragraph, index) => (
              <p key={index} className="text-base leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <Link
              href="/blog"
              className="inline-flex items-center text-primary hover:underline"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to blog
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
