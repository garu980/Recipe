import React from 'react';
import { changeLanguage } from './state/languageActions';
import {
  Navbar,
  Nav,
  Form,
  NavDropdown,
  FormControl,
  Button,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useIntl } from 'react-intl';
import { useDispatch } from 'react-redux';

const Navigation = (props) => {
  const intl = useIntl();
  const dispatch = useDispatch();

  const onLanguageChange = (event, eventKey) => {
    dispatch(changeLanguage(event));
  };

  return (
    <Navbar bg="light" expand="lg" onSelect={onLanguageChange}>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown
            title={intl.formatMessage({ id: 'navigation.language' })}
            id="basic-nav-dropdown"
            clicked=""
          >
            <NavDropdown.Item eventKey="en">English</NavDropdown.Item>
            <NavDropdown.Item eventKey="it">Italiano</NavDropdown.Item>
            <NavDropdown.Item eventKey="sv">Svenska</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/createRecipe">
            {intl.formatMessage({ id: 'navigation.createRecipe' })}
          </Nav.Link>
        </Nav>
        <Form inline>
          <FormControl
            type="text"
            placeholder={intl.formatMessage({ id: 'navigation.search' })}
            className="mr-sm-2"
          />
          <Button variant="outline-success">
            {intl.formatMessage({ id: 'navigation.search' })}
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
