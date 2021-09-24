import React from "react";
import "./MediaImage.css";

import { Image } from "react-bootstrap";
/**
 * Image Component returns Image Element
 * @param {object} props Component props, 
 * {
 *  src: {url}
 * }
 *
 */
function MediaImage(props) {
  return <Image className="media_image" src={props.src} rounded />;
}

export default MediaImage;
