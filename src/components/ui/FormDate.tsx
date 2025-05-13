import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

interface FormDateProps {
  label: string;
  onChange: (value: Date | null) => void;
  value: Date;
}

const FormDate: React.FC<FormDateProps> = ({ label, onChange, value }) => {
  return (
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
  );
};

export default FormDate;
