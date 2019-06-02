import React, { Component } from 'react';
import firebase from '../firebase/Firebase';
import FormError from '../formError/FormError';
import {navigate} from "@reach/router";


import './loginPage.css';
import logo from '../../images/logo.png';

class LoginPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            errorMessage: null
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const itemName = e.target.name;
        const itemValue = e.target.value;

        this.setState({[itemName]: itemValue});
    }

    handleSubmit(e) {
        let signupInfo = {
            email: this.state.email,
            password: this.state.password
        };
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(
            signupInfo.email,
            signupInfo.password
        ).then(()=> {

           console.log('you are logged in');
        })
            .catch(error => {
                if (error.message !== null){
                    this.setState({errorMessage: error.message});
                } else{
                    this.setState({errorMessage: null});
                }
            });
    }

    render() {
        return(
            <div className='mainContainerLogIn'>
                <div className='formContainer'>
                <div className='header'><img className="logo" src={logo} alt="logo"/></div>
                    <form className='inputForm' onSubmit={this.handleSubmit}>


                        <input
                            className="username"
                            placeholder="Brukernavn"
                            type="text"
                            id="email"
                            name="email"
                            required
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                        <input
                            className="password"
                            placeholder="Passord"
                            type="text"
                            id="password"
                            name="password"
                            required
                            value={this.state.password}
                            onChange={this.handleChange}
                        />

                        <div>
                            <button className="btn-login" type="submit">Logg inn</button>
                        </div>

                        <div>
                            { this.state.errorMessage !== null ? (
                                <FormError theMessage={this.state.errorMessage}/>
                            ): null}
                        </div>

                    </form>

                </div>

            </div>
        )
    }
}

export default LoginPage;