import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import backgroundSVG from 'img/bg-picture.svg';
import eclipseSVG from 'img/bg-eclipse.svg';
import ellipse from 'img/ellipse.svg';
import 'components/App.css';

class LandingPage extends Component {
	render() {
		return (
  <div>
    <div className="landing row">
      <div className="col s12 layout">
        <div className="col s12 m6 l6">
          <BackgroundEllipse src={ ellipse } alt="Background Ellipse" />
        </div>
        <div className="col s12 m6 l6 ">
          <Button variant="outlined" color="primary">
								Primary
          </Button>
          <button className="btn waves-effect waves-light #3f51b5 indigo right" type="submit" name="action">
								Get Started for Free
          </button>

          {/* <button
								className="btn waves-effect waves-light #3f51b5 indigo right indigo-text "
								type="submit"
								name="action"
							>
								Login in
                    </button> */}
        </div>
      </div>

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
