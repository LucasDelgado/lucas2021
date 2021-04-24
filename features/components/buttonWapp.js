import React from 'react';

import Fab from '@material-ui/core/Fab';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const ButtonWapp = () => {
    return (
        <div className="buttonWapp">
            <Fab  onClick={  ()=>{window.open("https://wa.me/591152610887");}  } aria-label="add" style={{ backgroundColor: '#1bd741' }}>
                <WhatsAppIcon color="white" style={{ fontSize: 40, color:"white" }} />
            </Fab>
        </div>
    );
}
 
export default ButtonWapp;