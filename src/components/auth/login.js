import React, { Component } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import jwt_decode from "jwt-decode";
import { Link } from 'react-router-dom';

var token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY0NzU2NDMyOSwianRpIjoiMGNmODUzZDktMWQyMC00MWVlLTg0Y2ItZWQ3NWM2NWZmNTMyIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6ImVkZXJAdG91cmlzdC5jb20iLCJuYmYiOjE2NDc1NjQzMjksImV4cCI6MTY0NzU2NTIyOX0.SSW0OYMYFttF_6n08mfJGdst9FcsiC-UBZkMMFR40uE/// jwt token";

var decode = jwt_decode(token)

console.log(decode)

var decodeHeader = jwt_decode(token, { header: true });
console.log(decodeHeader);

sessionStorage.setItem("email", "password");




export default class Login extends Component {
  constructor(props) {
    super(props);


    this.state = {
      email: "",
      password: "",
      errorText: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //capture the value to update the state
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
      errorText: ""
    });
  }

  handleSubmit(event) {
    axios
      .post(
        "http://localhost:3000/lugar",
        {
          email: this.state.email,
          password: this.state.password

        },
      )
      .then(response => {
        if (response.data.status === 'created') {
          this.props.handleSuccessfulAuth();
        } else {
          this.setState({
            errorText: "Incorrecto email o password"
          })
          this.props.handleUnsuccessfulAuth();
        }
      }).catch(error => {
        this.setState({
          errorText: ""
        });
        this.props.handleUnsuccessfulAuth();
      });
    event.preventDefault();
  }
  //Update the form
  render() {
    return (
      <div>
        <h1 style={{color:'#ed0707'}}>BIENVENIDO A TOURIST</h1>

        <div>{this.state.errorText}</div>

        <h2>{this.state.email}</h2>

        <form onSubmit={this.handleSubmit} className='auth-form-wrapper'>
          <div className='form-group'>
            <FontAwesomeIcon icon="envelope" style={{color:'#ed0707'}}/>
            <input
              type="email"
              name="email"
              placeholder='email'
              value={this.state.email}
              onChange={this.handleChange}//control the state
            />
          </div>
          <div className='form-group'>
            <FontAwesomeIcon icon="lock" style={{color:'#ed0707'}}/>
            <input
              type="password"
              name="password"
              placeholder='password'
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>

            <button className='btn' type='submit'><Link to='/especiales' style={{color:'#f5f5f5', textDecoration:'auto'}}>Login</Link></button>
          
        </form>
      </div>
    )
  }
}



