import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, {type: '@@INIT'});
  expect(state).toEqual([]);
});

test('should remove expense', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([ expenses[0], expenses[2] ]);
});

test('should not remove expenses if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: -1
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([ expenses[0], expenses[1], expenses[2] ]);
});


test('should add new expense', () => {
  const expense = {
    description: 'rent',
    amount: 109500
  };
  const action = {
    type: "ADD_EXPENSE",
    expense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test('should edit expenses', () => {
  const updates = {
    amount: 20000,
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[2].id,
    updates
  };
  const state = expensesReducer(expenses, action);
  expect(state[2].amount).toBe(20000);
});

test('should not edit expenses if id not found', () => {
  const updates = {
    description: 'should not update'
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: -1,
    updates
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
