import React from 'react';
import { Nav, Navlink } from './NavbarElement';

export const Navbar = () => {
    return (
        <>
        <Nav>
        <Navlink to='/'>Pizza</Navlink>
        </Nav>
        </>
    )
}

export default Navbar;