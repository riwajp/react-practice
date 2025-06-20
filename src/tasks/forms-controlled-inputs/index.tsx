import React, { useState } from "react";
import InputField from "./components/InputField";
import { useFormField } from "./hooks/useFormField";
import styles from "./styles.module.css";

// Validators
const required = (msg: string) => (val: string) => val.trim() ? null : msg;
const isEmail = (val: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val) ? null : "Invalid email format";

const App: React.FC = () => {
  const name = useFormField("", required("Name is required"));
  const email = useFormField(
    "",
    (val) => required("Email is required")(val) || isEmail(val)
  );
  const message = useFormField("", required("Message is required"));

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.error && !email.error && !message.error) {
      alert(
        `Message sent:\nName: ${name.value}\nEmail: ${email.value}\nMessage: ${message.value}`
      );
      name.reset();
      email.reset();
      message.reset();
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 2000);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Contact Us</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <InputField label="Name" field={name} />
        <InputField label="Email" type="email" field={email} />
        <InputField label="Message" isTextArea field={message} />

        <button type="submit" className={styles.submitBtn}>
          Submit
        </button>
        {submitted && (
          <p className={styles.success}>Form submitted successfully!</p>
        )}
      </form>
    </div>
  );
};

export default App;
