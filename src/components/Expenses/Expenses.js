import React, { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';


import Card from '../UI/Card';
import './Expenses.css';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
const [year,setYear]=useState("2022");
const [data,setData]=useState(props.items);

 const selectedDate=(selectedDate)=>{
    setYear(selectedDate);
    console.log(year);
    
 }

const filteredExpenses = props.items.filter((expense) => {
  return expense.date.getFullYear().toString() === year;
});

  return (
    <div>
    <Card className="expenses">
    <ExpensesFilter selected={year} selectedDate={selectedDate}></ExpensesFilter> 
    <ExpensesList items={filteredExpenses}></ExpensesList>
    </Card>
    </div>
  );
}

export default Expenses;