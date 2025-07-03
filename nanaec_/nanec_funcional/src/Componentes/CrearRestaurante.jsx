import { Link, useNavigate } from "react-router-dom";

function CrearRestaurante(props) {
    const navigate = useNavigate();

    const handlerInsertar = () => {
        const nuevoRestaurante = {
            nombre: props.state.nombre,
            direccion: props.state.direccion,
            tipo: props.state.tipo,
            reputacion: props.state.reputacion,
            UrlImagen: props.state.UrlImagen
        };
        props.agregarRestaurante(nuevoRestaurante);
        alert("Restaurante creado exitosamente");
        props.setState({ nombre: "", direccion: "", tipo: "", reputacion: "", UrlImagen: "" });
    };

    const handlerActualizar = () => {
        const restauranteActualizado = {
            id: props.state.id,
            nombre: props.state.nombre,
            direccion: props.state.direccion,
            tipo: props.state.tipo,
            reputacion: props.state.reputacion,
            UrlImagen: props.state.UrlImagen
        };
        props.onActualizar(props.state.id, restauranteActualizado);
        alert("Restaurante actualizado exitosamente");
        props.setState({ nombre: "", direccion: "", tipo: "", reputacion: "", UrlImagen: "" });
        navigate("/lista");
    };

    const handleInicio = () => {
        navigate("/");
    };

    const handleLista = () => {
        navigate("/lista");
    };

    const esEdicion = !!props.state.id;

    return (
        <div className="CrearRestaurante">
            <p>Se utiliza el hook useNavigate</p>
            <button onClick={handleInicio}>Volver al Inicio</button>
            <button onClick={handleLista}>Ver lista</button>
            <br /><br />
            <p>Se utiliza Link</p>
            <Link to="/">
                <button>Volver al Inicio</button>
            </Link>
            <Link to="/lista">
                <button>Ver Lista de Restaurantes</button>
            </Link>

            <label>Nombre:</label>
            <input type="text" value={props.state.nombre} onChange={(e) => props.setState({ ...props.state, nombre: e.target.value })} />
            <label>Dirección:</label>
            <input type="text" value={props.state.direccion} onChange={(e) => props.setState({ ...props.state, direccion: e.target.value })} />
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
            <input type="number" value={props.state.reputacion} onChange={(e) => props.setState({ ...props.state, reputacion: e.target.value })} />
            <label>URL Imagen:</label>
            <input type="text" value={props.state.UrlImagen} onChange={(e) => props.setState({ ...props.state, UrlImagen: e.target.value })} />

            {/* ...categoría, etc... */}

            {esEdicion ? (
                <button onClick={handlerActualizar}>Actualizar</button>
            ) : (
                <button onClick={handlerInsertar}>Insertar</button>
            )}
        </div>
    );
}

export default CrearRestaurante;
