import React, {Component} from 'react';

import profile from '../img/profile.jpg';

var bgs = {
    color: "black",
    fontSize: "16px"
}

class Me extends Component {
    render(){
        return (
            <div className="card text-dark border-0 rounded-1" style={{marginBottom: "100px"}}>
                <div className="row no-gutters">
                    <div className="col-12 col-md-6 col-lg-7 d-flex align-items-end py-5">
                        <div className="card-body p-lg-4 mb-3">
                            <h1 className="mb-2 font-weight-bold">Jesús González Ramón</h1>
                            <h5 className="mb-1 font-weight-bold">Frontend Developer</h5>
                            <div className="social mb-4" style={{fontSize: "25px"}}>
                                <a href="https://www.facebook.com/angelotr12/" target="_blank" rel="noopener noreferrer"> <i class="devicon-facebook-plain colored mr-2"></i> </a>
                                <a href="https://github.com/epsilonxaos" target="_blank" rel="noopener noreferrer"> <i class="devicon-github-original colored mr-2"></i> </a>
                                <a href="https://www.linkedin.com/in/jesus-gonzalez-207819209" target="_blank" rel="noopener noreferrer"> <i class="devicon-linkedin-plain colored mr-2"></i> </a>
                            </div>
                            <p className="text-back">Apasionado por las tecnologías y el desarrollo web, reponsable y sociable, comprometido con el desarrollo y la experiencia del usuario, adaptativo, con espiritu emprendedor y sed de aprendizaje.</p>
                            <span style={bgs} className="badge mr-2 mb-2 badge-light">HTML5</span>
                            <span style={bgs} className="badge mr-2 mb-2 badge-light">CSS</span>
                            <span style={bgs} className="badge mr-2 mb-2 badge-light">Javascript</span>
                            <span style={bgs} className="badge mr-2 mb-2 badge-light">ReactJs</span>
                            <span style={bgs} className="badge mr-2 mb-2 badge-light">Laravel</span>
                            <span style={bgs} className="badge mr-2 mb-2 badge-light">MySql</span>
                            <span style={bgs} className="badge mr-2 mb-2 badge-light">SASS</span>
                            <span style={bgs} className="badge mr-2 mb-2 badge-light">GSAP</span>
                            <span style={bgs} className="badge mr-2 mb-2 badge-light">PHP</span>
                            <span style={bgs} className="badge mr-2 mb-2 badge-light">Vue</span>
                            <span style={bgs} className="badge mr-2 mb-2 badge-light">GitHub</span>
                            <span style={bgs} className="badge mr-2 mb-2 badge-light">Bitbucket</span>
                            <span style={bgs} className="badge mr-2 mb-2 badge-light">Bootstrap</span>
                            <span style={bgs} className="badge mr-2 mb-2 badge-light">Materealize</span>
                            <span style={bgs} className="badge mr-2 mb-2 badge-light">Sketch</span>
                            <span style={bgs} className="badge mr-2 mb-2 badge-light">Zeplin</span>
                            <span style={bgs} className="badge mr-2 mb-2 badge-light">Figma</span>
                        
                            <div className="pt-4 w-100 d-flex align-items-center justify-content-start">         
                                <button className="btn btn-grad shadow-none btn-primary mr-4">Portafolio</button>
                                <button className="btn btn-grad shadow-none btn-primary">Contacto</button>
                            </div>
                        </div>

                    </div>
                    <div className="col-12 col-md-6 col-lg-5">
                        <img src={profile} alt="Profile" className="img-object w-100" style={{minHeight: "450px", height: "100%"}} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Me;