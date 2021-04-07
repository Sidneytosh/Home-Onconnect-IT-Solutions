import React from "react";
import logo from "../logo.png";
// REACT FONTAWASOME IMPORTS
import{FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import{ faBars} from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
    return( 
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <div className="container">
        <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo..."/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span class="sr-only">(current)</
              span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Our Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contacts</a>
            </li>
            
          </ul>
          </div>
        </div>
      </nav>  
    )
}

export default Navbar