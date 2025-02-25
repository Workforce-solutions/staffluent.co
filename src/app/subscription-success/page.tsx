// app/subscription/page.tsx
import { Metadata } from 'next';
import styles from "../page.module.css";
import SubscriptionSuccessPageWrapper from "@/pages/SubscriptionSuccessPageWrapper";
import { METADATA } from '@/constants/metadata';
import { Suspense } from 'react';

export const metadata: Metadata = {
    title: METADATA.subscriptionSuccess.title,
    description: METADATA.subscriptionSuccess.description
}

export default function SubscriptionSuccess() {
  return (
    <div className={styles.homeDesktop}>
     <Suspense fallback={<SubscriptionSuccessLoading />}>
        <SubscriptionSuccessPageWrapper />
      </Suspense>
    </div>
  );
}

// Loading component to show while the page is loading
function SubscriptionSuccessLoading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#0A0A0A]"></div>
    </div>
  );
}