import { PortableTextBlock } from '@portabletext/react'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { Slug } from 'sanity'

export type Author = {
  name: string;
  image: SanityImageSource;
  bio?: string;
  slug: Slug;
  _id?: string;
  _ref?: string;
};

export type Blog = {
  _id: string;
  title: string;
  slug: Slug;
  metadata: string;
  body: PortableTextBlock[];
  mainImage: SanityImageSource;
  author: Author;
  tags: string[];
  publishedAt: string;
  category?: { 
    title: string;
    tagname: string;
  };
};