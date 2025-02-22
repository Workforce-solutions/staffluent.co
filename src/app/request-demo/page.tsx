import { Metadata } from 'next'
import styles from "../page.module.css";
import RequestDemoPage from "../../pages/RequestADemo";
import { METADATA } from '@/constants/metadata';
import { constructMetadata } from '@/lib/metadata';

export const metadata: Metadata = constructMetadata(METADATA.requestDemo);
export default function RequestDemo() {
  return (
    <div className={styles.homeDesktop}>
      <RequestDemoPage />
    </div>
  );
}