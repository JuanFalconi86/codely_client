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
            .get(`http://localhost:7000/api/company-profile/${id}`)
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
            <div>

                <h1>I'm here</h1>
                <p>{this.state.company.companyName}</p>
                <p>{this.state.company.companyIndustry}</p>
                <p><img src={this.state.company.representativePhotoUrl}/></p>
                <p>{this.state.company.firstName}</p>
                <p>{this.state.company.lastName}</p>
                <p>{this.state.company.email}</p>
                <p><img src={this.state.company.companyLogoUrl}/></p>
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
        )
    }
}

export default OneCompany;
