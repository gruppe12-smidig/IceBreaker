
import React, { Component } from 'react';
import './SignupPage.css'; 
import Header from './Header';

class SignupPage extends Component {
    state = {

    }

    render() {
        return(
            <div className='signUpMain'>
                <Header/> 
                <h2 className='page-header' >Opprett bruker</h2>

                    <form className='inputForm'>
                        <div className='inputSection'>
                            <label>First Name *</label>
                            <input className='input-box' type="text" placeholder="First Name" />
                        </div>

                        <div className='inputSection'>
                            <label> Last Name *</label>
                            <input className='input-box' type="text" placeholder="Last Name" />
                        </div>

                        <div className='inputSection'>
                            <label> E-mail *</label>
                            <input className='input-box' type="text" placeholder="Email" />
                        </div>

                        <div className='inputSection'>
                            <label> Password *</label>
                            <input className='input-box' type="password" placeholder="Password" />
                        </div>

                        <div className='inputSection'>
                            <label> School</label>
                            <input className='input-box' type="school" placeholder="School" />
                        </div>

                        <div className='inputSection'>
                            <label> Intressen</label>
                            <input className='input-box' type="school" placeholder="Intressen" />
                        </div>

                     
                      
                    </form>
                    <div className='wrapperBtns'>
                            <button className='buttonReg'>Clear</button>
                            <button className='buttonReg'>Sign Up</button>
                        </div>
                  

              
            </div>
        )
    }
}

export default SignupPage;

