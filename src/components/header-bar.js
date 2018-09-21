import React from 'react';
import { connect } from 'react-redux';

import { clearAuth } from '../actions/auth.js';
import { clearAuthToken } from '../local-storage.js';
import { resetQuestionData } from '../actions/questions.js';

import '../styles/header-bar.css';

export class HeaderBar extends React.Component {
    logOut() {
        this.props.dispatch(resetQuestionData())
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {
        // Only render the log out button if we are logged in
        let logOutButton;
        if (this.props.loggedIn) {
            logOutButton = (
                <button onClick={() => this.logOut()}>Log out</button>
            );
        }
        return (
            <div className="header-bar">
                <h1>Welcome {this.props.firstName}!</h1>
                {logOutButton}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
    firstName: state.auth.currentUser !== null ? state.auth.currentUser.firstName : ""
});

export default connect(mapStateToProps)(HeaderBar);
