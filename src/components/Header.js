import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import home from '../img/home.svg';
import mail from '../img/mail.svg';
import suitcase from '../img/portfolio.svg';

class Header extends Component {
    render(){
        return(
            <header className="nav-menu">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-6 col-lg-4">
                            <ul className="list-unstyled mb-4 p-3 bg-white rounded d-flex align-content-center justify-content-center">
                                <li className=""><NavLink className="d-flex align-items-center text-dark" to="/home"><img src={home} alt="Home" style={{width: "20px", height: "20px", objectFit: "cover"}} className="mr-2" /> Home</NavLink></li>
                                <li className="ml-3"><NavLink className="d-flex align-items-center text-dark" to="/home#portafolio"><img src={suitcase} alt="Home" style={{width: "20px", height: "20px", objectFit: "cover"}} className="mr-2" /> Portafolio</NavLink></li>
                                <li className="ml-3"><NavLink className="d-flex align-items-center text-dark" to="/home#contacto"><img src={mail} alt="Home" style={{width: "20px", height: "20px", objectFit: "cover"}} className="mr-2" /> Contacto</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
            

            </header>
        );
    }
}

export default Header;