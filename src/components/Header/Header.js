import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
class Header extends Component {
	renderLinks() {
		if (!this.props.authenticated) {
			return (
    <div>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
                <BrowserRouter>
                    <Link to="/signout">Sign Out</Link>
                </BrowserRouter>
            </li>
            <li>
                <BrowserRouter>
                    <Link to="/dashboard">DashBoard</Link>
                </BrowserRouter>
            </li>
        </ul>
    </div>
			);
		} else {
			return (
    <div>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
                <BrowserRouter>
                    <Link to="/signup">Sign Up</Link>
                </BrowserRouter>
            </li>
            <li>
                <BrowserRouter>
                    <Link to="/signin">Sign In</Link>
                </BrowserRouter>
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
                <BrowserRouter>
                    <Link to="/" className="brand-logo">
								DMS
                    </Link>
                </BrowserRouter>
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
