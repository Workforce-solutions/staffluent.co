// src/app/layout.tsx
import type { Metadata } from "next";
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
    title: "Staffluent - Project & Team Management Platform",
    description: "Streamline your project tracking, team collaboration, and performance monitoring with our comprehensive management platform. From real-time analytics to client portals.",
    keywords: "project management, team collaboration, performance analytics, task management, time tracking, client portal",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <GoogleAnalytics />
        {children}
        </body>
        </html>
    );
}