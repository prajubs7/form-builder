import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import FormText from "./FormText";

interface FormDateProps {
  label: string;
  onChange: (value: Date | null) => void;
  value: Date;
  error:string;
}

const FormDate: React.FC<FormDateProps> = ({ label, onChange, value, error }) => {
  return (
    <div>
       <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label={label}
        value= {value}
        onChange={onChange}
        slotProps={{
          textField: {
            fullWidth: true,
            size: "small",
          },
        }}
      />
    </LocalizationProvider>
    {error && <FormText text={error} variant={"subtitle2"} color={"error"}/>}
    </div>

  );
};

export default FormDate;
