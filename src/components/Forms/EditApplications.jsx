import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class EditApplications extends Component {

  state = {
    appName: "",
    appLogo:
      "https://res.cloudinary.com/djogypr9r/image/upload/v1616695400/app-default_s975ja.jpg",
    appDescription: "",
    technology: [], //une array vide, qui ensuite va contenir la liste des technologies
    appCategory: "Books",
  };

  componentDidMount() {
    console.log(this.props);
    const id = this.props.match.params.id;

    axios.get(`http://localhost:7000/api/applications/${id}`)
    .then((response)=>{
        const data = response.data;

        this.setState({
            appName: data.appName,
            appLogo: data.appLogo,
            appDescription: data.appDescription,
            technology: data.technology,
            appCategory: data.appCategory,
        })
    })
    .catch((error)=>{
        console.log(error)
    })
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  editSubmit = (event) => {
      event.preventDefault();
      const id = this.props.match.params.id;
      axios.patch(`http://localhost:7000/api/applications/${id}`, {
        appName: this.state.appName,
        appLogo: this.state.appLogo,
        appDescription: this.state.appDescription,
        technology: this.state.technology,
        appCategory: this.state.appCategory,
      })
      .then((response)=>{
          this.props.history.push('/')
      })
      .catch((error)=>{
          console.log(error)
      })
  }



  render() {
    return (
      <div>
        <header>
          <h1>Edit this Application</h1> <br />
        </header>

        <form onSubmit={this.editSubmit}>
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
            value={this.state.technology}
            multiple
          >
            {this.state.technology.map((oneTechnology) => {
              return (
                <option value={oneTechnology.name} key={oneTechnology._id}>
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

export default EditApplications
