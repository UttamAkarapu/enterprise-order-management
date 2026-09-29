import { useEffect, useMemo, useState } from 'react';

import OrderFilters from '../features/orders/components/OrderFilters';
import OrderTable from '../features/orders/components/OrderTable';
import useDebounce from '../hooks/useDebounce';
import OrderPagination from '../features/orders/components/OrderPagination';

import { mockOrders } from '../features/orders/mockOrders';

import type { 
  OrderStatus ,
   SortDirection,
  SortField, 
} from '../features/orders/types';

function Orders() {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 300);
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 10;
  
  const [status, setStatus] =
    useState<OrderStatus | 'all'>('all');

    const [sortField, setSortField] =
  useState<SortField>('orderDate');

const [sortDirection, setSortDirection] =
  useState<SortDirection>('desc');

  useEffect(() => {
  setCurrentPage(1);
}, [debouncedSearch, status, sortField, sortDirection]);

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

const totalPages = Math.ceil(
  processedOrders.length / pageSize
);

const paginatedOrders = useMemo(() => {
  const startIndex =
    (currentPage - 1) * pageSize;

  const endIndex =
    startIndex + pageSize;

  return processedOrders.slice(
    startIndex,
    endIndex
  );
}, [processedOrders, currentPage]);

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

      <OrderTable orders={paginatedOrders} />
      <OrderPagination
  currentPage={currentPage}
  totalPages={totalPages}
  onPageChange={setCurrentPage}
/>
    </div>
  );
}

export default Orders;