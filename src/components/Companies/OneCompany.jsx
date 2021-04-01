import React, { Component } from 'react'
import axios from 'axios'


class OneCompany extends Component {
   state = {
       company: [],
   }


    componentDidMount() {
        const id = this.props.match.params.id;
        console.log("whaaaaaaaaaaaaaat")
        console.log("IIIIIIIIIIII hate my life")
        console.log("Im the id:", id);
      
        axios
       
            .get(`${process.env.REACT_APP_BACKEND_URL}/api/company-profile/${id}`, {withCredentials: true})

            .then((response) => {
                console.log("Response Data", response);
                this.setState({company: response.data})
                
            })
            .catch((error) => {
                console.log(error);
            })

        
    }


    render() {

        if (this.state.company.length === 0) {
            return <div>Loading the application details...</div>;
               }
        return (
            <div style={{display:"flex", justifyContent:"center"}}>
            <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                <br/>
                <h1>{this.state.company.firstName} {this.state.company.lastName}'s Profile</h1>
                <p>{this.state.company.email}</p>
                <br/>
                <p><img style={{height:"200px"}} src={this.state.company.representativePhotoUrl} alt="company"/></p><br/>

                <div style={{display:"flex", flexDirection:"row"}}>
                
                <div>
                <p>Company: {this.state.company.companyName}</p>
                </div>
                <div style={{paddingLeft:"10px"}}>
                <img style={{height:"20px"}} src={this.state.company.companyLogoUrl} alt="logo"/></div>
                </div>
                <p>Position: {this.state.company.representativePosition}</p>
                <p>{this.state.company.companyIndustry}</p>
                
                <p>{this.state.company.apps.map((e) => {
                    return (
                        e.appName
                    )
                })}</p>
                {/* {this.state.company.map((companyDetail) => (
                    <div key={companyDetail._id}>
                        <p>Company Name: {companyDetail.companyName}</p>
                        <p>Company Industry :{companyDetail.companyIndustry}</p>
                        <p><img src={companyDetail.representativePhotoUrl}/></p>
                        <p>Representative First name {companyDetail.firstName}</p>
                        <p>Representative Last Name {companyDetail.lastName}</p>
                        <p>Representative Position {companyDetail.representativePosition}</p>
                        <p>Email {companyDetail.email}</p>
                        <p><img src={companyDetail.companyLogoUrl}/></p>

                    </div>
                ))} */}
            </div>
            </div>
        )
    }
}

export default OneCompany;
