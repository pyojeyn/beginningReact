// 리액트에 있는 컴포넌트는 단지 자바스크립트 함수일 뿐!
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import React, { useState } from 'react';

// 리액트에서 class 속성은 className!

const ExpenseItem = props => {
    
    const [title, setTitle] = useState(props.title); //  let title = props.title 랑 똑같은 역할. 
    // const [현재 상태값, 업데이트하는 합수] = useState(초기값);
    const clickHandler = () => { 
        setTitle('Updated!');
        console.log(title);
    }


    return (
    <Card className="expense-item">
        <ExpenseDate date={props.date}/>
        <div className='expense-item__description'>
            <h2>{title}</h2>
            <div className='expense-item__price'>${props.amount}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
    </Card>
    );
} 

export default ExpenseItem;