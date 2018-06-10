import getTotalExpenses from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no response', () => {
  const response = getTotalExpenses([]);
  expect(response).toBe(0);
});

test('should correctly add up a single expense', () => {
  const response = getTotalExpenses([expenses[0]]);
  expect(response).toBe(195);
});

test('should correctly add up multiple expenses', () => {
  const response = getTotalExpenses(expenses);
  expect(response).toBe(114195)
});
