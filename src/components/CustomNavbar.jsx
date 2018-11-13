import React, {Component} from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./CustomNavbar.css";


class CustomNavbar extends Component {
    render() {
        return (
            <div id="smartNav">
            <div className="navContainer">
            <Navbar default collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to='/'>GNLB</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                     <Nav pullRight>
                         <NavItem eventKey={1} componentClass={Link} href="/" to="/">
                             Home
                         </NavItem>
                         <NavItem eventKey={2} componentClass={Link} href="/components/About" to="/about">
                             About
                         </NavItem>
                         <NavItem eventKey={3} componentClass={Link} href="/components/Resources" to="/resources">
                             Resources
                         </NavItem>
                         <NavItem eventKey={4} componentClass={Link} href="/components/SignUp" to="/signup">
                             SignUp
                         </NavItem>
                         <NavItem eventKey={5} componentClass={Link} href="/components/FAQ" to="/faq">
                             FAQ
                         </NavItem>
                     </Nav>
                </Navbar.Collapse>
            </Navbar>
            </div>
            </div>
        );
    }
}

export default CustomNavbar;