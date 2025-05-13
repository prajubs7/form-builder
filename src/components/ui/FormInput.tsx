import { TextField } from "@mui/material";

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
  ...rest
}) => {
  return (
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
  );
};

export default FormInput;
