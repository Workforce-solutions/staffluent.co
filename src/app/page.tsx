// src/app/page.tsx
import styles from './page.module.css';
import HomePage from '@/pages/Home';

export default function Home() {
  return (
    <div className={styles.homeDesktop}>
      <HomePage />
    </div>
  );
}