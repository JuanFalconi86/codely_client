import React, { Component } from "react";
import axios from "axios";
import "../../styles/formApplications.css";

class EditApplications extends Component {
  state = {
    appName: "",
    appLogo: "",
    appDescription: "",
    technology: [], //une array vide, qui ensuite va contenir la liste des technologies
    technologySelected: [],
    appCategory: "Books",
  };

  componentDidMount() {
    console.log(this.props);
    const id = this.props.match.params.id;

    axios
      .get(`http://localhost:7000/api/applications/${id}`)
      .then((response) => {
        const data = response.data;
        this.setState({
          appName: data.appName,
          appLogo: data.appLogo,
          appDescription: data.appDescription,
          technology: data.technology,
          technologySelected: data.technologySelected,
          appCategory: data.appCategory,
        });
        console.log(data);
      })
      .catch((error) => {
        console.log(error, "NOSE BLEEEEED");
      });
  }

  //   handleChange = (event) => {
  //     this.setState({ [event.target.name]: event.target.value });
  //   };
  //FONCTION POUR HANDLE CHANGE LES INPUTS DU FORMULAIRE
  handleChange = (event) => {
    if (event.target.name === "technology") {
      let value = Array.from(
        event.target.selectedOptions,
        (option) => option.value
      );
      this.setState({ technologySelected: value });
      console.log(event.target);
    } else {
      this.setState({ [event.target.name]: event.target.value });
    }
  };

  //FONCTION POUR UPDATE LE STATE DU LOGO AVEC UN FICHIER IMAGE CHOISI DU LOCAL:
  handleLogoUpload = (event) => {
    console.log(event.target.files[0]);
    this.setState({
      appLogo: event.target.files[0],
    });
  };


  // FONCTION POUR SUBMIT LE FORMULAIRE AVEC LES UPDATES
  editSubmit = (event) => {
    event.preventDefault();
    const id = this.props.match.params.id;
    axios
      .patch(`http://localhost:7000/api/applications/${id}`, {
        appName: this.state.appName,
        appLogo: this.state.appLogo,
        appDescription: this.state.appDescription,
        technology: this.state.technologySelected,
        appCategory: this.state.appCategory,
      })
      .then((response) => {
        this.props.history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="app-form-container">
        <header>
          <h1>Edit this Application</h1> <br />
        </header>

        <form onSubmit={this.editSubmit} className="app-form">
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
            // value={this.state.technologySelected}
            multiple={true}
          >
            {this.state.technology.map((oneTechnology) => {
              return (
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
            onChange={this.handleLogoUpload}
            // value={this.state.appCategory}
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

export default EditApplications;
