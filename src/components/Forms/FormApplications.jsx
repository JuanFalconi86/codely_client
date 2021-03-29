import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class FormApplications extends Component {
  state = {
    appName: "",
    appLogo:
      "https://res.cloudinary.com/djogypr9r/image/upload/v1616695400/app-default_s975ja.jpg",
    appDescription: "",
    technology: [], //une array vide, qui ensuite va contenir la liste des technologies
    technologySelected: [],
    appCategory: "Books",
  };

  componentDidMount() {
    axios
      .get("http://localhost:7000/api/technologies")
      .then((response) => {
        this.setState({ technology: response.data });
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }



  handleChange = (event) => {
    if (event.target.name === "technology") {
       let value = Array.from(
         event.target.selectedOptions,
         (option) => option.value
       );
       this.setState({ technologySelected: value }); 
      console.log(event.target)
    } else {
      this.setState({ [event.target.name]: event.target.value });
    }
  };

  formSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:7000/api/application/create", {
        appName: this.state.appName,
        appLogo: this.state.appLogo,
        appDescription: this.state.appDescription,
        technology: this.state.technologySelected,
        appCategory: this.state.appCategory,
      })
      .then((response) => {
        this.setState({
          appName: "",
          appLogo: "",
          appDescription: "",
          technology: [],
          technologySelected: [],
          appCategory: "Books",
        });
        this.props.history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    console.log(this.state.technologySelected);
    return (
      <div>
        <header>
          <h1>Create new Application</h1> <br />
        </header>

        <form onSubmit={this.formSubmit}>
          <label htmlFor="appName"> Name</label> <br />
          <input
            id="appName"
            type="text"
            name="appName"
            onChange={this.handleChange}
            value={this.state.appName}
          />
          <br />
          <label htmlFor="appLogo"> Logo</label> <br />
          <input
            id="appLogo"
            type="text"
            name="appLogo"
            onChange={this.handleChange}
            value={this.state.appLogo}
          />
          <br />
          <label htmlFor="appDescription">Description</label> <br />
          <input
            id="appDescription"
            type="text"
            name="appDescription"
            onChange={this.handleChange}
            value={this.state.appDescription}
          />
          <br />
          <label htmlFor="technology">Technology</label> <br />
          {/* <select name="technology" id="technology" onChange={this.handleChange} value={this.state.technology} multiple> */}
          <select
            name="technology"
            id="technology"
            onChange={this.handleChange}
            value={this.state.technologySelected}
            multiple="true"
          >
              {/* <option value="Javascript">Javascript</option>
              <option value="MongoDB">MongoDB</option> */}
            {this.state.technology.map((oneTechnology) => {
             return  (
                <option value={oneTechnology._id} key={oneTechnology._id}>
                  {oneTechnology.name}
                </option>
              );
            })}
          </select>
          ;
          <br />
          <label htmlFor="appCategory">App Category</label> <br />
          <select
            name="appCategory"
            id="appCategory"
            onChange={this.handleChange}
            value={this.state.appCategory}
            single="true"
          >
            <option value="Books"> Books</option>
            <option value="Medical"> Medical</option>
            <option value="Business"> Business</option>
            <option value="Music"> Music </option>
            <option value="Coding"> Coding</option>
            <option value="Learning"> Learning</option>
            <option value="News/Media"> News/Media</option>
            <option value="Social Media"> Social Media </option>
            <option value="Entertainment"> Entertainment</option>
            <option value="Photography/Video"> Photography/Video</option>
            <option value="Productivity"> Productivity</option>
            <option value="Food/Drinks"> Food/Drinks </option>
            <option value="Search"> Search</option>
            <option value="Gaming"> Gaming</option>
            <option value="Design/Graphics"> Design/Graphics</option>
            <option value="Shopping"> Shopping </option>
            <option value="Health/Fitness">Health/Fitness</option>
            <option value="Lifestyle">Lifestyle</option>
            <option value="Sport">Sport</option>
            <option value="Kids">Kids</option>
            <option value="Utilities">Utilities</option>
          </select>
          <br />
          {/* <label htmlFor="appCategory">App Category</label> <br/>
          <input type="text" name="appCategory" onChange={this.handleChange} value={this.state.appCategory}/> <br/> */}
          <br />
          <button>Create new App</button>
        </form>
      </div>
    );
  }
}

export default FormApplications;
