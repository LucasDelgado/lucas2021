import React, { useState } from 'react';


const Header = () => {

    const [darkMode, setDarkMode] = useState(false);

    return ( 
        <header className="header grid container">
            <div className="header__left">
                
            </div>
            <div className="header__right">
                <button type="button" className="btn-primary --mb-16" onClick={ ()=>{ setDarkMode(!darkMode) } } >{ darkMode ? 'DarkMode' : 'LightMode' }</button>
                <a className="header__mail" href="mailto:lucas.matias.delgado@gmail.com">lucas.matias.delgado@gmail.com</a>
                <a className="header__tel" href="tel:+591152610887"> 11-5261-0887</a>
            </div>
        </header> 
    );
}
 
export default Header;