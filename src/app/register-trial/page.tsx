import { METADATA } from "@/constants/metadata";
import RegisterTrialPage from "@/pages/registerTrial";
import { Metadata } from "next";
import styles from "../page.module.css";

export const metadata: Metadata = {
  title: METADATA.requestDemo.title,
  description: METADATA.requestDemo.description,
};

export default function RegisterTrial() {
  return (
    <div className={styles.homeDesktop}>
      <RegisterTrialPage />
    </div>
  );
}
