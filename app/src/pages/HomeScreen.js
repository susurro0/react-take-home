import React from 'react'
import { Navbar, Container, Nav } from "react-bootstrap";
import CampaignCard from "../components/campaign/CampaignCard";


import MediaImage from '../components/media/MediaImage'
import MediaList from '../components/media/MediaList';
import Video from '../components/media/Video';
import VideoCard from '../components/media/VideoCard';
function HomeScreen(props) {
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
      <CampaignCard />
    </>
  );
}

export default HomeScreen;
