import React, {Component} from 'react';
import CardPortafolio from './CardPortafolio';

class Portafolio extends Component {
    render(){
        return (
            <div className="card text-dark border-0 rounded-1" style={{marginBottom: '100px'}}>
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
        )
    }
}

export default Portafolio;