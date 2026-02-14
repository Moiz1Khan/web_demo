"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { images } from "@/lib/media";

const posts = [
  {
    title: "First-Time Buyer Guide: UAE Mortgages Made Simple",
    excerpt: "Everything you need to know before applying for your first home loan.",
    image: images.blog[0],
    slug: "#",
  },
  {
    title: "Self-Employed? How to Get Approved for a UAE Mortgage",
    excerpt: "Proven strategies to present variable income for bank approval.",
    image: images.blog[1],
    slug: "#",
  },
  {
    title: "Fixed vs Variable Rate: Which is Right for You?",
    excerpt: "Compare the pros and cons to make an informed decision.",
    image: images.blog[2],
    slug: "#",
  },
];

export function BlogPreview() {
  return (
    <section className="py-16 md:py-24 bg-[#0a0a12]" data-reveal>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Latest from our blog
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Expert insights on UAE mortgages, market trends, and home buying tips.
        </p>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8" data-stagger>
          {posts.map((post) => (
            <motion.article
              key={post.title}
              data-stagger-item
              className="group border-gradient-wrap shine-sweep bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              <Link href={post.slug}>
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {post.excerpt}
                  </p>
                  <span className="flex items-center gap-1 text-sm font-medium text-primary">
                    Read more
                    <ArrowRight className="size-4" />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="#"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            Explore more guides
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
