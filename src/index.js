/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import Root from './Root';
// import * as serviceWorker from './serviceWorker';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import './index.css';
import App from 'components/App';
import LandingPage from 'components/landingPage/LandingPage';
import DashBoard from 'components/DashBoard';
import SignUp from 'components/auth/SignUp';
import SignIn from 'components/auth/Signin';

ReactDOM.render(
  <Root>
    <BrowserRouter>
      <App>
        <div>
          <Route exact path="/" component={ withRouter(LandingPage) } />
          <Route exact path="/signup" component={ withRouter(SignUp) } />
          <Route exact path="/dashboard" component={ withRouter(DashBoard) } />
          <Route exact path="/signin" component={ withRouter(SignIn) } />
        </div>
      </App>
    </BrowserRouter>
  </Root>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.register();
