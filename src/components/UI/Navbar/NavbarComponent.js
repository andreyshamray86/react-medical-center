import React from 'react'

import {Navbar, Nav, NavDropdown, Button} from 'react-bootstrap'


const NavbarComponent = () => {
    return (
        <nav>
           <Navbar bg="light" variant="light">
                <Navbar.Brand href="#home">Logo</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Главная</Nav.Link>
                    <Nav.Link href="/about">О нас</Nav.Link>
                    <NavDropdown title="Наши врачи" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/doctors">Отделение терапии</NavDropdown.Item>
                        <NavDropdown.Item href="/doctors">Отделение хирургии</NavDropdown.Item>
                        <NavDropdown.Item href="/doctors">Отделение гинекологии</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/prices">Услуги и Цены</Nav.Link>
                    <Nav.Link href="/contacts">Контакты</Nav.Link>
                </Nav>
                <Button variant="outline-primary">Личный кабинет</Button>
            </Navbar> 
        </nav>
    )
}

export default NavbarComponent;
