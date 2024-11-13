import React from 'react';

const Navbar: React.FC = () => {
  return (
    <div className="navbar-logo-left">
      <div className="navbar-logo-left-container shadow-three">
        <div className="container">
          <div className="navbar-wrapper">
            <a href="#" className="navbar-brand w-nav-brand">
              <img src="images/logo.svg" loading="lazy" alt="Univation logo" />
            </a>
            <nav role="navigation" className="nav-menu-wrapper w-nav-menu">
              <ul role="list" className="nav-menu-two w-list-unstyled">
                <li><a href="#" className="nav-link">About</a></li>
                <li><a href="#" className="nav-link">Pricing</a></li>
                <li><a href="#" className="nav-link">Contact</a></li>
                <li className="mobile-margin-top-10">
                  <a href="#" className="button-primary w-button">Get Started</a>
                </li>
              </ul>
            </nav>
            <div className="menu-button w-nav-button">
              <div className="w-icon-nav-menu"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;