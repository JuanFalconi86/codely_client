import React from "react";
import axios from "axios";

class Technologies extends React.Component {
  state = {
    selectedTechnos:[],
    technologies: [],
    isClicked: false,
    technologyId: "",
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

  addTechno = (id) => 
    this.state.selectedTechnos.includes(id)
      ? this.state.selectedTechnos.filter((tech) => tech !== id)
      : [ ...this.state.selectedTechnos, id]
  

  HandleSelectTechnology = (id) => {
    const technos = this.addTechno(id)
    this.setState({selectedTechnos: technos})
    // console.log(technologyId)
    this.props.fetch(technos);
  };

  render() {

    return (
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {this.state.technologies.map((technology) => (
          <button
            key={technology._id}
            onClick={() => this.HandleSelectTechnology(technology._id)}
            style={{
              width: "60px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "2px 4px",
              backgroundColor: "white",
              border: this.state.selectedTechnos.includes(technology._id) ? "2px solid green" : "1px solid #C4C4C4", 
              outline: "none"
              
            }}
          >
            <img
              style={{ height: "40px", width: "40px" }}
              src={technology.logo}
              alt=""
            />
            <p style={{ fontSize: "0.7em" }}>{technology.name}</p>
          </button>
        ))}
        {/* <button onClick={this.props.greet}>Greet</button>
        <button onClick={this.props.fetch(this.HandleSelectTechnology)}>Fetch</button> */}
      </div>
    );
  }
}

export default Technologies;

{
  /* <button key={technology._id} onClick={(e,  HandleSelectTechnology) => this.props.fetch( (id) => HandleSelectTechnology(technology._id), e)} style={{width:"60px", display:"flex", flexDirection:"column", alignItems:"center", margin:"2px 4px"}}>
<img style={{height:"40px", width:"40px"}} src={technology.logo} alt="" />
<p style={{fontSize:"0.7em"}}>{technology.name}</p>
</button> */
}
