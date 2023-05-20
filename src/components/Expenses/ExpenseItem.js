// 리액트에 있는 컴포넌트는 단지 자바스크립트 함수일 뿐!
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
// 리액트에서 class 속성은 className!

const ExpenseItem = props => {
    return (
    <Card className="expense-item">
        <ExpenseDate date={props.date}/>
        <div className='expense-item__description'>
            <h2>{props.title}</h2>
            <div className='expense-item__price'>${props.amount}</div>
        </div>
    </Card>
    );
} 

export default ExpenseItem;