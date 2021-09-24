import React from "react";
import "./MediaImage.css";

import { Image } from "react-bootstrap";

function MediaImage(props) {
  return <Image className="media_image" src={props.src} rounded />;
}

export default MediaImage;
