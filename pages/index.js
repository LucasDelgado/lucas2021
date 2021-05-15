import Card from '@components/Card';
import Title from '@components/Title';
import React from 'react';
import siteConfig from '../siteConfig'

const Home = (props) => {

  return (
    <div className="container"> 
      <section className="home">
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
      <section className="skills">
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

      <section className="blog">
        <Title
          title="Blog"/> 
          <p>Proximamente....</p>
      </section>
    </div>
  );
}
 
export default Home;

