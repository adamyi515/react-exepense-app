import React from 'react';

import styles from './expense-item.module.css';

const ExpenseItem = ({ amount, id, title, date }) => {
    const dateArray = date.split('-');
    const year = dateArray[0];
    const month = dateArray[1];
    const day = dateArray[2];

    return(
        <div className={styles['expense-item']}>

            <div className={styles['expense-item__date']}>
                <div className={styles['expense-item__date--month-year']}>
                    <span>{ month }</span> <span>{ year }</span>
                </div>
                <div className={styles['expense-item__date--day']}>
                    <h2>{ day }</h2>
                </div>
            </div>

            <div className={styles['expense-item__details']}>
                <h2>{ title }</h2>
                <div className={styles['expense-item__price']}>
                    ${ amount.toLocaleString('en-US') }
                </div>
            </div>
        </div>
    )
}

export default ExpenseItem;