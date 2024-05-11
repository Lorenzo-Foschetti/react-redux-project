import {
  Button,
  Container,
  Form,
  InputGroup,
  ListGroup,
  Nav,
  NavLink,
} from "react-bootstrap";
import logo from "../assets/logo/logo.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchAction } from "../redux/actions";

const MySidebar = () => {
  const [search, setSearch] = useState();
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(searchAction(search));
  };
  return (
    <Nav
      className="navbar navbar-expand-md fixed-left justify-content-between"
      id="sidebar"
    >
      <Container className="flex-column align-items-start">
        <NavLink className="navbar-brand" href="index.html">
          <img src={logo} alt="Spotify Logo" width="131" height="40" />
        </NavLink>
        <Button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </Button>
        <div
          className="collapse navbar-collapse bgBlack"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav bgBlack">
            <ListGroup className="bgBlack">
              <ListGroup.Item className="bgBlack">
                <a
                  className="nav-item nav-link d-flex align-items-center"
                  href="#1"
                >
                  <i className="bi bi-house-door-fill"></i>&nbsp; Home
                </a>
              </ListGroup.Item>
              <ListGroup.Item className="bgBlack">
                <a
                  className="nav-item nav-link d-flex align-items-center"
                  href="#1"
                >
                  <i className="bi bi-book-fill"></i>&nbsp; Your Library
                </a>
              </ListGroup.Item>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Cerca"
                  aria-label="Cerca"
                  aria-describedby="basic-addon2"
                  onChange={handleSearch}
                />
                <Button variant="outline-secondary" onClick={handleSubmit}>
                  Go
                </Button>
              </InputGroup>
            </ListGroup>
          </div>
        </div>
      </Container>
      <div className="nav-btn">
        <Button className="btn signup-btn" type="button">
          Sign Up
        </Button>
        <Button className="btn login-btn" type="button">
          Login
        </Button>
        <div className="d-flex">
          <NavLink href="#1"> Cookie Policy </NavLink>
          <NavLink href="#1"> Privacy</NavLink>
        </div>
      </div>
    </Nav>
  );
};
export default MySidebar;
