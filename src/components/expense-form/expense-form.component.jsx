import React from 'react'

import styles from './expense-form.module.css';

const ExpenseForm = () => {

    const handleSubmit = ev => {
        ev.preventDefault();
    }

  return (
    <form onSubmit={handleSubmit} className={styles['expense-form']}>
        <div className={styles['expense-form__group']}>
            <label htmlFor='title'>Title</label>
            <input type='text' />
        </div>
        <div className={styles['expense-form__group']}>
            <label htmlFor='amount'>Amount</label>
            <input type='number' min='1' />
        </div>
        <div className={styles['expense-form__group']}>
            <label htmlFor='date'>Date</label>
            <input type='date' />
        </div>

        <button className='btn'>Add Expense</button>
    </form>
  )
}

export default ExpenseForm;