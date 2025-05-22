import React, {useState} from "react";
function Restaurante (props){

    handlerLike = () => setLikes(likes + 1); //Forma correcta de modificar el estado
    
    const [likes, setLikes] = useState(0);
    
    
    const {nombre, direccion, tipo, UrlImagen}= props;
    return (
        <div className="Resta">
            <img src={UrlImagen} alt="" />
            <h1>{nombre}</h1>
            <h3>{direccion}</h3>
            <h4>{tipo}</h4>
            <h4>{likes}</h4>
            
            <button onClick={handlerLike}>Like</button>
            
        </div>  
    );      
    
}

export default Restaurante;