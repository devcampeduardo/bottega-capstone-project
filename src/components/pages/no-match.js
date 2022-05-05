import React from 'react'
import { Link } from 'react-router-dom'

export default function() {
  return (
    <div>
      <h2>Lo siento página no encontrada</h2>
      <Link to="/">Regresa a la página principal</Link>
    </div>
  );
}
