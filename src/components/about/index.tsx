import React from "react";
import styles from "./index.module.css";

const AboutPageComponent = () => {
  return (
    <div className="w-full max-w-[1200px] px-[20px] mx-auto flex flex-col gap-[30px] mb-[60px]">
      <h3 className="text-[#666666]">About us</h3>
      <h1 className={styles.main_title}>
        Welcome to organizez, where excellence meet invoation
      </h1>
      <h3 className={styles.main_subtitle}>
        We are dedicated to strengthening the relationship between companies and
        employees through technological innovation that simplifies HR processes
      </h3>
    </div>
  );
};

export default AboutPageComponent;
