import React from "react";
import axios from "axios";

class Technologies extends React.Component {
  state = {
    technologies: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:7000/api/technologies")
      .then((response) => {
        this.setState({ technologies: response.data });
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div style={{display:"flex", flexWrap:"wrap"}}>
        {this.state.technologies.map((technology) => (
          <div style={{width:"60px", display:"flex", flexDirection:"column", alignItems:"center"}}>
            <img style={{height:"40px", width:"40px"}} src={technology.logo} alt="" />
            <p style={{fontSize:"0.7em"}}>{technology.name}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Technologies;
