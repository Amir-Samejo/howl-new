import React from 'react'

const About = () => {
    return (
        <>
            {/* ==================== Start about ==================== */}
            <section className="about-intro section-padding">
                <div className="container">
                    <div className="row mb-80">
                        <div className="col-lg-5">
                            <div className="sec-lg-head md-mb30">
                                <h6 className="dot-titl-non mb-15 wow fadeIn">Our Story</h6>
                                <h2 className="d-rotate wow">
                                    <span className="rotate-text">Unleashing Digital Excellence.</span>
                                </h2>
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-2 valign">
                            <div className="text">
                                <p className="d-slideup wow">
                                    <span className="sideup-text">
                                        <span className="up-text">At HowlDigits, we're more than just a Digital Agency</span>
                                    </span>
                                    <span className="sideup-text">
                                        <span className="up-text"> we're a pack of passionate innovators, dedicated to transforming the digital landscape one project at a time.</span>
                                    </span>
                                    {/* <span className="sideup-text">
                                        <span className="up-text">when strategically paired with other channels.</span>
                                    </span> */}
                                </p>
                                <div className="vew-all mt-50 ml-30 wow fadeIn" data-wow-delay=".8s">
                                    <a href="blog-classic.html">View All Our News
                                        <span>
                                            <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z" fill="currentColor" />
                                            </svg>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-6 rest">
                            <div className="imgs md-mb50">
                                <div className="img1">
                                    <div className="o-hidden">
                                        <div className="imago wow">
                                            <img src="assets/imgs/about/01.jpg" alt />
                                        </div>
                                    </div>
                                </div>
                                <div className="img2">
                                    <div className="o-hidden">
                                        <div className="imago wow">
                                            <img src="assets/imgs/about/1.jpg" alt />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-5 valign rest">
                            <div className="cont">
                                {/* <h2 className="d-rotate wow">
                                    <span className="rotate-text">Unlock Revenue Growth for Your Business.</span>
                                </h2> */}
                                <div className="feat mt-20">

                                    <div className="item-flex d-flex align-items-center mb-30 wow fadeIn" data-wow-delay=".4s">
                                        <div>
                                            <div className="icon-img-50">
                                                <img src="assets/imgs/serv-icons/0.png" alt />
                                            </div>
                                        </div>
                                        <div className="cont ml-30">
                                            <h6>Embracing the Spirit of the Wolf Pack</h6>
                                            <p className="fz-15">Like the resilient and collaborative nature of wolves, we work together seamlessly to tackle challenges and achieve remarkable results for our clients.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="item-flex d-flex align-items-center mb-30 wow fadeIn" data-wow-delay=".8s">
                                        <div>
                                            <div className="icon-img-50">
                                                <img src="assets/imgs/serv-icons/1.png" alt />
                                            </div>
                                        </div>
                                        <div className="cont ml-30">
                                            <h6>Driven by Innovation</h6>
                                            <p className="fz-15">We thrive on pushing boundaries and exploring new horizons in the digital realm. With a finger on the pulse of emerging technologies and trends, we're always ahead of the curve.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="item-flex d-flex align-items-center wow fadeIn" data-wow-delay=".12s">
                                        <div>
                                            <div className="icon-img-50">
                                                <img src="assets/imgs/serv-icons/1.png" alt />
                                            </div>
                                        </div>
                                        <div className="cont ml-30">
                                            <h6>Empowering Your Digital Journey</h6>
                                            <p className="fz-15">From web design and development to SEO, social media marketing, and artwork designs, we empower businesses to unleash their full digital potential and soar to new heights of success.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ==================== End about ==================== */}

        </>
    )
}

export default About
