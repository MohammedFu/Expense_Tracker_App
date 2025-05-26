import { useContext } from "react";

import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expense-context";

function AllExpences() {
  const expensesContext = useContext(ExpensesContext);
  return <ExpensesOutput expenses={expensesContext.expenses} expensesPeriod="Total" fallBackText="No registered expenses found!" />;
}

export default AllExpences;
