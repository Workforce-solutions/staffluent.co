// src/app/page.tsx
import Header from '@/components/layout/Header';
import Hero from '@/components/home/Hero';
import Missions from '@/components/home/Missions';
import Demo from '@/components/home/Demo';
import Features from '@/components/home/Features';
import Faq from '@/components/home/Faq';
import CTA from '@/components/home/CTA';
import Footer from '@/components/layout/Footer';
import styles from './page.module.css';

export default function Home() {
  return (
      <div className={styles.homeDesktop}>
        <Header />
        <Hero />
        <Demo />
        <Features />
        <Missions />
        <Faq />
        <CTA />
        <Footer />
      </div>
  );
}