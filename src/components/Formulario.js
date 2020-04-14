import React, { useState } from 'react';

const Formulario = ({guardarArtistaYLetra}) => {


    const [ busqueda, guardarBusqueda ] = useState({
        artista: '',
        cancion: ''
    })

    const { artista, cancion } = busqueda;

    const [ error, guardarError ] = useState(false);


    // onChange

    const onChange = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }


    // onSubmit

    const onSubmit = e => {
        e.preventDefault();


        if(artista.trim() === '' || cancion.trim() === ''){
            guardarError(true);
            return;
        }

        guardarError(false);
        guardarArtistaYLetra(busqueda);
    }


    return ( 

        <div className="bg-info">
            { error ? <p className="alert alert-danger text-center p-2">Todos los campos son obligatorios</p> : null}
            <div className="container">
                <div className="row"></div>
            </div>

            <form 
                        onSubmit={onSubmit}
                        className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                    >

                <fieldset>
                            <legend className="text-center">Buscador Letras Canciones</legend>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Artista</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="artista"
                                            placeholder="Nombre Artista"
                                            onChange={onChange}
                                            value={artista}
                                        />
                                    </div>
                                    
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Canción</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="cancion"
                                            placeholder="Nombre Canción"
                                            onChange={onChange}
                                            value={cancion}
                                        />
                                    </div>
                                </div>
                            </div>

                            <button 
                                type="submit" 
                                className="btn btn-primary float-right"
                            >Buscar</button>
                        </fieldset>

                    </form>
                </div>


     );
}
 
export default Formulario;