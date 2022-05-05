import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

import CatalogoContainer from '../container-navbar/catalogo-container';
import LugarDetail from '../container-navbar/lugar-detail';
import Destino1 from './destino1';

export default function() {
  return (
    <div>
        <CatalogoContainer /> 
    </div>
  );
}
