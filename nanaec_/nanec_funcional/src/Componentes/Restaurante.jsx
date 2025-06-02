import React, {useState} from "react";
import "./Restaurante.css";
function Restaurante (props){
    
    const {nombre, direccion, tipo, UrlImagen, SumarLikes,RestarDislikes, reputacion}= props;

    const [preferencias, setPreferencias] = useState({
        likes: 0,
        dislikes: 0,
    });
    //Podría ocurrir que esta linea no funcione, dado que 
    //react busca la optimización, y solo renderiza cuando
    //es necesario. Espera varias operaciones antes de renderizar
    //
    const handlerLike = () =>{
        //setLikes(likes + 1); //Forma correcta de modificar el estado
        setPreferencias(prevPreferencias => {
            
                //Se crea una copia del estado actual   
            return{...prevPreferencias, likes: prevPreferencias.likes + 1}
        });
        SumarLikes();
    }


        /*
        setLikes(prevLikes =>{
            return (prevLikes + 1) //Forma correcta de modificar el estado, usando el valor previo
            }
        );
        */
    
    
    const handlerDislike = () => {
        setPreferencias(prevPreferencias => {
            //setDislikes(prevDislikes => prevDislikes - 1);
            return {...prevPreferencias, dislikes: prevPreferencias.dislikes - 1}
            
        });
        RestarDislikes();
    }
    
    return (
        <div className="Restaurante">
            <img src={UrlImagen} alt="" />
            <h1>{nombre}</h1>
            <h3>{direccion}</h3>
            <h4>{tipo}</h4>
            <h4>Reputación: {reputacion}</h4>
            <h4>Me gusta:{preferencias.likes}</h4>
            <h4>No me gusta:{preferencias.dislikes}</h4>
            <button onClick={handlerLike}>👍</button>
            <button onClick={handlerDislike}>👎</button>
            
        </div>  
    );      
    
}

export default Restaurante;
