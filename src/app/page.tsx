// src/app/page.tsx
import { Metadata } from 'next';
import styles from './page.module.css';
import HomePage from '../pages/Home';
import { METADATA } from '@/constants/metadata';
import { constructMetadata } from '@/lib/metadata';

export const metadata: Metadata = constructMetadata(METADATA.home);

export default function Home() {
    return (
        <div className={styles.homeDesktop}>
            <HomePage />
        </div>
    );
}