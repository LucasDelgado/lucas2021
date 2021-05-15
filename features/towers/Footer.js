import React from 'react';

const Footer = () => {

    let _getYear = () =>{
        let year;

        let today = new Date();
        year = today.getFullYear();

        return year;
    }

    return ( 
        <footer className="footer">
            <p>Copyright {_getYear()}</p>
        </footer> 
    );
}
 
export default Footer;