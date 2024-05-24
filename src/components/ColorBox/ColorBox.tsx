"use client";
import "./ColorBox.scss";
import { useCallback, useState } from "react";

export default function ColorBox({
  name,
  background,
}: {
  name: string;
  background: string;
}) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(background);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1500);
  }, [background]);

  return (
    <div
      onClick={handleCopy}
      className="color-box"
      style={{ backgroundColor: background }}
    >
      <div
        style={{ backgroundColor: background }}
        className={`copy-overlay ${isCopied && "show"}`}
      />
      <div className={`copy-msg ${isCopied && "show"}`}>
        <h1>Copied!</h1>
        <p>{background}</p>
      </div>
      <div>
        <div className="box-content">
          <span>{name}</span>
        </div>
        <button className="copy-button">Copy</button>
      </div>
      <span className="see-more">More</span>
    </div>
  );
}
