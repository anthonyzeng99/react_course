import { createStore, combineReducers } from 'redux';

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
