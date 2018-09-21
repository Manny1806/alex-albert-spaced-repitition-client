import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import RegistrationForm from './registration-form.js';

export function RegistrationPage(props) {
  // If we are logged in (which happens automatically when registration
  // is successful) redirect to the user's dashboard
  if (props.loggedIn) return <Redirect to="/dashboard" />;

  return (
    <main className="home" role="main">
      <h2>Begin your training as a <span id="eye-catcher">Pokémon</span> master today!</h2>
      <RegistrationForm />
    </main>
  );
}

const mapStateToProps = (state, props) => {
  return {
    loggedIn: state.auth.currentUser !== null
  };
};

export default connect(mapStateToProps)(RegistrationPage);
