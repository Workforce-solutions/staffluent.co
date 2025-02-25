// app/subscription/page.tsx
import { Metadata } from 'next';
import styles from "../page.module.css";
import SubscriptionPageWrapper from "@/pages/SubscriptionPageWrapper";
import { METADATA } from '@/constants/metadata';

export const metadata: Metadata = {
    title: METADATA.subscription.title,
    description: METADATA.registerTrial.description
}

export default function Subscription() {
  return (
    <div className={styles.homeDesktop}>
      <SubscriptionPageWrapper />
    </div>
  );
}