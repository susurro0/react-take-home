import React from "react";
import "./Video.css";


function Video(props) {
  
  return (
    <>
      <video
        id={props.id}
        className="video"
        loading="lazy"
        controls
      > 
        <source src={props.src} type="video/mp4" />
      </video>
    </>
  );
}
export default Video;
