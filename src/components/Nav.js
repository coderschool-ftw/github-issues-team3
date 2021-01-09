import React from "react";
import { Navbar } from 'react-bootstrap';
function Nav() {
  return (
    <div>
      <Navbar>
        <Navbar.Brand href="#home">Team 3 </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Nav;
