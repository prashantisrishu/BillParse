import React from 'react';
import './profilepage.css';
import axios from 'axios';

class EditProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username : 'Prashant13' ,
            firstnameProfile : 'Prashant',
            lastnameProfile : 'Mishra',
            dob : '2001-08-13',
            gender : 'female',
            emailProfile : 'prashantisrishu13@gmail.com',
            phoneProfile : '9148540551',
            addressProfile : 'bla bla bla bla blabla blabla blabla blabla blabla blabla blabla blabla bla',
        }
        this.handleProfile = this.handleProfile.bind(this);
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick() {
        var btn = document.getElementById("edit-btn");
        if(btn.innerHTML == "EDIT") {
            this.handleProfile();
        }
        else if(btn.innerHTML == "UPDATE") {
            this.submitHandleProfile();
        }
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/posts",
        { 
            method : "GET",
        },
        {
            headers : {
            "Content-Type" : "application/json",
            "Accept" : "application/json"
        },
    })
    .then(respone => respone.json())
    .then(data => console.log(data))
    }



    changeHandleProfile = e  => {
        this.setState({ [e.target.name] : e.target.value})
    }

    submitHandleProfile = e => {
        // e.preventDefault()
        fetch('https://jsonplaceholder.typicode.com/posts' , {
            method : 'POST' ,
            body : JSON.stringify({
                firstname : this.state.firstnameProfile,
                lastname : this.state.lastnameProfile,
                dob : this.state.dob,
                gender : this.state.gender,
                email : this.state.emailProfile,
                phone : this.state.phoneProfile,
                address : this.state.addressProfiles,
            }),
            headers : {
                "Content-type" : "application/json; charset=UTF-8"
            }
        })
        .then(respone => respone.json())
        .then(json => console.log(json))
    }


    handleProfile() {

        // FIRSTNAME
        var fn = document.getElementById("fn")   
            fn.disabled = false;
            fn.style.border="1px black solid" ; 
            fn.style.backgroundColor = "white";

        //LASTNAME
        var ln = document.getElementById("ln")   
            ln.disabled = false;
            ln.style.border="1px black solid" ; 
            ln.style.backgroundColor = "white";
        
        //DOB
        var dob = document.getElementById("dob")   
            dob.disabled = false;
            dob.style.border="1px black solid" ; 
            dob.style.backgroundColor = "white";
        
        //Gender
        var gender = document.getElementById("gender")   
            gender.disabled = false;
            gender.style.border="1px black solid" ; 
            gender.style.backgroundColor = "white";
    
        //EMAIL
        var email = document.getElementById("email")   
            email.disabled = false;
            email.style.border="1px black solid" ; 
            email.style.backgroundColor = "white"; 

        //PHONE
        var phn = document.getElementById("phone")   
            phn.disabled = false;
            phn.style.border="1px black solid" ; 
            phn.style.backgroundColor = "white";       
        
        var addr = document.getElementById("addr")   
            addr.disabled = false;
            addr.style.border="1px black solid" ; 
            addr.style.backgroundColor = "white";      

        document.getElementById("edit-btn").innerHTML = "UPDATE";
    }
    render() {

        const {firstnameProfile , lastnameProfile , dob , gender , emailProfile, phoneProfile , addressProfile} = this.state;
        return(
            <div className="profileCard">
                <div className="profilenav">
                    <i className="fa fa-user-circle" style={{float:"right"}}></i>
                    <i class="fa fa-home" aria-hidden="true" style={{float:"left"}}></i>
                </div>

                <form>
                    <div className="profile">
                            <div className="profile-feild">
                                <input className="username-profile" disabled = "false" defaultValue={this.state.username} />
                                <div><button type="button" className="edit-profile" id="edit-btn" onClick={this.handleClick} style={{cursor : "pointer"}}>EDIT</button></div>
                            </div>
                            <div className="profile-feild">
                                <input 
                                    id="fn"
                                    type="text"
                                    disabled="true"
                                    name ="firstnameProfile" 
                                    className="firstname-profile" 
                                    onChange ={this.changeHandleProfile}
                                    value={firstnameProfile}
                                    />
                                <div>
                                    <input 
                                        type="text"
                                        id="ln" 
                                        name ="lastnameProfile"
                                        disabled="true"
                                        className="lastname-profile" 
                                        onChange ={this.changeHandleProfile}
                                        value={lastnameProfile}
                                    />
                                </div>
                            </div>
                                <div className="profile-feild">
                                    <div className="dob-profile" >
                                        <input 
                                            name ="dob" 
                                            type="date"
                                            id="dob" 
                                            disabled="true" 
                                            onChange ={this.changeHandleProfile}
                                            value={dob}
                                        />
                                        </div>
                                <div>
                                    <select 
                                        name="gender"
                                        id="gender" 
                                        onChange ={this.changeHandleProfile}
                                        disabled="true"
                                        value={gender}
                                        >
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="others">Others</option>
                                    </select>
                                </div>
                            </div>
                            <div className="profile-feild">
                                <input 
                                    id="email" 
                                    disabled="true"
                                    name="emailProfile" 
                                    className="email-profile" 
                                    onChange ={this.changeHandleProfile}
                                    value={emailProfile}
                                    />
                            </div>
                            <div className="profile-feild">
                                <input 
                                    id="phone" 
                                    type="tel"
                                    disabled="true"
                                    name="phoneProfile" 
                                    className="phone-profile"
                                    onChange ={this.changeHandleProfile}
                                    value={phoneProfile}
                                    />
                            </div>

                            <div className="profile-feild">
                                <textarea 
                                    id="addr" 
                                    name="addressProfile" 
                                    disabled="true"
                                    className="address-profile" 
                                    onChange = {this.changeHandleProfile}
                                    value={addressProfile}
                                    /> 
                            </div>
                        </div>
                    </form>
                 
            </div>
        );
    }
}

export default EditProfile;
