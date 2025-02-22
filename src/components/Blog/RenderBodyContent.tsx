import config from "@/sanity/config/client-config";
import { Blog } from "@/types/blog";
import { PortableText, PortableTextBlock } from "@portabletext/react";
import { getImageDimensions } from "@sanity/asset-utils";
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import urlBuilder from "@sanity/image-url";
import Image from "next/image";

interface ImageComponentProps {
	value: SanityImageSource;
	isInline: boolean;
  }
  
// Barebones lazy-loaded image component
const SampleImageComponent = ({ value, isInline }: ImageComponentProps) => {
	
	const { width, height } = getImageDimensions(value as unknown as import("@sanity/asset-utils").SanityImageSource);

	 // Check if value is an object and has an 'alt' property, otherwise use fallback text.
	 const altText =
	 typeof value === "object" && value !== null && "alt" in value
	   ? (value as { alt?: string }).alt
	   : "blog image";

	return (
		<div className='my-10 overflow-hidden rounded-[15px]'>
			<Image
				src={
					urlBuilder(config)
						.image(value)
						.fit("max")
						.auto("format")
						.url() as string
				}
				width={width}
				height={height}
				alt={altText || "blog image"}
				loading='lazy'
				style={{
					// Display alongside text if image appears inside a block text span
					display: isInline ? "inline-block" : "block",

					// Avoid jumping around with aspect-ratio CSS property
					aspectRatio: width / height,
				}}
			/>
		</div>
	);
};

const components = {
	types: {
		image: SampleImageComponent,
	},
};


const RenderBodyContent = ({ post }: { post: Blog }) => {
	return (
	  <>
		<PortableText 
		  value={post?.body as PortableTextBlock[]} 
		  components={components} 
		/>
	  </>
	);
  };

export default RenderBodyContent;
