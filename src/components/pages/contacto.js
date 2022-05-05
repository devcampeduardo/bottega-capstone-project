import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Contact from '../../../static/assets/images/auth/contact.jpg';

export default function () {
  return (
    <div className='content-page-wrapper'>
      <div
        className='left-column'
        style={{
          background: "url(" + Contact + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      <div style={{background:'#8a8a8a0a'}} className='right-column'>
      <h1 style={{color:'#ed0707'}}>CONTACTANOS!!</h1>
        <div className='contact-vinetas'>
          <div className='grupo-vinetas'>
            <div className='icon'>
            <FontAwesomeIcon icon="phone" />
              </div>
            
            <div className='text'>
              777-777-7777
            </div>
          </div>

          <div className='grupo-vinetas'>
            <div className='icon'>
            <FontAwesomeIcon icon="envelope" />
              </div>
            
            <div className='text'>
              traveling@tourist.com
            </div>
          </div>

          <div className='grupo-vinetas'>
            <div className='icon'>
            <FontAwesomeIcon icon="map-marked-alt" />
              </div>
            
            <div className='text'>
              Mor, Mexico
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

