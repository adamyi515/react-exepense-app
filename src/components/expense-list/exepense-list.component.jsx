import React from 'react';

import styles from './expense-list.module.css';

// Components
import ExpenseItem from '../expense-item/expense-item.component';

const ExpenseList = () => {
    return(
        <div className={styles['expense-list']}>
            <div className={styles['expense-list__filter']}>
                <h3>Filter by year</h3>
                <select className={styles['expense-list__filter-selector']}>
                    <option>2021</option>
                    <option>2022</option>
                    <option>2023</option>
                </select>
            </div>
            <div className={styles['expense-list__container']}>
                <ExpenseItem />
            </div>
        </div>
    )
}

export default ExpenseList;