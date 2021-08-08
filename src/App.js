import React , {useState,useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';



function App() {
  // Definir la categoria
  const [categoria, guardarCategoria] = useState('');
  const [noticias, guardarNoticias] = useState([]);

  useEffect(()=>{
    const consultarApi = async () =>{
        const key = "2802951e7f7a400597be56b8a73e0ade";
        const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=${key}`;
        const response = await fetch(url);
        const noticias = await response.json();
        guardarNoticias(noticias.articles);
      }
      consultarApi() 
  },[categoria])

  return (
    <>
       <Header titulo="Noticias de Mexico"/>
       <div className="container  white">
         <Formulario guardarCategoria={guardarCategoria}/>
         <ListadoNoticias noticias={noticias}/>
       </div>
    </>
   
  );
}

export default App;
