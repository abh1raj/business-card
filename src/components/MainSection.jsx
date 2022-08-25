import React from "react";
import Name from "./Name";
import Role from "./Role";
import SmallText from "./SmallText";
import "./MainSection.css";
import Button from "./Button";
import Heading from "./Heading";

const Interests =
  "Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.";

const About =
  "I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.";

export default function MainSection() {
  return (
    <div className="main-section">
      <Name name="Laura Smith" />
      <Role role="Frontend Developer" />
      <SmallText text="laurasmith.website" smallTextType="small website" />
      <div className="btn-container">
        <Button
          text="Email"
          icon="fa-solid fa-envelope"
          color="#374151"
          backgroundColor="#ffffff"
        />
        <Button
          text="LinkedIn"
          icon="fa-brands fa-linkedin-in"
          color="#ffffff"
          backgroundColor="#5093E2"
        />
      </div>
      <Heading heading="About" />
      <SmallText text={About} smallTextType="small" />
      <Heading heading="Interests" />
      <SmallText text={Interests} smallTextType="small" />
    </div>
  );
}
