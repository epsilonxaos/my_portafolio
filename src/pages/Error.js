import React, {Component} from "react";

class Error extends Component {
    render(){
        return ( 
            <div className = "w-100 d-flex align-items-center justify-content-center items-center" style = {{ height: "100vh" }} >
                <h1 className = "font-weight-bold" > 404 - Page Not Found </h1> 
            </div>
        );
    }
}

export default Error;