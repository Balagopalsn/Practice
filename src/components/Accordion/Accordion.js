import React from "react";
import { Data } from "./Data";
import { useState } from "react";
import "./Accordion.css";
import upIcon from "./Chevron up.png";
import downIcon from "./Chevron down.png";

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <div className="accordion">
      {Data.map((item, i) => (
        <div className="item">
          <div className="title" onClick={() => toggle(i)}>
            <h3>{item.title}</h3>
            <div>
              {selected === i ? (
                <img src={upIcon} className="topdown"></img>
              ) : (
                <img src={downIcon} className="topdown"></img>
              )}
            </div>
          </div>
          <div className={selected === i ? "content show" : "content"}>
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
