import React, {Component} from 'react';

class Portafolio extends Component {
    render(){
        return (
            <div className="home d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}}>
                <div>
                    <p>Hola estamos en el portafolio</p>
                    <button className="btn btn-info">Regresar</button>
                </div>
            </div>
        )
    }
}

export default Portafolio;