import React, { useState } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';

const AppNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  
  const toggle = () => setIsOpen(!isOpen)
  
  return(
    <div>
      <Navbar color="dark" dark expand="sm" className="mb-5">
        <Container>
          <NavbarBrand href="/">BrandName</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#">Link</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Link2</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Link3</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
    
        </Container>
      </Navbar>
     
    </div>
  
  )
}



export default AppNavbar