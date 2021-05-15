import React from 'react';

import LocalPhoneIcon from '@material-ui/icons/LocalPhone';

const Header = () => {
    return ( 
        <header className="header container">
            <a className="header__mail" href="mailto:lucas.matias.delgado@gmail.com">lucas.matias.delgado@gmail.com</a>
            <a className="header__tel" href="tel:+591152610887"><LocalPhoneIcon/> 11-5261-0887</a>
        </header> 
    );
}
 
export default Header;