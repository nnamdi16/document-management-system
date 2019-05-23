import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';
import * as actions from 'actions/index';

class SignIn extends Component {
	onSubmit = formProps => {
		this.props.signIn(formProps, () => {
			this.props.history.push('/dashboard');
		});
	};

	render() {
		const { handleSubmit } = this.props;
		return (
  <div className="container">
    <form className=" signIn col s12" onSubmit={ handleSubmit(this.onSubmit) }>
      <div className="row">
        <label>Username</label>
        <Field name="username" type="text" component="input" autoComplete="none" />
      </div>
      <div className="row">
        <label>Password</label>
        <Field name="password" type="password" component="input" autoComplete="none" />
      </div>
      <div className="errorMessage">{this.props.errorMessage}</div>
      <button className="btn waves-effect waves-light" type="submit" name="action">
						Login
        <i className="material-icons right">send</i>
      </button>
    </form>
  </div>
		);
	}
}

const mapStateToProps = state => {
	return {
		errorMessage: state.auth.errorMessage
	};
};

export default compose(connect(mapStateToProps, actions), reduxForm({ form: 'signIn' }))(SignIn);
