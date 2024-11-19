import React from 'react';
import Logo from '../Nav/img/LogoMarcarAlgaTech.png';


const Navbar = () => {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img 
            src={Logo} 
            alt="Logo" 
            width="35" 
            height="35" 
            className="d-inline-block align-text-top mx-3"
          />
          AlgaTech
        </a>
      </div>
    </nav>
  );
};

export default Navbar;