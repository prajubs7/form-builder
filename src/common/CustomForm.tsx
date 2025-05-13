import { Label } from "@mui/icons-material";
import FormCheckBox from "../components/ui/FormCheckBox";
import FormInput from "../components/ui/FormInput";
import FormSelection from "../components/ui/FormSelection";
import FormButton from "../components/ui/FormButton";
import FormDate from "../components/ui/FormDate";
import type { IFormData } from "../pages/Login";
import { useState } from "react";

//type InputType = "text" | "number" | "password" | "email";

interface ControlItem {
  name: string;
  label: string;
  componentType: string;
  defaultValue?:Date;
  placeholder?: string;
  type?: 'text' | 'password' | 'email' | 'number' ;
  id?: string;
  options?: { label: string; value: string }[];
}


interface CommonFormProps {
  formControls: ControlItem[];
  button: string;
}

const CustomForm: React.FC<CommonFormProps> = ({
  formControls,
}) => {

   const [formData, setFormData] = useState<IFormData>({
    name: "",
    phoneNumber: "",
    emailAddress: "",
    password: "",
    gender: "",
    birthDate: "",
    address: "",
    termsCondition: false,
  });

  function handleFormSubmit (){
    alert('hello')
  }


  function renderInputsbyComponentType(controlItem: ControlItem) {

   
    const value =
      controlItem.componentType === "checkbox"
        ? formData.termsCondition
        :  "";

    switch (controlItem.componentType) {
      case "input":
        return (
          <FormInput
            name={controlItem.name}
            label={controlItem.label}
            type={controlItem.type}
            value={formData.name}
            onChange={(event) => {
              console.log("skldfjkasdf", event.target.value);
              setFormData({
                ...formData,
                [controlItem.name]: event.target.value,
              });
            }}
          />
        );

      case "select":
        console.log(controlItem.options);
        return (
          <FormSelection
            handleChange={(event) => {
              console.log("event=====>", event.target.value);
              setFormData({
                ...formData,
                gender: event.target.value,
              });
            }}
            value={formData.gender}
            options={controlItem.options}
          />
        );

      case "checkbox":
        return (
          <FormCheckBox
            label={controlItem.label}
            checked={false}
            value = {formData.termsCondition}
            onChange={(event) => {
              setFormData({
                ...formData,
                [controlItem.name]: event.target.checked,
              });
            }}
          />
        );

      case "date":
        return (
          <FormDate
            label={controlItem.label}
            value= {formData.birthDate}
            onChange={(newValue: Date | string | null) => {
              setFormData({
                ...formData,
                [controlItem.name]: newValue ? newValue : "",
              });
            } }        
          />
        );

      case "textarea":
        return (
          <FormInput
            name={controlItem.name}
            label={controlItem.label}
            type={controlItem.type || "text"}
            fullWidth
            multiline
            rows={3}
            value={formData.address}
            onChange={(event) =>
              setFormData({
                ...formData,
                [controlItem.name]: event.target.value,
              })
            }
          />
        );

      default:
        return (
          <FormInput
            name={controlItem.name}
            label={controlItem.label}
            type={controlItem.type || "text"}
            value={[formData.emailAddress, formData.password, formData.phoneNumber]}
            onChange={(event) =>
              setFormData({
                ...formData,
                [controlItem.name]: event.target.value,
              })
            }
          />
        );
    }
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        {formControls.map((controlItem) => (
          <div key={controlItem.name}>
            {controlItem.componentType !== "checkbox" && (
              <Label>{controlItem.label}</Label>
            )}
            {renderInputsbyComponentType(controlItem)}
          </div>
        ))}
      </div>
      <FormButton text={"Submit"} type={"submit"} />
    </form>
  );
};

export default CustomForm;
