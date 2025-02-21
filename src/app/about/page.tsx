// app/about/page.tsx
import { Metadata } from 'next'
import styles from "../page.module.css";
import AboutPage from "../../pages/About";
import { METADATA } from '@/constants/metadata';

export const metadata: Metadata = {
    title: METADATA.about.title,
    description: METADATA.about.description
}

export default function About() {
  return (
    <div className={styles.homeDesktop}>
      <AboutPage />
    </div>
  );
}