import { Metadata } from 'next'
import styles from "../page.module.css";
import TermsOfUse from "../../pages/TermsOfUse";
import { METADATA } from '@/constants/metadata';

export const metadata: Metadata = {
    title: METADATA.terms.title,
    description: METADATA.terms.description
}

export default function TermsPage() {
  return (
    <div className={styles.homeDesktop}>
      <TermsOfUse />
    </div>
  );
}