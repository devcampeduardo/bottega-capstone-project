import React from 'react'
import About from '../../../static/assets/images/auth/about.jpg';

export default function () {
  return (
    <div className='content-page-wrapper'>
      <div 
      className='left-column'
      style={{
        background: "url(" + About + ") no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }} 
      />
      <div style={{background:'#8a8a8a0a'}} className='right-column'>
        <h1 style={{color:'#ed0707'}}>SOMOS UNA EMPRESA...</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt fuga accusantium excepturi quia, voluptates obcaecati nam in voluptas perferendis velit harum dignissimos quasi ex? Tempore repellat quo doloribus magnam.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt fuga accusantium excepturi quia, voluptates obcaecati nam in voluptas perferendis velit harum dignissimos quasi ex? Tempore repellat quo doloribus magnam.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt fuga accusantium excepturi quia, voluptates obcaecati nam in voluptas perferendis velit harum dignissimos quasi ex? Tempore repellat quo doloribus magnam.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt fuga accusantium excepturi quia, voluptates obcaecati nam in voluptas perferendis velit harum dignissimos quasi ex? Tempore repellat quo doloribus magnam.</p>
      </div>
    </div>
  );
}
