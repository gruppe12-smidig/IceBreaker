import React, {Component} from 'react';
import './Home.css';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import penguin from '../../images/penguin.png';

class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className='homeContainer'>
                 
                    <div className='wrapperPenguin'>
                            <img className='frontPenguin' src={penguin} alt="Image of penguin" />
                            <img className='frontPenguin' src={penguin} alt="Image of penguin" />
                    </div>
                    <div className='greetContainer'>
                        <h3>Break som Ice</h3>
                        <p>Lorem ipsum lorem lorem lorem lorem ipsum lorem lorem lorem lorem</p>
                    </div>

                    <div className='btnWrapper'>
                        <button className='btn'>Find events</button>
                        <button className='btn'>My events</button>
                        <button className='btn'>new event</button>
                        
                    </div>
                </div>
                <Footer/>
            </div>

        );
    }
}

export default Home;