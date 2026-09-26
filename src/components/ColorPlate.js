"use client";

import { useState, useEffect } from "react";

const STORAGE_KEY = "elena-primary-color";

const colors = [
  "#28B463",
  "#FC6761",
  "#6A89CC",
  "#1ABC9C",
  "#E67E22",
  "#78E08F",
  "#38ADA9",
  "#F3A712",
];

// Convert a hex color like "#28B463" into an "r, g, b" string usable inside
// rgba(var(--primary-color-rgb), alpha) anywhere in the app.
const hexToRgbString = (hex) => {
  const clean = hex.replace("#", "");
  const bigint = parseInt(clean, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `${r}, ${g}, ${b}`;
};

// Mix a hex color toward black (amount < 0) or white (amount > 0).
// Used to derive the "dark"/"light" tints that gradients, badges, and
// hover states use, so those follow whatever color is chosen too.
const mixColor = (hex, amount) => {
  const clean = hex.replace("#", "");
  const bigint = parseInt(clean, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  const target = amount > 0 ? 255 : 0;
  const pct = Math.abs(amount);
  const blend = (c) => Math.round(c + (target - c) * pct);
  const toHex = (c) => c.toString(16).padStart(2, "0");
  return `#${toHex(blend(r))}${toHex(blend(g))}${toHex(blend(b))}`;
};

const applyColor = (color) => {
  const root = document.documentElement.style;
  const dark = mixColor(color, -0.22);
  const light = mixColor(color, 0.55);
  const rgb = hexToRgbString(color);

  root.setProperty("--primary-color", color);
  root.setProperty("--primary-color-rgb", rgb);
  root.setProperty("--primary-color-dark", dark);
  root.setProperty("--primary-color-light", light);

  // Keep Bootstrap's own variables (used by untouched bootstrap classes
  // like bg-primary-subtle, badges, etc.) in sync too, so nothing on the
  // site is left showing the old color after a new one is chosen.
  root.setProperty("--bs-primary", color);
  root.setProperty("--bs-primary-rgb", rgb);
  root.setProperty("--bs-link-color", color);
  root.setProperty("--bs-link-hover-color", dark);
};

const ColorPlate = () => {
  const [primaryColor, setPrimaryColor] = useState(colors[0]);
  const [optionsOpen, setOptionsOpen] = useState(false);

  // Restore a previously chosen color (if any) on load, then keep every
  // dependent variable in sync whenever the color changes.
  useEffect(() => {
    const saved = typeof window !== "undefined" ? window.localStorage.getItem(STORAGE_KEY) : null;
    if (saved) {
      setPrimaryColor(saved);
    }
  }, []);

  useEffect(() => {
    applyColor(primaryColor);
    try {
      window.localStorage.setItem(STORAGE_KEY, primaryColor);
    } catch (e) {
      // localStorage may be unavailable (privacy mode, etc.) — safe to ignore.
    }
  }, [primaryColor]);

  const handleColorClick = (color) => {
    setPrimaryColor(color);
  };

  const toggleOptions = () => {
    setOptionsOpen(!optionsOpen);
  };

  return (
    <>
      <div className={`elena-options ${optionsOpen ? "open" : ""}`}>
        <div className="icon inOut" onClick={toggleOptions}>
          <i className="fa fa-cog fa-spin"></i>
        </div>
        <div className="single-option">
          <h4>Choose Colors</h4>
          <div className="color-plate">
            {colors.map((color, index) => (
              <ColorOption
                key={index}
                color={color}
                active={color.toLowerCase() === primaryColor.toLowerCase()}
                onClick={handleColorClick}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const ColorOption = ({ color, active, onClick }) => {
  return (
    <div
      className={`color-option ${active ? "active" : ""}`}
      style={{
        backgroundColor: color,
        outline: active ? "2px solid #ffffff" : "none",
        outlineOffset: active ? "2px" : "0",
        boxShadow: active ? `0 0 0 2px ${color}` : "none",
      }}
      onClick={() => onClick(color)}
    ></div>
  );
};

export default ColorPlate;
