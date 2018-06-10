import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectVisibleExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({expenseCount, expensesTotal}) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
  const formattedTotal = numeral(expensesTotal / 100).format('$0,0.00')

  return (
    <div>
      <h3>Viewing {expenseCount} {expenseWord} totaling {formattedTotal}</h3>
    </div>
  );
}

const mapStateToProps = (state) => {
  const visibleExpenses = selectVisibleExpenses(state.expenses, state.filters);
  const expensesTotal = selectExpensesTotal(state.expenses);

  return {
    expenseCount: visibleExpenses.length,
    expensesTotal
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
