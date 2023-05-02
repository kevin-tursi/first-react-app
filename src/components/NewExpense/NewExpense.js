import React, {useState} from "react";

import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
            props.onAddExpense(expenseData);
            setIsEditing(false);
    }

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }

    let notEditing;
    if (!isEditing) {
        notEditing = (<button onClick={startEditingHandler}>Add New Expense</button>);
    }

    let editing;
    if (isEditing) {
        editing = (<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>)
    }

    return(
        <div className="new-expense">
            {notEditing}
            {editing}
        </div>
    )
}

export default NewExpense;