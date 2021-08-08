import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render(){
        return(
            <header className="nav-menu">
                <div className="container">
                    <ul className="list-unstyled p-0 m-0 d-flex">
                        <li>
                            <NavLink
                                activeClassName="active"
                                className="nav-link py-3 px-4 d-block"
                                to="/"
                                exact
                            >Home</NavLink>
                        </li>
                        <li>
                            <NavLink
                                activeClassName="active"
                                className="nav-link py-3 px-4 d-block"
                                to="/portafolio"
                            >Portafolio</NavLink>
                        </li>
                        <li>
                            <NavLink
                                activeClassName="active"
                                className="nav-link py-3 px-4 d-block"
                                to="/contacto"
                            >Contacto</NavLink>
                        </li>
                    </ul>
                </div>
            </header>
        );
    }
}

export default Header;