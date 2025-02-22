// src/components/Blog/SingleBlogClient.tsx
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Blog } from "@/types/blog";
import RenderBodyContent from "@/components/Blog/RenderBodyContent";
import CopyToClipboard from "@/components/Common/CopyToClipboard";
import SocialShare from "@/components/Blog/SocialShare";
import { imageBuilder } from "@/sanity/sanity-utils";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import BlogItem from "@/components/Blog/BlogItem";

const getImageUrl = (image: SanityImageSource | undefined): string => {
  if (!image) return "";
  return imageBuilder(image as unknown as string).url() || "";
};

interface SingleBlogClientProps {
  post: Blog;
  postURL: string;
  navLinks: { href: string; label: string }[];
  relatedPosts: Blog[];
}

export default function SingleBlogClient({
  post,
  postURL,
  navLinks,
  relatedPosts,
}: SingleBlogClientProps) {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);
  const [headings, setHeadings] = useState<{ id: string; text: string }[]>([]);

  useEffect(() => {
    // Get all headings from the content
    const articleHeadings = document.querySelectorAll('article h2, article h3');
    const extractedHeadings = Array.from(articleHeadings).map(heading => ({
      id: heading.id,
      text: heading.textContent || ''
    }));
    setHeadings(extractedHeadings);
  }, [post]);

  const readingTime = Math.ceil((post?.body?.length || 0) / 1000);
  const category = post?.categories?.[0] || "HR Strategy";
  const publishDate = post?.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString(undefined, {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : "";

  return (
    <>
      <Header
        isHamburgerMenuOpen={isHamburgerMenuOpen}
        setIsHamburgerMenuOpen={setIsHamburgerMenuOpen}
        navLinks={navLinks}
      />

      <main className="mt-20 relative">
        {/* Title Section */}
        <div className="w-full bg-white">
          <div className="max-w-[770px] mx-auto px-4 text-center py-10">
            <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-2">
              <span>{category}</span>
              <span>•</span>
              <span>{readingTime} min read</span>
              <span>•</span>
              <span>{publishDate}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
              {post?.title}
            </h1>

            {post?.author && (
              <div className="flex items-center justify-center gap-3 text-sm mb-6">
                <Image
                  src={getImageUrl(post.author.image)}
                  alt={post.author.name || ""}
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-black">{post.author.name}</p>
                  <p className="text-gray-600">{post.author.bio}</p>
                </div>
              </div>
            )}

            {post?.mainImage && (
              <div className="mb-10 overflow-hidden rounded-xl">
                <Image
                  src={getImageUrl(post.mainImage)}
                  alt={post.title}
                  width={770}
                  height={450}
                  className="w-full h-auto rounded-xl object-cover"
                />
              </div>
            )}
          </div>
        </div>

        {/* Main Content + Sidebars */}
        <div className="relative w-full bg-white">
          {/* Left Sidebar - Fixed Position */}
          <div className="hidden lg:block fixed left-[calc(50vw-600px)] top-[200px] w-[200px]">
            <div className="p-4">
              <h4 className="font-semibold mb-3">TABLE OF CONTENTS</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                {headings.map((heading) => (
                  <li key={heading.id}>
                    <a 
                      href={`#${heading.id}`} 
                      className="hover:text-black transition-colors"
                    >
                      {heading.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Main Content - Centered */}
          <div className="max-w-[770px] mx-auto px-4">
            <article className="prose prose-lg mx-auto">
              <RenderBodyContent post={post} />
            </article>

            {relatedPosts?.length > 0 && (
              <div className="mt-16 mb-16">
                <h4 className="text-2xl font-bold mb-6">Related Blogs</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedPosts.map((blog) => (
                    <BlogItem key={blog._id} blog={blog} />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Sidebar - Fixed Position */}
          <div className="hidden lg:block fixed right-[calc(50vw-600px)] top-[200px] w-[200px]">
            <div className="p-4">
              <div className="mb-8">
                <h4 className="font-semibold mb-3">Share This Article</h4>
                <div className="flex items-center gap-2">
                  <SocialShare url={postURL} />
                  <CopyToClipboard text={postURL} label="Copy Link" />
                </div>
              </div>

              <div className="bg-black/5 p-6 rounded-lg">
                <h4 className="font-semibold mb-3">Subscribe to our blog</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Get the latest HR tips and insights straight to your inbox.
                </p>
                <form className="flex flex-col gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black/20 bg-white"
                  />
                  <button
                    type="submit"
                    className="w-full bg-black text-white px-4 py-3 rounded-lg hover:bg-black/90 transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}