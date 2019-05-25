import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import backgroundSVG from 'img/bg-picture.svg';
import eclipseSVG from 'img/bg-eclipse.svg';
import ellipse from 'img/ellipse.svg';
import 'components/App.css';
import { Link } from 'react-router-dom';

class LandingPage extends Component {
	render() {
		return (
  <div>
    <div className="landing row">
      <div className="col s12 layout">
        <div className="col s12 m6 l6">
          <BackgroundEllipse src={ ellipse } alt="Background Ellipse" />
        </div>
        <Access className="row">
          <Link to={ '/signup' }>
            <button className="btn waves-effect waves-light #3f51b5 indigo right" type="submit" name="action">
									Get Started for Free
            </button>
          </Link>
        </Access>
      </div>
      <Caption className="row">
        <div className="col l6 m6 s12">
          <h4>Easily manage digital content, simplify your workload and yield high efficiency</h4>
        </div>
      </Caption>

      <div className="col s12 m6 l6">
        <BackgroundEclipse src={ eclipseSVG } alt="Background Eclipse" />
      </div>
      <div className="col s12 m6 l6">
        <BackgroundImage src={ backgroundSVG } alt="Landing page" />
      </div>
    </div>
  </div>
		);
	}
}

export default LandingPage;

const BackgroundImage = styled.img`
	width: 100%;
	height: 100%;
	position: relative;
	left: 1rem;
	bottom: -10rem;
`;

const BackgroundEclipse = styled(BackgroundImage)`
	width: 40%;
	height: 40%;
	left: -5rem;
`;

const BackgroundEllipse = styled.img`
	width: 10%;
	height: 10%;
	left: -3rem;
	top: -1rem;
	position: relative;
`;
const Caption = styled.div`
	color: #3f51b5;
	text-transform: uppercase;
	position: absolute;
	top: 22rem;
	left: 12rem;
`;

const Access = styled.div`
	position: absolute;
	top: 32rem;
	left: 14rem;
`;
