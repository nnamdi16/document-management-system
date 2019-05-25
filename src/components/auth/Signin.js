import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';
import 'components/auth/auth.css';
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
    <div className="row">
      <div className=" offset-l3 offset-m3 col m6 s12 l6  card z-depth-3 ">
        <div className="card-content">
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
            <button className="btn waves-effect waves-light signIn-btn" type="submit" name="action">
									Login
              <i className="material-icons right">send</i>
            </button>
          </form>
        </div>
      </div>
    </div>
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
