import React, { Component } from "react";
import axios from "axios";
import Applications from "../components/Applications/Applications";
import Technologies from "../components/Technologies/Technologies";
import ApplicationDetails from "../components/Applications/ApplicationDetails";
import Search from "../components/Search";
import { Route } from "react-router-dom";

export class Main extends Component {
  state = {
    applications: [],
    searchValue: "",
    application: null,
    _id: "",
  };

  // handleSearch = (event) => {
  //      this.setState({ searchValue: event.target.value });
  //    };

  // componentDidMount() {
  //   axios
  //     .get("http://localhost:7000/api/applications")
  //     .then((response) => {
  //       this.setState({ applications: response.data });
  //       console.log(response)
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });

  //   // DEFINIR COMMENT DISPLAY COMPANIES AND NOT THE OBJECT ID
  //   // J'ai essayé de AppsModel.find().populate("proprietaryCompany") but it gives an error
  // }

  // handleSelectedApplication = (application) => {
  //     // handle selected application state :)
  //     console.log("consolelog de application", application)
  //     const selectedApplication = [...this.state.application]
  //     this.setState({selectedApplication})
  // }

  // componentDidMount() {
  //   const id = this.state.match.params.id;
  //   console.log("HERE IS THE ID", id)

  //   axios
  //     .get(`http://localhost:7000/api/applications/${id}`)
  //     .then((response) => {
  //       this.setState({ application: response.data });
  //       console.log("HERE IS THE RESPONSE", response)

  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });

  //   // DEFINIR COMMENT DISPLAY COMPANIES AND NOT THE OBJECT ID
  //   // J'ai essayé de AppsModel.find().populate("proprietaryCompany") but it gives an error

  // }

  render() {
    console.log("Show me the props", this.props);
    console.log("this state app", this.state.application);
    return (
      <div
        style={{
          border: "1px solid #C4C4C4",
          borderTop: "none",
          borderBottom: "none",
        }}
      >
        <div style={{ borderBottom: "1px solid #C4C4C4", padding: "12px" }}>
          <p>Select a Technology</p>

          <Technologies />
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ borderRight: "1px solid #C4C4C4" }}>
            {/* <Search
          handleSearch={this.handleSearch}
          searchValue={this.state.searchValue}
        /> */}
            {/* <Applications applications={this.state.applications}/> */}
            <Applications />
          </div>
          <div
            style={{
              borderTop: "1px solid #C4C4C4",
              borderTop: "none",
              padding: "12px",
              width: "80%",
            }}
          >
            <Route
              exact
              path="/applications/:id"
              component={ApplicationDetails}
            />
            {/* <ApplicationDetails application={this.state.application}/> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Main;