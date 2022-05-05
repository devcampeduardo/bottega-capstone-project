import React from 'react'
import specialImagen1 from "../../../static/assets/images/auth/imagen1.jpg"
import specialImagen2 from "../../../static/assets/images/auth/imagen2.jpg"
import specialImagen3 from "../../../static/assets/images/auth/imagen3.jpg"
import { Link } from "react-router-dom";

export default function () {
    return (
        <div style={{background:'#8a8a8a0a'}} className='title-wrapper'>
            <h1>
                <p>Planea tu próximo viaje y adquiere las mejores ofertas. En Tourist encontrarás lo más destacado en vuelos, tours, experiencias, hospedajes y mucho más sólo busca la opción que más quieras y prepara las maletas. </p>
                <div className='special-page-wrapper'>
                    <div className='special-imagen-background'
                        style={{
                            backgroundImage: "url(" + specialImagen1 + ")",
                            backgroundSize: "cover",
                            backgroundPosition: "center"
                        }}
                    >
                        <div className='special-text-wrapper'>
                            <h1>VENECIA</h1>
                        </div>
                    </div>

                    <div className='special-imagen-background'
                        style={{
                            backgroundImage: "url(" + specialImagen2 + ")",
                            backgroundSize: "cover",
                            backgroundPosition: "center"
                        }}
                    >

                        <div className='special-text-wrapper'>
                            <h1>JAPON</h1>
                        </div>
                    </div>

                    <div className='special-imagen-background'
                        style={{
                            backgroundImage: "url(" + specialImagen3 + ")",
                            backgroundSize: "cover",
                            backgroundPosition: "center"
                        }}
                    >

                        <div className='special-text-wrapper'>
                            <h1>BUENOS AIRES</h1>
                        </div>
                    </div>
                    <div className='card-text'>
                        <div className='offer-card-content'>
                            <span className='card-main-diver'>
                                <h3></h3>
                                <span className='driver-text'><h5>4 dias/ 3 noches</h5></span>
                            </span>
                            <div className='offer-card-title small-title'>Paquete a VENECIA</div>
                        </div>
                        <div className='offer-card-desciption'>Partiendo desde la Ciudad de Mexico</div>
                        <div className='offer-card-desciption'>
                            Hotel + Vuelo + Traslado + Asistencia
                        </div>
                        <div className='offer-card-pricebox'>
                            <div className='offer-card-description'>
                                Precio final por 2 personas
                            </div>
                            <span className='offer-card-pricebox-price-amount'>
                                <h1>MXN$28,294</h1>
                            </span>
                            <div className='offer-card-pricebox-description tax-message'>
                                Incluye impuestos y cargos
                            </div>
                        </div>
                        <Link to=""><button className='btn-wrapper' style={{ backgroundColor: '#ed0707', color: '#F5F5F5', margin: '40px' }}>Atrás</button><Link to="/formadepago"><button className='btn-wrapper' style={{ backgroundColor: '#8a8a8a', color: '#F5F5F5' }}>Pagar</button></Link></Link>
                    </div>

                    <div className='card-text'>
                        <div className='offer-card-content'>
                            <span className='card-main-diver'>
                                <h3></h3>
                                <span className='driver-text'><h5>10 dias/ 9 noches</h5></span>
                            </span>
                            <div className='offer-card-title small-title'>Paquete a JAPON</div>
                        </div>
                        <div className='offer-card-desciption'>Partiendo desde la Ciudad de Mexico</div>
                        <div className='offer-card-desciption'>
                            Hotel + Vuelo + Traslado + Asistencia
                        </div>
                        <div className='offer-card-pricebox'>
                            <div className='offer-card-description'>
                                Precio final por 2 personas
                            </div>
                            <span className='offer-card-pricebox-price-amount'>
                                <h1>MXN$30,834</h1>
                            </span>
                            <div className='offer-card-pricebox-description tax-message'>
                                Incluye impuestos y cargos
                            </div>
                        </div>
                        <Link to=""><button className='btn-wrapper' style={{ backgroundColor: '#ed0707', color: '#F5F5F5', margin: '40px' }}>Atrás</button><Link to="/formadepago"><button className='btn-wrapper' style={{ backgroundColor: '#8a8a8a', color: '#F5F5F5' }}>Pagar</button></Link></Link>
                    </div>

                    <div className='card-text'>
                        <div className='offer-card-content'>
                            <span className='card-main-diver'>
                                <h3></h3>
                                <span className='driver-text'><h5>6 dias/ 5 noches</h5></span>
                            </span>
                            <div className='offer-card-title small-title'>Paquete a BUENOS AIRES</div>
                        </div>
                        <div className='offer-card-desciption'>Partiendo desde la Ciudad de Mexico</div>
                        <div className='offer-card-desciption'>
                            Hotel + Vuelo + Traslado + Asistencia
                        </div>
                        <div className='offer-card-pricebox'>
                            <div className='offer-card-description'>
                                Precio final por 2 personas
                            </div>
                            <span className='offer-card-pricebox-price-amount'>
                                <h1>MXN$14,341</h1>
                            </span>
                            <div className='offer-card-pricebox-description tax-message'>
                                Incluye impuestos y cargos
                            </div>
                        </div>
                        <Link to=""><button className='btn-wrapper' style={{ backgroundColor: '#ed0707', color: '#F5F5F5', margin: '40px' }}>Atrás</button><Link to="/formadepago"><button className='btn-wrapper' style={{ backgroundColor: '#8a8a8a', color: '#F5F5F5' }}>Pagar</button></Link></Link>
                    </div>
                </div>
            </h1>
        </div>
    );
}
