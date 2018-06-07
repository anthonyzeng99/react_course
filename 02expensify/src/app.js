import React from 'react';
import ReactDOM from 'react-dom';
import { Provider }  from 'react-redux';
import AppRouter from './routers/AppRouter'
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import "react-dates/lib/css/_datepicker.css"

import configureStore from './store/configureStore';
import { addExpense, editExpense, removeExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();

store.dispatch(addExpense({description: 'water bill', amount: 30000, createdAt:400000000}));
store.dispatch(addExpense({description: 'gas bill', amount: 10000, createdAt:2000}));
store.dispatch(addExpense({description: 'electric bill', amount: 20000, createdAt:3000}));
store.dispatch(addExpense({description: 'rent', amount: 195000, createdAt:1000}));


const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));
