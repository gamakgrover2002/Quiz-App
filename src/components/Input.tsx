import TextField, { TextFieldProps } from "@mui/material/TextField";

import { useFormContext } from "react-hook-form";

type InputProps = {
  variant?: TextFieldProps["variant"];
  placeholder: string;
  name: string;
  type: string;
};

function Input({ placeholder, name, variant = "outlined", type }: InputProps) {
  const { register } = useFormContext();
  return (
    <div>
      <TextField
        {...register(name)}
        type={type}
        label={placeholder}
        name={name}
        variant={variant}
        fullWidth
      />
    </div>
  );
}

export default Input;
