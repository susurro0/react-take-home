import React from 'react';

import { ListGroup, Navbar, Container, Nav } from "react-bootstrap";
import CampaignCard from "../components/campaign/CampaignCard";

function HomeScreen(props) {
 
  if (props.data.campaigns !== undefined){
    return (
      <>
        <Navbar bg="light" expand="lg" className="justify-content-end">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#search">Search</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <ListGroup className="list">
          {props.data.campaigns.map((data, id) => (
            <ListGroup.Item
              key={id}
              style={{
                border: "none",
              }}
              className="bg-transparent"
            >
              <CampaignCard data={data} key={id} />
            </ListGroup.Item>
          ))}
        </ListGroup>
      </>
    );}
    else{
      return (
        <section>
          <p>Something did go wrong... </p>
        </section>
      );
    }
}

export default HomeScreen;
