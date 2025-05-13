import { Typography } from "@mui/material";

interface TextProps {
  text: string;
  variant:  "h1" | "h2"| "h3"| "h4"| "h5"| "h6"| "subtitle1"| "subtitle2"| "body1";
}

const FormText: React.FC<TextProps> = ({ variant, text }) => {
  return (
    <div>
      <Typography variant={variant}>{text}</Typography>
    </div>
  );
};

export default FormText;
