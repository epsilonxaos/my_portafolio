import React, {Component} from 'react';
import Me from '../components/Me';
import Portafolio from '../components/Portafolio';
// import Contacto from '../components/Contacto';
class Home extends Component {
    render(){
        return (
            <div className="home w-100 position-relative" style={{zIndex: 10}}>
                <div className="container pt-5">

                    <div className="row justify-content-center">
                        <div className="col-12 col-md-12 col-xl-10">

                            <Me />
                            <Portafolio />
                            {/* <Contacto /> */}

                        </div>
                    </div>
                </div>                
            </div>
        )
    }
}

export default Home;