import { Checkbox, FormControlLabel} from "@mui/material";
import type { ReactNode } from "react";

interface checkboxProps{
    label : string,
    color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
    size?: 'small'| 'medium';
    icon?: ReactNode;
    checked: boolean;
    onChange : ( e : React.ChangeEvent<HTMLInputElement>) => void;

}

const FormCheckBox : React.FC<checkboxProps> = ({
    label,
    color = 'primary',
    size ='medium',
    icon,
    checked,
    onChange

}) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          color={color}
          size={size}
          icon={icon}
          checked={checked}
          onChange={onChange}
        />
      }
      label={label}
    />
  )
}

export default FormCheckBox