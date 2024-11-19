import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useFormContext, Controller } from "react-hook-form";

type SelectProps = {
  disablePortal?: boolean;
  categories: string[];
  label: string;
  name: string;
};

export default function Select({
  categories,
  label,
  disablePortal = true,
  name,
}: SelectProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Autocomplete
          {...field}
          className={name}
          disablePortal={disablePortal}
          options={categories}
          onChange={(_, value) => field.onChange(value)}
          renderInput={(params) => <TextField {...params} label={label} />}
          fullWidth
        />
      )}
    />
  );
}
