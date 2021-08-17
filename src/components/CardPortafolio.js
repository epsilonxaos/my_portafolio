import React, { Component } from 'react';

class CardPortafolio extends Component {
    constructor(props) {
        super(props);
        
        this.classOrder1 = 'order-sm-1';
        this.classOrder2 = 'order-sm-2';
    }

    render(){
        return (
            <div className="col-12 col-sm-11 mb-5 mt-5">
                <div className="position-relative mx-auto card-proyect">
                    <div className={`row justify-content-between align-items-center deco ${this.props.orden}`}>
                        <div className={`col-12 col-sm-6 col-md-7 col-lg-8 order-1 ${(this.props.orden === 'invert') ? this.classOrder2 : ''}`}>
                            <img src={this.props.cover} alt={this.props.title} className="img-object w-100 rounded overflow-hidden" style={{height: "300px"}} />
                        </div>
                        <div className={`col-12 col-sm-6 col-md-5 col-lg-4 order-2 ${(this.props.orden === 'invert') ? this.classOrder1 : ''}`}>
                            <h6 className="mb-0 font-weight-bold">{this.props.title}</h6>
                            <hr className="mb-4 mt-1 ml-0" style={{width: "40px"}} />
                            <p>{this.props.text}</p>
                            <div className="languages mb-4">
                                {
                                    this.props.languages.map((item, key) => {
                                        return(<i className={`devicon-${item} colored`} key={`iconKey${key}`}></i>);
                                    })
                                }
                            </div>
                            {(this.props.title !== "Portafolio") ? <a href={this.props.url} target="_blank" rel="noopener noreferrer" className="btn btn-grad">Visitar Website</a> : ''}
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CardPortafolio;