// src/app/blog/[slug]/page.tsx
import { Metadata } from "next";
import SingleBlogClient from "@/components/Blog/SingleBlogClient";
import { getPostBySlug, getRelatedPosts, imageBuilder } from "@/sanity/sanity-utils";
import { integrations } from "../../../../integrations.config";
import { Blog } from "@/types/blog";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post: Blog = integrations.isSanityEnabled
    ? await getPostBySlug(slug)
    : ({} as Blog);
  const siteURL = process.env.SITE_URL;
  const authorName = process.env.AUTHOR_NAME;

  if (post) {
    return {
      title: `${post.title || "Single Post Page"} | ${authorName} - Staffluent`,
      description: `${post?.metadata}`,
      alternates: {
        canonical: `${siteURL}/blog/${post.slug.current}`,
        languages: {
          "en-US": "/en-US",
          "de-DE": "/de-DE",
        },
      },
      robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: false,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
      openGraph: {
        title: `${post.title} | ${authorName}`,
        description: post.metadata,
        url: `${siteURL}/blog/${post.slug.current}`,
        siteName: authorName,
        images: [
          {
            url: imageBuilder(post.mainImage as unknown as string).url() || "",
            width: 1800,
            height: 1600,
            alt: post.title || "",
          },
        ],
        locale: "en_US",
        type: "article",
      },
      twitter: {
        card: "summary_large_image",
        title: `${post.title} | ${authorName} - Staffluent`,
        description: `${post?.metadata}`,
        creator: `@${authorName}`,
        site: `@${authorName}`,
        images: [imageBuilder(post.mainImage as unknown as string).url() || ""],
      },
    };
  }
  
  return {
    title: "Not Found",
    description: "No blog article has been found",
  };
}

export default async function BlogDetails({ params }: PageProps) {
  const { slug } = await params;
  
    
  const post: Blog = integrations.isSanityEnabled
    ? await getPostBySlug(slug)
    : {
        title: '',
        slug: { current: slug },
        author: {
          name: '',
          slug: { current: '' },
          image: '',
          bio: ''
        }
      } as Blog;

      const relatedPosts = integrations.isSanityEnabled 
      ? await getRelatedPosts(slug)
      : [];
  const postURL = `${process.env.SITE_URL}/blog/${slug}`;

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/request-demo", label: "Request a Demo" },
    { href: "https://app.staffluent.co/login", label: "Access Platform" },
  ];

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <SingleBlogClient 
      post={post} 
      postURL={postURL} 
      navLinks={navLinks} 
      relatedPosts={relatedPosts} 

    />
  );
}