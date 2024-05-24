import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Slider from "rc-slider";
import "rc-slider/assets/index.css"; // import first
import { useState } from "react";
import "./NavBar.scss";
import { Snackbar } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

function NavBar({
  level,
  changeLevel,
  changeFormat,
}: {
  level: number;
  changeLevel: (level: number | number[]) => void;
  changeFormat: (value: string) => void;
}) {
  const [format, setFormat] = useState("hex" as string);
  const [isOpen, setIsOpen] = useState(false);

  function handleFormatChange(event: SelectChangeEvent<string>): void {
    setFormat(event.target.value);
    changeFormat(event.target.value);
    setIsOpen(true);
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
          value={format}
          onChange={handleFormatChange}
        >
          <MenuItem value="hex">HEX - #ffffff</MenuItem>
          <MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
          <MenuItem value="rgba">RGBA - rgba(255, 255, 255, 1.0)</MenuItem>
        </Select>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={isOpen}
        autoHideDuration={3000}
        message={
          <span id="message-id">Format Changed to {format.toUpperCase()}</span>
        }
        ContentProps={{
          "aria-describedby": "message-id",
        }}
        onClose={() => setIsOpen(false)}
        action={[
          <IconButton
            onClick={() => setIsOpen(false)}
            color="inherit"
            key="close"
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />
    </header>
  );
}

export default NavBar;
