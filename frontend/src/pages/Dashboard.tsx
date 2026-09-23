import './Dashboard.css';

function Dashboard() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1>Dashboard</h1>
          <p>Overview of your order management system.</p>
        </div>
      </div>

      <div className="dashboard-cards">

        <div className="dashboard-card">
          <span className="card-label">Total Orders</span>
          <strong>1,248</strong>
          <span className="card-change">+12.5%</span>
        </div>

        <div className="dashboard-card">
          <span className="card-label">Pending Orders</span>
          <strong>86</strong>
          <span className="card-change">+4.2%</span>
        </div>

        <div className="dashboard-card">
          <span className="card-label">Completed Orders</span>
          <strong>1,102</strong>
          <span className="card-change">+18.4%</span>
        </div>

        <div className="dashboard-card">
          <span className="card-label">Revenue</span>
          <strong>₹24.8L</strong>
          <span className="card-change">+9.8%</span>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;