import React, { useState } from 'react'

import styles from './expense-form.module.css';

const ExpenseForm = () => {

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);

    const handleSubmit = ev => {
        ev.preventDefault();
    }

    const handleChange = ev => {
        
    }

  return (
    <form onSubmit={handleSubmit} className={styles['expense-form']}>
        <div className={styles['expense-form__group']}>
            <label htmlFor='title'>Title</label>
            <input type='text' name='text' onChange={handleChange} />
        </div>
        <div className={styles['expense-form__group']}>
            <label htmlFor='amount'>Amount</label>
            <input type='number' name='amount' min='1' />
        </div>
        <div className={styles['expense-form__group']}>
            <label htmlFor='date'>Date</label>
            <input type='date' name='date' />
        </div>

        <button className='btn'>Add Expense</button>
    </form>
  )
}

export default ExpenseForm;