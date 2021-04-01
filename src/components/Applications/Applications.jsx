import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Search from "../Search";
import ApplicationDetails from "./ApplicationDetails";

// not used yet
import "../../styles/applications.css";

class Applications extends React.Component {
  state = {
    applications: [],
    searchValue: "",
    company: null,
  };

  handleSearch = (_, value) => {
    this.setState({ searchValue: value });
  };

  componentDidMount() {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/applications`)
      .then((response) => {
        this.setState({ applications: response.data });
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    // DEFINIR COMMENT DISPLAY COMPANIES AND NOT THE OBJECT ID
    // J'ai essayé de AppsModel.find().populate("proprietaryCompany") but it gives an error
  }

  render() {
    console.log("arrayofids", this.props.arrayIds);

    // console.log("appshere",this.state.applications.map( (application) => (
    //   application.technology.filter((technology)=> technology.includes(this.props.arrayIds)
    //   )
    // )))
    const filteredApplications = this.state.applications.filter((app) =>
      this.props.arrayIds.every((id) => app.technology.includes(id))
    );



    console.log("filtered Apps", filteredApplications);
    return (
      <div style={{ paddingTop: "12px" }}>
        <Search
          handleSearch={this.handleSearch}
          searchValue={this.state.searchValue}
        />

        {filteredApplications

          .filter((application) =>
            application.appName
              .toLowerCase()
              .includes(this.state.searchValue.toLowerCase())
          )
          .map((application) => (
            <Link
              style={{ textDecoration: "none", color: "black" }}
              key={application._id}
              to={`/applications/${application._id}`}
            >
              <div style={{ padding: "12px 12px 0 12px" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    borderBottom: "1px solid #C4C4C4",
                    paddingBottom: "12px",
                  }}
                >
                  <div>
                    <img
                      style={{
                        height: "80px",
                        width: "80px",
                        borderRadius: "5px",
                      }}
                      src={application.appLogo}
                      alt=""
                    />
                  </div>
                  <div style={{ paddingLeft: "12px" }}>
                    <h2>{application.appName}</h2>
                    <p>{application.appCategory}</p>
                    <p style={{ fontSize: "11px" }}>
                      {application.proprietaryCompany &&
                        application.proprietaryCompany.companyName}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
    );
  }
}

export default Applications;
