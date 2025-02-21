// src/app/layout.tsx
import type { Metadata } from "next";
import { defaultMetadata } from '@/types/metadata'
import localFont from "next/font/local";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const geistSans = localFont({
    src: '../../public/fonts/GeistVF.woff2',
    variable: '--font-geist-sans',
    weight: '100 900',
    display: 'swap',
});

const geistMono = localFont({
    src: '../../public/fonts/GeistMonoVF.woff2',
    variable: '--font-geist-mono',
    weight: '100 900',
    display: 'swap',
});

export const metadata: Metadata = {
    metadataBase: new URL('https://staffluent.co'),
    title: defaultMetadata.title,
    description: defaultMetadata.description,
    openGraph: {
        title: defaultMetadata.title,
        description: defaultMetadata.description,
        url: 'https://staffluent.co',
        siteName: 'Staffluent',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: defaultMetadata.title,
        description: defaultMetadata.description,
        images: ['/og-image.png'],
    },
}


const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Staffluent',
    url: 'https://staffluent.co',
    logo: 'https://staffluent.co/logo.png',
    sameAs: [
        'https://www.linkedin.com/company/staffluentco',
        'https://x.com/staffluent_co',
        'https://www.instagram.com/staffluent',
        'https://www.facebook.com/staffluent'
    ]
}


export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <head>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
        </head>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <GoogleAnalytics />
        {children}
        </body>
        </html>
    );
}