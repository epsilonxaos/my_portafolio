import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render(){
        return(
            <header className="nav-menu">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-6 col-lg-4">
                            <ul className="list-unstyled mb-4 p-0 d-flex align-content-center justify-content-center">
                                <li className=""><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
                                <li className="ml-3"><NavLink to="/portafolio" activeClassName="active">Portafolio</NavLink></li>
                                <li className="ml-3"><NavLink to="/contacto" activeClassName="active">Contacto</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
            

            </header>
        );
    }
}

export default Header;