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
          <p>I`m a Software Engineer in
            <strong>Mercado Libre.</strong>
          </p>
          <p>
            Main skills: 
            <strong>REACT.JS, NODE.JS, GOLANG</strong>
          </p>
          <p>
            Education:
            <strong>Systems Analyst ORT</strong> 
          </p>
        </article>
      </section>
    </div>
  );
}
 
export default Home;

