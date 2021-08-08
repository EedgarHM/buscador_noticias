import React from 'react';
import styles from './Formulario.module.css';
import useSelect from '../hooks/useSelect';
import PropTypes from 'prop-types';

const Formulario = ({guardarCategoria}) => {

    const OPCIONES = [
        {value : 'general', label : 'General'},
        {value : 'business', label : 'Negocios'},
        {value : 'entertainment', label : 'Entretenimiento'},
        {value : 'health', label : 'Salud'},
        {value : 'science', label : 'Ciencia'},
        {value : 'sports', label : 'Deportes'},
        {value : 'technology', label : 'Tecnologia'}
    ]

 
    // Utilizando el custom hook
    const [categoria, SelectNoticias] = useSelect('general',OPCIONES);

    // Al dar submit passar la categoria al app.js
    const buscarNoticias = e => {
        e.preventDefault();
        guardarCategoria(categoria)
    }

    return (  
        <div className={`row ${styles.buscador}`}>
            <div className="col s12 m8 offset-m2">
                <form onSubmit={buscarNoticias}>
                    <h2 className={styles.heading}>Encuentra noticias por categoria</h2>
                    <SelectNoticias/>
                    <div className="input-field col s12">
                        <input className={`btn-large amber darken-2 ${styles['btn-block']}`}
                               type="submit"
                               value="Buscar"/>
                    </div>
                </form>
            </div>
        </div>
    );
}
Formulario.propypes = {
    guardarCategoria:PropTypes.func.isRequired
}
 
export default Formulario;