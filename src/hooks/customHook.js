import * as react from "react";

export const useInput = (name, defaultValue) => {
  const [value, setValue] = react.useState(defaultValue);

  const onChangeText = ({ target: { value } }) => setValue(value);
  return { value, onChangeText, name };
};
