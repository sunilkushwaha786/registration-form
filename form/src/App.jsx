import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./page/Home.css";
import Register from "./page/Register";
const App = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">Navbar</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Disabled
              </Nav.Link>
            </Nav>
            <Button variant="primary" onClick={handleShow}>
              Register Now
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Register />

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Registration Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="container">
            <div class="form-group">
              <label for="email">Email Address</label>
              <input type="email" id="email" name="email" />
              <div class="error-message" id="email-error">
                Please provide a Email.
              </div>
            </div>
            <div class="form-group">
              <label for="mobile">Mobile Number</label>
              <input type="text" id="mobile" name="mobile" />
              <div class="error-message" id="email-error">
                Provide your mobile number.
              </div>
            </div>
            <div className="row">
              <div className="col col-lg-6">
                <label for="firstName">First Name</label>
                <input type="text" id="firstName" name="firstName" />
                <div className="error-message" id="email-error">
                  <p>Provide your first name.</p>
                </div>
              </div>
              <div className="col col-lg-6 ">
                <label for="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" />
                <div class="error-message" id="email-error">
                  Provide your last name.
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col col-lg-6 ">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" />
                <div class="error-message" id="email-error">
                  Provide a password.
                </div>
              </div>
              <div className="col col-lg-6 ">
                <label for="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                />
                <div class="error-message" id="email-error">
                  Please Enter Confirmation Password.
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Submit
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Cancle
          </Button>
        </Modal.Footer>
      </Modal>

      <div></div>
    </>
  );
};

export default App;
