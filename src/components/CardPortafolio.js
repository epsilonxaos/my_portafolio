import React, { Component } from 'react';

class CardPortafolio extends Component {
    render(){
        return (
            <div className="col-12 col-sm-6 col-md-4 mb-3">
                <img src="https://source.unsplash.com/random?sig=1" alt="Lorem" className="img-object w-100" style={{height: "250px"}} />

                <h6>Lorem ipsum dolor</h6>
            </div>
        );
    }
}

export default CardPortafolio;