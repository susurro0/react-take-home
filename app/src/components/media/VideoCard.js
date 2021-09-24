import React, { useState, useEffect } from "react";

import "./VideoCard.css";
import { ButtonGroup, Spinner, Card, Button, Row, Col } from "react-bootstrap";
import Video from "./Video";
import Image from "./MediaImage";

import { BsDownload, BsLink } from "react-icons/bs";

function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

const download = (url, type) => {
  fetch(url)
    .then((resp) => resp.blob())
    .then((blob) => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = url;
      a.download = (type === "video")
        ? "video.mp4"
        : "image.jpg"
      document.body.appendChild(a);
      a.click();
      alert("Your file has downloaded!"); 
    })
    .catch(() =>
      alert(
        "Error"
      )
    );
};


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
    download(props.media.download_url);
    setLoading(true);
  };
  const copyLinkHandler = () => {
    console.log("Copy link");
    navigator.clipboard.writeText(props.media.download_url);
  };
  return (
    <Card className="video_card">
      {props.media.media_type === "video" ? (
        <Video src={props.media.download_url} />
      ) : (
        <Image src={props.media.download_url} />
      )}
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
          </Button>{" "}
        </ButtonGroup>
      </Row>
    </Card>
  );
}

export default VideoCard;
