import React from 'react'
import homepage from './images/homepage.png'
import  axios from 'axios';
import './SignINpage.css'

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

        }
        this.handleClick  = this.handleClick.bind(this)
        this.flipcard  = this.flipcard.bind(this)
        this.flipcardreverse  = this.flipcardreverse.bind(this)

    }
    //LOGIN
    changeHandleLogin = e  => {
        this.setState({ [e.target.name] : e.target.value})
    }

    submitHandleLogin = e => {
        e.preventDefault()
        fetch('TEST API URL' , {
            method : 'POST' ,
            body : JSON.stringify({
                usernameLogin : this.state.usernameLogin ,
                passwordLogin : this.state.passwordLogin,
            }),
            headers : {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(respone => respone.json())
        .then(json => console.log(json))
    }

    //Signup
    changeHandleSignup = e  => {
        this.setState({ [e.target.name] : e.target.value})
    }

    submitHandleSignup = e => {
        e.preventDefault()
        fetch('TEST API URL' , {
            method : 'POST' ,
            body : JSON.stringify({
                firstnameSignup : this.state.firstnameSignup,
                lastnameSignup : this.state.lastnameSignup,
                usernameSignup : this.state.usernameSignup,
                emailnameSignup : this.state.emailSignup,
                addressSignup : this.state.addressSignup,
                passwordSignup : this.state.passwordSignup,
            }),
            headers : {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(respone => respone.json())
        .then(json => console.log(json))
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
                                <form className="signinForm" onSubmit={this.submitHandleLogin}>
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
                                        <Link to="/profile" ><button className="btn">SignIn</button></Link>
                                        <div className="signup">Or Sign In Using</div>
                                        <div className="signLogo">
                                            <i className="fa fa-facebook-official licon" aria-hidden="true"></i>                                          
                                            <i className="fa fa-google licon" aria-hidden="true"></i>
                                        </div>
                                        <div style ={{fontSize : "14" }} >Don't have an account? <a onClick={this.flipcard}><u>Sign Up</u></a></div>
                                </form>
                        </div> 
                        
                        <div className="back-card">
                            
                                <form className="signupForm" onSubmit = {this.submitHandleSignup}>
                                    <h2>Sign Up</h2>

                                    <div className="back-fields">
                                        <i className="fa fa-pencil" aria-hidden="true"></i>
                                        <input
                                            type="text" 
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
                                            onChange = {this.changeHandleSignup}
                                            name = "usernameSignup"
                                            value = {this.usernameSignup}
                                        />
                                    </div>

                                    <div className="back-fields">
                                        <i className="fa fa-at" aria-hidden="true"></i> 
                                        <input  
                                            type="email"
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
                                            onChange = {this.changeHandleSignup}
                                            name = "passwordSignup"
                                            value = {this.passwordSignup}
                                        />
                                        <i className={isVisible ? "fa fa-eye":"fa fa-eye-slash"} id="password-icon"  onClick={this.handleClick}></i>
                                    </div>

                                    <Link to="/profile"><button className="btn">SignUp</button></Link>


                                        <div className="signup">Or Sign Up Using</div>
                                        <div className="signLogo">
                                            <i className="fa fa-facebook-official licon" aria-hidden="true"></i>                                          
                                            <i className="fa fa-google licon" aria-hidden="true"></i>
                                        </div>
                                        <p>Have an account? <a onClick={this.flipcardreverse}><u>Sign In</u></a></p>
                                    
                                </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignIn
