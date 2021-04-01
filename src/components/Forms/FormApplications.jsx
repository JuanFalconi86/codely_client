import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../styles/formApplications.css";
import { buildFormData } from "../../utile.js";

class FormApplications extends Component {
  state = {
    appName: "",
    appLogo: "",
    appDescription: "",
    technologyList: [], //une array vide, qui ensuite va contenir la liste des technologies
    technologySelected: [],
    appCategory: "Books",
  };

  // ICI, JE FAIS UN CALL AXIOS POUR RÉCUPÉRER LA LISTE DES TECHNOLOGIES
  componentDidMount() {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/technologies`)
      .then((response) => {
        this.setState({ technologyList: response.data });
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
      console.log(event.target);
    } else {
      this.setState({ [event.target.name]: event.target.value });
    }
  };

  //FONCTION POUR HANDLE LE STATE DU LOGO AVEC UN FICHIER IMAGE CHOISI DU LOCAL:
  handleLogoUpload = (event) => {
    console.log(event.target.files[0]);
    this.setState({
      appLogo: event.target.files[0],
    });
  };

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
    console.log("THIS IS CONSOLE LOG THIS.STATE", this.state);
    // MAIS DANS CE CAS, COMME J'AI UNE ARRAY DE TECHNOLOGIES, JE DOIS UTILISER CETTE FONCTION BUILD FORM DATA, QUI ELLE MEME EST IMPORTEE DE MON FICHIER UTILE
    buildFormData(formData, {
      appName: this.state.appName,
      appLogo: this.state.appLogo,
      appDescription: this.state.appDescription,
      technology: this.state.technologySelected,
      appCategory: this.state.appCategory,
    });  // on définit les keys qu'on va envoyer lors du submit: pourquoi on fait ça ? parce que technology ==> on envoi la LISTE des technologies
    
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/api/application/create`, formData)
      .then((response) => {
        this.setState({
          appName: "",
          appLogo: "",
          appDescription: "",
          technologyList: [],
          technologySelected: [],
          appCategory: "Books",
        });
        this.props.history.push("/main");
        console.log("NEW APPLICATION CREATED");
      })
      .catch((error) => {
        console.log(error, "ERROR, NOSE BLEED");
      });
  };

  render() {
    console.log(this.state.technologySelected, "THIS IS TECHNOLOGY SELECTED");
    return (
      <div className="wrapper">
      <div className="form-wrapper">
        <header className="title">
          <h1>Create new Application</h1> <br />
        </header>
      
        <form onSubmit={this.formSubmit} className="form">
          <div className="credentials">
          <div className="input-box">
          <label htmlFor="appName"> Name (required) </label> <br />
          <input
            id="appName"
            type="text"
            name="appName"
            onChange={this.handleChange}
            value={this.state.appName}
          />
          </div>
          <br />
          <div className="input-box">
          <label htmlFor="appLogo"> Logo (required)</label> <br />
          <input
            id="appLogo"
            type="file"
            name="appLogo"
            onChange={this.handleLogoUpload}
            // value={this.state.appLogo}
          />
          </div>
          <br />
          <div className="input-box">
          <label htmlFor="appDescription">Description (required)</label> <br />
          <input
            id="appDescription"
            type="text"
            name="appDescription"
            onChange={this.handleChange}
            value={this.state.appDescription}
          />
          </div>
          </div>
          <br />
          <div className="selection">
          <div>
          <label htmlFor="technology">Technology (required)</label> <br />
          {/* <select name="technology" id="technology" onChange={this.handleChange} value={this.state.technology} multiple> */}
          <select 
          className="selector"
            name="technology"
            id="technology"
            onChange={this.handleChange}
            value={this.state.technologySelected}
            multiple={true}
          >
            {/* <option value="Javascript">Javascript</option>
              <option value="MongoDB">MongoDB</option> */}
            {this.state.technologyList.map((oneTechnology) => {
              return (
                <option value={oneTechnology._id} key={oneTechnology._id}>
                  {oneTechnology.name}
                </option>
              );
            })}
          </select>
          </div>
         
          
          <br />
          
          <div>
          <label htmlFor="appCategory">App Category (required)</label> <br />
          <select
          className="selector"
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
          </div>
          </div>
          
          <br />
          {/* <label htmlFor="appCategory">App Category</label> <br/>
          <input type="text" name="appCategory" onChange={this.handleChange} value={this.state.appCategory}/> <br/> */}
          <br />
          <div className="createAccount">
          <button>Create new App</button>
          </div>
          
        </form>
      </div>
      </div>
    );
  }
}

export default FormApplications;
