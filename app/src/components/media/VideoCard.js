import React, { useState, useEffect } from "react";

import "./VideoCard.css";
import { ButtonGroup, Spinner, Card, Button, Row, Col } from "react-bootstrap";
import Video from "./Video";
import Image from "./MediaImage";

import { BsDownload, BsLink } from "react-icons/bs";

function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}
function VideoCard(props) {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = (e) => {
    setLoading(true);
  };
   const copyLinkHandler = () => {
     console.log("Copy link");
     navigator.clipboard.writeText('copy link');
   };
  return (
    <Card className="video_card">
      <Image src="https://placekitten.com/200/300" />
      <Row className="btn_container">
        <ButtonGroup aria-label="Basic example">
          <Button
            variant="outline-secondary"
            className="btn_copy"
            size="lg"
            onClick={copyLinkHandler}
          >
            <BsLink />
          </Button>{" "}
          <Button
            variant="outline-secondary"
            size="lg"
            disabled={isLoading}
            onClick={!isLoading ? handleClick : null}
          >
            {isLoading ? (
              <Spinner animation="border" role="status" size="sm">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            ) : (
              <BsDownload />
            )}
          </Button>
        </ButtonGroup>
      </Row>
    </Card>
  );
}

export default VideoCard;
