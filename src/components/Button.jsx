import React from "react";
import "./Button.css";
import Icon from "./Icon";

export default function Button(props) {
  return (
    <button
      className="btn"
      style={{
        color: props.color,
        backgroundColor: props.backgroundColor,
      }}
    >
      <Icon icon={props.icon} /> {props.text}
    </button>
  );
}
