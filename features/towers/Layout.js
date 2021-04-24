import React from 'react';
import Head from 'next/head'

import Footer from './Footer';
import Header from './Header';
import site from '../../siteConfig.json'
import ButtonWapp from '@components/buttonWapp';



const Layout = (props) => {
    let {children} = props;
    let {name, rol, description, url} = site;
    return (
        <>
            <Head>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
                <meta name="language" content="es"/>
	            <meta name="title" content={name + " " + rol}/>
                <meta name="description" content={description}/>
	            <link rel="canonical" href={url}/>
                {/*OPEN GRAPH */}
                <meta property="og:title" content={name + " " + rol} />
                <meta property="og:type" content="website" />
                <meta property="og:description" content={description} />
                {/*<meta property="og:image" content="https://lucasdelgado.com.ar/img/logo-ld2-fb.png" />*/}      
                <meta property="og:url" content={url} />
                <title>{name + " " + rol}</title>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;600&display=swap" rel="stylesheet"/>
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            </Head>
            
            <Header/>
            <main itemScope itemType="http://schema.org/LocalBusiness">
                {children}
            </main>
            <Footer/>
            
            <ButtonWapp/>

        </>
    );
}
 
export default Layout;