import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import '../../styles/formApplications.css'
import {buildFormData} from "../../utile.js"

class FormApplications extends Component {
  state = {
    appName: "",
    appLogo: "",
    appDescription: "",
    technology: [], //une array vide, qui ensuite va contenir la liste des technologies
    technologySelected: [],
    appCategory: "Books",
  };

    // ICI, JE FAIS UN CALL AXIOS POUR RÉCUPÉRER LA LISTE DES TECHNOLOGIES
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


  // FONCTION POUR HANDLE CHANGE LES INPUTS DU FORMULAIRE
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

  //FONCTION POUR HANDLE LE STATE DU LOGO AVEC UN FICHIER IMAGE CHOISI DU LOCAL:
  handleLogoUpload = (event) =>{
      console.log(event.target.files[0]);
      this.setState({
          appLogo: event.target.files[0]
      })
  }

  // FONCTION POUR SUBMIT LE FORMULAIRE
  formSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();

    // NORMALEMENT, QUAND ON UPLOAD UNE IMAGE, ON UTILISE UNE FORM DATA ET APPEND
    // formData.append("appName", this.state.appName);
    // formData.append("appLogo", this.state.appLogo);
    // formData.append("appDescription", this.state.appDescription);
    // formData.append("technology", this.state.technologySelected);
    // formData.append("appCategory", this.state.appCategory);
    // console.log(formData);

    // MAIS DANS CE CAS, COMME J'AI UNE ARRAY DE TECHNOLOGIES, JE DOIS UTILISER CETTE FONCTION BUILD FORM DATA, QUI ELLE MEME EST IMPORTEE DE MON FICHIER UTILE
    buildFormData(formData, this.state)

    axios
      .post("http://localhost:7000/api/application/create", formData)
      .then((response) => {
        this.setState({
          appName: "",
          appLogo: "",
          appDescription: "",
          technology: [],
          technologySelected: [],
          appCategory: "Books",
        });
        this.props.history.push("/main");
        console.log("NEW APPLICATION CREATED");
        console.log(formData)
      })
      .catch((error) => {
        console.log(error, "ERROR, NOSE BLEED");
      });
  };

  render() {
    return (
      <div className="app-form-container">
        <header>
          <h1>Create new Application</h1> <br />
        </header>

        <form onSubmit={this.formSubmit} className="app-form">
          <label htmlFor="appName"> Name (required) </label> <br />
          <input
            id="appName"
            type="text"
            name="appName"
            onChange={this.handleChange}
            value={this.state.appName}
          />
          <br />
          <label htmlFor="appLogo"> Logo (required)</label> <br />
          <input
            id="appLogo"
            type="file"
            name="appLogo"
            onChange={this.handleLogoUpload}
            // value={this.state.appLogo}
          />
          <br />
          <label htmlFor="appDescription">Description (required)</label> <br />
          <input
            id="appDescription"
            type="text"
            name="appDescription"
            onChange={this.handleChange}
            value={this.state.appDescription}
    
          />
          <br />
          <label htmlFor="technology">Technology (required)</label> <br />
          {/* <select name="technology" id="technology" onChange={this.handleChange} value={this.state.technology} multiple> */}
          <select
            name="technology"
            id="technology"
            onChange={this.handleChange}
            value={this.state.technologySelected}
            multiple={true}
          >
            {/* <option value="Javascript">Javascript</option>
              <option value="MongoDB">MongoDB</option> */}
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
          <label htmlFor="appCategory">App Category (required)</label> <br />
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
