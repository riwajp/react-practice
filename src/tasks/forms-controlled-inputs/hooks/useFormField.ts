import { useState } from "react";

type Validator = (value: string) => string | null;

export function useFormField(initialValue = "", validator?: Validator) {
  const [value, setValue] = useState(initialValue);
  const [touched, setTouched] = useState(false);

  const error = validator && touched ? validator(value) : null;

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setValue(e.target.value);

  const onBlur = () => setTouched(true);

  const reset = () => {
    setValue("");
    setTouched(false);
  };

  return { value, onChange, onBlur, error, touched, reset };
}
