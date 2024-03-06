import React from 'react'

const Navbar = () => {
    return (
        <>


            {/* ==================== Start progress-scroll-button ==================== */}
            <div className="progress-wrap cursor-pointer">
                <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
                </svg>
            </div>
            {/* ==================== End progress-scroll-button ==================== */}

            {/* ==================== Start Navgition ==================== */}
            <div id="navi" className="topnav">
                <div className="container">
                    <div className="logo icon-img-120">
                        <a href="#"><h5>HOWL</h5></a>
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
                                    <li>
                                        <div className="o-hidden">
                                            <div className="link cursor-pointer dmenu"><span className="fill-text" data-text="Home">Home</span></div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="o-hidden">
                                            <div className="link cursor-pointer dmenu"><span className="fill-text" data-text="About">About</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="o-hidden">
                                            <div className="link cursor-pointer dmenu"><span className="fill-text" data-text="Our Services">Our Services</span> <i />
                                            </div>
                                        </div>
                                        <div className="sub-menu">
                                            <ul>
                                                <li>
                                                    <a href="#" className="sub-link">Digital Marketing</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="sub-link">Content Writing</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="sub-link">SEO</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="sub-link">UI/UX Design</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="sub-link">Graphic Designing</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="o-hidden">
                                            <div className="link cursor-pointer dmenu"><span className="fill-text" data-text="Portfolio">Portfolio</span></div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="o-hidden">
                                            <div className="link cursor-pointer dmenu"><span className="fill-text" data-text="Contact">Contact</span></div>
                                        </div>
                                        {/* <div className="sub-menu">
                                            <ul>
                                                <li>
                                                    <a className="sub-link" href="blog-classic.html">Blog Standerd</a>
                                                </li>
                                                <li>
                                                    <a className="sub-link" href="blog-list.html">Blog List</a>
                                                </li>
                                                <li>
                                                    <a className="sub-link" href="blog-half-img.html">Image Out Frame</a>
                                                </li>
                                                <li>
                                                    <a className="sub-link" href="blog-details.html">Blog Details</a>
                                                </li>
                                            </ul>
                                        </div> */}
                                    </li>

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
            {/* ==================== End Navgition ==================== */}
            <main>

            </main>


        </>
    )
}

export default Navbar
