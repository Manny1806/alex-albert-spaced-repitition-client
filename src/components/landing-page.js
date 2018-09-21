import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import LoginForm from './login-form.js';

export function LandingPage(props) {
  // If we are logged in redirect straight to the user's dashboard
  if (props.loggedIn) return (<Redirect to="/dashboard" />);

  return (
    <main className="home" role="main">
      <h2>Test your knowledge of <span id="eye-catcher">Pokémon</span> names!</h2>
      <LoginForm />
    </main>
  );
}

const mapStateToProps = (state, props) => {
  return {
    loggedIn: state.auth.currentUser !== null
  };
};

export default connect(mapStateToProps)(LandingPage);
