import React, { Component } from 'react';
import { Button, DropdownButton, Glyphicon, Navbar, NavItem, MenuItem, NavDropdown, Nav,   ButtonToolbar, form, FormGroup, ListGroup, ListGroupItem, Grid, Row, Col } from 'react-bootstrap';
import './App.css';
import House from './helpers/house.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      house: ''
    };

    this.handleClick = this.handleClick.bind(this);

  }

  handleClick(house){
  this.setState({
    house: house
      });
  console.log(this.state.house);
  }

  render() {
    const {
      house
    } = this.state;
    return (
      <div className="App">
        <header>
          <Navbar inverse collapseOnSelect fluid>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#brother">Brother</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                <NavDropdown
                   eventKey={1}
                   title="Select your house"
                   id="dropdown-size-large"
                 >
                 <MenuItem eventKey="savedHouse" onSelect={this.handleClick} value='savedHouse'>Saved house</MenuItem>
                 <MenuItem eventKey="otherSavedHouse" onSelect={this.handleClick}>Other saved house</MenuItem>
                 <MenuItem divider />
                 <MenuItem eventKey="addHouse" onSelect={this.handleClick}>
                   <Glyphicon glyph="plus" />
                     <span>Add House</span>
                 </MenuItem>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </header>
        <ButtonToolbar bsClass="select-house">



        {(this.state.house === 'savedHouse') && <House open={true}/>}
      </ButtonToolbar>
      </div>
    );
  }
}

export default App;
