import React, {Component} from 'react';

import profile from '../img/profile.jpg';

class Home extends Component {
    render(){
        return (
            <div className="home w-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-11 col-xl-10">
                            <div className="card text-dark border-0 rounded-1">
                                <div className="row no-gutters">
                                    <div className="col-12 col-md-6 col-lg-7 d-flex align-items-end">
                                        <div className="card-body p-lg-4 mb-5">
                                            <h1 className="mb-4">Jesús González Ramón</h1>
                                            <h5 className="mb-5">Front-end</h5>

                                            <p>Skills</p>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">HTML</div>
                                            </div>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">CSS</div>
                                            </div>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Javascript</div>
                                            </div>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">PHP</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-5">
                                        <img src={profile} alt="Profile" className="img-object w-100" style={{height: "450px"}} />
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

export default Home;