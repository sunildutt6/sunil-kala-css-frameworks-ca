import react from "react";
import "./sass/styles.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./components/home/Home";
import News from "./components/news/News";
import Contact from "./components/contact/Contact";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="wrapper">
        <Router>
          <div>
            <Navbar expand="lg">
              <Container>
                <Navbar.Brand href="#home">The YAY Company</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto  navbar__list">
                    <NavLink
                      exact
                      to="/"
                      className="nav-link  nav__link--top"
                    >
                      Home
                    </NavLink>
                    <NavLink
                      to="/news"
                      className="nav-link   nav__link--top"
                    >
                      News
                    </NavLink>
                    <NavLink
                      to="/contact"
                      className="nav-link   nav__link--top nav__link--bottom"
                    >
                      Contact
                    </NavLink>
                  </Nav>
                  <Form inline className="form__input ">
                    <FormControl
                      type="text"
                      placeholder="Search"
                      className="mr-sm-2 form__placeholder"
                    />
                    <Button variant="primary button__new">Go</Button>
                  </Form>
                </Navbar.Collapse>
              </Container>
            </Navbar>

            <Switch>
              <Route path="/news">
                <News />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
      <Footer />
    </>
  );
}

export default App;
