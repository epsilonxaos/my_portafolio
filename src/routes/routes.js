import React, { useRef } from "react";
import { TransitionGroup, Transition  } from "react-transition-group";
import { BrowserRouter as Switch, Route } from "react-router-dom";

import Header from '../components/Header';
import Home from "../pages/Home";
import Portafolio from "../pages/Portafolio";
import Error from "../pages/Error";

import { gsap } from "gsap";
import { getPortPromise } from "portfinder";

const completeCall = (target, parent) => {
    gsap.set(target, { clearProps: "position, width" });
    parent && gsap.set(parent, { clearProps: "overflow" });
}

const Routes = (props) => {
    const parentNode = useRef(null);

    const onEnterHandler = (node) => {
        gsap.killTweensOf(node);
        gsap.set(node, {
            position: "absolute",
            left: 0,
            x: 100,
            autoAlpha: 0
        });
        gsap.set(parentNode.current, { overflow: "hidden" })
        // Create the animation for the incoming component
        gsap.to(node, {
            duration: 0.4,
            autoAlpha: 1,
            x: 0,
            onComplete: completeCall,
            onCompleteParams: [node, parentNode.current]
        });
    };

    const onExitHandler = (node) => {
        gsap.killTweensOf(node);
        gsap.set(node, {
            position: "absolute",
            left: 0
        });
        // Create the animation for the incoming component
        gsap.to(node, {
            duration: 0.4,
            autoAlpha: 0,
            x: -100
        });
    };

    return (
        <div className="w-100" style={{minHeight: "100vh"}}>
            <Header />
            <div className="position-relative overflow-hidden w-100" rel={parentNode} style={{minHeight: "100vh"}}>
                <TransitionGroup component={null}>
                    <Transition
                        timeout={500}
                        key={props.location.pathname}
                        onEnter={onEnterHandler}
                        onExit={onExitHandler}
                    >
                        <Switch location={getPortPromise.location}>
                            <Route path="/" exact component={Home} />
                            <Route path="/portafolio" component={Portafolio} />
                            <Route path="/contacto" component={Portafolio} />
                            {/* <Route component={Error} /> */}
                        </Switch>
                    </Transition>
                </TransitionGroup>
            </div>
        </div>
    );
};

export default Routes;