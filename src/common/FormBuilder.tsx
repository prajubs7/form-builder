/* eslint-disable @typescript-eslint/no-unused-vars */
import FormCheckBox from "../components/ui/FormCheckBox";
import FormInput from "../components/ui/FormInput";
import FormSelection from "../components/ui/FormSelection";
import FormDate from "../components/ui/FormDate";
import { useState, type FormEvent } from "react";
import FormRadioButton from "../components/ui/FormRadioButton";
import type {
  CommonFormProps,
  ControlItem,
  ValidationRule,
} from "../types/formfields";
import { validateField } from "./ValidateForm";
import { Button, Divider } from "@mui/material";
import FormImage from "../components/ui/FormImage";
import FormSearch from "../components/ui/FormSearch";
import FormButton from "../components/ui/FormButton";

const CustomForm: React.FC<CommonFormProps> = ({ formControls, button }) => {
  const initialFormState = formControls.reduce((acc, control) => {
    acc[control.name] = "";
    return acc;
  }, {} as Record<string, unknown>);

  const [formEntries, setFormEntries] = useState<Record<string, unknown>[]>([
    { ...initialFormState },
  ]);

  const [currentFormIndex, setCurrentFormIndex] = useState<number>(0);

  const [errors, setErrors] = useState<Record<string, Record<string, string>>>({
    0: {},
  });

  const validateForm = (formIndex: number): boolean => {
    const newErrors: Record<string, string> = {};
    let formIsValid = true;

    formControls.forEach((control) => {
      const value = formEntries[formIndex]?.[control.name];

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

    setErrors((prev) => ({
      ...prev,
      [formIndex]: newErrors,
    }));

    return formIsValid;
  };

  const validateAllForms = (): boolean => {
    let allFormsValid = true;

    formEntries.forEach((_, index) => {
      if (!validateForm(index)) {
        allFormsValid = true;
      }
    });

    return allFormsValid;
  };

  function handleFormSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    const allFormsValid = validateAllForms();

    if(allFormsValid){
      console.log("All forms submitted successfully:", formEntries);
    } else {
      console.log("Some forms have errors, submission prevented");
    }
  }

  function handleFieldChange(name: string, value: unknown): void {
    setFormEntries((prevEntries) => {
      const updatedEntries = [...prevEntries];
      updatedEntries[currentFormIndex] = {
        ...updatedEntries[currentFormIndex],
        [name]: value,
      };
      return updatedEntries;
    });
  }

  // Add a new form entry
  function addNewForm(): void {
    setFormEntries((prev) => [...prev, { ...initialFormState }]);
    setCurrentFormIndex(formEntries.length);
    setErrors((prev) => ({
      ...prev,
      [formEntries.length]: {},
    }));
  }

  // Remove a form entry
  function removeForm(index: number): void {
    if (formEntries.length <= 1) return; 

    setFormEntries((prev) => prev.filter((_, i) => i !== index));

    const newErrors = { ...errors };
    delete newErrors[index];

    const renumberedErrors: Record<string, Record<string, string>> = {};
    Object.keys(newErrors)
      .sort((a, b) => parseInt(a) - parseInt(b))
      .forEach((key, i) => {
        renumberedErrors[i] = newErrors[key];
      });

    setErrors(renumberedErrors);


    if (currentFormIndex >= formEntries.length - 1) {
      setCurrentFormIndex(formEntries.length - 2);
    }
  }

  function switchToForm(index: number): void {
    setCurrentFormIndex(index);
  }

  function renderInputsbyComponentType(controlItem: ControlItem) {
    const value = formEntries[currentFormIndex]?.[controlItem.name];
    const error = errors[currentFormIndex]?.[controlItem.name];

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
              handleFieldChange(controlItem.name, event.target.value);
            }}
            error={error}
          />
        );

      case "select":
        return (
          <FormSelection
            handleChange={(event) => {
              handleFieldChange(controlItem.name, event.target.value);
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
              handleFieldChange(controlItem.name, event.target.checked);
            }}
            error={error}
          />
        );
      case "radio":
        return (
          <FormRadioButton
            label={controlItem.label}
            name={controlItem.name}
            Options={controlItem.options}
            handleChange={(event) => {
              handleFieldChange(controlItem.name, event.target.value);
            }}
          />
        );

      case "date":
        return (
          <FormDate
            label={controlItem.label}
            value={value as Date}
            onChange={(newValue: Date | string | null) => {
              handleFieldChange(controlItem.name, newValue ? newValue : "");
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
              handleFieldChange(controlItem.name, event.target.value);
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
            onChange={(_event) => handleFieldChange(controlItem.name, value)}
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
              handleFieldChange(controlItem.name, event.target.value);
            }}
            error={error}
          />
        );
    }
  }

  return (
    <div>
      <div className="form-tabs flex gap-2 mb-4">
        {formEntries.map((_, index) => (
          <Button key={index} type="button" onClick={() => switchToForm(index)}>
            Form {index + 1}
          </Button>
        ))}
        <Button variant="contained" type="button" onClick={addNewForm}>
          Add Form
        </Button>
        {formEntries.length > 1 && (
          <Button
            variant="contained"
            type="button"
            onClick={() => removeForm(currentFormIndex)}
          >
            Remove Current Form
          </Button>
        )}
      </div>

      <form onSubmit={handleFormSubmit}>
        <div>
          {formControls.map((controlItem) => (
            <div key={controlItem.name} style={{ margin: "1rem" }}>
              {renderInputsbyComponentType(controlItem)}
            </div>
          ))}
        </div>

        <div className="mt-4">
          <FormButton text={button} type={"submit"} />
        </div>
      </form>
    </div>
  );
};

export default CustomForm;
