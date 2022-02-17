import React, { useState, useEffect } from 'react';
import './App.css';

// Components
import ExpenseList from './components/expense-list/exepense-list.component';
import ExpenseForm from './components/expense-form/expense-form.component';


function App() {

  const [expenses, setExpenses] = useState([]);
  // Event Handlers
  const addExpenseItem = expenseItem => {
    setExpenses([...expenses, expenseItem]);
  }


  return (
    <div className="App">
      <ExpenseForm addExpenseItem={addExpenseItem}/>
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;
