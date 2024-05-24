"use client";
import "./ColorBox.scss";
import { useCallback } from "react";

export default function ColorBox({
  name,
  background,
}: {
  name: string;
  background: string;
}) {
  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(background);
  }, [background]);

  return (
    <div
      onClick={handleCopy}
      className="color-box"
      style={{ backgroundColor: background }}
    >
      <div className="copy-overlay" />
      <div>
        <div className="box-content">
          <span>{name}</span>
        </div>
        <button className="copy-button">
          Copy
        </button>
      </div>
      <span className="see-more">
        More
      </span>
    </div>
  );
}
