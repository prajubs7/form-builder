/* eslint-disable @typescript-eslint/no-unused-vars */
import FormCheckBox from "../components/ui/FormCheckBox";
import FormInput from "../components/ui/FormInput";
import FormSelection from "../components/ui/FormSelection";
import FormButton from "../components/ui/FormButton";
import FormDate from "../components/ui/FormDate";
import { useState, type FormEvent } from "react";
import FormRadioButton from "../components/ui/FormRadioButton";
import type {
  CommonFormProps,
  ControlItem,
  ValidationRule,
} from "../types/formfields";
import { validateField } from "./ValidateForm";
import { Divider } from "@mui/material";
import FormImage from "../components/ui/FormImage";
import FormSearch from "../components/ui/FormSearch";


const CustomForm: React.FC<CommonFormProps> = ({ formControls, button }) => {

  // const initialFormState = formControls.reduce((acc, control) => {
  //   acc[control.name] = "";
  //   return acc;
  // }, {} as Record <string, unknown>) ;

  // const [formEntries, setFormEntries] = useState<Record<string, unknown>[]>([]);

  // const [formErrors, setFormErrors] = useState<Record<string, unknown>[]>([]);


  

  const [formData, setFormData] = useState<Record<string, unknown>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    let formIsValid = true;

    formControls.forEach((control) => {
      const value = formData[control.name];

      const validationRules: ValidationRule = {
        required: control.required,
        minLength: control.minLength,
        maxLength: control.maxLength,
        pattern: control.pattern,
        custom: control.customValidator,
        errorMessage: control.errorMessage,
      };

      const error = validateField(
        control.label || control.name,
        value,
        validationRules
      );

      if (error) {
        newErrors[control.name] = error;
        formIsValid = false;
      }
    });

    setErrors(newErrors);
    return formIsValid;
  };

  function handleFormSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    const formIsValid = validateForm();

    const allTouched: Record<string, boolean> = {};
    formControls.forEach((control) => {
      allTouched[control.name] = true;
    });

    if (formIsValid) {
      console.log("Form submitted successfully:", formData);
      
    } else {
      console.log("Form has errors, submission prevented");
    }
    console.log(formData);
  }

  function renderInputsbyComponentType(controlItem: ControlItem) {
    const value = formData[controlItem.name];
    const error = errors[controlItem.name];

    switch (controlItem.componentType) {
      case "input":
      case "number":
      case "email":
      case "password":
        return (
          <FormInput
            name={controlItem.name}
            label={controlItem.label}
            type={controlItem.type || "text"}
            value={(value as string) || ""}
            onChange={(event) => {
              //console.log("Text field value" ,event.target.value);
              setFormData({
                ...formData,
                [controlItem.name]: event.target.value,
              });
            }}
            error={error}
          />
        );

      case "select":
        //console.log(controlItem.options);
        return (
          <FormSelection
            handleChange={(event) => {
              //console.log("Select field value", event.target.value);
              setFormData({
                ...formData,
                [controlItem.name]: event.target.value,
              });
            }}
            value={(value as string) || ""}
            options={controlItem.options}
            error={error}
          />
        );

      case "checkbox":
        return (
          <FormCheckBox
            label={controlItem.label}
            checked={Boolean(value)}
            onChange={(event) => {
              //console.log("Checkbox value", event.target.checked)
              setFormData({
                ...formData,
                [controlItem.name]: event.target.checked,
              });
            }}
            error={error}
          />
        );
      case "radio":
        //console.log(controlItem.options);
        return (
          <FormRadioButton
            label={controlItem.label}
            name={controlItem.name}
            Options={controlItem.options}
            handleChange={(event) => {
              console.log("Checkbox value", event.target.value);
              setFormData({
                ...formData,
                [controlItem.name]: event.target.value,
              });
            }}
          />
        );

      case "date":
        return (
          <FormDate
            label={controlItem.label}
            value={value as Date}
            onChange={(newValue: Date | string | null) => {
              //console.log("Date value", newValue)
              setFormData({
                ...formData,
                [controlItem.name]: newValue ? newValue : "",
              });
            }}
            error={error}
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
            value={value as string}
            onChange={(event) => {
              //console.log("Textarea value", event.target.value)
              setFormData({
                ...formData,
                [controlItem.name]: event.target.value,
              });
            }}
            error={error}
          />
        );

      case "image-upload":
        return <FormImage />;
      case "search":
        return (
          <FormSearch
            name={controlItem.name}
            label={controlItem.label}
            onChange={(_event) =>
              setFormData({
                ...formData, [controlItem.name] : value
              })
            }
          />
        );
      case "section-heading":
        return <Divider>{controlItem.label}</Divider>;
      default:
        return (
          <FormInput
            name={controlItem.name}
            label={controlItem.label}
            type={controlItem.type || "text"}
            value={(value as string) || ""}
            onChange={(event) => {
              //console.log('Default value', event.target.value)
              setFormData({
                ...formData,
                [controlItem.name]: event.target.value,
              });
            }}
            error={error}
          />
        );
    }
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        {formControls.map((controlItem) => (
          <div key={controlItem.name} style={{ margin: "1rem" }}>
            {/* {controlItem.componentType !== "checkbox" && (
              //  <Label text={controlItem.label} variant={"h6"}/>
            )} */}
            {renderInputsbyComponentType(controlItem)}
          </div>
        ))}
      </div>
      <FormButton text={button} type={"submit"} />
    </form>
  );
};

export default CustomForm;
