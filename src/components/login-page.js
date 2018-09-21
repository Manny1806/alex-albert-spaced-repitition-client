import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import LoginForm from './login-form.js';

export function LoginPage(props) {
  // If we are logged in redirect straight to the user's dashboard
  if (props.loggedIn) return (<Redirect to="/dashboard" />);
  return (
    <main className="home" role="main">
      <LoginForm />
    </main>
  );
}

const mapStateToProps = (state, props) => {
  return {
    loggedIn: state.auth.currentUser !== null
  };
};

export default connect(mapStateToProps)(LoginPage);
