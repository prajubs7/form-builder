import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

interface Option {
  label: string;
  value: string;
}

interface RadioButtonProps {
  label: string;
  name: string;
  Options?: Option[];
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormRadioButton: React.FC<RadioButtonProps> = ({
  label,
  name,
  Options,
  handleChange,
}) => {
  return (
    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">{label}</FormLabel>
      <RadioGroup
        //aria-labelledby="demo-controlled-radio-buttons-group"
        name={name}
        onChange={handleChange}
      >
        {Options?.map((option, key) => {
          return (
            <FormControlLabel
              key={key}
              value={option.value}
              control={<Radio />}
              label={option.label}
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
};

export default FormRadioButton;
