  export type OrderStatus =
  | 'pending'
  | 'processing'
  | 'shipped'
  | 'delivered'
  | 'cancelled';

export interface Order {
  id: string;
  customerName: string;
  customerEmail: string;
  product: string;
  quantity: number;
  amount: number;
  status: OrderStatus;
  orderDate: string;
}

export type SortField =
  | 'orderDate'
  | 'amount'
  | 'customerName';

export type SortDirection =
  | 'asc'
  | 'desc';