import { useState } from "react";

function App() {

  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  function addExpense() {

    if(name === "" || amount === ""){

      alert("Please enter all fields");

      return;
    }

    const newExpense = {
      name: name,
      amount: Number(amount)
    };

    setExpenses([...expenses, newExpense]);

    setName("");
    setAmount("");
  }

  const totalSpending = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  return (

    <div style={{padding:"30px"}}>

      <h1>Smart Expense Tracker</h1>

      <input
        type="text"
        placeholder="Expense Name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e)=>setAmount(e.target.value)}
      />

      <br /><br />

      <button onClick={addExpense}>
        Add Expense
      </button>

      <h2>Expense List</h2>

      <ul>

        {expenses.map((expense,index)=>(

          <li key={index}>
            {expense.name} - ₹{expense.amount}
          </li>

        ))}

      </ul>

      <h2>Total Spending: ₹{totalSpending}</h2>

    </div>
  );
}

export default App;
