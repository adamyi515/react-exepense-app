import React, { useState, useEffect } from 'react';

import styles from './expense-list.module.css';

// Components
import ExpenseItem from '../expense-item/expense-item.component';

const ExpenseList = ({ expenses }) => {
    const [filteredYear, setFilteredYear] = useState(2020);

    const dropdownChangeHandler = ev => {
        setFilteredYear(ev.target.value);
    }

    return(
        <div className={styles['expense-list']}>
            {/* <div className={styles['expense-list__filter']}>
                <h3>Filter by year</h3>
                <select className={styles['expense-list__filter-selector']} value={filteredYear} onChange={dropdownChangeHandler}>
                    <option value='2020'>2020</option>
                    <option value='2021'>2021</option>
                    <option value='2022'>2022</option>
                </select>
            </div> */}
            <div className={styles['expense-list__container']}>
                {
                    expenses.map(expenseItem => <ExpenseItem key={expenseItem.id} {...expenseItem} />)
                }
            </div>
        </div>
    )
}

export default ExpenseList;