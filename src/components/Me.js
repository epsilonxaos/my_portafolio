import React, {Component} from 'react';

import profile from '../img/profile.jpg';

var bgs = {
    color: "black",
    fontSize: "13px"
}

class Me extends Component {
    render(){
        return (
            <div className="card text-dark border-0 rounded-1" style={{marginBottom: "100px"}}>
                <div className="row no-gutters">
                    <div className="col-12 col-md-6 col-lg-7 d-flex align-items-end">
                        <div className="card-body p-lg-4 mb-5">
                            <h1 className="mb-4 font-weight-bold">Jesús González Ramón</h1>
                            <h5 className="mb-3">Front-end</h5>

                            <p className="text-mute">Apasionado por las tecnologías y el desarrollo web, reponsable y sociable, comprometido con el desarrollo y la experiencia del usuario, adaptativo, con espiritu emprendedor y sed de aprendizaje.</p>
                            <span style={bgs} className="badge mr-2 badge-light">HTML5</span>
                            <span style={bgs} className="badge mr-2 badge-light">CSS</span>
                            <span style={bgs} className="badge mr-2 badge-light">Javascript</span>
                            <span style={bgs} className="badge mr-2 badge-light">ReactJs</span>
                            <span style={bgs} className="badge mr-2 badge-light">Laravel</span>
                            <span style={bgs} className="badge mr-2 badge-light">MySql</span>
                            <span style={bgs} className="badge mr-2 badge-light">SASS</span>
                            <span style={bgs} className="badge mr-2 badge-light">GSAP</span>
                            <span style={bgs} className="badge mr-2 badge-light">PHP</span>
                            <span style={bgs} className="badge mr-2 badge-light">Vue</span>
                            <span style={bgs} className="badge mr-2 badge-light">GitHub</span>
                            <span style={bgs} className="badge mr-2 badge-light">Bitbucket</span>
                            <span style={bgs} className="badge mr-2 badge-light">Bootstrap</span>
                            <span style={bgs} className="badge mr-2 badge-light">Materealize</span>
                            <span style={bgs} className="badge mr-2 badge-light">Sketch</span>
                            <span style={bgs} className="badge mr-2 badge-light">Zeplin</span>
                            <span style={bgs} className="badge mr-2 badge-light">Figma</span>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-5">
                        <img src={profile} alt="Profile" className="img-object w-100" style={{height: "450px"}} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Me;