import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  function addExpense() {
    if (name === "" || amount === "") {
      alert("Please enter all fields");
      return;
    }

    const newExpense = {
      name,
      amount: Number(amount),
    };

    setExpenses([...expenses, newExpense]);
    setName("");
    setAmount("");
  }

  function deleteExpense(index) {
    const updatedExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(updatedExpenses);
  }

  const totalSpending = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>💰 Smart Expense Tracker</h1>

      <div style={styles.card}>
        <input
          style={styles.input}
          type="text"
          placeholder="Expense Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          style={styles.input}
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <button style={styles.button} onClick={addExpense}>
          Add Expense
        </button>
      </div>

      <h2>Expense List</h2>

      <ul style={styles.list}>
        {expenses.map((expense, index) => (
          <li key={index} style={styles.listItem}>
            {expense.name} - ₹{expense.amount}
            <button
              onClick={() => deleteExpense(index)}
              style={styles.deleteBtn}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>

      <h2 style={styles.total}>
        Total Spending: ₹{totalSpending}
      </h2>
    </div>
  );
}

const styles = {
  container: {
    padding: "30px",
    fontFamily: "Arial",
    textAlign: "center",
  },
  title: {
    color: "#2c3e50",
  },
  card: {
    margin: "20px auto",
    padding: "20px",
    maxWidth: "320px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    background: "#f9f9f9",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "8px 0",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#2ecc71",
    color: "white",
    border: "none",
    cursor: "pointer",
    marginTop: "10px",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  listItem: {
    padding: "10px",
    background: "#f4f4f4",
    margin: "8px auto",
    width: "320px",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  deleteBtn: {
    background: "red",
    color: "white",
    border: "none",
    cursor: "pointer",
    padding: "5px 8px",
    borderRadius: "5px",
  },
  total: {
    marginTop: "20px",
    color: "#e74c3c",
  },
};

export default App;