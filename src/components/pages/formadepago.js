import React from 'react';
import paymentPicture from "../../../static/assets/images/auth/payment.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function () {
  return (
    <div className='content-page-wrapper'>
      <div className='left-column'
        style={{
          background: "url(" + paymentPicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      <div style={{background:'#8a8a8a0a'}} className='right-column-payment'>
        <div className='payment-text-wrapper'>
          <h2>Registro de pago con Tarjeta</h2>
          <div>
            <div className='payment-text-wrapper'>
              <FontAwesomeIcon icon='credit-card' />
              <label htmFor="numero">Numero</label>
              <input
                type="text"
                name="Numero de tarjeta"
                placeholder='16 digitos'>
              </input>
            </div>

            <div className='payment-text-wrapper'>
              <FontAwesomeIcon icon='user' />
              <label htmlFor='nombre'>Nombre</label>
              <input
                type="text"
                name="Nombre titular de tarjeta"
                placeholder='titular'>
              </input>
            </div>

            <div className='payment-text-wrapper'>
              <FontAwesomeIcon icon='info' />
              <label htmlFor='info'>Fecha de expiracion</label>
              <input
                type="text"
                name="Fecha de expiracion"
                placeholder='expiracion'>
              </input>
            </div>

            <div className='payment-text-wrapper'>
              <FontAwesomeIcon icon='lock' />
              <label htmlFor='cvc'>CVC</label>
              <input
                type="text"
                name="Digitos de seguridad"
                placeholder='4 digitos'>
              </input>
            </div>

            <div className='payment-text-wrapper'>
              <FontAwesomeIcon icon='city' />
              <label htmlFor='ciudad'>Ciudad</label>
              <input
                type="text"
                name="Ciudad"
                placeholder='lugar de origen'>
              </input>
            </div>

            <div className='payment-text-wrapper'>
              <FontAwesomeIcon icon='dollar' />
              <label htmlFor='total'>Total</label>
              <input
                type="text"
                name="total"
                placeholder='Monto a pagar'>
              </input>
            </div>
          </div>

        </div>
        <Link to="/pagoexitoso"><button className='btn-wrapper' style={{ backgroundColor: '#ed0707', color: '#F5F5F5' }}>Enviar Pago</button></Link>
      </div>
    </div>
  );
}
