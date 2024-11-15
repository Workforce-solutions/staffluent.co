import React from "react";
import styles from "./index.module.css";

const AboutPageComponent = () => {
    return (
        <div className="w-full max-w-[1200px] px-[20px] mx-auto flex flex-col gap-[30px] mb-[60px]">
            <h3 className="text-[#666666]">About Staffluent</h3>
            <h1 className={styles.main_title}>
                Empowering Teams Through Intelligent Project Management
            </h1>
            <h3 className={styles.main_subtitle}>
                We&apos;re revolutionizing how teams work together by providing comprehensive
                project tracking, real-time collaboration tools, and powerful analytics
                in one integrated platform.
            </h3>
        </div>
    );
};

export default AboutPageComponent;