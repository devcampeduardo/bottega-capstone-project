import React, { Component } from 'react'
import Login from '../auth/login';
//put them in the static assets directory
import loginImage from '../../../static/assets/images/auth/login.jpg';
// import login component


export default class auth extends Component {
  constructor(props) {
    super(props);

    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    this.handleUnsuccessfulAuth = this.handleUnsuccessfulAuth.bind(this);
  }

handleSuccessfulAuth() {
  this.props.handleSuccessfulLogin();
  this.props.history.push("/")
}

handleUnsuccessfulAuth() {
  //this.props.handleUnsuccessfulLogin();
}

  render() {
    return (
      <div className='auth-page-wrapper'>
        <div className='left-column' 
        style={{
          backgroundImage: `url(${loginImage})`//variable direct path
        }}
      />
       

        <div className='right-column'>
          <Login 
            handleSuccessfulAuth={this.handleSuccessfulAuth}
            handleUnsuccessfulAuth={this.handleUnsuccessfulAuth}
          />
        </div>
      </div>
    );
  }
}
