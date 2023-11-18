export type Status = "на проверке" | "одобрено" | "отклонено";

export interface Order {
  id: string;
  title: string;
  price: number;
  quantity: number;
  status: Status;
  description?: string;
}

export type ErrorResponse = {
  message: string;
};

export interface QueryResponse {
  orders: Order[];
  totalCount: number;
}
export interface OrderAcceptResponse {
  data: Order;
  id: string;
}
