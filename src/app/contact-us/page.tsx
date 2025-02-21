import { Metadata } from 'next'
import styles from "../page.module.css";
import ContactUsPage from "../../pages/ContactUs";
import { METADATA } from '@/constants/metadata';

export const metadata: Metadata = {
    title: METADATA.contact.title,
    description: METADATA.contact.description
}

export default function ContactUs() {
  return (
    <div className={styles.homeDesktop}>
      <ContactUsPage />
    </div>
  );
}