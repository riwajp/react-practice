import React, { type ReactNode } from "react";
import styles from "../styles.module.css";

interface NavLink {
  label: string;
  href: string;
}

interface HeaderProps {
  title?: string;
  links?: NavLink[];
  children?: ReactNode;
}

const Header: React.FC<HeaderProps> = ({ title, links = [], children }) => {
  return (
    <header className={styles["header"]}>
      <div className={styles["header-left"]}>
        <h1 className={styles["header-title"]}>{title}</h1>
        {children && (
          <div className={styles["header-children"]}>{children}</div>
        )}
      </div>
      <nav>
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={styles["header-nav-link"]}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
