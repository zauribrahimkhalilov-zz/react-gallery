import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <header className="header-bar d-flex d-lg-block align-items-center">
            <div className="site-logo">
                <Link to={'/'}>Gallery</Link>
            </div>

            <div className="d-inline-block d-xl-none ml-md-0 ml-auto py-3" id="header"><a href="#" className="site-menu-toggle js-menu-toggle text-white"><span className="icon-menu h3"></span></a></div>

            <div className="main-menu">
                <ul className="js-clone-nav">
                    <li><Link to={'/'} className="active">#Top</Link></li>
                    <li><Link to={'/'}>#Latest</Link></li>
                    <li><hr /></li>
                </ul>
                <ul className="social js-clone-nav">
                    <li><a href="https://www.facebook.com/zaur.ibrahimov.71/"><span className="icon-facebook"></span></a></li>
                    <li><a href="https://www.linkedin.com/in/zaur-ibrahimov/"><span className="icon-linkedin"></span></a></li>
                    <li><a href="https://www.instagram.com/zaur_ibrahim/"><span className="icon-instagram"></span></a></li>
                </ul>
            </div>
        </header>
    );

}
export default Header;