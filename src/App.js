import ExpenseItem from "./components/Expenses/ExpensesItem";
import "./components/Expenses/Expenses.css";
import NewExpense from "./components/NewExpenses/NewExpense";
import Card from "./components/UI/Card";

const App = () => {
  const expenses = [
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

  const addExpenseHandler = (expense) => {
    console.log("In app.js");
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Card className="expenses">
        {expenses.map((ele) => (
          <ExpenseItem
            title={ele.title}
            amount={ele.amount}
            date={ele.date}
          ></ExpenseItem>
        ))}
      </Card>
    </div>
  );
};

export default App;
