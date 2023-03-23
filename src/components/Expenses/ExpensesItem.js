import React from "react";
import ExpenseDate from "../Expenses/ExpenseDate";
import ExpenseDetails from "../Expenses/ExpenseDetails";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
        <ExpenseDetails
          title={props.title}
          amount={props.amount}
        ></ExpenseDetails>
      </Card>
    </li>
  );
};

export default ExpenseItem;
