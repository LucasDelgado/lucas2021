import React from 'react';
import Head from 'next/head'
import Footer from './Footer';
import Header from './Header';

import site from '../../siteConfig.json'



const Layout = (props) => {
    let {children} = props;
    let {name, description, url} = site;
    return (
        <>
            <Head>
                <meta name="language" content="es"/>
	            <meta name="title" content={name}/>
                <meta name="description" content={description}/>
	            <link rel="canonical" href={url}/>
                {/*OPEN GRAPH */}
                <meta property="og:title" content={name} />
                <meta property="og:type" content="website" />
                <meta property="og:description" content={description} />
                {/*<meta property="og:image" content="https://lucasdelgado.com.ar/img/logo-ld2-fb.png" />*/}      
                <meta property="og:url" content={url} />
                <title>{name}</title>
            </Head>
            <Header/>
            <main itemScope itemType="http://schema.org/LocalBusiness">
                {children}
            </main>
            <Footer/>
        </>
    );
}
 
export default Layout;