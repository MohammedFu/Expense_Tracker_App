import { createContext, useReducer } from 'react';

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2025-05-19"),
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 89.99,
    date: new Date("2025-05-20"),
  },
  {
    id: "e3",
    description: "A pair of socks",
    amount: 79.89,
    date: new Date("2025-05-21"),
  },
  {
    id: "e4",
    description: "Some bananas",
    amount: 39.45,
    date: new Date("2025-05-22"),
  },
  {
    id: "e5",
    description: "A pair of leather",
    amount: 9.99,
    date: new Date("2025-05-23"),
  },
  {
    id: "e6",
    description: "A pair of books",
    amount: 80.1,
    date: new Date("2025-05-24"),
  },
  {
    id: "e7",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2025-05-25"),
  },
  {
    id: "e8",
    description: "A pair of trousers",
    amount: 89.99,
    date: new Date("2025-05-26"), 
  },
  {
    id: "e9",
    description: "A pair of socks",
    amount: 79.89,
    date: new Date("2025-05-27"), 
  },
  {
    id: "e10",
    description: "Some bananas",
    amount: 39.45,
    date: new Date("2025-05-28"), 
  },
  {
    id: "e11",
    description: "A pair of leather",
    amount: 9.99,
    date: new Date("2025-05-29"), 
  },
  {
    id: "e12",
    description: "A pair of books",
    amount: 80.1,
    date: new Date("2025-05-30"), 
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case 'UPDATE':
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case 'DELETE':
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({ type: 'ADD', payload: expenseData });
  }

  function deleteExpense(id) {
    dispatch({ type: 'DELETE', payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: 'UPDATE', payload: { id: id, data: expenseData } });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;