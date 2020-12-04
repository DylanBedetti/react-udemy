import React, { useState, useEffect, useRef } from "react";
import "./Dropdown.css";

const Dropdown = ({ options, selected, onSelectedChange, label }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      // console.log("BODY CLICK");
      setOpen(false);
    };

    document.body.addEventListener("click", onBodyClick, { capture: true });

    // this runs when the dropdown component is removed from the DOM!
    return () => {
      document.body.removeEventListener("click", onBodyClick, {
        capture: true,
      });
    };
  }, []);

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }

    return (
      <div
        className="item"
        key={option.value}
        onClick={() => {
          onSelectedChange(option);
          // console.log("ITEM CLICK");
        }}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={ref} className="ui form nohighlight">
      <div className="field">
        <label className="label">{label}</label>
        <div
          onClick={() => {
            // console.log("DROPDOWN CLICK");
            setOpen(!open);
          }}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
