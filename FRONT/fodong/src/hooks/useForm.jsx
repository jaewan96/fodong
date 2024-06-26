import { useState } from "react";

export const useForm = () => {
  const [value, setValue] = useState("");
  const onChange = (event) => {
    setValue(event.target.value);
    console.log(event.target.value);
  };
  return [value, onChange];
};
