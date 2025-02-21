import { Metadata } from 'next'
import styles from "../page.module.css";
import Legal from "../../pages/Legal";
import { METADATA } from '@/constants/metadata';

export const metadata: Metadata = {
    title: METADATA.legal.title,
    description: METADATA.legal.description
}

export default function LegalPage() {
  return (
    <div className={styles.homeDesktop}>
      <Legal />
    </div>
  );
}