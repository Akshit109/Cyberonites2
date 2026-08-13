import React from "react";
import "./GridBackground.css";

const GridBackground = ({ children, className = "" }) => {
  return (
    <div className={`grid-background ${className}`}>
      <div className="grid-background__grid" />
      <div className="grid-background__content">
        {children}
      </div>
    </div>
  );
};

export default GridBackground;