import { Avatar } from "@material-ui/core";
import React from "react";
import "../Feeds/Story.css";

function Story(props) {
  return (
    <div className="story">
      <img className="story-img" src={props.img} />
      <Avatar className="story-avatar" />
      <h4> {props.title} </h4>
    </div>
  );
}
export default Story;
