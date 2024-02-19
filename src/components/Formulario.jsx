import React from 'react';
import CardNoticias from './CardNoticias';
import { useState, useEffect } from 'react';

const Formulario = () => {
[noticias, setNoticias]= useState([]);
[noticia, setNoticia]=useState({});
[categoriaSeleccionada, setCategoriaSeleccionada] = useState('general');
[paisSeleccionado, setPaisSeleccionado] = useState('us')

const urlAPI = 'https://newsapi.org/v2/top-headlines?country=${paisSeleccionado}&category=${categoriaSeleccionada}&apiKey=API_KEY (https://newsapi.org/v2/top-headlines?country=${paisSeleccionado}&category=${categoriaSeleccionada}&apiKey=API_KEY)';

useEffect(()=>{
  consultarAPI();
}, [])

const consultarAPI = async()=>{
  try{
    const respuesta = await fetch(urlAPI)
        const datos = await respuesta.json
        console.log(respuesta)
        console.log(datos[0])
    
    const noticiasObtenidas = datos.articles;
setNoticias(noticiasObtenidas);

setNoticia(noticiasObtenidas[0])
  }catch(error){
    console.log(error)
  }
   }

    return (
            <div className='container-fluid'>
            <h1 className='container text-center display-1 '>Noticias</h1>
<hr />
            <div className='container-fluid'> 
            <div className='row'>
<form action="">
<label className='col-8'>Buscar por categoria:</label>
<select class="form-select col-4"  onChange={(e)=> setCategoriaSeleccionada(e.target.value)}>
  <option selected>Open this select menu</option>
  <option value="business">Estados Unidos</option>
  <option value="entertainment">Entretenimiento</option>
  <option value="general">General</option>
  <option value="health">Salud</option>
  <option value="science">Ciencia</option>
  <option value="technology">Brasil</option>
  <option value="sports">Brasil</option>
</select>
<label className='col-8'>Buscar por pais:</label>
<select class="form-select col-4"  onChange={(e)=> setPaisSeleccionado(e.target.value)}>
  <option selected>Open this select menu</option>
  <option value="us">Estados Unidos</option>
  <option value="br">Brasil</option>
  <option value="ar">Argentina</option>
  <option value="br">Brasil</option>
</select>
</form>
                
          
          </div>
            
          <hr />
          <div className='row'>
<CardNoticias></CardNoticias>
          </div>
          </div>
        </div>
        
    );
};

export default Formulario;