import React, { useState } from "react";
import Modal from "./components/Modal";
import styles from "./styles.module.css";

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      <h1>React State and Event Handeling Demo </h1>

      <button onClick={() => setIsModalOpen(true)} className={styles.btn}>
        Signup
      </button>

      {!!isModalOpen && <div className={styles.status}>Signing you up...</div>}

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default App;
