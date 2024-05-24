import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Slider from "rc-slider";
import "rc-slider/assets/index.css"; // import first
import { useState } from "react";
import "./NavBar.scss";

function NavBar({
  level,
  changeLevel,
  changeFormat,
}: {
  level: number;
  changeLevel: (level: number | number[]) => void;
  changeFormat: (
    value: string,
  ) => void;
}) {
  const [format, setFormat] = useState("hex" as string);

  function handleChange(
    event: SelectChangeEvent<string>,
  ): void {
    setFormat(event.target.value);
    changeFormat(event.target.value);
  }

  return (
    <header className="navbar">
      <div className="logo">
        <a href="#">reactcolorpicker</a>
      </div>
      <div className="slider-container">
        <span>Level: {level}</span>
      </div>
      <div className="slider">
        <Slider
          defaultValue={level}
          min={100}
          max={900}
          step={100}
          onChange={changeLevel}
        />
      </div>
      <div className="select-container">
        <Select
          //   native
          value={format}
          onChange={handleChange}
        >
          <MenuItem value="hex">HEX - #ffffff</MenuItem>
          <MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
          <MenuItem value="rgba">RGBA - rgba(255, 255, 255, 1.0)</MenuItem>
        </Select>
      </div>
    </header>
  );
}

export default NavBar;
