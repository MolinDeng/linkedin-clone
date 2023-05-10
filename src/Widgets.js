import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
  const newsActicle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon fontSize="inherit" />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon fontSize="inherit" />
      </div>

      {newsActicle(
        "FTX founder wants charges tossed",
        "Top news - 1245 readers"
      )}
      {newsActicle(
        "No breakthrough in debt limit talks",
        "14h ago - 834 readers"
      )}
      {newsActicle(
        "Mattress giants combine in $4B deal",
        "16h ago - 1240 readers"
      )}
      {newsActicle(
        "Goldman settles pay equity lawsuit",
        "14h ago - 500 readers"
      )}
      {newsActicle(
        "Restos, shops follow workers home",
        "14h ago - 634 readers"
      )}
    </div>
  );
}

export default Widgets;
