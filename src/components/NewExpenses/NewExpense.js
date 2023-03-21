import React from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpenses = (props) => {
  const saveexpensedatahandler = (enteredexpensedata) => {
    const expensedata = {
      ...enteredexpensedata,
      id: Math.random().toString(),
    };

    props.onAddExpense(expensedata);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveexpensedatahandler}></ExpenseForm>
    </div>
  );
};

export default NewExpenses;
