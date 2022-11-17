import ExpenseItem from "./components/ExpensesItem";

function App() {
  const expense = [
    {
      id: "e1",
      title: "Toilet paper",
      amount: 70.7,
      date: new Date(2022, 3, 5),
      LocationOfExpenditure: "miraroad",
    },
    {
      id: "e2",
      title: "Car insurance",
      amount: 23.7,
      date: new Date(2021, 4, 5),
      LocationOfExpenditure: "malad",
    },
    {
      id: "e3",
      title: "New TV",
      amount: 155.7,
      date: new Date(2021, 3, 10),
      LocationOfExpenditure: "mumbai",
    },
    {
      id: "e4",
      title: "Movie",
      amount: 255.7,
      date: new Date(2021, 8, 5),
      LocationOfExpenditure: "bangalore",
    },
    {
      id: "e5",
      title: "Move",
      amount: 25.7,
      date: new Date(2021, 8, 5),
      LocationOfExpenditure: "bagalore",
    },
    {
      id: "e5",
      title: "Move",
      amount: 25.7,
      date: new Date(2021, 8, 5),
      LocationOfExpenditure: "bagalore",
    },
  ];

  return (
    <div>
      <h2>Lets get started!</h2>

      {expense.map((ele) => {
        return (
          <ExpenseItem
            title={ele.title}
            amount={ele.amount}
            date={ele.date}
            LocationOfExpenditure={ele.LocationOfExpenditure}
          ></ExpenseItem>
        );
      })}
    </div>
  );
}

export default App;
