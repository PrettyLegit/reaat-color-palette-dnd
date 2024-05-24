"use client";
import ColorBox from "../ColorBox/ColorBox";
import "./Palette.scss";

import { useState } from "react";
import NavBar from "../NavBar/NavBar";

type PaletteProps = {
  palette: {
    paletteName: string;
    id: string;
    colors: Colors;
    emoji: string;
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
  const [format, setFormat] = useState("hex" as string);

  function changeLevel(level: number | number[]): void {
    setLevel(typeof level === "number" ? level : level[0]);
  }

  function changeFormat(value: string): void {
    setFormat(value);
  }

  return (
    <div className="palette">
      <NavBar
        level={level}
        changeLevel={changeLevel}
        changeFormat={changeFormat}
      />
      <div className="palette-colors">
        {colorsArr[level].map((color) => (
          <ColorBox
            key={color.id}
            name={color.name}
            background={color[format as keyof Color]}
          />
        ))}
      </div>

      <footer className="palette-footer">
        {palette.paletteName}
        <span className="emoji">{palette.emoji}</span>
      </footer>
    </div>
  );
}
