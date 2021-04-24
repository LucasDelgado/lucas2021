import React from 'react';
import siteConfig from '../siteConfig'

const Home = (props) => {

  return ( 
    <section className="home">
      <h1 className="home__title" >
        LucasDelgado <br/> 
        <span>{siteConfig.rol}</span>  
      </h1>
    </section>
  );
}
 
export default Home;

