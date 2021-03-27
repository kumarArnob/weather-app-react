import React from "react";

//import <App>from "./App.js"


const NavBar = () => {
  return (
    <div>

      <nav className="navbar navbar-dark bg-dark mb-4">
        <a className="navbar-brand" href="#">
          <img src="/icon.png" width={30} height={30} className="d-inline-block align-top mr-2" alt />
          Weather App
        </a>
      </nav>

          
    </div>
  );
};

export default NavBar;
