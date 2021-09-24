import React,; { useState } from "react";
import "./Video.css";

import { BsFillCaretRightFill } from "react-icons/bs";
import { Button } from "react-bootstrap";

function Video(props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const playVideoHandler = (e) => {
    if (isPlaying) {
      e.target.pause();
      setIsPlaying(false);
    } else {
      e.target.play();
      setIsPlaying(true);
    }

    console.log(e.target.firstChild.nodeValue);
  };

  return (
    <>
      <Button variant="primary">
        <BsFillCaretRightFill />
      </Button>
      <video
        id={props.id}
        className="video"
        loading="lazy"
        onClick={playVideoHandler}
      >
        <source src={props.src} type="video/mp4" />
      </video>
    </>
  );
}
export default Video;
