import OrderTable from '../features/orders/components/OrderTable';
import { mockOrders } from '../features/orders/mockOrders';

function Orders() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1>Orders</h1>

          <p>
            Search, filter and manage customer orders.
          </p>
        </div>
      </div>

      <OrderTable orders={mockOrders} />
    </div>
  );
}

export default Orders;