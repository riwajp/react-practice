import React from "react";
import { useInput } from "../hooks/useInput";
import styles from "../styles.module.css";
import clsx from "clsx";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const username = useInput("");
  const email = useInput("");
  const password = useInput("");

  const resetForm = () => {
    username.reset();
    email.reset();
    password.reset();
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(
      `Username: ${username.value}, Email: ${email.value}, Password: ${password.value}`
    );
    handleClose();
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true">
      <form onSubmit={handleSubmit} className={styles.modal}>
        <h2>Signup Form</h2>

        <input
          type="text"
          placeholder="Username"
          autoComplete="off"
          className={styles.input}
          required
          {...username}
        />

        <input
          type="email"
          placeholder="Email"
          autoComplete="off"
          className={styles.input}
          required
          {...email}
        />

        <input
          type="password"
          placeholder="Password"
          autoComplete="off"
          className={styles.input}
          required
          {...password}
        />

        <button
          type="submit"
          className={clsx(styles.btn, styles.btnSmall, styles.btnSuccess)}
        >
          Submit
        </button>

        <button
          type="button"
          onClick={handleClose}
          className={clsx(styles.btn, styles.btnSmall, styles.btnFailed)}
        >
          Close
        </button>
      </form>
    </div>
  );
};

export default Modal;
