import React, { useState } from "react";

import "./Expenseform.css";

const ExpenseForm = (props) => {
  const [enteredtitle, setenteredtitle] = useState("");
  const [enteredamount, setenteredamount] = useState("");
  const [entereddate, setentereddate] = useState("");

  const titlechangehandler = (event) => {
    setenteredtitle(event.target.value);
  };

  const amountchangehandler = (event) => {
    setenteredamount(event.target.value);
  };

  const datechangehandler = (event) => {
    setentereddate(event.target.value);
  };

  const submithandler = (event) => {
    event.preventDefault();

    const expensedata = {
      title: enteredtitle,
      amount: enteredamount,
      date: new Date(entereddate),
    };

    props.onSaveExpenseData(expensedata); //new expense.js
    setenteredtitle("");
    setenteredamount("");
    setentereddate("");
  };

  return (
    <form onSubmit={submithandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredtitle}
            onChange={titlechangehandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="$0.01"
            step="0.01"
            value={enteredamount}
            onChange={amountchangehandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2023-01-01"
            max="2023-12-31"
            value={entereddate}
            onChange={datechangehandler}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
