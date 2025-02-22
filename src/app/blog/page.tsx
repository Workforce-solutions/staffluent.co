import { Metadata } from 'next'
import BlogPage from "../../pages/Blogs";
import { METADATA } from '@/constants/metadata';
import { constructMetadata } from '@/lib/metadata';

export const metadata: Metadata = constructMetadata(METADATA.blog);

export default function Blog() {
  return (
    <div>
      <BlogPage />
    </div>
  );
}