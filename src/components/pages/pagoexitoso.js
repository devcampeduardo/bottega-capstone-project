import React from 'react';
import thanksPicture from "../../../static/assets/images/auth/thanks.jpg";
import { Link } from "react-router-dom";

export default function () {
  return (
    <div className='content-page-wrapper'>
      <div className='left-column' 
      style={{
        background: "url(" + thanksPicture + ") no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
      />
      <div style={{background:'#8a8a8a0a'}} className='right-column'>
      <div className='promocion-text-wrapper'>
            <h2 style={{color:'#ed0707'}}>Feliciades tu pago se registró con éxito!!</h2>
          </div>
        <h2 style={{color: "#ed0707"}}>Gracias por tu preferencia</h2>
        <div>
          <Link to=""><button className='btn-wrapper' style={{backgroundColor: '#ed0707', color:'#f5f5f5'}}>Regresar</button></Link>
        </div>
      </div>
    </div>
  );
}
