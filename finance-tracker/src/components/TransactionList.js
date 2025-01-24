import React from "react";
import "./TransactionList.css";

function TransactionList() {
  const transactions = [
    { id: 1, type: "income", amount: 500, description: "Freelance Project" },
    { id: 2, type: "expense", amount: 200, description: "Groceries" },
    { id: 3, type: "income", amount: 1500, description: "Salary" },
    { id: 4, type: "expense", amount: 50, description: "Transport" },
  ];

  return (
    <div className="transaction-list-container">
      <h1>Transaction List</h1>
      <table className="transaction-table">
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id} className={transaction.type}>
              <td>{transaction.type}</td>
              <td>${transaction.amount}</td>
              <td>{transaction.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionList;
