import { Metadata } from 'next'
import styles from "../page.module.css";
import RequestDemoPage from "../../pages/RequestADemo";
import { METADATA } from '@/constants/metadata';

export const metadata: Metadata = {
    title: METADATA.requestDemo.title,
    description: METADATA.requestDemo.description
}

export default function RequestDemo() {
  return (
    <div className={styles.homeDesktop}>
      <RequestDemoPage />
    </div>
  );
}