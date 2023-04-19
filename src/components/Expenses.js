import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
    const expenseItemElements = props.items.map((expense) => {
        return (
            <ExpenseItem
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        );
    });
    return <div className="expenses">{expenseItemElements}</div>;
}

export default Expenses;