import { Metadata } from 'next'
import styles from "../page.module.css";
import ContactUsPage from "../../pages/ContactUs";
import { METADATA } from '@/constants/metadata';
import { constructMetadata } from '@/lib/metadata';

export const metadata: Metadata = constructMetadata(METADATA.contact);

export default function ContactUs() {
  return (
    <div className={styles.homeDesktop}>
      <ContactUsPage />
    </div>
  );
}