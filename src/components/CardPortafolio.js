import React, { Component } from 'react';

class CardPortafolio extends Component {
    render(){
        return (
            <div className="col-12 col-sm-6 col-md-4 mb-3">
                <div className="position-relative card-proyect">
                    <img src="https://source.unsplash.com/random?sig=1" alt="Lorem" className="img-object w-100" style={{height: "250px"}} />

                    <div className="text">
                        <h6>Lorem ipsum dolor</h6>
                    </div>
                </div>
            </div>
        );
    }
}

export default CardPortafolio;