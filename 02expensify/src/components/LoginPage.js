import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Expensify</h1>
      <p>It is time to get your expenses under control</p>
      <button className="button" onClick={startLogin}>Login</button>
    </div>
  </div>
)

const mapDispatchToProp = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProp)(LoginPage);
