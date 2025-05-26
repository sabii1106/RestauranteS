import React, {useState} from "react";
function Restaurante (props){
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const {nombre, direccion, tipo, UrlImagen}= props;
    const [preferencias, setPreferencias] = useState({
        likes: 0,
        dislikes: 0
    });
    //Podría ocurrir que esta linea no funcione, dado que 
    //react busca la optimización, y solo renderiza cuando
    //es necesario. Espera varias operaciones antes de renderizar
    //
    const handlerLike = () =>{
        //setLikes(likes + 1); //Forma correcta de modificar el estado
        setLikes(prevLikes =>{
            return (prevLikes + 1) //Forma correcta de modificar el estado, usando el valor previo
            }
        );
    }
    
    const handlerDislike = () => {
        setDislikes(prevDislikes => prevDislikes - 1);
    }
    
    return (
        <div className="Restaurante">
            <img src={UrlImagen} alt="" />
            <h1>{nombre}</h1>
            <h3>{direccion}</h3>
            <h4>{tipo}</h4>
            <h4>Me gusta:{likes}</h4>
            <h4>No me gusta:{dislikes}</h4>
            <button onClick={handlerLike}>👍</button>
            <button onClick={handlerDislike}>👎</button>
            
        </div>  
    );      
    
}

export default Restaurante;
