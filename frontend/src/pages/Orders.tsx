import { useMemo, useState } from 'react';

import OrderFilters from '../features/orders/components/OrderFilters';
import OrderTable from '../features/orders/components/OrderTable';

import { mockOrders } from '../features/orders/mockOrders';

import type { OrderStatus } from '../features/orders/types';

function Orders() {
  const [search, setSearch] = useState('');
  const [status, setStatus] =
    useState<OrderStatus | 'all'>('all');

  const filteredOrders = useMemo(() => {
    const normalizedSearch = search
      .trim()
      .toLowerCase();

    return mockOrders.filter((order) => {
      const matchesSearch =
        normalizedSearch === '' ||
        order.id.toLowerCase().includes(normalizedSearch) ||
        order.customerName
          .toLowerCase()
          .includes(normalizedSearch) ||
        order.product
          .toLowerCase()
          .includes(normalizedSearch);

      const matchesStatus =
        status === 'all' ||
        order.status === status;

      return matchesSearch && matchesStatus;
    });
  }, [search, status]);

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

      <OrderFilters
        search={search}
        status={status}
        onSearchChange={setSearch}
        onStatusChange={setStatus}
      />

      <OrderTable orders={filteredOrders} />
    </div>
  );
}

export default Orders;