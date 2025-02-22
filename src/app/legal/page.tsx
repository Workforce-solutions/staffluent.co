import { Metadata } from 'next'
import styles from "../page.module.css";
import Legal from "../../pages/Legal";
import { METADATA } from '@/constants/metadata';
import { constructMetadata } from '@/lib/metadata';

export const metadata: Metadata = constructMetadata(METADATA.legal);

export default function LegalPage() {
  return (
    <div className={styles.homeDesktop}>
      <Legal />
    </div>
  );
}