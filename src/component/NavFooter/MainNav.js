import React, { useState } from 'react';
import "./NavFooter.css"
import Logo from "./images/logo.png"
import { AiOutlineMenu } from 'react-icons/ai';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';

const MainNav = (args) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
  return (
    <div className='MainNavDiv'>
        <Navbar className='container'  expand="lg" {...args}>
        
            <Link to="/Home" className='LogoTextGameOver'>
            <img alt='MLogo' width="70px" src={Logo} />
            Game Over
            </Link>
        <NavbarToggler   onClick={toggle} >
        <AiOutlineMenu />
        </NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto text-center d-flex justify-center align-center gap-4" navbar>
            <NavItem>
              <Link className='LoginButn ' to="/SignIn">LogIn</Link>
            </NavItem>
            <NavItem>
              <Link className='signupButn' to="/">
                Join Free
              </Link>
            </NavItem>
           
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default MainNav