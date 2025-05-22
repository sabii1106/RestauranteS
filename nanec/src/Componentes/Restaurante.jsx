import React from "react";
import "./Restaurante.css";
class Restaurante extends React.Component{
    //El constructor solo se ejecuta una vez al inicio, y es para dar valor a las variables de estado
    constructor(props){
        super(props);
        this.state={
            //Variables de estado llamada likes
            likes: 0,          
        }
        this.handlerLike = this.handlerLike.bind(this); //Se usa para que el this dentro de la funcion se refiera a la clase Restaurante
    }

    //handlerLike(){
        //this.state.likes = this.state.likes + 1;  //Forma incorrecta de modificar el estado
        //this.setState({likes: this.state.likes + 1}); //Forma correcta de modificar el estado
    //}
    handlerLike = () => this.setState({likes: this.state.likes + 1}); 
    render(){

        const {nombre, direccion, tipo, UrlImagen}= this.props;
        return (
            <div className="Resta">
                <img src={UrlImagen} alt="" />
                <h1>{nombre}</h1>
                <h3>{direccion}</h3>
                <h4>{tipo}</h4>
                <h2>{this.state.likes}</h2>
                <button onClick={this.handlerLike}>Like</button>
                
            </div>  
        );      
    }
}

export default Restaurante