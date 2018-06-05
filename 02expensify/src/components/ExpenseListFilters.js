import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount } from '../actions/filters';

const ExpenseListFilters = ({ filters, dispatch }) => (
  <div>
    <input
      type="text"
      defaultValue={filters.text}
      onChange={(e) => {
        props.dispatch(setTextFilter(e.target.value));
        console.log(e.target.value);
      }}
    />

    <select
      defaultValue={filters.sortBy}
      onChange={(e) => {
        if (e.target.value === 'date') {
          dispatch(sortByDate());
        } else if (e.target.value === 'amount') {
          dispatch(sortByAmount());
        }
      }}
    >
      <option value="date">Date</option>
      <option value="amount">Amount</option>
    </select>
  </div>
);

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
};

export default connect(mapStateToProps)(ExpenseListFilters);