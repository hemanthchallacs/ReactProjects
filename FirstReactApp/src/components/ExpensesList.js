
import '../CSS/ExpensesList.css'
import ExpenseItem from "./ExpenseItem";

function ExpensesList(props){

    let expenseListContent = <p className='expenses-list__fallback' > No expenses found! </p>
    if(props.filteredExpenses.length > 0)
    {
        expenseListContent = props.filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ));
    }



    return (
    <ul className='expenses-list'>
    {expenseListContent}
    </ul>);

}

export default ExpensesList;