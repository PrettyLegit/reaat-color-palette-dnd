import "rc-slider/assets/index.css"; // import first
import "./NavBar.scss";

import Slider from "rc-slider";
function NavBar({
  level,
  changeLevel,
}: {
  level: number;
  changeLevel: (level: number | number[]) => void;
}) {
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
    </header>
  );
}

export default NavBar;
