import { useMemo, useState } from 'react';

import OrderFilters from '../features/orders/components/OrderFilters';
import OrderTable from '../features/orders/components/OrderTable';
import useDebounce from '../hooks/useDebounce';

import { mockOrders } from '../features/orders/mockOrders';

import type { 
  OrderStatus ,
   SortDirection,
  SortField, 
} from '../features/orders/types';

function Orders() {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 300);
  
  const [status, setStatus] =
    useState<OrderStatus | 'all'>('all');

    const [sortField, setSortField] =
  useState<SortField>('orderDate');

const [sortDirection, setSortDirection] =
  useState<SortDirection>('desc');

  const processedOrders = useMemo(() => {
  const normalizedSearch = debouncedSearch
    .trim()
    .toLowerCase();

  const filtered = mockOrders.filter((order) => {
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

  return [...filtered].sort((a, b) => {
    let comparison = 0;

    if (sortField === 'amount') {
      comparison = a.amount - b.amount;
    }

    if (sortField === 'customerName') {
      comparison = a.customerName.localeCompare(
        b.customerName
      );
    }

    if (sortField === 'orderDate') {
      comparison =
        new Date(a.orderDate).getTime() -
        new Date(b.orderDate).getTime();
    }

    return sortDirection === 'asc'
      ? comparison
      : -comparison;
  });
}, [
  debouncedSearch,
  status,
  sortField,
  sortDirection,
]);

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
      <div>
  <label>
    Sort by:
  </label>

  <select
    value={sortField}
    onChange={(event) =>
      setSortField(
        event.target.value as SortField
      )
    }
  >
    <option value="orderDate">
      Order Date
    </option>

    <option value="amount">
      Amount
    </option>

    <option value="customerName">
      Customer
    </option>
  </select>

  <select
    value={sortDirection}
    onChange={(event) =>
      setSortDirection(
        event.target.value as SortDirection
      )
    }
  >
    <option value="desc">
      Descending
    </option>

    <option value="asc">
      Ascending
    </option>
  </select>
</div>

      <OrderTable orders={processedOrders} />
    </div>
  );
}

export default Orders;