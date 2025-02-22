// lib/metadata.ts
import { Metadata } from 'next';
import { PageMetadata } from '@/types/metadata';

export function constructMetadata(pageMetadata: PageMetadata): Metadata {
  return {
    title: pageMetadata.title,
    description: pageMetadata.description,
    openGraph: {
      title: pageMetadata.title,
      description: pageMetadata.description,
      url: 'https://staffluent.co',
      siteName: 'Staffluent',
      images: [
        {
          url: 'https://staffluent.co/og-image.png',
          width: 1200,
          height: 630,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: pageMetadata.title,
      description: pageMetadata.description,
      images: ['https://staffluent.co/og-image.png'],
    },
  };
}