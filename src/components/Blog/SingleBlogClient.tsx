"use client";

import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Blog } from "@/types/blog";
import RenderBodyContent from "@/components/Blog/RenderBodyContent";
import Link from "next/link";
import Image from "next/image";
import CopyToClipboard from "@/components/Common/CopyToClipboard";
import SocialShare from "@/components/Blog/SocialShare";
import { imageBuilder } from "@/sanity/sanity-utils";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

interface SingleBlogClientProps {
  post: Blog;
  postURL: string;
  navLinks: { href: string; label: string }[];
}

const getImageUrl = (image: SanityImageSource | undefined): string => {
  if (!image) return "";
  return imageBuilder(image as unknown as string).url() || "";
};

export default function SingleBlogClient({ post, postURL, navLinks }: SingleBlogClientProps) {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

  return (
    <>
      <Header
        isHamburgerMenuOpen={isHamburgerMenuOpen}
        setIsHamburgerMenuOpen={setIsHamburgerMenuOpen}
        navLinks={navLinks}
      />
      {!isHamburgerMenuOpen ? (
        <main>
          <section className="relative bg-white">
            {/* Background Shapes */}
            {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute left-0 top-0 -z-10">
                <Image src="/images/blog/blog-shape-01.svg" alt="Shape" width={340} height={680} />
              </div>
              <div className="absolute right-0 top-0 -z-10">
                <Image src="/images/blog/blog-shape-02.svg" alt="Shape" width={425} height={672} />
              </div>
            </div> */}

            <div className="relative z-10 pt-20 pb-16">
              <div className="max-w-[1200px] mx-auto px-4">
                {/* Header Section (Left Aligned Title & Description) */}
                <div className="mb-10 text-left">
                  <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                    {post?.title}
                  </h2>
                  {/* <p className="text-lg text-gray-600 mb-8 max-w-2xl">
                  {post?.metadata || ""}
                  </p> */}
                </div>

                {/* Main Image (Centered within a Smaller Container) */}
                {post?.mainImage && (
                  <div className="mb-12 overflow-hidden rounded-xl shadow-md max-w-[770px] mx-auto">
                    <Image
                      src={getImageUrl(post?.mainImage)}
                      alt={post?.title}
                      width={770}
                      height={450}
                      className="w-full rounded-xl object-cover"
                    />
                  </div>
                )}

                {/* Blog Content */}
                <div className="max-w-[770px] mx-auto">
                  <div className="prose prose-lg dark:prose-dark">
                    <RenderBodyContent post={post} />
                  </div>
                </div>
{/* Author Section */}
{post?.author && (  // Add this check
  <div className="max-w-[770px] mx-auto mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between">
    <div className="flex items-center gap-4">
      <div className="w-16 h-16 overflow-hidden rounded-full">
        {/* Add optional chaining and default empty string */}
        <Link href={`/blog/author/${post?.author?.slug?.current || ''}`}>
          <Image
            src={getImageUrl(post?.author?.image)}
            alt={post?.author?.name || ''}
            width={64}
            height={64}
            className="rounded-full"
          />
        </Link>
      </div>
      <div>
        {/* Add optional chaining and default empty string */}
        <Link
          href={`/blog/author/${post?.author?.slug?.current || ''}`}
          className="text-xl font-semibold text-black"
        >
          {post?.author?.name || ''}
        </Link>
        <p className="text-gray-500">{post?.author?.bio || ''}</p>
      </div>
    </div>
    <div className="flex items-center gap-4 mt-4 md:mt-0">
      <CopyToClipboard text={postURL} label="Copy Link" />
      <SocialShare url={postURL} />
    </div>
  </div>
)}
              </div>
            </div>
          </section>
          <Footer />
        </main>
      ) : (
        // Mobile menu overlay
        <div className="absolute top-0 left-0 w-full h-[calc(100vh-100px)] bg-white flex flex-col items-center gap-4 pr-6 mt-28">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-black">
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
