export const registrationFormControl = [
  {
    name: "name",
    label: "Name",
    placeholder: "Enter first name",
    componentType: "input",
    type: "text" as const,
  },
  {
    name: "phoneNumber",
    label: "Phone Number",
    placeholder: "Enter phone number",
    componentType: "input",
    type: "number" as const,
  },
  {
    name: "emailAddress",
    label: "Email Id",
    placeholder: "Enter email",
    componentType: "input",
    type: "email" as const,
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter password",
    componentType: "input",
    type: "password" as const,
  },
  {
    name: "gender",
    label: "Gender",
    componentType: "select",
    options: [{ label: "Male", value:"Male" }, { label: "Female", value:"Female" }, { label: "Other", value:"Other" }],
  },
  {
    name: "birthdate",
    label: "Birthdate",
    placeholder: "Select birthdate",
    componentType: "date",
    defaultValue: new Date(),
  },
  {
    name: "address",
    label: "Address",
    placeholder: "Enter address",
    componentType: "textarea",
  },
  {
    name: "termsCondition",
    label: "Accept terms & condition",
    componentType: "checkbox",
  },
];
