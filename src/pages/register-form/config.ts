/* eslint-disable @typescript-eslint/no-explicit-any */
export const registerForm = [
  {
    name: "fullName",
    label: "Full Name",
    componentType: "input",
    required: true,
    minLength: 3,
    errorMessage: "Please enter your full name (at least 3 characters)",
  },
  {
    name: "email",
    label: "Email Address",
    componentType: "email",
    required: true,
    pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    errorMessage: "Please enter a valid email address",
  },
  {
    name: "password",
    label: "Password",
    componentType: "password",
    required: true,
    minLength: 8,
    customValidator: (value: string) => {
      return /[A-Z]/.test(value) && /[0-9]/.test(value);
    },
    errorMessage: "Password must be at least 8 characters",
  },
  {
    name: "age",
    label: "Age",
    componentType: "number",
    required: true,
    customValidator: (value: any) => {
      const age = Number(value);
      return !isNaN(age) && age >= 18 && age <= 120;
    },
    errorMessage: "You must be at least 18 years old",
  },
  {
    name: "gender",
    label: "Gender",
    componentType: "radio",
    required: true,
    options: [
      { label: "Male", value: "Male" },
      { label: "Female", value: "Female" },
      { label: "Other", value: "Other" },
    ],
    errorMessage: "Please select one option",
  },
  {
    name: "country",
    label: "Country",
    componentType: "select",
    required: true,
    options: [
      { label: "Select Country", value: "" },
      { label: "United States", value: "us" },
      { label: "Canada", value: "ca" },
      { label: "United Kingdom", value: "uk" },
    ],
    errorMessage: "Please select your country",
  },
  {
    name: "birthdate",
    label: "Date of Birth",
    componentType: "date",
    required: true,
    customValidator: (value: string | number | Date) => {
      if (!value) return false;
      const date = new Date(value);
      const today = new Date();
      const minDate = new Date();
      minDate.setFullYear(today.getFullYear() - 120);
      const maxDate = new Date();
      maxDate.setFullYear(today.getFullYear() - 18);
      return date >= minDate && date <= maxDate;
    },
    errorMessage: "You must be at least 18 years old",
  },
  {
    name: "comments",
    label: "Additional Comments",
    componentType: "textarea",
    required: true,
    maxLength: 500,
    errorMessage: "Comments cannot exceed 500 characters",
  },
  {
    name: "termsAccepted",
    label: "I accept the terms and conditions",
    componentType: "checkbox",
    required: true,
    errorMessage: "You must accept the terms and conditions",
  },
];