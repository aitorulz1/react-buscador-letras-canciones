import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario'
import axios from 'axios';

import Cancion from './components/Cancion'
import Info from './components/Info';







function App() {

  const [ artistaYLetra, guardarArtistaYLetra ] = useState('');
  const [ letra, guardarLetra ] = useState('');
  const [ info, guardarInfo ] = useState({});

  useEffect(() => {

    const consultarAPI = async() => {

      const { artista, cancion } = artistaYLetra;
      const url  = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;

      const [ letra, info ] = await Promise.all([
        axios(url),
        axios(url2)
      ]);
      
      guardarLetra(letra.data.lyrics);
      guardarInfo(info);

    }
    consultarAPI();
  }, [artistaYLetra])

  

  return (
      <Fragment>
            <Formulario 
              guardarArtistaYLetra={guardarArtistaYLetra}
            />

              <div className="container mt-5">
                <div className="row">
                  <div className="col-md-6">

                    <Info
                        info={info}
                    />

                  </div>
                  <div className="col-md-6">

                      <Cancion 
                        letra={letra}
                      />

                  </div>
                </div>
              </div>

      </Fragment>
  );
}

export default App;
