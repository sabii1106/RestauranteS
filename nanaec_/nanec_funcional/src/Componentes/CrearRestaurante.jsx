import React, {useState} from "react";
import Restaurante from "./Restaurante";

function CrearRestaurante (props){
   
        const handlerInsertar = () => {
            const nuevoRestaurante = {
                nombre: props.state.nombre,
                direccion: props.state.direccion,
                tipo: props.state.tipo,
                reputacion: props.state.reputacion
            };
            props.agregarRestaurante(nuevoRestaurante);
            // Opcional: limpiar formulario (props.setState({nombre:"", direccion:"", tipo:"", reputacion:""}))
            }


        return (    
        <div className="CrearRestaurante">
            <label>Nombre:</label>
            <input type="text" value={props.state.nombre} onChange={(e) => props.setState({...props.state, nombre: e.target.value})} />
            <label>Dirección:</label>
            <input type="text" value={props.state.direccion} onChange={(e) => props.setState({...props.state, direccion: e.target.value})} />
            <label>Tipo:</label>
            <select
                value={props.state.tipo}
                onChange={(e) => props.setState({ ...props.state, tipo: e.target.value })}
            >
                <option value="">Seleccione un tipo</option>
                <option value="Italiana">Italiana</option>
                <option value="China">China</option>
                <option value="Mexicana">Mexicana</option>
                <option value="Japonesa">Japonesa</option>
                <option value="Vegetariana">Vegetariana</option>
            </select>
            <label>Reputación:</label>
            <input type="number" value={props.state.reputacion} onChange={(e) => props.setState({...props.state, reputacion: e.target.value})} />
            
            <button onClick={handlerInsertar}>Insertar</button>
            
        </div>  
    );      
    
}

export default CrearRestaurante;
