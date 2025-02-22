import React from "react";
import { getPostBySlug, imageBuilder } from "@/sanity/sanity-utils";
import RenderBodyContent from "@/components/Blog/RenderBodyContent";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import CopyToClipboard from "@/components/Common/CopyToClipboard";
import SocialShare from "@/components/Blog/SocialShare";
import { integrations } from "../../../../integrations.config";
import { Blog } from "@/types/blog";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";


interface PageProps {
  params: Promise<{ slug: string }>;
	// searchParams: Record<string, string | string[] | undefined>;
  }


  const getImageUrl = (image: SanityImageSource | undefined): string => {
    if (!image) return '';
    return imageBuilder(image as unknown as string).url() || '';
  }
  
export async function generateMetadata(props: PageProps): Promise<Metadata> {

  const params = await props.params; // await the Promise
  const { slug } = params;
  const post = integrations.isSanityEnabled
    ? await getPostBySlug(slug)
    : ({} as Blog);
  const siteURL = process.env.SITE_URL;
  const authorName = process.env.AUTHOR_NAME;

  if (post) {
    return {
      title: `${post.title || "Single Post Page"} | ${authorName} - Next.js SaaS Starter Kit`,
      description: `${post.metadata?.slice(0, 136)}...`,
      // author: authorName,
      alternates: {
        canonical: `${siteURL}/blog/${post?.slug?.current}`,
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
        url: `${siteURL}/blog/${post?.slug?.current}`,
        siteName: authorName,
        images: [
          {
            url: getImageUrl(post.mainImage),
            width: 1800,
            height: 1600,
            alt: post.title || '',
          },
        ],
        locale: "en_US",
        type: "article",
      },
      twitter: {
        card: "summary_large_image",
        title: `${post.title} | ${authorName}`,
        description: `${post.metadata?.slice(0, 136)}...`,
        creator: `@${authorName}`,
        site: `@${authorName}`,
        images: [getImageUrl(post?.mainImage)],
        // url: `${siteURL}/blog/${post?.slug?.current}`,
      },
    };
  } else {
    return {
      title: "Not Found",
      description: "No blog article has been found",
    };
  }
}

export default async function SingleBlog(props: PageProps) {
  const params = await props.params; // await the Promise
  const { slug } = params;

  const post = integrations.isSanityEnabled
    ? await getPostBySlug(slug)
    : ({} as Blog);
  const postURL = `${process.env.SITE_URL}/blog/${post?.slug?.current}`;

  return (
    <main>
      <section className="lg:ub-pb-22.5 relative z-1 overflow-hidden pb-17.5 pt-35 xl:pb-27.5">
        {/* Background Shapes */}
        <div>
          <div className="absolute left-0 top-0 -z-1">
            <Image
              src="/images/blog/blog-shape-01.svg"
              alt="shape"
              width={340}
              height={680}
            />
          </div>
          <div className="absolute right-0 top-0 -z-1">
            <Image
              src="/images/blog/blog-shape-02.svg"
              alt="shape"
              width={425}
              height={672}
            />
          </div>
        </div>

        {integrations.isSanityEnabled ? (
          <div className="mx-auto w-full max-w-[1170px] px-4 sm:px-8 xl:px-0">
            <div className="mx-auto mb-12.5 w-full max-w-[770px] text-center">
              <div className="mb-5 flex flex-wrap items-center justify-center gap-6">
                <Link
                  href={`/blog/author/${post?.author?.slug?.current}`}
                  className="flex items-center gap-2 font-satoshi font-medium -tracking-[0.2px] text-black dark:text-gray-5"
                >
                  {post?.author?.name.charAt(0).toUpperCase() +
                    post?.author?.name.slice(1).toLowerCase()}
                </Link>
                <Link
                  href={`/blog/author/${post?.author?.slug?.current}`}
                  className="flex items-center gap-2 font-satoshi font-medium -tracking-[0.2px] text-black dark:text-gray-5"
                >
                  {new Date(post?.publishedAt as string)
                    .toDateString()
                    .split(" ")
                    .slice(1)
                    .join(" ")}
                </Link>
              </div>
              <h2 className="mb-5.5 font-satoshi text-3xl font-bold -tracking-[1.6px] text-black dark:text-white lg:text-heading-4 xl:text-heading-3">
                {post.title}
              </h2>
              <p className="dark:text-gray-5">{post.metadata}</p>
            </div>
            <div className="mb-12.5 overflow-hidden rounded-[15px]">
              <Image
                className="rounded-[15px]"
                src={getImageUrl(post.mainImage)}
                alt={post.title}
                width={1170}
                height={540}
              />
            </div>
            <div className="mx-auto w-full max-w-[770px]">
              <div className="blog-details">
                <RenderBodyContent post={post} />
              </div>
              <div className="mt-10 flex flex-wrap items-center justify-between gap-10 border-t border-stroke pt-9 dark:border-stroke-dark">
                <div className="flex items-center gap-5">
                  <div className="h-15 w-full max-w-[60px] overflow-hidden rounded-full">
                    <Link href={`/blog/author/${post?.author?.slug?.current}`}>
                      <Image
                        src={getImageUrl(post?.author?.image)}
                        alt={post?.author?.name}
                        width={60}
                        height={60}
                      />
                    </Link>
                  </div>
                  <div className="w-full">
                    <Link
                      href={`/blog/author/${post?.author?.slug?.current}`}
                      className="block font-satoshi text-lg font-medium capitalize text-black dark:text-white"
                    >
                      {post?.author?.name}
                    </Link>
                    <span className="block dark:text-gray-5">
                      {post?.author?.bio}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <CopyToClipboard text={postURL} label="Copy Link" />
                  <SocialShare url={postURL} />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-8" />
        )}
      </section>
    </main>
  );
};
