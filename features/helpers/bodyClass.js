import { useEffect } from 'react';

const bodyClass = (page)=>{
    useEffect( () => { 
        document.querySelector("body").classList.add(page);
        return ()=>{ document.querySelector("body").classList.remove(page);}
    },[]);
}
    
export default bodyClass;