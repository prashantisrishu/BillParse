import React from 'react'
import homepage from './images/homepage.png'
import './SignINpage.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state={

            isVisible : false,
            // Login credentials

            usernameLogin :'',
            passwordLogin : '',
            //Sign up credentials

            firstnameSignup : '',
            lastnameSignup : '',
            usernameSignup : '',
            emailSignup : '',
            addressSignup : '',
            passwordSignup : '',

            //Error
            requestDetails : []

        }
        this.handleClick  = this.handleClick.bind(this)
        this.flipcard  = this.flipcard.bind(this)
        this.flipcardreverse  = this.flipcardreverse.bind(this)
        // this.displayPopUp = this.displayPopUp.bind(this);
        this.handleSuccessfulSubmit = this.handleSuccessfulSubmit.bind(this)

    }

    handleSuccessfulSubmit() {
        this.props.history.push("/profile");
    }
 
    //LOGIN
    changeHandleLogin = e  => {
        this.setState({ [e.target.name] : e.target.value})
    }

    submitHandleLogin = e => {
        e.preventDefault()
        fetch("https://jsonplaceholder.typicode.com/posts" , {
            method : "POST",
            body : JSON.stringify({
                username : this.state.usernameLogin,
                password : this.state.passwordLogin,
            }),
            headers : {
                "Content-Type" : "application/json",
                "Accept" : "application/json"
            }
        }).then(respone => {
            if(respone.status == 201) {
                this.handleSuccessfulSubmit();
                const result = respone.json();
                this.setState({
                    requestDetails : result
                })
                console.log(result);
            }
            else {
                alert("Cannot go further.... Wrogn Credentials");
            }
        })
    }

    //Signup
    changeHandleSignup = e  => {
        this.setState({ [e.target.name] : e.target.value})
    }

    submitHandleSignup = e => {
        e.preventDefault()
        fetch('https://jsonplaceholder.typicode.com/posts' , {
            method : 'POST' ,
            body : JSON.stringify({
                firstname : this.state.firstnameSignup,
                lastname : this.state.lastnameSignup,
                username : this.state.usernameSignup,
                emailname : this.state.emailSignup,
                address : this.state.addressSignup,
                password : this.state.passwordSignup,
            }),
            headers : {
                "Content-type": "application/json; charset=UTF-8" ,
                "Accept" : "application/json"
            }
        })
        .then(respone => {
            if(respone.status == 201) {
                this.handleSuccessfulSubmit();
                const result = respone.json();
                console.log(result);
            }
            else {
                alert("Cannot go further.... Wrogn Credentials");
            }
        })
    }

    handleClick(){
        this.setState(prevState =>({
            isVisible : !prevState.isVisible
        }))
    }

    flipcard(){
        document.getElementsByClassName("card")[0].style.transform = "rotateY(180deg)";
    }

    flipcardreverse(){
        document.getElementsByClassName("card")[0].style.transform = "rotateY(360deg)";
    }

    

    render(){
        const {isVisible} = this.state
        //login
        const {usernameLogin , passwordLogin} = this.state;
        //signup
        const {firstnameSignup , lastnameSignup , usernameSignup , emailSignup , addressSignup , passwordSignup} = this.state;


        return(
            <div className="grid">
                <div className="grid-item">
                    <center><img src={homepage} id="homepageImage"/></center>
                </div>
                <div className="grid-item">
                    <div id="line"></div>
                </div>
                <div className="grid-item" id="box">
                    <div className="card">
                        <div className="front-card">
                                <form className="signinForm form" onSubmit={this.submitHandleLogin}>
                                        <h2>Sign In</h2>

                                        <div className="fields">
                                            <i className="fa fa-user"></i>
                                            <input
                                                className="input" 
                                                type="text" 
                                                placeholder="Type your Username"
                                                name = "usernameLogin"
                                                value = {usernameLogin}
                                                onChange = {this.changeHandleLogin}
                                            />
                                        </div>

                                        <div className="fields">
                                            <i className="fa fa-lock"></i>
                                            <input  
                                                className="input" 
                                                type={isVisible ? "text" : "password"}  
                                                placeholder="Type your Password"
                                                name = "passwordLogin"
                                                value = {passwordLogin}
                                                onChange = {this.changeHandleLogin}

                                            />
                                            <i className={isVisible ? "fa fa-eye":"fa fa-eye-slash"} id="password-icon" onClick={this.handleClick}></i>
                                        </div>

                                        <div className="forgotPassword"><u>Forgot Password?</u></div>

                                        <button type ="submit" className="btn">SignIn</button>

                                        <div className="signup">Or Sign In Using</div>
                                        <div className="signLogo">
                                            <i className="fa fa-facebook-official licon" aria-hidden="true"></i>                                          
                                            <i className="fa fa-google licon" aria-hidden="true"></i>
                                        </div>                  
                                        <div style ={{fontSize : "14" }} >Don't have an account? <a onClick={this.flipcard}><u>Sign Up</u></a></div>
                                </form>
                        </div> 
                        
                        <div className="back-card">
                            
                                <form className="signupForm form" onSubmit = {this.submitHandleSignup}>
                                    <h2>Sign Up</h2>

                                    <div className="back-fields">
                                        <i className="fa fa-pencil" aria-hidden="true"></i>
                                        <input
                                            type="text" 
                                            className="input"
                                            placeholder="First Name"
                                            onChange = {this.changeHandleSignup}
                                            name = "firstnameSignup"
                                            value = {this.firstnameSignup}
                                        />
                                    </div>

                                    <div className="back-fields">
                                        <i className="fa fa-pencil" aria-hidden="true"></i>
                                        <input
                                            type="text" 
                                            className="input"
                                            placeholder="Last Name"
                                            onChange = {this.changeHandleSignup}
                                            name = "lastnameSignup"
                                            value = {this.lastnameSignup}
                                        />
                                    </div>

                                    <div className="back-fields">
                                        <i className="fa fa-user"></i>
                                        <input  
                                            type="text"
                                            placeholder="UserName"
                                            className="input"
                                            onChange = {this.changeHandleSignup}
                                            name = "usernameSignup"
                                            value = {this.usernameSignup}
                                        />
                                    </div>

                                    <div className="back-fields">
                                        <i className="fa fa-at" aria-hidden="true"></i> 
                                        <input  
                                            type="email"
                                            className="input"
                                            placeholder="Email"
                                            onChange = {this.changeHandleSignup}
                                            name = "emailSignup"
                                            value = {this.emailSignup}
                                        />
                                    </div>

                                    <div className="back-fields">
                                        <i className="fa fa-address-book" aria-hidden="true"></i>
                                        <input  
                                            type="text"
                                            className="input"
                                            placeholder="Address"
                                            onChange = {this.changeHandleSignup}
                                            name = "addressSignup"
                                            value = {this.addressSignup}
                                        />
                                    </div> 

                                    <div className="back-fields">
                                        <i className="fa fa-lock"></i>
                                        <input  
                                            type={isVisible ? "text" : "password"}  
                                            placeholder="Password"
                                            className="input"
                                            onChange = {this.changeHandleSignup}
                                            name = "passwordSignup"
                                            value = {this.passwordSignup}
                                        />
                                        <i className={isVisible ? "fa fa-eye":"fa fa-eye-slash"} id="password-icon"  onClick={this.handleClick}></i>
                                    </div>

                                    <button className="btn" type="submit">SignUp</button>


                                        <div className="signup">Or Sign Up Using</div>
                                        <div className="signLogo">
                                            <i className="fa fa-facebook-official licon" aria-hidden="true"></i>                                          
                                            <i className="fa fa-google licon" aria-hidden="true"></i>
                                        </div>
                                        <p>Have an account?<a onClick={this.flipcardreverse}><u>Sign In</u></a></p>
                                    
                                </form>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default SignIn
