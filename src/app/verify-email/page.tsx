// app/verify-email/page.tsx
import { Metadata } from 'next';
import VerifyEmailComponent from '@/components/verifyEmail/VerifyEmail';
import { METADATA } from '@/constants/metadata';
import { constructMetadata } from '@/lib/metadata';

export const metadata: Metadata = constructMetadata(METADATA.verifyEmail);

export default function VerifyEmail() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <VerifyEmailComponent />
    </div>
  );
}