import React from 'react';
import {Link} from 'react-router-dom';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import {login} from '../actions/auth';
import {required, nonEmpty} from '../validators';
import '../styles/login-form.css';

export class LoginForm extends React.Component {
  onSubmit(values) {
    return this.props.dispatch(login(values.username, values.password));
  }

  render() {
    let error;
    if (this.props.error) {
      error = (
        <div className="form-error" aria-live="polite">
          {this.props.error}
        </div>
      );
    }
    return (
      <section className="form-container" aria-live="polite">
        <form className="form-input" onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
          {error}
          <label htmlFor="username">Username:</label>
          <Field
            component={Input}
            element="input"
            type="text"
            name="username"
            id="username"
            validate={[required, nonEmpty]}
          />
          <label htmlFor="password">Password:</label>
          <Field
            component={Input}
            element="input"
            type="password"
            name="password"
            id="password"
            validate={[required, nonEmpty]}
          />
          <button disabled={this.props.pristine || this.props.submitting}>
            Log in
          </button>
        </form>
      <p>
        Click here to <Link to="/register">Register</Link>
        <br />
        <br />
        ...or use this test account,
        <br />
        username: coolguy
        <br />
        password: password123
      </p>
      </section>
    );
  }
}

export default reduxForm({
  form: 'login',
  onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);
