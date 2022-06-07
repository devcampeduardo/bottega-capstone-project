import React, { useState } from 'react';
import { Formik, Field } from 'formik';
//import { useForm } from "react-hook-form";
import axios from 'axios';
import principal from './principal';


const Formulario = () => {
    const [formularioEnviado, cambiarFormularioEnviado] =useState(false);    
    return  (
        <Formik
        initialValues={{
            nombre: '',
            email: ''
        }}
        validate={(valores) =>{
            let errores = {};
            
            // NAME VALIDATION
            if(!valores.nombre){
                errores.nombre = 'Por favor ingrese un nombre'
            } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
                errores.nombre = 'El nombre solo puede contener letras y espacios'
            }

            // EMAIL VALIDATION

            if(!valores.email){
                errores.email = 'Por favor ingrese un email'
            } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)) {
                errores.email = 'El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.'
            }

            return errores;
        }}
        onSubmit={(valores, {resetForm}) => {
            resetForm();
            console.log('Formulario enviado');
            cambiarFormularioEnviado(true);
            setTimeout(() => cambiarFormularioEnviado(false), 5000);
        }}
        >
            {( {values, touched, errors, handleSubmit, handleChange, handleBlur} ) => (
            <form className='formulario' onSubmit={handleSubmit}>
                <h1>Cuentanos tu experiencia!!</h1>
                <div>
                    <label htmlFor='nombre'></label>
                    <input 
                    type='text' 
                    id='nombre' name='nombre' 
                    placeholder='Nombre' 
                    value={values.nombre}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    />
                    {touched.nombre && errors.nombre && <div className='error'>{errors.nombre}</div>}
                </div>
                <div>
                    <label htmlFor='email'></label>
                    <input 
                    type='text' 
                    id='email' 
                    name='email' 
                    placeholder='E-mail' 
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    />
                    {touched.email && errors.email && <div className='error'>{errors.email}</div>}
                </div>

                <div>
                    <Field name='pais' as='select'>
                        <option value='mexico'>Mexico</option>
                        <option value='japon'>Japon</option>
                        <option value='Espana'>Espana</option>
                        <option value='London'>London</option>
                        <option value='usa'>USA</option>
                        <option value='argentina'>Argentina</option>
                        <option value='autralia'>Australia</option>
                        <option value='italia'>Italia</option>
                    </Field>
                </div>

                <div>
                    <label>
                        <Field type='radio' name='sexo' value='hombre' /> Hombre
                    </label>
                    <label>
                        <Field type='radio' name='sexo' value='mujer' /> Mujer
                    </label>
                </div>

                <div>
                    <Field name='mensaje' as='textarea' rows='10' cols='50' placeholder='Mensaje' />
                </div>

                <button type='submit'>Send</button>
                {formularioEnviado && <h1 className='exito'>Formulario enviado con exito!</h1>}
            </form>
            )}
        </Formik>
    );
}

export default Formulario;



