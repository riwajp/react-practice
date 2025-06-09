import React, { type ReactNode } from "react";
import styles from "../styles.module.css";

interface FooterProps {
  children?: ReactNode;
  copyright?: string;
}

const Footer: React.FC<FooterProps> = ({ children, copyright }) => {
  return (
    <footer className={styles.footer}>
      {children && <div className={styles.footerLinks}>{children}</div>}
      <p style={{ margin: 0 }}>
        {copyright ?? `© ${new Date().getFullYear()} Riwaj Prasai`}
      </p>
    </footer>
  );
};

export default Footer;
