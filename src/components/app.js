import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import { library  } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt, faPhone,faEnvelope,
  faMapMarkedAlt, 
  faLock,
  faCreditCard,
  faUser,
  faInfo,
  faCity, faDollarSign} from "@fortawesome/free-solid-svg-icons";
import jwt_decode from "jwt-decode";

import NavigationContainer from './container-navbar/navigation/navigation-container';
import Principal from './pages/principal';
import Acercade from './pages/acercade';
import Contacto from './pages/contacto';
import Promocion from './pages/promocion';
import LugarDetail from "./container-navbar/lugar-detail";
import Especiales from './pages/especiales';
import Formadepago from './pages/formadepago';
import Auth from "./pages/auth";
import NoMatch from "./pages/no-match";
import '../style/nav.scss';
import pagoexitoso from './pages/pagoexitoso';
import Tellus from "./pages/tellus";

library.add(faSignOutAlt, faPhone, faEnvelope,
  faMapMarkedAlt, faLock, faCreditCard, faUser, faInfo, faCity, faDollarSign);


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedInStatus: ""
    };

    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
    this.handleUnsuccessfulLogin = this.handleUnsuccessfulLogin.bind(this);
    this.handleSuccessfulLogout = this.handleSuccessfulLogout.bind(this)
  }

  handleSuccessfulLogin() {
    this.setState({
      loggedInStatus: "SESION_ACTIVA"
    })
  }

  handleUnsuccessfulLogin() {
    this.setState({
      loggedInStatus: "SESION_INACTIVA"
    })
  }

  handleSuccessfulLogout() {
    this.setState({
      loggedInStatus: "NO_HAY SESION"
    })
  }
  
  

  autorizadasPaginas() {
    return [
      <Route key="especiales" path='/especiales' component={Especiales} />
    ];
  }

  render() {
    return (
      <div className="container">
        <Router>
          <div>
          <NavigationContainer loggedInStatus={this.state.loggedInStatus}
          handleSuccessfulLogout={this.handleSuccessfulLogout}
          />
         
          

          <Switch>
            <Route exact path="/" component={Principal} />
            
            
            
            <Route 
            path="/auth" 
            component={Auth}
            render={props => (
              <Auth
              {...props}
              handleSuccessfulLogin={this.handleSuccessfulLogin}
              handleUnsuccessfulLogin={this.handleUnsuccessfulLogin}
              />
            )} 
            />
          
            <Route path="/acerca-de" component={Acercade} />
            <Route path="/contacto" component={Contacto} />
            <Route path="/promocion" component={Promocion} />
            <Route path="/formadepago" component={Formadepago} />
            <Route path="/pagoexitoso" component={pagoexitoso} />
            <Route path="/tellus" component={Tellus} />
            
          
            
          
            {this.state.loggedInStatus === "" ? this.autorizadasPaginas() : null}
            
            <Route exact path="/lugar/:slug" component={LugarDetail} 
            />
            <Route component={NoMatch} />
      

          </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
