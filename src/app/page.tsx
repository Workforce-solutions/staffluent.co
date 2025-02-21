// src/app/page.tsx
import { Metadata } from 'next';
import styles from './page.module.css';
import HomePage from '../pages/Home';
import { METADATA } from '@/constants/metadata';

export const metadata: Metadata = {
    title: METADATA.home.title,
    description: METADATA.home.description,
    openGraph: {
        title: METADATA.home.title,
        description: METADATA.home.description,
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
        title: METADATA.home.title,
        description: METADATA.home.description,
        images: ['/og-image.png'],
    },
}

export default function Home() {
    return (
        <div className={styles.homeDesktop}>
            <HomePage />
        </div>
    );
}