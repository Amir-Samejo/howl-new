import React, { useState, useEffect } from 'react';
import Preloader from './Preloader';
import { Link } from 'react-router-dom';
import Cursor from './Cursor';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 80);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const menuLinks = [
        { label: "Home", path: "/" },
        { label: "About", path: "/about" },
        {
            label: "Services", dropdown: [
                { label: "Digital Marketing", path: "#" },
                { label: "Content Writing", path: "#" },
                { label: "SEO", path: "#" },
                { label: "UI/UX Design", path: "#" },
                { label: "Graphic Designing", path: "#" }
            ]
        },
        { label: "Portfolio", path: "/portfolio" },
        { label: "Contact", path: "/contact" }
    ];

    return (
        <>
            <Preloader />
            <Cursor />
            {/* ==================== Start progress-scroll-button ==================== */}
            <div className="progress-wrap cursor-pointer">
                <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
                </svg>
            </div>
            {/* ==================== End progress-scroll-button ==================== */}

            <div id="navi" className={`bg-${isScrolled ? 'dark' : 'transparent'} topnav`}>
                <div className="container">
                    <div className="logo icon-img-120">
                        <Link to="/"><h5>HOWL</h5></Link>
                    </div>
                    <div className="menu-icon cursor-pointer">
                        <span className="icon">
                            <i />
                            <i />
                        </span>
                        <span className="text"><span className="word">Menu</span></span>
                    </div>
                </div>
            </div>
            <div className="hamenu">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2">
                            <div className="menu-text">
                                <div className="text">
                                    <h2>HOWL</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="menu-links">
                                <ul className="main-menu rest">
                                    {menuLinks.map((link, index) => (
                                        <li key={index}>
                                            {link.dropdown ? (
                                                <div className="o-hidden">
                                                    <div className="link cursor-pointer dmenu">
                                                        <span className="fill-text" data-text={link.label}>{link.label}</span>
                                                        <i />
                                                    </div>
                                                    <div className="sub-menu">
                                                        <ul>
                                                            {link.dropdown.map((item, idx) => (
                                                                <li key={idx}>
                                                                    <Link to={item.path} className="sub-link">{item.label}</Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            ) : (
                                                <Link to={link.path}>
                                                    <div className="o-hidden">
                                                        <div className="link cursor-pointer dmenu">
                                                            <span className="fill-text" data-text={link.label}>{link.label}</span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 d-flex align-items-end">
                            <div className="cont-info full-width">
                                <div className="item">
                                    <h5 className="mb-15">Get In Touch</h5>
                                    <p>541 Melville Geek, Palo Alto, CA 94301</p>
                                    <p className="underline main-color mt-5 mb-5"><a href="#0">+1 840 841 25 69</a></p>
                                    <p><a href="#0">GeekFolio_website@gmail.com</a></p>
                                </div>
                                <div className="search-form">
                                    <div className="form-group">
                                        <input type="text" name="search" placeholder="Search" />
                                        <button><span className="pe-7s-search" /></button>
                                    </div>
                                </div>
                                <ul className="rest social-text d-flex mt-50 fz-13">
                                    <li className="mr-20">
                                        <a href="#0" className="hover-this"><span className="hover-anim">Facebook</span></a>
                                    </li>
                                    <li className="mr-20">
                                        <a href="#0" className="hover-this"><span className="hover-anim">Twitter</span></a>
                                    </li>
                                    <li className="mr-20">
                                        <a href="#0" className="hover-this"><span className="hover-anim">LinkedIn</span></a>
                                    </li>
                                    <li>
                                        <a href="#0" className="hover-this"><span className="hover-anim">Instagram</span></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
