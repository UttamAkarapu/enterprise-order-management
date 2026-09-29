import PermissionGate from '../features/auth/components/PermissionGate';

function Orders() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1>Orders</h1>
          <p>Manage customer orders.</p>
        </div>
      </div>

      <div>
        <PermissionGate permission="orders:create">
          <button>
            Create Order
          </button>
        </PermissionGate>

        <PermissionGate permission="orders:edit">
          <button>
            Edit Order
          </button>
        </PermissionGate>

        <PermissionGate permission="orders:delete">
          <button>
            Delete Order
          </button>
        </PermissionGate>
      </div>
    </div>
  );
}

export default Orders;