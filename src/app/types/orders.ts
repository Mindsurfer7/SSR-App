export type Status = "на проверке" | "одобрено" | "отклонено";

export interface Order {
  id: string;
  title: string;
  price: number;
  quantity: number;
  status: Status;
  description?: string;
}
