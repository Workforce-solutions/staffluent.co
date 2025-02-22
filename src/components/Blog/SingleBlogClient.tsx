// src/components/Blog/SingleBlogClient.tsx
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
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
    const articleHeadings = document.querySelectorAll('article h2, article h3');
    const extractedHeadings = Array.from(articleHeadings).map(heading => ({
      id: heading.id,
      text: heading.textContent || ''
    }));
    setHeadings(extractedHeadings);
  }, [post]);

  const readingTime = Math.ceil((post?.body?.length || 0) / 1000);
  const category = post?.category?.title || "HR Strategy";
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

      <div className="mt-32">
        {/* Header Section */}
        <div className="w-full bg-white mb-16">
          <div className="max-w-[1200px] mx-auto px-4">
            <div className="lg:w-3/4"> {/* Same width as content */}
              {/* Meta info */}
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                <span>{category}</span>
                <span>•</span>
                <span>{readingTime} min read</span>
                <span>•</span>
                <span>{publishDate}</span>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
                {post?.title}
              </h1>

              {/* Author */}
              {post?.author && (
                <div className="flex items-center gap-3 text-sm mb-8">
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

              {/* Main Image */}
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
        </div>

        {/* Content Section */}
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-3/4">
              <article className="prose prose-lg max-w-none">
                <RenderBodyContent post={post} />
              </article>

              {/* Share and Subscribe Section */}
              <div className="mt-16 space-y-8">
                {/* Share Section */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="font-semibold mb-3">Share This Article</h4>
                  <div className="flex items-center gap-3">
                    <SocialShare url={postURL} className="flex gap-2 [&>a]:rounded-full [&>a]:w-10 [&>a]:h-10 [&>a]:flex [&>a]:items-center [&>a]:justify-center [&>a]:bg-white [&>a]:hover:bg-gray-100" />
                    <CopyToClipboard 
                      text={postURL} 
                      label="Copy Link" 
                      className="rounded-full w-10 h-10 flex items-center justify-center bg-white hover:bg-gray-100"
                    />
                  </div>
                </div>

                {/* Subscribe Section */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="font-semibold mb-3">Subscribe to our blog</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Get the latest HR tips and insights straight to your inbox.
                  </p>
                  <form className="flex flex-col gap-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black/20 bg-white"
                    />
                    <button
                      type="submit"
                      className="w-full bg-black text-white px-4 py-3 rounded-lg hover:bg-black/90 transition-colors"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>

                {/* Related Posts */}
                {relatedPosts?.length > 0 && (
                  <div className="mt-16">
                    <h4 className="text-2xl font-bold mb-6">Related Blogs</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {relatedPosts.map((blog) => (
                        <BlogItem key={blog._id} blog={blog} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Table of Contents Sidebar */}
            <div className="lg:w-1/4">
              <div className="sticky top-[120px]">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="font-semibold mb-3">TABLE OF CONTENTS</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {headings.map((heading) => (
                      <li key={heading.id}>
                        <a 
                          href={`#${heading.id}`} 
                          className="hover:text-black transition-colors block py-1"
                        >
                          {heading.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}