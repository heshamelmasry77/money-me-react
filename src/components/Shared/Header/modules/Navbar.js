import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class NavbarInstance extends Component {
  render() {
    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          {/*<Navbar.Brand>*/}
          {/*<a href="#">MoneyMe</a>*/}
          {/*</Navbar.Brand>*/}
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">
              Weekly Payouts
            </NavItem>
            <NavItem eventKey={2} href="#">
              Top Bitcoin Mining
            </NavItem>
            <NavItem eventKey={3} href="#">
              TOP Paying HYIP
            </NavItem>
          </Nav>
          {/*<Nav pullRight>*/}
          {/*<NavItem eventKey={1} href="#">Link Right</NavItem>*/}
          {/*<NavItem eventKey={2} href="#">Link Right</NavItem>*/}
          {/*</Nav>*/}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavbarInstance;
