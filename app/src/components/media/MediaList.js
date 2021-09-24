import React from 'react'
import { ListGroup } from "react-bootstrap";
import VideoCard from "./VideoCard";
import "./MediaList.css";

const medias = [
  {
    src: "https://placekitten.com/200/300",
  },
  {
    src: "https://placekitten.com/241/300",
  },
  {
    src: "https://placekitten.com/201/300",
  },
];
function MediaList(props) {
  return (
    <ListGroup horizontal className="list">
      {medias.map((media, id) => (
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
