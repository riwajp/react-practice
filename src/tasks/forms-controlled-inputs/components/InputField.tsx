import React from "react";
import styles from "../styles.module.css";

interface Props {
  label: string;
  type?: string;
  field: {
    value: string;
    onChange: (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
    onBlur: () => void;
    error: string | null;
    touched: boolean;
  };
  isTextArea?: boolean;
}

const InputField: React.FC<Props> = ({
  label,
  type = "text",
  field,
  isTextArea = false,
}) => {
  const showError = field.touched && field.error;

  return (
    <div className={styles.inputGroup}>
      <label>{label}</label>
      {isTextArea ? (
        <textarea
          value={field.value}
          onChange={field.onChange}
          onBlur={field.onBlur}
          className={showError ? styles.errorInput : ""}
        />
      ) : (
        <input
          type={type}
          value={field.value}
          onChange={field.onChange}
          onBlur={field.onBlur}
          className={showError ? styles.errorInput : ""}
        />
      )}
      {showError && <small className={styles.errorMsg}>{field.error}</small>}
    </div>
  );
};

export default InputField;
