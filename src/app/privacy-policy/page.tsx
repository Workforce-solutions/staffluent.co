import { Metadata } from 'next'
import styles from "../page.module.css";
import PrivacyPolicy from "../../pages/PrivacyPolicy";
import { METADATA } from '@/constants/metadata';

export const metadata: Metadata = {
    title: METADATA.privacy.title,
    description: METADATA.privacy.description
}

export default function PrivacyPage() {
  return (
    <div className={styles.homeDesktop}>
      <PrivacyPolicy />
    </div>
  );
}