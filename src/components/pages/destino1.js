import React from 'react';
import axios from 'axios';
import thanksPicture from "../../../static/assets/images/auth/thanks.jpg";
import { Link } from "react-router-dom";
import principal from './principal';


export default function () {


    const bannerStyles = {
        backgroundImage: "url(" + thanksPicture + ")",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center"

    }

    return (
        <div className='lugar-detail-wrapper'>
            <div className='banner' style={bannerStyles}> <Link to="/lugar27"></Link>
            </div>

            <div className='lugar-detail-publicidad-wrapper'>
                <div className='publicidad'>{ } <h2>Japon</h2> <p>¡Todos a Bordo! – Excursiones de cruceros en Japón</p></div>
            </div>

            <div className='bottom-content-wrapper'>
                <a href="https://www.japan.travel/es/mx/" className='site-link' target='_blank' onClick="" >
                    Visita
                </a>
            </div>
        </div>
    );
}






