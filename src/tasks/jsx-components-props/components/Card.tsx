import React, { type ReactNode } from "react";
import styles from "../styles.module.css";
import clsx from "clsx";

interface CardProps {
  type?: "primary" | "secondary";
  size?: "small" | "medium" | "large" | "full";
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({
  type = "primary",
  size = "full",
  children,
}) => {
  return (
    <div
      className={clsx(
        styles.card,
        styles[`card--${type}`],
        styles[`card--${size}`]
      )}
    >
      {children}
    </div>
  );
};

export default Card;
