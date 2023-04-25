import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function Header() {
    return (
        <>
            <header className='header'>
                <Navbar className="header__navbar" bg="dark" variant="dark" expand="lg">
                    <Navbar.Brand className="header__title" href="#home">Horned Beasts Lab</Navbar.Brand>
                    <Navbar.Toggle className="header__toggle" aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="header__collapse" id="basic-navbar-nav">
                        <Nav className="header__nav mr-auto">
                            <Nav.Link className="header__nav-link" href="#home">Home</Nav.Link>
                            <Nav.Link className="header__nav-link" href="#about">About</Nav.Link>
                            <Nav.Link className="header__nav-link" href="#gallery">Gallery</Nav.Link>
                            <Nav.Link className="header__nav-link" href="#contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </header>
        </>
    );
}

export default Header;
