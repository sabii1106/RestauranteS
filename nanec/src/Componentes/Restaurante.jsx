import React from "react";
import "./Restaurante.css";
class Restaurante extends React.Component{
    
    render(){

        const {nombre, direccion, tipo, UrlImagen}= this.props;
        return (
            <div className="Resta">
                <h1>{nombre}</h1>
                <h3>{direccion}</h3>
                <h4>{tipo}</h4>
                <img src={UrlImagen} alt="" />
            </div>  
        );      
    }
}

export default Restaurante