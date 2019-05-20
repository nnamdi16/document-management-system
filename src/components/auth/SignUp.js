/* eslint-disable no-undef */
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';
import * as actions from 'actions/index';
class SignUp extends Component {
	onSubmit = formProps => {
		this.props.signUp(formProps, () => {
			this.props.history.push('/dashboard');
		});
		// console.log(formProps);
	};

	render() {
		const { handleSubmit } = this.props;
		console.log(this.props);
		return (
    <div className="container">
        <form className="signUp col s12" onSubmit={ handleSubmit(this.onSubmit) }>
            <div className="row">
                <label>Firstname</label>
                <Field name="name.firstName" type="text" component="input" autoComplete="none" />
            </div>
            <div className="row">
                <label>LastName</label>
                <Field name="name.lastName" type="text" component="input" autoComplete="none" />
            </div>
            <div className="row">
                <label>Username</label>
                <Field name="username" type="text" component="input" autoComplete="none" />
            </div>
            <div className="row">
                <label>Email</label>
                <Field name="email" type="text" component="input" autoComplete="none" />
            </div>
            <div className="row">
                <label>Password</label>
                <Field name="password" type="password" component="input" autoComplete="none" />
            </div>
            <div className="row">
                <label>Role</label>
                <Field name="role" type="text" component="input" autoComplete="none" />
            </div>
            <div className="errorMessage">{this.props.errorMessage}</div>
            <button className=" btn waves-effect waves-light" type="submit" name="action">
						Sign Up
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
export default compose(connect(mapStateToProps, actions), reduxForm({ form: 'signUp' }))(SignUp);

//Compose helps us to combine higher order components.

/**
 * CORS means Cross Origin Resource Sharing : It is a security feature implemented inside your browser
 */
