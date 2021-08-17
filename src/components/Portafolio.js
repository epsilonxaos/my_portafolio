import React, {Component} from 'react';
import CardPortafolio from './CardPortafolio';

import apnoia from '../img/portafolio/apnoia.png';
import inner from '../img/portafolio/inner.png';
import mm from '../img/portafolio/mm.png';
import roche from '../img/portafolio/roche.png';
import musaiko from '../img/portafolio/musaiko.png';
import graphics from '../img/portafolio/graphics.png';
import hair from '../img/portafolio/hairclinic.png';
import porta from '../img/portafolio/portafolio.png';
class Portafolio extends Component {
    constructor(props) {
        super(props);

        this.state = {
            projects: [
                {
                    cover: porta,
                    title: "Portafolio",
                    text: "Portafolio personal",
                    languages: [
                        "react-original",
                        "sass-original"
                    ],
                    url: "https://graphics.digital/"
                },
                {
                    cover: graphics,
                    title: "Graphics Digital",
                    text: "Empresa que ofrece impresión de digital, offset, y rotativa comercial.",
                    languages: [
                        "react-original",
                        "sass-original",
                        "laravel-plain"
                    ],
                    url: "https://graphics.digital/"
                },
                {
                    cover: hair,
                    title: "Hair Clinic",
                    text: "Empresa que ofrece transplantes capilares.",
                    languages: [
                        "react-original",
                        "sass-original",
                        "laravel-plain"
                    ],
                    url: "https://graphics.digital/"
                },
                {
                    cover: inner,
                    title: "InnerStudio",
                    text: "Estudio fitness que ofrece una variedad de clases.",
                    languages: [
                        "javascript-plain",
                        "laravel-plain",
                        "sass-original"
                    ],
                    url: "https://innerstudio.mx/"
                },
                {
                    cover: roche,
                    title: "Grupo roche",
                    text: "Empresa productora de sal de mar de alta calidad.",
                    languages: [
                        "javascript-plain",
                        "laravel-plain",
                        "sass-original"
                    ],
                    url: "http://www.gruporoche.com.mx/"
                },
                {
                    cover: apnoia,
                    title: "Apnoia",
                    text: "Apnoia es una concept store que diseña un estilo de vida a través de objetos cotidianos propositivos.",
                    languages: [
                        "javascript-plain",
                        "php-plain",
                        "css3-plain",
                        "mysql-plain"
                    ],
                    url: "https://apnoia.mx/"
                },
                {
                    cover: mm,
                    title: "México Marino",
                    text: "Proyecto que ofrece compra y venta de productos maritimos en Mér. Yuc.",
                    languages: [
                        "javascript-plain",
                        "php-plain",
                        "css3-plain",
                        "mysql-plain"
                    ],
                    url: "https://mexicomarino.com/"
                },
                {
                    cover: musaiko,
                    title: "Musaiko - Interactivo",
                    text: "App intereactiva para la generación de diferentes mosaicos",
                    languages: [
                        "javascript-plain",
                        "php-plain",
                        "sass-original",
                        "mysql-plain"
                    ],
                    url: "https://musaiko.mx/interactivo"
                }
            ]
        }
    }

    render(){
        return (
            <div className="card text-dark border-0 rounded-1" style={{marginBottom: '100px'}} id="portafolio">
                <div className="card-body p-md-5">
                    <h4 className="font-weight-bold text-dark text-center">Portafolio</h4>
                    <hr className="mb-5"/>
                    <div className="row justify-content-center">

                        {
                            this.state.projects.map((project, key) => {
                                return(
                                    <CardPortafolio
                                        orden={(key % 2) ? 'invert' : ''}
                                        cover={project.cover}
                                        title={project.title}
                                        text={project.text}
                                        languages={project.languages}
                                        url={project.url}
                                        key={key}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Portafolio;