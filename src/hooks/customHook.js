import * as react from "react";

export const useInput = (name, defaultValue) => {
  const [value, setValue] = react.useState(defaultValue);

  const onChange = ({ target: { value } }) => setValue(value);
  return { value, onChange, name };
};
