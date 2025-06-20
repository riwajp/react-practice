import React from "react";

import styles from "../styles.module.css";

interface ClockProps {
  time: Date;
}

const Clock: React.FC<ClockProps> = ({ time }) => {
  return (
    <div className={styles.clockBox}>
      <span className={styles.label}>Time</span>
      <span className={styles.time}>{time.toLocaleTimeString()}</span>
    </div>
  );
};

export default Clock;
