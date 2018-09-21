import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import { Link } from 'react-router-dom';

import Input from './input.js';
import { required, nonEmpty, matches, length, isTrimmed } from '../validators.js';
import { registerUser } from '../actions/users.js';
import { login } from '../actions/auth.js';

const passwordLength = length({min: 10, max: 72});
const matchesPassword = matches('password');

export class RegistrationForm extends React.Component {
  onSubmit(values) {
    const { username, password, firstName, lastName } = values;
    const user = { username, password, firstName, lastName };

    return this.props
      .dispatch(registerUser(user))
      .then(() => this.props.dispatch(login(username, password)));
  }

  render() {
    return (
      <section className="form-container" role="region" aria-live="polite">
      <form className="form-input" onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
        <label htmlFor="firstName">First name:</label>
        <Field
          component={Input}
          element="input"
          type="text"
          name="firstName"
          validate={[required, nonEmpty, isTrimmed]}
        />
        <label htmlFor="lastName">Last name:</label>
        <Field
          component={Input}
          element="input"
          type="text"
          name="lastName"
          validate={[required, nonEmpty, isTrimmed]}
        />
        <label htmlFor="username">Username:</label>
        <Field
          component={Input}
          element="input"
          type="text"
          name="username"
          validate={[required, nonEmpty, isTrimmed]}
        />
        <label htmlFor="password">Password:</label>
        <Field
          component={Input}
          element="input"
          type="password"
          name="password"
          validate={[required, passwordLength, isTrimmed]}
        />
        <label htmlFor="passwordConfirm">Confirm password:</label>
        <Field
          component={Input}
          element="input"
          type="password"
          name="passwordConfirm"
          validate={[required, nonEmpty, matchesPassword]}
        />
        <button
          type="submit"
          disabled={this.props.pristine || this.props.submitting}>
          Register
        </button>
      </form>
      <p>Click here to <Link to="/">Login</Link></p>
      </section>
    );
  }
}

export default reduxForm({
  form: 'registration',
  onSubmitFail: (errors, dispatch) => dispatch(focus('registration', Object.keys(errors)[0]))
})(RegistrationForm);
