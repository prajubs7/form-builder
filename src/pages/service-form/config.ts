/* eslint-disable @typescript-eslint/no-explicit-any */
export const serviceForm = [
  {
    name: "title",
    label: "Title",
    componentType: "input",
    required: true,
    minLength: 3,
    errorMessage: "Please enter title (at least 3 characters)",
  },
  {
    name: "serviceType",
    label: "Service Type",
    componentType: "select",
    required: true,
    options: [
      { label: "House Keeping", value: "HK" },
      { label: "Cleaning", value: "CL" },
      { label: "Electrician", value: "EC" },
      { label: "Plumbing", value: "PL" },
    ],
    errorMessage: "Please select your service",
  },
  {
    name: "location",
    label: "Location",
    componentType: "input",
    required: true,
    minLength: 3,
    errorMessage: "Please select valid location",
  },
  {
    name: "costs",
    label: "Cost",
    componentType: "number",
    required: true,
    customValidator: (value: any) => {
      const cost = Number(value);
      return !isNaN(cost) && cost >= 10 && cost <= 120;
    },
    errorMessage: "Please select cost greater than 10",
  },
  {
    name: "duration",
    label: "Duration",
    componentType: "radio",
    required: true,
    options: [
      { label: "Weekly", value: "weekly" },
      { label: "Monthly", value: "Monthly" },
      { label: "Yearly", value: "Yearly" },
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
    errorMessage: "Please select country",
  },
  {
    name: "date",
    label: "Start Date",
    componentType: "date",
    required: true,
    customValidator: (value: string | number | Date) => {
      if (!value) return false;
      const date = new Date(value);
      const today = new Date();
      const minDate = new Date();
      minDate.setFullYear(today.getFullYear() - 10);
      const maxDate = new Date();
      maxDate.setFullYear(today.getFullYear() - 10);
      return date >= minDate && date <= maxDate;
    },
    errorMessage: "Please select valid date",
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