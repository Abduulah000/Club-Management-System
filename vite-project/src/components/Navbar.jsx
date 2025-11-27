
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// 1. Accept the function as a prop
function Navbar({ onJoinClick }) {
  return (
    <nav className="navbar navbar-expand-lg bg-white py-3 shadow-sm fixed-top">

      <div className="container">

        {/* ... (Existing Logo and Toggler code) ... */}

        <a className="navbar-brand fw-bold fs-3 d-flex align-items-center" href="#">
          <span style={{ color: "#ff4d4d", fontSize: "28px", marginRight: "8px" }}>
          </span>
          Club Name
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>


        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav nav-underline align-items-center">

            {/* ... (Existing nav links) ... */}
            
            <li className="nav-item mx-2">
              <a className="nav-link active fw-semibold" href="#home">Home</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link fw-semibold" href="#about">About</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link fw-semibold" href="#members">Members</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link fw-semibold" href="#events">Events</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link fw-semibold" href="#contacts">Contacts</a>
            </li>

            {/* 2. JOIN BUTTON - Changed <a> to <button> and added onClick */}
            <li className="nav-item mx-3">
              <button
                // Attach the prop function here!
                onClick={onJoinClick} 
                className="btn px-4 py-2 text-white fw-semibold"
                style={{
                  background: "linear-gradient(90deg, #ff9900, #ff2dad)",
                  borderRadius: "30px",
                  border: "none",
                  cursor: "pointer"
                }}
              >
                Join Us
              </button>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;