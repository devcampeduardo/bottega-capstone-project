import React from 'react';
import giftPicture from "../../../static/assets/images/auth/gift.jpg";
import { Link } from "react-router-dom";

export default function () {
  return (
    <div className='content-page-wrapper'>
      <div className='left-column' 
      style={{
        background: "url(" + giftPicture + ") no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
      />
      <div style={{background:'#8a8a8a0a'}} className='right-column'>
      <div className='promocion-text-wrapper'>
            <h1 style={{color:'#ed0707'}}>50% Descuento</h1>
          </div>
        <h2>Elige tu destino!</h2>
        <div>
          <Link to="/especiales"><button className='btn-wrapper' style={{backgroundColor: '#ed0707', color:'#F5F5F5'}}>Mas información!!</button></Link>
        </div>
      </div>
    </div>
  );
}
