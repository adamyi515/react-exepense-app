import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

import styles from './expense-form.module.css';

const ExpenseForm = ({ addExpenseItem }) => {

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    // Private methods
    const clearInputs = () => {
        setTitle('');
        setAmount('');
        setDate('');
    }


    // Event Handlers
    const handleSubmit = ev => {
        ev.preventDefault();
        addExpenseItem({
            title,
            amount: parseFloat(amount),
            id: uuidv4(),
            date
        });
        clearInputs();
    }

    const handleTextChange = ev => {
        setTitle(ev.target.value);
    }

    const handleAmountChange = ev => {
        setAmount(ev.target.value);
    }

    const handleDateChange = ev => {
        setDate(ev.target.value);
    }

  return (
    <form onSubmit={handleSubmit} className={styles['expense-form']}>
        <div className={styles['expense-form__group']}>
            <label htmlFor='title'>Title</label>
            <input type='text' name='text' value={title} onChange={handleTextChange} />
        </div>
        <div className={styles['expense-form__group']}>
            <label htmlFor='amount'>Amount</label>
            <input type='number' name='amount' min='0' value={amount} onChange={handleAmountChange} />
        </div>
        <div className={styles['expense-form__group']}>
            <label htmlFor='date'>Date</label>
            <input type='date' name='date' min='2020-01-01' max='2022-12-31' value={date} onChange={handleDateChange} />
        </div>

        <button className='btn'>Add Expense</button>
    </form>
  )
}

export default ExpenseForm;