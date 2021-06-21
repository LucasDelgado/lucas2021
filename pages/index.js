import Card from '@components/Card';
import Title from '@components/Title';
import ReactMarkdown from 'react-markdown'

import React, { useEffect, useState } from 'react';
import siteConfig from '../siteConfig'

const Home = (props) => {
  //==========API==============
  const [dataBlogs, setDataBlogs] = useState(null);
  useEffect( ()=>{

    async function getBlogs(){
      try{
        const response = await fetch('https://cmslucas.herokuapp.com/blogs');
        console.log(response);
        const data = await response.json();
        if(data.statusCode == 200){
          setDataBlogs(data);   
          console.log("sdasdas" +data);       
        }
       
      }catch(error){
        
      }
    }

    getBlogs();
    
  }, [])
  let dataIsEmpty = dataBlogs == null;

  //===========================

  return (
    <div className="container">   
      <section className="home --mb-56">
        <h1 className="home__title" >
          Lucas Delgado <br/> 
          <span>{siteConfig.rol}</span>  
        </h1>
        <article className="home__descripPrincipal">
          <p>Trabajo como desarrollador Web FrontEnd, actualmente en:
            <strong> DIARIO LA NACION.</strong>
          </p>
          <p>
            Con conocimientos solidos en: 
            <strong>REACT.JS, HTML5, CSS3, JS, SASS, JAVA, SEO, UX, RESPONSIVE.</strong>
          </p>
          <p>
            Me encuentro cursando el 2do año de la carrera:
            <strong>Analista de Sistemas en la ORT.</strong> 
          </p>
        </article>
      </section>

      <section className="skills --mb-56">
        <Title
          title="Cursos certificados"/> 
        <div className="grid grid-1-mobile">
          <Card
            title="DISEÑADOR UX"
            descrip="Curso en donde implementamos el desarrollo UX de toda una app. Pasando por todos los procesos que esto conlleva."
            place="en CODERHOUSE"/>

          <Card
            title="JS Vanilla"
            descrip="En esta ocasión vimos lo nuevo de js y métodos para implementarlo y dejar de usar Jquery."
            place="en EDUCACIONIT"/>

          <Card
            title="Desarrollo Web"
            descrip="Vimos a fondo el desarrollo Responsive, jQuery, Bootstrap, Forms, y todo lo basico para comenzar a trabajar en la web."
            place="en CODERHOUSE"/>
        </div>
      </section>

      <section className="blog --mb-56">
        <Title
          title="Blog"/> 
          { dataIsEmpty ?
            <div>Cargando....</div>
            : 
            <article>
              <h2>{data[0].title}</h2>
              <ReactMarkdown  components={{p: ({node, ...props}) => <p className="text" {...props} />, img:({node, ...props}) => <img src={`https://cmslucas.herokuapp.com${props.src}`} /> }}>
                {data[0].articulo}
              </ReactMarkdown>
            </article>
          }

      </section>

      <section className="contact --mb-56">
        <Title
          title="Contacto"/> 
      </section>
    </div>
  );
}
 
export default Home;

