import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet paper",
    amount: 70.7,
    date: new Date(2022, 3, 5),
  },
  {
    id: "e2",
    title: "Car insurance",
    amount: 23.7,
    date: new Date(2021, 4, 5),
  },
  {
    id: "e3",
    title: "New TV",
    amount: 155.7,
    date: new Date(2021, 3, 10),
  },
  {
    id: "e4",
    title: "Movie",
    amount: 255.7,
    date: new Date(2021, 8, 5),
  },
];

const App = () => {
  const [expenses, setexpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setexpenses((prevstate) => {
      return [expense, ...prevstate];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses}></Expenses>
    </div>
  );
};

export default App;
