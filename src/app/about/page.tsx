// app/about/page.tsx
import { Metadata } from 'next'
import styles from "../page.module.css";
import AboutPage from "../../pages/About";
import { METADATA } from '@/constants/metadata';
import { constructMetadata } from '@/lib/metadata';

export const metadata: Metadata = constructMetadata(METADATA.about);

export default function About() {
  return (
    <div className={styles.homeDesktop}>
      <AboutPage />
    </div>
  );
}