import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const addExpense = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    _id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

const removeExpense = ({_id}) => ({
  type: 'REMOVE_EXPENSE',
  _id
});

// Expenses reducer
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState , action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];
    case 'REMOVE_EXPENSE':
      return state.filter(( {_id} ) => _id != action._id);
    default:
      return state;
  }
};

// Filters reducers
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch(action.type) {
    default:
      return state;
  }
}

// Store creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  console.log(store.getState());
});

const expense0 = store.dispatch((addExpense({description:'rent', amount: 100})));
const expense1 = store.dispatch((addExpense({description:'coffee', amount: 300})));
store.dispatch(removeExpense({_id: expense0.expense._id}))

const demoState = {
  expenses: [{
    id: 'abc',
    description: 'January Rent',
    note: 'This was the final payment for that address',
    amount:  54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', //Date or amount
    startDate: undefined,
    endDate: undefined
  }
};
