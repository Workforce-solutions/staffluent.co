// src/components/home/BrandLogo/index.tsx
"use client";
import Image from 'next/image';
import styles from './BrandLogo.module.css';

interface BrandLogoProps {
    className?: string;
    variant?: 2;
}

const BrandLogo: React.FC<BrandLogoProps> = ({
                                                 className = "",
                                                 variant = 1,
                                             }) => {
    return (
        <section
            className={`${styles.brandLogoDesktop} ${className}`}
            data-variant={variant}
        >
            <Image
                className={styles.image2Icon}
                src="/image-2.png"
                alt="Brand Logos"
                width={1440}
                height={275}
                loading="lazy"
            />
        </section>
    );
};

export default BrandLogo;