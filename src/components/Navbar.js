import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="col-md-12 bg-dark py-2">
      <nav className="navbar bg-dark navbar-dark">

         {/* ==== Conatct Nav ===== */}
        <Link to={"/"} className="navbar-brand ml-5">
          Contact Book
        </Link>

        {/* ==== Maps Nav ===== */}
        <Link to={"/maps"} className="navbar-brand ml-5">
          Maps & Charts
        </Link> 
        
      </nav>
    </div>
  );
};

export default Navbar;