import type { IAddress, IOrder, ISalesOrder } from "../../model";

export const addressInitialValues :IAddress = {
    addressLine1: "",
    addressLine2: "",
    city:"",
    state: "",
    pincode: "",
}

export const orderInitialValues: IOrder = {
    productName: "",
    quantity: 0,
    unitPrice: 0,
    amount: 0,
}

export const salesOrderInitialValues: ISalesOrder = {
    clientName:"",
    email: "",
    mobileNo: "",
    residentialAddress: addressInitialValues,
    deliveryAddress: addressInitialValues,
    order: orderInitialValues,
}