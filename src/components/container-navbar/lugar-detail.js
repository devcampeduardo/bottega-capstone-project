import React, { Component } from 'react'
import axios from 'axios';
import ThumbBanner from '../../../static/assets/images/auth/mexico.jpg';
import { Link } from 'react-router-dom';



export default class LugarDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Navmain: {}
    }
  }

  componentWillMount() {
    this.getNavmain();
  }


  getNavmain() {
    axios.get(`http://127.0.0.1:5000/lugar/${this.props.match.params.slug}`, { withCredentials: true }
    )
      .then(response => {
        this.setState({
          Navmain: response.data.nav_main
        });
      })
      .catch(error => {
        console.log("getnavmain error", error);
      });
  }

  getData() {
    axios.get(`http://127.0.0.1:5000/lugar/${this.props.match.params.slug}`
    )
      .then(response => {
        this.setState({
          data: response.data
        });
      })
      .catch(error => {
        console.log("getdataerror", error);
      });
  }

  render() {
    const {
      nombre,
      paquete,
      publicidad,
      thumb_banner,
      thumb_image_url,
      logo_url,
      url,
      img

    } = this.state.Navmain;

    const bannerStyles = {
      backgroundImage: "url(" + ThumbBanner + ")",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center"
        
}

    const logoStyles = {
      width: "200px"
    }

    return (
      <div className='lugar-detail-wrapper'>
        <div className='banner' style={bannerStyles}>
          <img src={logo_url} style={logoStyles} />
        </div>

        <div className='lugar-detail-publicidad-wrapper'>
          <div className='publicidad'>{publicidad} <h2>Mexico</h2> <p>Un sitio mágico donde encontrarás historia</p></div>
        </div>

        <div className='bottom-content-wrapper'>
          <a href="https://www.visitmexico.com/" className='site-link' target='_blank' onClick="">
            Visita {nombre}
          </a>
        </div>
      </div>
    );
  }
}
