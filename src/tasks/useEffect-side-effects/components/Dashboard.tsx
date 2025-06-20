import React, { useEffect, useState } from "react";
import { useInterval } from "../hooks/useInterval";
import styles from "../styles.module.css";
import matchesData from "../data.json";
import Scoreboard from "./Scoreboard";
import Clock from "./Clock";
import type { Match } from "../types";

const Dashboard: React.FC = () => {
  const [time, setTime] = useState(new Date());
  const [data, setData] = useState<Match[] | null>(null);
  const [loading, setLoading] = useState(true);

  // Awareness: Log on mount
  useEffect(() => {
    console.log("Dashboard component mounted");
  }, []);

  // Mastery: update time every second using custom hook
  useInterval(() => {
    setTime(new Date());
  }, 1000);

  // Application: simulate API fetch with delay
  const fetchData = () => {
    setLoading(true);
    setTimeout(() => {
      setData(matchesData);
      setLoading(false);
    }, 1000);
  };

  // Influence: auto-refresh feed every 5 seconds
  useInterval(() => {
    fetchData();
  }, 5000);

  // First load
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.dashboard}>
      <h1 className={styles.title}>Live Scoreboard</h1>

      <div className={styles.scoreContainer}>
        <Clock time={time} />

        <div className={styles.feedBox}>
          <span className={styles.label}>Live Feed</span>
          {loading ? (
            <p className={styles.loading}>Loading...</p>
          ) : (
            <Scoreboard data={data} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
