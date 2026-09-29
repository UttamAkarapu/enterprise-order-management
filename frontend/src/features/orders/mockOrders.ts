import type { Order, OrderStatus } from './types';

const customers = [
  'Rahul Sharma',
  'Priya Reddy',
  'Amit Kumar',
  'Sneha Rao',
  'Vikram Singh',
  'Anjali Mehta',
  'Kiran Kumar',
  'Neha Patel',
  'Arjun Reddy',
  'Pooja Sharma',
];

const products = [
  'MacBook Pro',
  'iPhone 17',
  'iPad Pro',
  'AirPods Pro',
  'Samsung Galaxy S26',
];

const statuses: OrderStatus[] = [
  'pending',
  'processing',
  'shipped',
  'delivered',
  'cancelled',
];

export const mockOrders: Order[] = Array.from(
  { length: 50 },
  (_, index) => {
    const customer =
      customers[index % customers.length];

    const product =
      products[index % products.length];

    const status =
      statuses[index % statuses.length];

    return {
      id: `ORD-${1001 + index}`,

      customerName: customer,

      customerEmail:
        `${customer
          .toLowerCase()
          .replace(' ', '.')}@example.com`,

      product,

      quantity: (index % 3) + 1,

      amount:
        [74997, 89999, 99999, 179998, 189999][
          index % 5
        ],

      status,

      orderDate:
        new Date(
          Date.now() -
            index * 24 * 60 * 60 * 1000
        )
          .toISOString()
          .split('T')[0],
    };
  }
);