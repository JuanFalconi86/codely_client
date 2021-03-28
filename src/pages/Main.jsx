import React, { Component } from "react";
import Applications from "../components/Applications/Applications";
import Technologies from "../components/Technologies/Technologies";
import ApplicationDetails from "../components/Applications/ApplicationDetails"

export class Main extends Component {
  render() {
    return (
      
      <div
        style={{
          border: "1px solid #C4C4C4",
          borderTop: "none",
          borderBottom: "none",
        }}
      >
        <div style={{borderBottom:"1px solid #C4C4C4"}}>
          <p >Select a Technology</p>

          <Technologies />
        </div>
        <div style={{ display: "flex"}}>
          <div style={{borderRight: "1px solid #C4C4C4"}}>
            <Applications />
          </div>
          {/* <div style={{borderTop:"1px solid #C4C4C4",  borderTop: "none",  padding:"12px", width:"80%"}}>
            blabla
            <ApplicationDetails/> 
          </div> */}
        </div>
      </div>
    
    );
  }
}

export default Main;
