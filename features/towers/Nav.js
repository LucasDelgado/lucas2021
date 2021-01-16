import React from 'react';
import Link from 'next/link'

const Nav = () => {
    return (    
        <nav className="nav">
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/about">
                <a>About</a>
            </Link>
        </nav> 
    );
}
 
export default Nav;