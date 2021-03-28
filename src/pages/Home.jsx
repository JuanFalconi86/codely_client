import React from 'react';
import mainimg from './images/mainblue.png'

import './../styles/home.css';
class Home extends React.Component {
	render() {
		return (
			<div>
        {/* Section will contain the whole Home Page body content */}
				<section className="main">

					<div className="main-content">
        {/* This block has the main text and images */}
        <div className="main-text">
        <h1>Unveil your potential</h1>
        <p>Codely makes it easy for you to find the right job at the right tech company</p>
        <a href="/login" className="main-login">Discover</a>
        </div>
        <div className="main-img">
          <img src={mainimg}/>
       
        </div>
          </div>

          <div className="details">
              <div className="match">
                <h3>What's Codely</h3> <br/>
                <p><font>Codely is a platfrom that helps potential Tech savvies learn more about to notch tech companies</font></p>
              </div>
              <div className="use">
                <h3>Why Codely?</h3> <br/>
                <p><font>It's easy to use with up-to-date on market data and technology use.</font></p>
              </div>
          </div>
      {/* This part is dedicated to the ScrolL Indicator on the right corner */}
      <div className="arrow">
        <span className="scroll"></span>

      </div>
				</section>

 

        {/* This section will contain more information about the problems that Codely solves */}
       
			<div>
      <section className="solutions">
          <div class="solutions-heading">
            <h2>How Codely help you as a tech job seeker?</h2>
          </div>
        </section>
      </div>
    
			</div>
		);
	}
}

export default Home;
