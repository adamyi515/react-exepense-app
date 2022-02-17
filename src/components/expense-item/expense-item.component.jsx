import React from 'react';

import styles from './expense-item.module.css';

const ExpenseItem = () => {
    return(
        <div className={styles['expense-item']}>

            <div className={styles['expense-item__date']}>
                <div className={styles['expense-item__date--month-year']}>
                    <span>Month</span> <span>Year</span>
                </div>
                <div className={styles['expense-item__date--day']}>
                    <h2>Date</h2>
                </div>
            </div>

            <div className={styles['expense-item__details']}>
                <h2>Test</h2>
                <div className={styles['expense-item__price']}>
                    $99.99
                </div>
            </div>
        </div>
    )
}

export default ExpenseItem;