import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { clearAuth } from '../actions/auth.js';
import { clearAuthToken } from '../local-storage.js';
import { resetQuestionData } from '../actions/questions.js';

import '../styles/nav-bar.css';

export class NavBar extends React.Component {
  logOut() {
    this.props.dispatch(resetQuestionData())
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render() {
    // Only render the log out button if we are logged in
    if (this.props.loggedIn) {
      return (
        <nav>
          <h1>Welcome {this.props.firstName}!</h1>
          <button onClick={() => this.logOut()}>Log out</button>
      </nav>
      );
    } else {
      return (
        <nav>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </nav>
      );
    }
  }
}

const mapStateToProps = (state, props) => {
  return {
    loggedIn: state.auth.currentUser !== null,
    firstName: state.auth.currentUser !== null ? state.auth.currentUser.firstName : ''
  };
};

export default connect(mapStateToProps)(NavBar);
