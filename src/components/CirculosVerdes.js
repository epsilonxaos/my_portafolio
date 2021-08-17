import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";

import {ReactComponent as CiculosVerdes} from '../img/circulo-verde.svg';

const CirculosVerdes = () => {
    const circle = useRef(null);

    useEffect(() => {
        gsap.to(circle.current, 60, { ease: "sine.inOut", x: -600, y: -350, scale: 1.6, delay: 4 });
        gsap.to(circle.current, 60, { ease: "sine.inOut", x: 0, y: 0, scale: 1, delay: 65 });
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
                x: -600,
                y: -350,
                scale: 1.6,
            });
        }, 126000);
    })

    return(
        <div className="circulos circulos-verde">
            <CiculosVerdes ref={circle} />
        </div>
    )
}

export default CirculosVerdes;