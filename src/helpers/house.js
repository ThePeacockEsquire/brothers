import React, { Component } from 'react';
import { Col, Row, Grid, ListGroup, ListGroupItem, Fade } from 'react-bootstrap';
import Tasker from './tasker.js'

class House extends Component {
  constructor(props, context) {
  super(props, context);

  this.state = {
    open: this.props.open
  };
}
  render() {
       return (
         <Fade in={this.state.open}>
         <Grid>
           <Row>
             <Col xs={12} md={12}>
               <Tasker />
             </Col>
           </Row>
           <Row>
             <Col xs={4} md={4}>
               <ListGroup>
                 <ListGroupItem><h3><b>People of the House</b></h3></ListGroupItem>
                 <ListGroupItem>Cam</ListGroupItem>
                 <ListGroupItem>Tanner</ListGroupItem>
                 <ListGroupItem>Devin</ListGroupItem>
                 <ListGroupItem>Stephen</ListGroupItem>
               </ListGroup>
             </Col>
             <Col xs={12} md={8}>
               <ListGroupItem><h3><b>Tasks</b></h3></ListGroupItem>
               <ListGroupItem>Take out trash</ListGroupItem>
               <ListGroupItem>Clean the bathroom</ListGroupItem>
               <ListGroupItem>Wash the dishes</ListGroupItem>
               <ListGroupItem>Plan dinner</ListGroupItem>
             </Col>

           </Row>
         </Grid>
       </Fade>
    );
  }
}

export default House;
