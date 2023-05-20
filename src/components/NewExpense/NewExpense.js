import React, { useState } from "react";
import './NewExpenses.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const[isEditing, setIsEditing] = useState(false);


    // saveExpenseDataHandler: 심부름꾼임 야 ExpenseForm 가서 데이터 받아와
    // enteredExpenseData : 여기다 담아가지고 와. 
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    }

    const startEditingHandler = () =>{
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }

    return ( 
    <div className="new-expense">
        {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
        {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}  onCancel={stopEditingHandler}/>}
    </div>
    );
};

export default NewExpense;