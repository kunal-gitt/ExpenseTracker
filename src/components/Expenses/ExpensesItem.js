import React, { useState } from "react";
import ExpenseDate from "../Expenses/ExpenseDate";
import ExpenseDetails from "../Expenses/ExpenseDetails";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [amount, setamount] = useState(props.amount);

  const clickhandler = () => {
    setTitle("Updated!!");
    console.log(title);
  };

  const clickehandler2 = () => {
    setamount("100");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <ExpenseDetails title={title} amount={amount}></ExpenseDetails>

      <button onClick={clickhandler}>Change title!</button>
      <button onClick={clickehandler2}>Change Amount</button>
    </Card>
  );
};

export default ExpenseItem;
