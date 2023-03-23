import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpenses = (props) => {
  const [isediting, setisediting] = useState(false);

  const saveexpensedatahandler = (enteredexpensedata) => {
    const expensedata = {
      ...enteredexpensedata,
      id: Math.random().toString(),
    };

    props.onAddExpense(expensedata); //app.js
    setisediting(false);
  };

  const startEditingHandler = () => {
    setisediting(true);
  };

  const stopEditingHandler = () => {
    setisediting(false);
  };

  return (
    <div className="new-expense">
      {!isediting && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isediting && (
        <ExpenseForm
          onSaveExpenseData={saveexpensedatahandler}
          onCancel={stopEditingHandler}
        ></ExpenseForm>
      )}
    </div>
  );
};

export default NewExpenses;
