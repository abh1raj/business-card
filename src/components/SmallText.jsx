import React from "react";
import "./SmallText.css";

export default function SmallText(props) {
  return <div className={props.smallTextType}>{props.text}</div>;
}
