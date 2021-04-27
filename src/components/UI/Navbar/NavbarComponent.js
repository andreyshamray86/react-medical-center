import React from 'react'

import {Navbar, Nav, NavDropdown, Button} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'

import logo from '../../../assets/img/logo.png'

const Styles = styled.div `
    .navbar {
        background: #fff;
    }

    a, .navbar-brand, .navbar-nav .nav-lnk, a.dropdown-toggle.nav-link {
        font-size: 1.25rem;
        color: #008fd0; 
        &:hover {
            text-decoration: none;
            color: #008fd0; 
        }   
        &:focus {
            text-decoration: none;
            color: #008fd0; 
        } 
    }

    a.nav-link {
        border: 3px solid rgba(255, 255, 255, 0);
        &:hover {
            border-bottom: 3px solid #008fd0;
            color: #008fd0; 
        }
    }

    .btn {
        font-weight: bold;
        border: 1px dotted #008fd0;
        border-radius: 0;
        &:hover {
            background: #008fd0;
        }
    }

    .btn.btn-outline-primary {
        color: #008fd0; 
        border-color: #008fd0; 
        &:hover {
            color: #fff;
        }
    }

    .navbar-brand {
        width: 100px;
    }
`

const NavbarComponent = () => {
    return (
            <nav>
                <Styles>
                    <Navbar variant="light">
                        <Navbar.Brand href="/"><img src={logo} alt='logo'/></Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Link><NavLink to='/' exact>Главная</NavLink></Nav.Link>
                            <Nav.Link><NavLink to='/about'>О нас</NavLink></Nav.Link>
                            <NavDropdown title="Наши врачи" id="basic-nav-dropdown">
                                <NavDropdown.Item><NavLink to='/doctors'>Отделение терапии</NavLink></NavDropdown.Item>
                                <NavDropdown.Item><NavLink to='/doctors'>Отделение хирургии</NavLink></NavDropdown.Item>
                                <NavDropdown.Item><NavLink to='/doctors'>Отделение гинекологии</NavLink></NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link><NavLink to='/prices'>Услуги и Цены</NavLink></Nav.Link>
                            <Nav.Link><NavLink to='/contacts'>Контакты</NavLink></Nav.Link>
                        </Nav>
                        <Button variant="outline-primary">Личный кабинет</Button>
                    </Navbar> 
                </Styles>
            </nav>
        

    )
}

export default NavbarComponent;
