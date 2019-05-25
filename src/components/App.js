/* eslint-disable no-undef */
import React from 'react';
import 'components/App.css';
import Header from 'components/Header/Header';
// import LandingPage from 'components/landingPage/LandingPage';

function App({ children }) {
	console.log(children);
	return (
  <div>
    <Header />
    <br />
    {children}
    {/* <LandingPage /> */}
  </div>
	);
}

export default App;
