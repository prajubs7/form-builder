import { Checkbox, FormControlLabel} from "@mui/material";
import type { ReactNode } from "react";
import FormText from "./FormText";

interface checkboxProps{
    label : string,
    color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
    size?: 'small'| 'medium';
    icon?: ReactNode;
    checked:  boolean | undefined;
    onChange : ( e : React.ChangeEvent<HTMLInputElement>) => void;
    error: string;

}

const FormCheckBox : React.FC<checkboxProps> = ({
    label,
    color = 'primary',
    size ='medium',
    icon,
    checked,
    onChange,
    error

}) => {
  return (
    <div>

    
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
    {error && <FormText text={error} variant={"subtitle2"} color={"error"}/>}
    </div>
  )
}

export default FormCheckBox