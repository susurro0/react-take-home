import React from 'react'
import { ListGroup } from "react-bootstrap";

import VideoCard from "./VideoCard";
import "./MediaList.css";

function MediaList(props) {
  return (
    <ListGroup horizontal className="list">
      {props.medias.map((media, id) => (
        <ListGroup.Item
          key={id}
          style={{
            border: "none",
          }}
          className="bg-transparent"
        >
          <VideoCard media={media} id={id} key={id} />
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default MediaList;
