import React, { useState } from 'react';
import './App.css';

// Components
import ExpenseList from './components/expense-list/exepense-list.component';
import ExpenseForm from './components/expense-form/expense-form.component';


function App() {

  const [expenses, setExpenses] = useState([]);

  return (
    <div className="App">
      <ExpenseForm />
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;
