import React from "react";
import "./Footer.css";
import Icon from "./Icon";

export default function Footer(props) {
  return (
    <div className="footer">
      <Icon icon="fa-brands fa-twitter fa-xl" />
      <Icon icon="fa-brands fa-instagram fa-xl" />
      <Icon icon="fa-brands fa-facebook fa-xl" />
      <Icon icon="fa-brands fa-github fa-xl" />
    </div>
  );
}
