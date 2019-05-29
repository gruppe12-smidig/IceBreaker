import React, { Component } from 'react';
import './FindEvents.css';
import Footer from "../footer/Footer";


import calender from '../../images/kalender-white.png';



class FindEvents extends Component {
    state = {

    }


    render() {

        return (

         <div>
                    <div className="mainContainer">

                        <div className='findEventsContainer'>
                        <h2 className='subHeader' > Genre-navn</h2>

                   

                         
                                {/*Render of event components from DB  */}
                                <ul className='eventContainer'>

                                    <li className='eventBox'> <div className="testEvent">
                                            <h2 className='heading'>Event navn</h2>
                                            <p className='arr-info'>Kontakt: Heidi Larsen<br/> Dato: 4/8-2019</p>
                                            <a href="/">
                                                <button className='btn-participate'>DELTA </button> 
                                            </a> 
                                        </div> 
                                    </li>
                                        
                                    <li className='eventBox'><div className="testEvent"></div></li>
                                    <li className='eventBox'><div className="testEvent"></div></li>

                                </ul>

                       

                        

           
                        <a href="/RegisterEventPage"><button className='btn'> 
                                 <p>Opprett ny</p> <img className="calender" src={calender} alt="boot"/></button></a> 

                        </div>
                    </div>

            <Footer/> 

            </div>     
        )
    }
}

export default FindEvents;
