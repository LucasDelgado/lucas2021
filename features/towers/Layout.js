import React from 'react';
import Head from 'next/head'
import Footer from './Footer';
import Header from './Header';



const Layout = ({children}) => {
    return (
        <div>
            <Head></Head>
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
        </div>
    );
}
 
export default Layout;