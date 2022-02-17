import './App.css';

// Components
import ExpenseList from './components/expense-list/exepense-list.component';
import ExpenseForm from './components/expense-form/expense-form.component';


function App() {
  return (
    <div className="App">
      <ExpenseForm />
      <ExpenseList />
    </div>
  );
}

export default App;
