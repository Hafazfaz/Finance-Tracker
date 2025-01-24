import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Welcome to Your Finance Tracker</h1>

      <div className="dashboard-cards">
        <div className="dashboard-card">
          <h2>Total Income</h2>
          <p>$2,000</p>
        </div>
        <div className="dashboard-card">
          <h2>Total Expenses</h2>
          <p>$800</p>
        </div>
        <div className="dashboard-card">
          <h2>Balance</h2>
          <p>$1,200</p>
        </div>
      </div>

      <div className="dashboard-actions">
        <button 
          onClick={() => navigate("/transaction-list")} 
          className="dashboard-btn view-btn"
        >
          View Transactions
        </button>
        <button 
          onClick={() => navigate("/transaction-form")} 
          className="dashboard-btn add-btn"
        >
          Add Transaction
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
