import React, { useState } from "react";
import "./Video.css";

import { BsFillCaretRightFill } from "react-icons/bs";
import { Button } from "react-bootstrap";


/**
 * Video Component, returns Video
 * @param {object} props Component props, 
 * src = { url}
 */
function Video(props) {
  const [isPlaying, setIsPlaying] = useState(false);
  

  //click event on video
  //play/pause video, show/hide  play btn
  const playVideoHandler = (e) => {
    if (isPlaying) {
      e.target.pause();
      setIsPlaying(false);
    } else {
      e.target.play();
      setIsPlaying(true);
    }
  };

  return (
    <>
      <Button
        variant="primary"
        className={!isPlaying ? "btn_play" : "btn_play_hidden"}
      >
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
