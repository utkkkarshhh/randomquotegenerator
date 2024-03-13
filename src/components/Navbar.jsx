import React from "react";
import "./Navbar.css";
import Dropdown from "./Dropdown";
import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined";

const Navbar = ({ setSelectedCategory, handleGenerateNew }) => {
  return (
    <div>
      <div className="navbar">
        <div className="generate">
          <button onClick={handleGenerateNew}>
            <RefreshOutlinedIcon className="refresh" />
            <span className="button-text">Generate New</span>
          </button>
        </div>

        <div className="app-title">Random Quote Generator</div>

        <Dropdown setSelectedCategory={setSelectedCategory} />
      </div>
    </div>
  );
};

export default Navbar;
