import { Button } from "@mui/material";
import type { ReactNode } from "react";

interface ButtonProps {
  text: string;
  fullWidth?: boolean;
  type: "submit" | "reset" | 'button';
  color?: "primary" | "secondary" | "success" | "error" | "info" | "warning";
  size?: "small" | "medium" | "large";
  variant?: "contained" | "outlined" | "text";
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

const FormButton: React.FC<ButtonProps> = ({
  text,
  type,
  variant = "contained",
  color = "primary",
  size = "medium",
  fullWidth = false,
  startIcon,
  endIcon,
}) => {
  return (
    <Button
      type={type}
      variant={variant}
      color={color}
      fullWidth={fullWidth}
      size={size}
      startIcon={startIcon}
      endIcon={endIcon}
    >
      {text}
    </Button>
  );
};

export default FormButton;
