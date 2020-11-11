import React from 'react'
import { Navbar } from 'react-bootstrap'

const node = document.querySeelctor('#app')

class MyNavbar extends React.Component{
    render() {
        return ( 
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#home"> Helping Hands </a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem href="#">
                        About
                    </NavItem>
                    <NavItem href="#">
                        Organizations
                    </NavItem>
                    <NavItem href="#">
                        FAQ
                    </NavItem>
                    <NavItem href="#">
                        Sign In/Sign Up
                    </NavItem>
                </Nav>
            </Navbar>
        )
    }
}
