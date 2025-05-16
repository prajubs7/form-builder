import { Typography } from "@mui/material";

interface TextProps {
  text: string;
  variant:  "h1" | "h2"| "h3"| "h4"| "h5"| "h6"| "subtitle1"| "subtitle2"| "body1";
  color? : 'primary' | 'error'
}

const FormText: React.FC<TextProps> = ({ variant, text, color }) => {
  return (
    <div>
      <Typography variant={variant} color = {color}>{text}</Typography>
    </div>
  );
};

export default FormText;
