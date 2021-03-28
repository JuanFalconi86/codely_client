import React from "react";
import axios from "axios";

class ApplicationDetails extends React.Component {
    state = {
      application: null,
    };
  
    componentDidMount() {
      const id = this.props.match.params.id;
      console.log("HERE IS THE ID", id)

      axios
        .get(`http://localhost:7000/api/applications/${id}`)
        .then((response) => {
          this.setState({ application: response.data });
          console.log("HERE IS THE RESPONSE", response)
          
        })
        .catch((error) => {
          console.log(error);
        });
  
      // DEFINIR COMMENT DISPLAY COMPANIES AND NOT THE OBJECT ID
      // J'ai essayé de AppsModel.find().populate("proprietaryCompany") but it gives an error
  
    }

    // componentDidUpdate(prevProps) {
    //   // Typical usage (don't forget to compare props):
    //   if (this.props.id !== prevProps.id) {
    //     this.fetchData(this.props.id);
    //   }
    // }
  
    render() {
      if (this.state.application === null) {
        return <div>Loading the application details...</div>;
      }

      return (
        <div style={{ padding: "12px 12px 0 12px"}}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                paddingBottom:"12px"
              }}
            >
              <div>
                <img
                  style={{ height: "112px", width: "112px", borderRadius: "5px" }}
                  src={this.state.application.appLogo}
                  alt=""
                />
              </div>
              <div style={{paddingLeft:"12px"}}>
                <h2 style={{fontSize:"40px", margin:"0", padding:"0"}}>{this.state.application.appName}</h2>
                <p style={{fontSize:"20px", paddingTop: 0}}>{this.state.application.appCategory}</p>
                <p style={{fontSize:"15px"}}>{this.state.application.proprietaryCompany}</p>
              </div>
            </div>
            <p>{this.state.application.appDescription}</p>
          </div>
      );
    }
  }
  
  export default ApplicationDetails;
  
