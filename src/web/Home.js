import React, {Component} from 'react';

class Home extends Component {
    render(){
        return (
            <div className="home d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}}>
                <div>
                    <p>Hola estamos en el home</p>
                    <button className="btn btn-info">Ir a portafolio</button>
                </div>
            </div>
        )
    }
}

export default Home;