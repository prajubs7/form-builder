export interface IAddress{
    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    pincode: string;
}

export interface IOrder{
    productName: string;
    quantity: number;
    unitPrice: number;
    amount: number;
}

export interface ISalesOrder {
    clientName:string,
    email: string,
    mobileNo: string,
    residentialAddress: IAddress;
    deliveryAddress: IAddress;
    order: IOrder;
}