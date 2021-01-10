import React from "react";
import { Navbar } from 'react-bootstrap';
function Nav() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
          />{' '}
          Github Issues</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Nav;