import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
class Header extends Component {
	renderLinks() {
		if (!this.props.authenticated) {
			return (
  <div>
    <ul id="nav-mobile" className="right hide-on-med-and-down">
      <li>
        <Link to={ '/signout' }>Sign Out</Link>
      </li>
      <li>
        <Link to={ '/dashboard' }>DashBoard</Link>
      </li>
    </ul>
  </div>
			);
		} else {
			return (
  <div>
    <ul id="nav-mobile" className="right hide-on-med-and-down">
      <li>
        <Link to={ '/signup' }>Sign Up</Link>
      </li>
      <li>
        <Link to={ '/signin' }>Sign In</Link>
      </li>
    </ul>
  </div>
			);
		}
	}
	render() {
		return (
  <div>
    <Nav>
      <div className="nav-wrapper">
        <Link to={ { pathname: '/' } } className="brand-logo">
							DMS
        </Link>

        {this.renderLinks()}
      </div>
    </Nav>
  </div>
		);
	}
}

const mapStateToProps = state => {
	return {
		authenticated: state.auth.authenticated
	};
};
export default connect(mapStateToProps)(Header);

const Nav = styled.nav`background-color: #3f51b5;`;
