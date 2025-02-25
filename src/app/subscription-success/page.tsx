// app/subscription/page.tsx
import { Metadata } from 'next';
import styles from "../page.module.css";
import SubscriptionSuccessPageWrapper from "@/pages/SubscriptionSuccessPageWrapper";
import { METADATA } from '@/constants/metadata';

export const metadata: Metadata = {
    title: METADATA.subscriptionSuccess.title,
    description: METADATA.subscriptionSuccess.description
}

export default function SubscriptionSuccess() {
  return (
    <div className={styles.homeDesktop}>
      <SubscriptionSuccessPageWrapper />
    </div>
  );
}