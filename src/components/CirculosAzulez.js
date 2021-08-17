import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";

import {ReactComponent as CiculosAzules} from '../img/circulo-azul.svg';

const CirculosAzules = () => {
    const circle = useRef(null);

    useEffect(() => {
        gsap.to(circle.current, 60, { ease: 'sine.inOut', y: -400, x: -100 });
        gsap.to(circle.current, 60, { ease: 'sine.inOut', y: 0, x: 0, delay: 61 });
        setTimeout(() => {
            gsap.timeline({
                defaults: {
                    repeat: -1,
                    ease: 'sine.inOut',
                    duration: 60,
                    repeatDelay: 1,
                    yoyo: true
                }
             })
             .to(circle.current, {
                y: -400,
                x: -100 
             });
        }, 122000);
    })

    return(
        <div className="circulos circulos-azul">
            <CiculosAzules ref={circle} />
        </div>
    )
}

export default CirculosAzules;