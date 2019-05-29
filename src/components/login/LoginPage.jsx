import React, { Component } from 'react';
import './loginPage.css';
import background from '../../images/background.jpg';
import logo from '../../images/logo-1.png';

class LoginPage extends Component {
    state = {

    }

    render() {
        return(
            <div className='mainContainerLogIn'>
                <div className='formContainer'>
                <div className='header'><img className="logo" src={logo} alt="logo"/><h1 className='IceBreaker'>IceBreaker</h1></div>

                    <form className='inputForm'>
                        <input className="username" placeholder="Brukernavn" type="text"></input>
                        <input className="password" placeholder="Passord" type="text"></input>
                    </form>

                    <a href="/">
                    <button className="btn-login">Logg inn</button></a>
                </div>

            </div>
        )
    }
}

export default LoginPage;