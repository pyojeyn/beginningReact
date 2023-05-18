import React from "react";
import './NewExpenses.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    // saveExpenseDataHandler: 심부름꾼임 야 ExpenseForm 가서 데이터 받아와
    // enteredExpenseData : 여기다 담아가지고 와. 
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    }

    return ( 
    <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
    );
};

export default NewExpense;