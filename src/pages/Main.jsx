import React, { Component } from "react";

import Applications from "../components/Applications/Applications";
import Technologies from "../components/Technologies/Technologies";
import ApplicationDetails from "../components/Applications/ApplicationDetails";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";

export class Main extends Component {
  state = {
    applications: [],
    searchValue: "",
    application: null,
    _id: "",
    ids:"",
    arrayId:[]
  };


// onGreet() {
//   alert("hello");
// }

fetchData = (data) => {
//  console.log("Carbo", data)
// console.log("ARRAYID",this.state)

this.setState({arrayId:data})

// this.state.arrayId.forEach((element, index, object) => {
//   if (data === element){
//     this.setState({arrayId: [...this.state.arrayId.splice(this.state.arrayId.indexOf(element), 1)]}
//     )
//     console.log("index of removed element", this.state.arrayId.indexOf(element))
//     }
// });

// this.setState({arrayId: [data]})

}

addId = (HandleSelectTechnology) => {
// console.log(HandleSelectTechnology)

// this.setState({ ids: [HandleSelectTechnology, ...this.state.ids] });
  // const idArray=[];
  //   idArray.push(e)
  //   console.log(idArray)
  }

  

  render() {
    console.log("Show me the props", this.props);
    console.log("this state app", this.state.application);

    console.log("ARRAYID", this.state.arrayId)
    return (
      <div
        style={{
          borderRight: "1px solid #C4C4C4",
          borderTop: "none",
          borderBottom: "none",
        }}
      >
        <div style={{ display: "flex", flexDirection:"column" }}>
        <div style={{ borderBottom: "1px solid #C4C4C4", padding: "12px" }}>
          <p>Select Technologies:</p>

          <Technologies fetch={this.fetchData} greet={this.onGreet} />
        </div>
        
          <div>
         
            <Applications  arrayIds={this.state.arrayId}/>
          </div>
          {/* <div
            style={{
              borderTop: "1px solid #C4C4C4",
              borderTop: "none",
              padding: "12px",
              width: "80%",
            }} */}
            {/* <Route
              exact
              path="/applications/:id"
              component={ApplicationDetails}
            /> */}
            {/* <Link
              exact
              to="/applications/:id"
            /> */}

            {/* <ApplicationDetails application={this.state.application}/> */}
          {/* </div> */}
        </div>
      </div>
    );
  }
}

export default Main;