import React from "react";
import styles from "../styles.module.css";
import type { Match } from "../types";

interface ScoreboardProps {
  data: Match[] | null;
}

const Scoreboard: React.FC<ScoreboardProps> = ({ data }) => {
  return (
    <ul className={styles.feedList}>
      {data?.map((match: Match) => (
        <li key={match.id} className={styles.matchItem}>
          <div className={styles.team}>
            <img
              src={match.homeLogo}
              alt={match.homeTeam}
              className={styles.logo}
            />
            <span>{match.homeTeam}</span>
          </div>
          <span className={styles.score}>
            {match.homeScore} - {match.awayScore}
          </span>
          <div className={styles.team}>
            <img
              src={match.awayLogo}
              alt={match.awayTeam}
              className={styles.logo}
            />
            <span>{match.awayTeam}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Scoreboard;
