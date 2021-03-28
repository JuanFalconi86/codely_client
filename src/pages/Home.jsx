import React from 'react';
import mainimg from './images/mainblue.png'

import './../styles/home.css';
class Home extends React.Component {
	render() {
		return (
			<div>
        
				<section className="main">
					<div className="main-content">

        <div className="main-text">
        <h1>Unveil your potential</h1>
        <p>Codely makes it easy for you to find the right job at the right tech company</p>
        <a href="/login" className="main-login">Discover</a>
        </div>
        <div className="main-img">
          <img src={mainimg}/>
       
        </div>

          </div>
				</section>
				<p />
			</div>
		);
	}
}

export default Home;
