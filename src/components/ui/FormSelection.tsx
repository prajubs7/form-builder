import  { type FC } from "react";
import { FormControl, Select, MenuItem, InputLabel, Box, type SelectChangeEvent } from "@mui/material";
import FormText from "./FormText";

interface option {
  label: string;
  value: string;
}
interface IFormSelectionProps {
  value: string;
  handleChange: (event:SelectChangeEvent) => void;
  options?: option[];
  error:string;
}

const FormSelection: FC<IFormSelectionProps> = ({
  handleChange,
  value,
  options,
  error
}) => {
  // const [selectedItem, setSelectedItem] = useState<string>("");

return (
    <Box>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Age"
          onChange={handleChange}
        >
          {options?.map((item, key) => {
            return (
              <MenuItem key={key} value={item.value}>
                {item.label}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      {error && <FormText text={error} variant={"subtitle2"} color={"error"}/>}
    </Box>
  );
};

export default FormSelection;
