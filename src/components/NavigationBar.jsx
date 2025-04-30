import React from "react";
import grokSvg from "../assets/grok.svg";

function NavigationBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-body">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center gap-2" href="#">
          <img
            src={grokSvg}
            alt="Logo"
            width="30"
            height="24"
            className="d-inline-block align-text-top"
            style={{ filter: "invert(1)" }}
          />
          Prostack Academy
        </a>
      </div>
    </nav>
  );
}

export default NavigationBar;
