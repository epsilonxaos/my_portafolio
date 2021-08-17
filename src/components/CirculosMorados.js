import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";

import {ReactComponent as CiculosAzules} from '../img/circulo-morado.svg';

const CirculosMorados = () => {
    const circle = useRef(null);

    useEffect(() => {
        gsap.to(circle.current, 58, { ease: 'sine.inOut', x: 400, y: -150, delay: 2 });
        gsap.to(circle.current, 58, { ease: 'sine.inOut', x: 0, y: 0, delay: 61 });
        setTimeout(() => {
            gsap.timeline({
                defaults: {
                    repeat: -1,
                    ease: 'sine.inOut',
                    duration: 58,
                    repeatDelay: 1,
                    yoyo: true
                }
            })
            .to(circle.current, {
                x: 400,
                y: -150
            });
        }, 120000);
    })

    return(
        <div className="circulos circulos-morado">
            <CiculosAzules ref={circle} />
        </div>
    )
}

export default CirculosMorados;