import type { OrderStatus } from '../types';

interface OrderFiltersProps {
  search: string;
  status: OrderStatus | 'all';
  onSearchChange: (value: string) => void;
  onStatusChange: (value: OrderStatus | 'all') => void;
}

function OrderFilters({
  search,
  status,
  onSearchChange,
  onStatusChange,
}: OrderFiltersProps) {
  return (
    <div className="order-filters">

      <div className="search-box">
        <label htmlFor="order-search">
          Search Orders
        </label>

        <input
          id="order-search"
          type="text"
          value={search}
          onChange={(event) =>
            onSearchChange(event.target.value)
          }
          placeholder="Search by order, customer or product..."
        />
      </div>

      <div className="status-filter">
        <label htmlFor="order-status">
          Status
        </label>

        <select
          id="order-status"
          value={status}
          onChange={(event) =>
            onStatusChange(
              event.target.value as OrderStatus | 'all'
            )
          }
        >
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="processing">Processing</option>
          <option value="shipped">Shipped</option>
          <option value="delivered">Delivered</option>
          <option value="cancelled">Cancelled</option>
        </select>
      </div>

    </div>
  );
}

export default OrderFilters;