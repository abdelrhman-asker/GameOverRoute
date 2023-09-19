import React, { useEffect, useRef, useState } from "react";
import "./NavFooter.css";
import Logo from "./images/logo.png";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineRollback } from "react-icons/ai";

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
} from "reactstrap";
import { Link, Navigate, Route, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { dataContext } from "../../context/Store";

const MainNav = ({ args }) => {
  const navigate = useNavigate();
  const { LogOut } = useContext(dataContext);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="MainNavDiv px-0 px-md-auto">
      <Navbar className="container" expand="lg" {...args}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="d-flex d-xl-flex gap-1"
            style={{
              color: "#4799eb",
              marginRight: "20px",
              cursor: "pointer",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={() => navigate(-1)}
          >
            <div className="pd-0 m-0">
              <h5 className="pd-0 m-0 d-none d-md-flex fw-bold">Back</h5>
            </div>
            <div>
              <h1 className="fs-md-3">
                <AiOutlineRollback style={{ strokeWidth: "50" }} />
              </h1>
            </div>
          </div>
          <Link
            to="/Home"
            className="LogoTextGameOver "
            style={{ fontSize: "20px" }}
          >
            <img
              alt="MLogo"
              width="70px"
              src="https://raw.githubusercontent.com/abdelrhman-asker/GameOverRoute/main/src/component/NavFooter/images/logo.png"
            />
            Game Over
          </Link>
        </div>
        <NavbarToggler onClick={toggle}>
          <AiOutlineMenu />
        </NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          <Nav
            className="ms-auto col-12 text-center d-flex MainNavPartsLinks   gap-0"
            navbar
          >
            <div className="SecondaryLinks ms-2 ms-lg-5 mt-lg-0 mt-4 align-items-start align-items-lg-center justify-content-lg-center justify-content-auto  gap-2 flex-column flex-lg-row text-lg-center">
              <NavItem className="NavMainItemsAfterLogodrop Home ">
                <Link className="btn" to="/Home">
                  Home
                </Link>
              </NavItem>
              <NavItem className="NavMainItemsAfterLogodrop All">
                <Link className="btn" to="/All">
                  All
                </Link>
              </NavItem>
              <NavItem className="NavMainItemsAfterLogoDrop">
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Platforms
                  </DropdownToggle>
                  <DropdownMenu end>
                    <Link to="/Pcplatform">
                      <DropdownItem>pc</DropdownItem>
                    </Link>
                    <Link to="/Browserplatform">
                      <DropdownItem>browser</DropdownItem>
                    </Link>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </NavItem>
              <NavItem className="NavMainItemsAfterLogoDrop">
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    sort-by
                  </DropdownToggle>
                  <DropdownMenu end>
                    <Link to="/Release">
                      <DropdownItem>Release-date</DropdownItem>
                    </Link>
                    <Link to="/Popu">
                      <DropdownItem>popularity</DropdownItem>
                    </Link>
                    <Link to="/Alphabetical">
                      <DropdownItem>alphabetical</DropdownItem>
                    </Link>
                    <Link to="/Relevance">
                      <DropdownItem>relevance</DropdownItem>
                    </Link>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </NavItem>
              <NavItem className="NavMainItemsAfterLogoDrop">
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Categories
                  </DropdownToggle>
                  <DropdownMenu end>
                    <Link to="/Racing">
                      <DropdownItem>racing</DropdownItem>
                    </Link>

                    <Link to="/Sports">
                      <DropdownItem>sports</DropdownItem>
                    </Link>
                    <Link to="/Social">
                      <DropdownItem>social</DropdownItem>
                    </Link>
                    <Link to="/Shooter">
                      <DropdownItem>shooter</DropdownItem>
                    </Link>
                    <Link to="/Openworld">
                      <DropdownItem>open-world</DropdownItem>
                    </Link>
                    <Link to="/Zombie">
                      <DropdownItem>zombie</DropdownItem>
                    </Link>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </NavItem>
            </div>
            <div className="SecondaryLinks  ms-2 my-3 my-lg-0   ">
              <NavItem>
                <Link
                  onClick={LogOut}
                  className="signupButn text-center px-3"
                  to="/"
                >
                  Log Out
                </Link>
              </NavItem>
            </div>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default MainNav;
