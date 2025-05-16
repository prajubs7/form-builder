/* eslint-disable @typescript-eslint/no-explicit-any */


export interface ControlItem {
  id?: string;
  name: string;
  label: string;
  componentType: string;
  defaultValue?:Date;
  placeholder?: string;
  type?: 'text' | 'password' | 'email' | 'number';
  options?: { label: string; value: string }[];
  customValidator?: ((value: any) => boolean);
  pattern?: RegExp;
  maxLength?: number;
  minLength?: number;
  required: boolean;
  errorMessage: string;
}


export interface CommonFormProps {
  formControls: ControlItem[];
  initialValues: {[key: string] : any};
  button: string;
}

// export interface IFormData {
//   name: string;
//   phoneNumber:string;
//   emailAddress: string;
//   password: string;
//   gender: string;
//   birthDate: string;
//   interests: string;
//   address: string;
//   termsCondition: boolean;
// }

export interface ValidationRule{
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: any) => boolean;
  errorMessage?: string;
};