import React from "react";
import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import { imageBuilder } from "@/sanity/sanity-utils";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const getImageUrl = (image: SanityImageSource | undefined): string => {
  if (!image) return "";
  // Notice: No forced width/height here—just the base URL
  return imageBuilder(image as unknown as string).url() || "";
};

const BlogItem = ({ blog }: { blog: Blog }) => {
  const category = blog?.categories?.[0] ?? "General";
  const dateString = new Date(blog?.publishedAt ?? "").toLocaleDateString(
    undefined,
    { month: "short", day: "numeric", year: "numeric" }
  );

  return (
    <article className="flex flex-col rounded-lg border border-gray-200 bg-white shadow hover:shadow-md transition p-4">
      {/* Image or placeholder */}
      {blog?.mainImage ? (
        <div className="rounded-md mb-4 bg-gray-100">
          <Image
            src={getImageUrl(blog.mainImage)}
            alt={blog.title}
            // Provide some max width & auto height
            width={800}
            height={600}
            className="w-full h-auto object-contain"
          />
        </div>
      ) : (
        <div className="w-full h-[200px] flex items-center justify-center bg-black text-white text-6xl font-bold rounded-md mb-4">
          S
        </div>
      )}

      <p className="text-sm text-gray-500 mb-1">
        <span className="font-semibold">{category}</span> &bull; {dateString}
      </p>
      <h3 className="text-lg font-semibold mb-2">
        {blog?.title || "Untitled Blog"}
      </h3>
      <p className="text-sm text-gray-600 flex-grow">
        {blog?.metadata?.slice(0, 100)}...
      </p>
      <Link
        href={`/blog/${blog.slug.current}`}
        className="text-indigo-600 font-semibold mt-4"
      >
        Read Full Blog &rarr;
      </Link>
    </article>
  );
};

export default BlogItem;
