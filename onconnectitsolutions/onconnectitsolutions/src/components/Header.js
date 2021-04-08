import React from "react";
import Typed from "react-typed";
const Header = () => {
    return(
        <div className="header-wraper">
            <div className="main-info">
                <hi>Web development Design and IT Support Services</hi>
                <Typed
                className= "typed-text"
                strings={["Web Development","Web Design","IT Support Services","Facebook Ads","Google Ads"]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />

            </div>
        </div>
    )
}
export default Header;