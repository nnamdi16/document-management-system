import React, { Component } from 'react';
import requireAuth from 'components/requireAuth';

class DashBoard extends Component {
	render() {
		return (
    <div>
        <h1>Welcome to your DMS dashboard</h1>
    </div>
		);
	}
}

export default requireAuth(DashBoard);
