// app/register-trial/page.tsx
import { Metadata } from 'next';
import styles from "../page.module.css";
import RegisterTrialPage from "@/pages/registerTrial";
import { METADATA } from '@/constants/metadata';

export const metadata: Metadata = {
    title: METADATA.registerTrial.title,
    description: METADATA.registerTrial.description
}

export default function RegisterTrial() {
  return (
    <div className={styles.homeDesktop}>
      <RegisterTrialPage />
    </div>
  );
}