import React from 'react'
import { withRouter, NavLink, Link } from 'react-router-dom'
import { 
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    Button } from 'reactstrap'

const Navigation = (props) => {
    return(
        <div>
            <Navbar color="primary" light expand="md">
                <NavbarBrand href="/" className="text-white">Landing Page</NavbarBrand>
                <Nav className="ml-auto" navbar>
                    <NavItem> 
                        <Button color="primary" tag={Link} to="/">Home</Button>
                    </NavItem>
                    <NavItem> 
                        <Button color="primary" tag={NavLink} to="/about">About</Button>
                    </NavItem>
                    <NavItem> 
                        <Button color="primary" tag={NavLink} to="/contact">Contact</Button>
                    </NavItem>
                    <NavItem> 
                        <Button color="primary" tag={NavLink} to="/chart">Chart</Button>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    )
}

export default withRouter(Navigation);