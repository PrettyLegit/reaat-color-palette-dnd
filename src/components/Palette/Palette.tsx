"use client";
import "rc-slider/assets/index.css"; // import first
import "./Palette.scss";
import ColorBox from "../ColorBox/ColorBox";
import Slider, { Range } from "rc-slider";

import { useState } from "react";

type PaletteProps = {
  palette: {
    paletteName: string;
    id: string;
    colors: Colors;
  };
};

type Color = {
  name: string;
  id: string;
  hex: string;
  rgb: string;
  rgba: string;
};

type Colors = {
  [key: number]: Color[];
};

export default function Palette({ palette }: PaletteProps) {
  const colorsArr = palette.colors;
  const [level, setLevel] = useState(500);

  function changeLevel(level: number | number[]): void {
    setLevel(typeof level === "number" ? level : level[0]);
  }

  return (
    <div className="palette">
      <div className="slider">
        <Slider
          defaultValue={level}
          min={100}
          max={900}
          step={100}
          onChange={changeLevel}
        />
      </div>

      <div className="palette-colors">
        {colorsArr[level].map((color) => (
          <ColorBox key={color.name} name={color.name} background={color.hex} />
        ))}
      </div>
    </div>
  );
}
