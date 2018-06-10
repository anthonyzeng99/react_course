import React from 'react';
import moment from 'moment';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';
import { filters } from '../fixtures/filters';

test('should render ExpensesSummary correctly with one expense', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={100} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary correctly with multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={25} expenseTotal={187523423} />);
  expect(wrapper).toMatchSnapshot();
});
