import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navmain extends Component {
    constructor(props) {
        super(props);

        this.state = {
            navMainclass: ""
        }
    }

    handleMouseEnter() {
        this.setState({ navMainclass: 'image-blur' })
    }

    handleMouseLeave() {
        this.setState({ navMainclass: '' });
    }

    render() {
        const { id, publicidad, thumb_image_url, logo_url } = this.props.nav;
        return (
            <Link to= {`/lugar/${id}`}>
                <div className="nav-item-wrapper"
                    onMouseEnter={() => this.handleMouseEnter()}
                    onMouseLeave={() => this.handleMouseLeave()}

                >
                    <div
                        className={"nav-img-background " + this.state.navMainclass}
                        style={{
                            backgroundImage: "url(" + thumb_image_url + ")"
                        }}
                    />
                    <div className="img-text-wrapper">
                        <div className="logo-wrapper">
                            <img src={logo_url} />
                        </div>

                        <div className="subtitle">{publicidad}</div>
                    </div>
                </div>
            </Link>
        );
    }
}