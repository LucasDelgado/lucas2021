import React from 'react';
import Head from 'next/head'
import Footer from './Footer';
import Header from './Header';



const Layout = (props) => {
    let {children, className} = props;
    return (
        <div className={className}>
            <Head></Head>
            
            <main>
                {children}
            </main>

        </div>
    );
}
 
export default Layout;