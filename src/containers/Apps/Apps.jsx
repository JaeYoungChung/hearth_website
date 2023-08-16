import React from 'react';
import './apps.css';
import home_flame from '../../assets/home_flame.png'
import { useState } from "react";

const imageData = {
  0: { src:  home_flame, color: "green", text: ["Helm", "Independence", "is integrating the inner self through meticulous introspection to attain an autonomous life where one can live to the fullest and take greater hold of their destiny"] },
  1: { src:  home_flame, color: "blue", text: ["Text4", "Text5", "Text6"] },
  2: { src:  home_flame, color: "pink", text: ["Text4", "Text5", "Text6"] },
  3: { src:  home_flame, color: "yellow", text: ["Text4", "Text5", "Text6"] },
  4: { src:  home_flame, color: "red", text: ["Text4", "Text5", "Text6"] },
  5: { src:  home_flame, color: "purple", text: ["Text4", "Text5", "Text6"] },
};

function Apps() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="app">
      <ImageSection image={imageData[selected].src} />
      <div className="right-section">
        <TextSection color={imageData[selected].color} text={imageData[selected].text} />
        <ButtonSection setSelected={setSelected} selected={selected} />
      </div>
    </div>
  );
}

function ImageSection({ image }) {
  return <img className="full-screen-image" src={image} alt="background" />;
}

function TextSection({ color, text }) {
  return (
    <div className="text-section">
    <p className="text-big" style={{ color }}>{text[0]}</p>
    <p className="text-medium">{text[1]}</p>
    <hr />
    <p>{text[2]}</p>
  </div>
  ); 
}

function ButtonSection({ setSelected, selected }) {
  const buttons = Object.keys(imageData).map(key => (
    <div className="button-container" key={key}>
      <button
        className={`square-button ${selected === parseInt(key) ? imageData[key].color : "grey"}`}
        onClick={() => setSelected(parseInt(key))}
      />
      <p>{imageData[key].text[0]}</p>
    </div>
  ));

  return <div className="button-section">{buttons}</div>;
}
export default Apps 