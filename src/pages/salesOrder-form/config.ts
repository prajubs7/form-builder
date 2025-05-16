export const orderFormConfig = [
  {
    name: "orderId",
    label: "Order ID",
    placeholder: "Enter order ID",
    componentType: "input",
    type: "text" as const,
    required: true,
    errorMessage: "Order ID is required"
  },
  {
    name: "customerName",
    label: "Customer Name",
    placeholder: "Enter customer name",
    componentType: "input",
    type: "text" as const,
    required: true,
    errorMessage: "Customer name is required"
  },
  {
    name: "email",
    label: "Email Address",
    placeholder: "Enter email",
    componentType: "input",
    type: "email" as const,
    required: true,
    errorMessage: "Email is required"
  },
  {
    name: "phoneNumber",
    label: "Phone Number",
    placeholder: "Enter phone number",
    componentType: "input",
    type: "number" as const,
    required: true,
    errorMessage: "Phone number is required"
  },
  {
    name: "orderDate",
    label: "Order Date",
    placeholder: "Select order date",
    componentType: "date",
    required: true,
    errorMessage: "Order date is required"
  },
  {
    name: "deliveryDate",
    label: "Delivery Date",
    placeholder: "Select delivery date",
    componentType: "date",
    required: true,
    errorMessage: "Delivery date is required"
  },
  {
    componentType: "section-heading",
    name: "residentialAddress",
    label: "Residential Address",
    required: false,
    errorMessage: ""
  },
  {
    name: "residentialAddress.addressline1",
    label: "Address Line 1",
    placeholder: "Address Line 1",
    componentType: "input",
    required: true,
    errorMessage: "Address Line 1 is required"
  },
  {
    name: "residentialAddress.addressline2",
    label: "Address Line 2",
    placeholder: "Address Line 2",
    componentType: "input",
    required: true,
    errorMessage: "Address Line 2 is required"
  },
  {
    name: "residentialAddress.city",
    label: "City",
    placeholder: "City",
    componentType: "input",
    required: true,
    errorMessage: "City is required"
  },
  {
    name: "residentialAddress.state",
    label: "State",
    placeholder: "State",
    componentType: "input",
    required: true,
    errorMessage: "State is required"
  },
  {
    name: "residentialAddress.pincode",
    label: "Pincode",
    placeholder: "Pincode",
    componentType: "input",
    required: true,
    errorMessage: "Pincode is required"
  },
  {
    componentType: "section-heading",
    name: "deliveryAddress",
    label: "Delivery Address",
    required: false,
    errorMessage: ""
  },
  {
    name: "deliveryAddress.addressline1",
    label: "Address Line 1",
    placeholder: "Address Line 1",
    componentType: "input",
    required: true,
    errorMessage: "Address Line 1 is required"
  },
  {
    name: "deliveryAddress.addressline2",
    label: "Address Line 2",
    placeholder: "Address Line 2",
    componentType: "input",
    required: true,
    errorMessage: "Address Line 2 is required"
  },
  {
    name: "deliveryAddress.city",
    label: "City",
    placeholder: "City",
    componentType: "input",
    required: true,
    errorMessage: "City is required"
  },
  {
    name: "deliveryAddress.state",
    label: "State",
    placeholder: "State",
    componentType: "input",
    required: true,
    errorMessage: "State is required"
  },
  {
    name: "deliveryAddress.pincode",
    label: "Pincode",
    placeholder: "Pincode",
    componentType: "input",
    required: true,
    errorMessage: "Pincode is required"
  },
  {
    name: "items",
    label: "Items",
    componentType: "select",
    options: [
      { label: "Laptop", value: "Laptop" },
      { label: "Phone", value: "Phone" },
      { label: "Headphones", value: "Headphones" },
    ],
    required: true,
    errorMessage: "Please select an item"
  },
  {
    name: "paymentMethod",
    label: "Payment Method",
    componentType: "radio",
    options: [
      { label: "Credit Card", value: "Credit Card" },
      { label: "Debit Card", value: "Debit Card" },
      { label: "Cash on Delivery", value: "Cash on Delivery" },
    ],
    required: true,
    errorMessage: "Please select a payment method"
  },
  {
    name: "termsAccepted",
    label: "Accept Terms & Conditions",
    componentType: "checkbox",
    options: [
      {
        label: "I accept the terms and conditions",
        value: "accepted",
      },
    ],
    required: true,
    errorMessage: "You must accept the terms and conditions"
  },
];
