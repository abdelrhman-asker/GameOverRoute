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
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';

const MainNav = (args) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
  return (
    <div className='MainNavDiv'>
        <Navbar className='container'  expand="lg" {...args}>
        <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <Link to="/Home" className='LogoTextGameOver ' style={{fontSize:"20px"}}>
            <img alt='MLogo' width="70px" src={Logo} />
            Game Over
            </Link>
            
            </div>
        <NavbarToggler   onClick={toggle} >
        <AiOutlineMenu />
        </NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto col-12 text-center d-flex MainNavPartsLinks   gap-0" navbar>
          
          
          <div className='SecondaryLinks ms-2 ms-lg-5 mt-lg-0 mt-4 align-items-start align-items-lg-center justify-content-lg-center justify-content-auto  gap-2 flex-column flex-lg-row text-lg-center'>
          <NavItem className='NavMainItemsAfterLogo'>
              <Link to="/Home">Home</Link>
            </NavItem>
            <NavItem className='NavMainItemsAfterLogodrop'>
              <Link to="/All">All</Link>
            </NavItem>
            <NavItem className='NavMainItemsAfterLogoDrop'>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Platforms
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>pc</DropdownItem>
                <DropdownItem>browser</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            </NavItem>
            <NavItem className='NavMainItemsAfterLogoDrop'>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                sort-by
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>Release-date</DropdownItem>
                <DropdownItem>popularity</DropdownItem>
                <DropdownItem>alphabetical</DropdownItem>
                <DropdownItem>relevance</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            </NavItem>
            <NavItem className='NavMainItemsAfterLogoDrop'>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Categories
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>racing</DropdownItem>
                <DropdownItem>sports</DropdownItem>
                <DropdownItem>social</DropdownItem>
                <DropdownItem>shooter</DropdownItem>
                <DropdownItem>open-world</DropdownItem>
                <DropdownItem>zombie</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            </NavItem>
            </div>
            <div className='SecondaryLinks  ms-2 my-3 my-lg-0   '>
            
            <NavItem>
              <Link className='signupButn text-center px-3' to="/">
                Log  Out 
              </Link>
            </NavItem>
            </div>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default MainNav