import { PageLayout } from "@/components/PageLayout";
import { BlogGrid } from "@/components/BlogGrid";
import Image from "next/image";
import { images } from "@/lib/media";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | NexHome – UAE Mortgage & Home Loan Insights",
  description:
    "Expert insights on UAE mortgages, market trends, first-time buyer guides, and home buying tips from NexHome.",
};

export default function BlogPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-transparent">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Latest from
            <span className="text-primary"> Our Blog</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Expert insights on UAE mortgages, market trends, and home buying tips.
          </p>
        </div>
      </section>

      {/* Blog content - matches home page BlogSection layout */}
      <section className="py-10 md:py-14 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(280px,360px)_1fr] gap-10 lg:gap-12 items-start">
            <div className="relative order-1 lg:order-1 lg:max-w-[360px]">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] max-h-[400px] lg:max-h-[420px] group">
                <Image
                  src={images.blog[0]}
                  alt="UAE mortgage insights"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-80"
                  aria-hidden
                />
              </div>
              <div
                className="absolute -bottom-3 -right-3 w-24 h-24 rounded-2xl border border-white/10 bg-background/60 backdrop-blur-sm -z-10"
                aria-hidden
              />
            </div>
            <div className="order-2 lg:order-2 flex justify-center lg:justify-end">
              <BlogGrid />
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
