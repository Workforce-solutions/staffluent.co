import { Metadata } from 'next'
import BlogPage from "../../pages/Blogs";
import { METADATA } from '@/constants/metadata';

export const metadata: Metadata = {
    title: METADATA.blog.title,
    description: METADATA.blog.description
}

export default function Blog() {
  return (
    <div>
      <BlogPage />
    </div>
  );
}