// Page Header Component
import React from "react";

import header_waldo from "../../Assets/Images/header_waldo.jpg";

const Header = (props) => {
    return (
        <div className="page-header">
            <span className="header-text"> Where's Waldo? </span>
            <img className="header-waldo" src={header_waldo} alt="Waldo"></img>
        </div>
    )
}

export default Header;