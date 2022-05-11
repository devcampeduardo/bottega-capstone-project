import React, { Component } from "react";
import axios from "axios";

import Navmain from "./nav.main";

export default class CatalogoContainer extends Component {
    constructor() {
        super();

        this.state = {
            containerTitle: "Bienvenido a Tourist",
            isCargando: false,
            data: []
        };

        this.handleFilter = this.handleFilter.bind(this);
    }

    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(nav => {
                return nav.category === filter;
            })
        })
    }

    getnavmain() {
        axios
          .get('https://capstone-eduardo-project.herokuapp.com/catalogo')
          .then(response => {
                this.setState({
                    data: response.data.catalogo
            });
          })
          .catch(error => {
            console.log(error);
        });
      }

    navmain() {
        return this.state.data.map(nav => {
            return ( 
             <Navmain key={nav.id} 
             nav={nav} />
            );
        });
    }

    componentDidMount() {
        this.getnavmain();
    }

    render() {
        if (this.state.isCargando) {
            return <div>Cargando....</div>;
        }

        return (
            <div className="nav-items-wrapper">
                <button className="btn" onClick={() => this.handleFilter('Cultura')}>
                 Cultura
                </button>
                <button className="btn" onClick={() => this.handleFilter('Aventura')}>
                 Aventura
                </button>
                <button className="btn" onClick={() => this.handleFilter('Diversion')}>
                 Diversion
                </button>

                    {this.navmain()}
                </div>

           
        );
    }
}