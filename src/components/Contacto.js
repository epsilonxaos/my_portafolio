import React, {Component} from 'react';

class Contacto extends Component {
    render(){
        return (
            <div className="card text-dark border-0 rounded-1" style={{marginBottom: "60px"}}>
                <div className="card-body p-md-5">
                    <h4 className="font-weight-bold mb-5 text-center">Contacto</h4>

                    <div className="row justify-content-center">
                        <div className="col-12 col-sm-6 col-md-4">
                            <p>T. <a href="tel:+529934325614" className="text-dark font-weight-bold">(993) 432 5614</a></p>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4">
                            <p>E. <a href="mailto:chuy_2808@hotmail.com" className="text-dark font-weight-bold">chuy_2808@hotmail.com</a></p>
                        </div>
                        <div className="col-12">
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contacto;