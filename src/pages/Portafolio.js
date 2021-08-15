import React, {Component} from 'react';

import CardPortafolio from '../components/CardPortafolio';

class Portafolio extends Component {
    render(){
        return (
            <div className="home w-100 position-relative" style={{zIndex: 2}}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-11 col-xl-10">
                            <div className="card text-dark border-0 rounded-1">
                                <div className="card-body p-md-5">
                                    <h4 className="font-weight-bold mb-5">Portafolio</h4>

                                    <div className="row">
                                        <CardPortafolio />
                                        <CardPortafolio />
                                        <CardPortafolio />
                                        <CardPortafolio />
                                        <CardPortafolio />
                                        <CardPortafolio />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>             
                </div>
            </div>
        )
    }
}

export default Portafolio;