import React, { useState } from 'react';
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2021');

    const dropdownHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    return (
        <div>
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onFilterChange={dropdownHandler}/>
            {props.items.map((expense) => (
                <ExpenseItem 
                    key={expense.id}
                    title={expense.title} 
                    amount={expense.amount} 
                    date={expense.date} 
                />
            ))}
        </Card>
        </div>
    )
}

export default Expenses;