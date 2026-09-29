import type { Order } from '../types';

interface OrderTableProps {
  orders: Order[];
}

function OrderTable({ orders }: OrderTableProps) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Product</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>

              <td>
                <div>{order.customerName}</div>
                <small>{order.customerEmail}</small>
              </td>

              <td>
                {order.product}
              </td>

              <td>
                ₹{order.amount.toLocaleString('en-IN')}
              </td>

              <td>
                {order.status}
              </td>

              <td>
                {order.orderDate}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrderTable;