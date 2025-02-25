// app/subscription/page.tsx
import { Metadata } from 'next';
import styles from "../page.module.css";
import SubscriptionPageWrapper from "@/pages/SubscriptionPageWrapper";
import { Suspense } from 'react';
import { METADATA } from '@/constants/metadata';

export const metadata: Metadata = {
    title: METADATA.subscription.title,
    description: METADATA.registerTrial.description
}

export default function Subscription() {
  return (
    <div className={styles.homeDesktop}>
     <Suspense fallback={<SubscriptionLoading />}>
        <SubscriptionPageWrapper />
      </Suspense>
    </div>
  );
}


// Loading component to show while the page is loading
function SubscriptionLoading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#0A0A0A]"></div>
    </div>
  );
}