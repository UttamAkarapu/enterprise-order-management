import type { Order } from './types';

export const mockOrders: Order[] = [
  {
    id: 'ORD-1001',
    customerName: 'Rahul Sharma',
    customerEmail: 'rahul@example.com',
    product: 'MacBook Pro',
    quantity: 1,
    amount: 189999,
    status: 'processing',
    orderDate: '2026-09-25',
  },

  {
    id: 'ORD-1002',
    customerName: 'Priya Reddy',
    customerEmail: 'priya@example.com',
    product: 'iPhone 17',
    quantity: 2,
    amount: 179998,
    status: 'shipped',
    orderDate: '2026-09-24',
  },

  {
    id: 'ORD-1003',
    customerName: 'Amit Kumar',
    customerEmail: 'amit@example.com',
    product: 'iPad Pro',
    quantity: 1,
    amount: 99999,
    status: 'delivered',
    orderDate: '2026-09-22',
  },

  {
    id: 'ORD-1004',
    customerName: 'Sneha Rao',
    customerEmail: 'sneha@example.com',
    product: 'AirPods Pro',
    quantity: 3,
    amount: 74997,
    status: 'pending',
    orderDate: '2026-09-21',
  },

  {
    id: 'ORD-1005',
    customerName: 'Vikram Singh',
    customerEmail: 'vikram@example.com',
    product: 'Samsung Galaxy S26',
    quantity: 1,
    amount: 89999,
    status: 'cancelled',
    orderDate: '2026-09-20',
  },
];