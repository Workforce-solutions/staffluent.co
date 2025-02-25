import ImageUrlBuilder from "@sanity/image-url";
import { createClient, groq, type QueryParams } from "next-sanity";
import clientConfig from "./config/client-config";
import {
	postQuery,
	postQueryBySlug,
	postQueryByTag,
	postQueryByAuthor,
	postQueryByCategory,
	postData,
} from "./sanity-query";
import { Blog } from "@/types/blog";
import { integrations } from "../../integrations.config";

export async function sanityFetch<QueryResponse>({
	query,
	qParams,
	tags,
}: {
	query: string;
	qParams: QueryParams;
	tags: string[];
}): Promise<QueryResponse> {
	if (integrations?.isSanityEnabled) {
		const client = createClient(clientConfig);
		return client.fetch<QueryResponse>(query, qParams, {
			cache: "force-cache",
			next: { tags },
		});
	} else {
		return {} as QueryResponse;
	}
}

export function imageBuilder(source: string) {
	return ImageUrlBuilder(clientConfig).image(source);
}

export const getPosts = async () => {
	const data: Blog[] = await sanityFetch({
		query: postQuery,
		qParams: {},
		tags: ["post", "author", "category"],
	});
	return data;
};

export const getPostBySlug = async (slug: string) => {
	const data: Blog = await sanityFetch({
		query: postQueryBySlug,
		qParams: { slug },
		tags: ["post", "author", "category"],
	});

	return data;
};

export const getPostsByTag = async (tag: string) => {
	const data: Blog[] = await sanityFetch({
		query: postQueryByTag,
		qParams: { slug: tag },
		tags: ["post", "author", "category"],
	});

	return data;
};

export const getPostsByAuthor = async (slug: string) => {
	const data: Blog[] = await sanityFetch({
		query: postQueryByAuthor,
		qParams: { slug },
		tags: ["post", "author", "category"],
	});

	return data;
};

export const getPostsByCategory = async (category: string) => {
	const data: Blog[] = await sanityFetch({
		query: postQueryByCategory,
		qParams: { category },
		tags: ["post", "author", "category"],
	});

	return data;
};

export const getAuthorBySlug = async (slug: string) => {
	const data = await sanityFetch({
		query: `*[_type == "author" && slug.current == $slug][0]`,
		qParams: { slug },
		tags: ["author"],
	});

	return data;
};


// In sanity-utils.ts
export const getRelatedPosts = async (slug: string) => {
	const currentPost = await getPostBySlug(slug);
	
	if (!currentPost?.category?.tagname) {
	  return [];
	}
  
	const data: Blog[] = await sanityFetch({
	  query: groq`*[
		_type == "post" && 
		slug.current != $currentSlug && 
		references(*[_type=="tagDetail" && tagname == $tagname]._id)
	  ] ${postData}`,
	  qParams: { 
		tagname: currentPost.category.tagname,
		currentSlug: slug
	  },
	  tags: ["post", "author", "category"]
	});
  
	return data.slice(0, 3);
  };