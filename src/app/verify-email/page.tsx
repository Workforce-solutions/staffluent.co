import { Metadata } from 'next';
import { Suspense } from 'react';
import VerifyEmailComponent from '@/components/verifyEmail/VerifyEmail';
import { METADATA } from '@/constants/metadata';
import { constructMetadata } from '@/lib/metadata';

export const metadata: Metadata = constructMetadata(METADATA.verifyEmail);

export default function VerifyEmail() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Suspense fallback={<VerifyEmailLoading />}>
        <VerifyEmailComponent />
      </Suspense>
    </div>
  );
}

// Loading component to show while the page is loading
function VerifyEmailLoading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#0A0A0A]"></div>
    </div>
  );
}