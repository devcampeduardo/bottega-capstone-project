import React from 'react'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withRouter } from 'react-router';
import { Link, NavLink } from 'react-router-dom';

const NavigationComponent = props => {
  const dynamicLink = (route, linkText) => {
    return (
      <div className="nav-link-wrapper">
       <NavLink to={route} activeClassName='nav-link-active'>
        {linkText}
       </NavLink>
       </div>
    );
  };

  const handleSignOut = () => {
    axios.delete("https://capstone-eduardo-project.herokuapp.com/logout", { withCredentials: true })
    .then(reponse => {
      if (reponse.status === 200) {
        props.history.push("/");
        props.handleSuccessfulLogout();
      }
      return reponse.data
    }).catch(error => {
      console.log("Error", error)
    });
  }
    
    return (
      <div className="nav-wrapper">
        <div className="left-side">
          <div className="nav-link-wrapper">
        <NavLink exact to="/" activeClassName='nav-link-active'>
          Principal
        </NavLink>
       </div>

       <div className="nav-link-wrapper">
       <NavLink to="/acerca-de" activeClassName='nav-link-active'>
         Somos
       </NavLink>
       </div>

       <div className="nav-link-wrapper">
       <NavLink to="/contacto" activeClassName='nav-link-active'>
         Contacto
       </NavLink>
       </div>

       <div className="nav-link-wrapper">
       <NavLink to="/promocion" activeClassName='nav-link-active'>
         Promocion
       </NavLink>
       </div>

       

       {true ? "" : ""}

       {props.loggedInStatus === "" ? dynamicLink("/especiales", "Especiales"): null }
     </div>

        <div className="right-side" >
        <Link to='/auth'>REGISTRATE</Link> 
          

          {props.loggedInStatus === "" ? <a onClick={ handleSignOut }><FontAwesomeIcon icon="sign-out-alt" /></a> : null}
        </div>
      </div>
    );
  }


export default withRouter(NavigationComponent);