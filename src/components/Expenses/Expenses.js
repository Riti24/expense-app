import React, { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
const [year,setYear]=useState("2022");

 const selectedDate=(selectedDate)=>{
    setYear(selectedDate);
    console.log(year);
 }
  return (
    <div>
    <Card className="expenses">
    <ExpensesFilter selected={year} selectedDate={selectedDate}></ExpensesFilter> 
    {props.items.map((expense)=>(
      <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
    ))} 
    </Card>
    </div>
  );
}

export default Expenses;