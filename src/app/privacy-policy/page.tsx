import { Metadata } from 'next'
import styles from "../page.module.css";
import PrivacyPolicy from "../../pages/PrivacyPolicy";
import { METADATA } from '@/constants/metadata';
import { constructMetadata } from '@/lib/metadata';

export const metadata: Metadata = constructMetadata(METADATA.privacy);
export default function PrivacyPage() {
  return (
    <div className={styles.homeDesktop}>
      <PrivacyPolicy />
    </div>
  );
}