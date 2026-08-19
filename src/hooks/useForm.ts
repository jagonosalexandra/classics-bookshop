import { useState } from "react";

export function useForm<T>(
  initialValues: T,
  validate: (value: T) => Partial<T>,
) {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Partial<T>>({});

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  }

  function runValidation() {
    const newErrors = validate(values);
    setErrors(newErrors);
    return newErrors;
  }

  return {
    values,
    handleChange,
    errors,
    runValidation,
  };
}
