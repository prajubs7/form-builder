import { TextField } from "@mui/material";
import FormText from "./FormText";

interface InputProps {
  name: string;
  label: string;
  placeholder?: string;
  type: 'text'|'number'|'password'| 'email';
  value: string;
  multiline?: boolean;
  rows?:number;
  fullWidth?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: string;
}

const FormInput: React.FC<InputProps> = ({
  name,
  label,
  placeholder = "",
  type,
  multiline = false,
  onChange,
  value,
  fullWidth = true,
  error ="",
  ...rest
}) => {
  return (
    <div>
    <TextField
      variant="standard"
      fullWidth={fullWidth}
      multiline={multiline}
      name={name}
      label={label}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      style={{ paddingBottom: 10 }}
      {...rest}
    />
     {error && (
      <FormText text={error} variant={"subtitle2"} color={"error"}/>
      )}
    </div>
  );
};

export default FormInput;
