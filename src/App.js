import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    {
      title: 'Car Insurance',
      amount: 342,
      date: new Date(2022,4,22)
    },
    {
      title: 'Laptop Repair',
      amount: 542,
      date: new Date(2023,4,22)
    },
    {
      title: 'Mobile Screen Repair',
      amount: 654,
      date: new Date(2021,4,22)
    },
    {
      title: 'Power Meter Repair',
      amount: 745,
      date: new Date(2020,4,14)
    }
  ]
  return (
    <>      
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}/>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}/>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}/>
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}/>
    </>
  );
}

export default App;
