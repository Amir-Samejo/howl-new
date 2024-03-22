import React from 'react'
import { Link } from 'react-router-dom'

const Services = () => {
    return (
        <>
            <main>
                {/* ==================== Start Slider ==================== */}
                <header className="page-header section-padding pb-0 sub-bg">
                    <div className="container mt-80">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="caption">
                                    <h6 className="sub-title">What Can We Do ?</h6>
                                    <h1 className="fz-55">We combine our passion for design and code.</h1>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-5 offset-lg-4">
                                <div className="text mt-30">
                                    <p>We help our clients succeed by creating brand identities, digital experiences, and print materials that communicate clearly, achieve marketing goals, and look fantastic.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main-marq xlrg section-padding pb-0">
                        <div className="slide-har st1">
                            <div className="box">
                                <div className="item">
                                    <h4>Services</h4>
                                </div>
                                <div className="item">
                                    <h4>Services</h4>
                                </div>
                                <div className="item">
                                    <h4>Services</h4>
                                </div>
                                <div className="item">
                                    <h4>Services</h4>
                                </div>
                                <div className="item">
                                    <h4>Services</h4>
                                </div>
                            </div>
                            <div className="box">
                                <div className="item">
                                    <h4>Services</h4>
                                </div>
                                <div className="item">
                                    <h4>Services</h4>
                                </div>
                                <div className="item">
                                    <h4>Services</h4>
                                </div>
                                <div className="item">
                                    <h4>Services</h4>
                                </div>
                                <div className="item">
                                    <h4>Services</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                {/* ==================== End Slider ==================== */}

                {/* ==================== Start Services ==================== */}
                <section className="serv-box section-padding">
                    <div className="container">
                        <div className="sec-lg-head mb-80">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="position-re">
                                        <h6 className="dot-titl-non mb-10">Featured Services</h6>
                                        <h2 className="fz-60 fw-700">Our Services</h2>
                                    </div>
                                </div>
                                <div className="col-lg-4 d-flex align-items-center">
                                    <div className="text">
                                        <p>Nemo enim ipsam voluptatem quia voluptas sit odit aut fugit, sed quia.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="serv-item md-mb50 radius-10">
                                    <div className="icon-img-60 mb-40">
                                        <img src="assets/imgs/serv-icons/0.png" alt />
                                    </div>
                                    <h5 className="mb-30 pb-30 bord-thin-bottom">Brand Strategy &amp; <br /> Art Direction</h5>
                                    <p>Creating a higher spacing and how people move through a unique.</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="serv-item md-mb50 radius-10">
                                    <div className="icon-img-60 mb-40">
                                        <img src="assets/imgs/serv-icons/1.png" alt />
                                    </div>
                                    <h5 className="mb-30 pb-30 bord-thin-bottom">UX/UI Design &amp; <br /> Website/App Design</h5>
                                    <p>Creating a higher spacing and how people move through a unique.</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="serv-item radius-10">
                                    <div className="icon-img-60 mb-40">
                                        <img src="assets/imgs/serv-icons/2.png" alt />
                                    </div>
                                    <h5 className="mb-30 pb-30 bord-thin-bottom">Typography &amp; <br /> Video Production</h5>
                                    <p>Creating a higher spacing and how people move through a unique.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ==================== End Services ==================== */}


                {/* ==================== Start services tabs ==================== */}
                <section className="services-tab section-padding">
                    <div className="container">
                        <div className="row" id="tabs">

                            <div className="col-lg-5 offset-lg-1 valign order1">
                                <div className="serv-tab-link tab-links full-width md-mb50">
                                    <div className="sec-lg-head mb-80">
                                        <h6 className="dot-titl-non mb-15">Services</h6>
                                        <p>We help you to go online and increase your conversion rate Better design for your
                                            digital products. </p>
                                    </div>
                                    <ul className="rest">
                                        <li className="item-link current mb-15" data-tab="tabs-1"><span>01</span> UI/UX Design</li>
                                        <li className="item-link mb-15" data-tab="tabs-2"><span>02</span> Branding</li>
                                        <li className="item-link mb-15" data-tab="tabs-3"><span>03</span> Development</li>
                                        <li className="item-link" data-tab="tabs-4"><span>04</span> Marketing</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-6 order2">
                                <div className="serv-tab-cont mb-80">
                                    <div className="tab-content current" id="tabs-1">
                                        <div className="item">
                                            <div className="img">
                                                <img src="assets/imgs/sass-img/serv/1.jpg" alt />
                                            </div>
                                            <div className="cont sub-bg">
                                                <div className="icon-img-60 mb-40">
                                                    <img src="assets/imgs/serv-icons/0.png" alt />
                                                </div>
                                                <div className="text">
                                                    <p>We are a creative studio specializing in design,
                                                        development and strategy many different skills and disciplines in the
                                                        production of all web.</p>
                                                </div>
                                                <Link to="/service" className="mt-30">
                                                    <span className="mr-15">Read More</span>
                                                    <i className="fas fa-long-arrow-alt-right" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-content" id="tabs-2">
                                        <div className="item">
                                            <div className="img">
                                                <img src="assets/imgs/sass-img/serv/2.jpg" alt />
                                            </div>
                                            <div className="cont sub-bg">
                                                <div className="icon-img-60 mb-40">
                                                    <img src="assets/imgs/serv-icons/1.png" alt />
                                                </div>
                                                <div className="text">
                                                    <p>We are a creative studio specializing in design,
                                                        development and strategy many different skills and disciplines in the
                                                        production of all web.</p>
                                                </div>
                                                <Link to="/service" className="mt-30">
                                                    <span className="mr-15">Read More</span>
                                                    <i className="fas fa-long-arrow-alt-right" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-content" id="tabs-3">
                                        <div className="item">
                                            <div className="img">
                                                <img src="assets/imgs/sass-img/serv/3.jpg" alt />
                                            </div>
                                            <div className="cont sub-bg">
                                                <div className="icon-img-60 mb-40">
                                                    <img src="assets/imgs/serv-icons/2.png" alt />
                                                </div>
                                                <div className="text">
                                                    <p>We are a creative studio specializing in design,
                                                        development and strategy many different skills and disciplines in the
                                                        production of all web.</p>
                                                </div>
                                                <Link to="/service" className="mt-30">
                                                    <span className="mr-15">Read More</span>
                                                    <i className="fas fa-long-arrow-alt-right" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-content" id="tabs-4">
                                        <div className="item">
                                            <div className="img">
                                                <img src="assets/imgs/sass-img/serv/4.jpg" alt />
                                            </div>
                                            <div className="cont sub-bg">
                                                <div className="icon-img-60 mb-40">
                                                    <img src="assets/imgs/serv-icons/0.png" alt />
                                                </div>
                                                <div className="text">
                                                    <p>We are a creative studio specializing in design,
                                                        development and strategy many different skills and disciplines in the
                                                        production of all web.</p>
                                                </div>
                                                <Link to="/service" className="mt-30">
                                                    <span className="mr-15">Read More</span>
                                                    <i className="fas fa-long-arrow-alt-right" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ==================== End services tabs ==================== */}

                {/* ==================== Start skills ==================== */}
                <section className="skills-exp section-padding sub-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="sec-lg-head mb-80">
                                    <div className="position-re">
                                        <h6 className="dot-titl-non mb-10 wow fadeIn">Our Tools</h6>
                                        <h2 className="fz-50 d-rotate wow">
                                            <span className="rotate-text">Our Design Technology</span>
                                        </h2>
                                    </div>
                                </div>

                                <div className="skill-item d-flex flex-wrap justify-content-between align-align-items-center mb-50 md-mb50">

                                    <div className="item text-center">
                                        <div className="icon-img-60 m-auto">
                                            <img src="assets/imgs/freelancer/skills/figma.png" alt />
                                        </div>
                                        <span className="mt-15">Figma</span>
                                    </div>
                                    <div className="item text-center">
                                        <div className="icon-img-60 m-auto">
                                            <img src="assets/imgs/freelancer/skills/illustrator.png" alt />
                                        </div>
                                        <span className="mt-15">Illustrator</span>
                                    </div>
                                    <div className="item text-center">
                                        <div className="icon-img-60 m-auto">
                                            <img src="assets/imgs/freelancer/skills/photoshop.png" alt />
                                        </div>
                                        <span className="mt-15">Photoshop</span>
                                    </div>
                                    <div className="item text-center">
                                        <div className="icon-img-60 m-auto">
                                            <img src="assets/imgs/freelancer/skills/xd.png" alt />
                                        </div>
                                        <span className="mt-15">Adobe Xd</span>
                                    </div>
                                    <div className="item text-center">
                                        <div className="icon-img-60 m-auto">
                                            <img src="assets/imgs/freelancer/skills/wordpress.png" alt />
                                        </div>
                                        <span className="mt-15">WordPress</span>
                                    </div>
                                    {/* <div className="item text-center">
                                        <div className="icon-img-60 m-auto">
                                            <img src="assets/imgs/freelancer/skills/webflow.png" alt />
                                        </div>
                                        <span className="mt-15">Webflow</span>
                                    </div> */}
                                    <div className="item text-center">
                                        <div className="icon-img-60 m-auto">
                                            <img src="assets/imgs/freelancer/skills/shopify.png" alt />
                                        </div>
                                        <span className="mt-15">Shopify</span>
                                    </div>

                                    <div className="item text-center">
                                        <div className="icon-img-60 m-auto">
                                            <img src="assets/imgs/freelancer/skills/react.png" alt />
                                        </div>
                                        <span className="mt-15">React</span>
                                    </div>
                                    <div className="item text-center">
                                        <div className="icon-img-60 m-auto">
                                            <img src="assets/imgs/freelancer/skills/angular.png" alt />
                                        </div>
                                        <span className="mt-15">Angular</span>
                                    </div>
                                    <div className="item text-center">
                                        <div className="icon-img-60 m-auto">
                                            <img src="assets/imgs/freelancer/skills/vue.png" alt />
                                        </div>
                                        <span className="mt-15">Vue JS</span>
                                    </div>
                                    <div className="item text-center">
                                        <div className="icon-img-60 m-auto">
                                            <img src="assets/imgs/freelancer/skills/tailwind.png" alt />
                                        </div>
                                        <span className="mt-15">Tailwind CSS</span>
                                    </div>
                                    <div className="item text-center">
                                        <div className="icon-img-60 m-auto">
                                            <img src="assets/imgs/freelancer/skills/bootstrap.png" alt />
                                        </div>
                                        <span className="mt-15">Bootstrap</span>
                                    </div>

                                    <div className="item text-center">
                                        <div className="icon-img-60 m-auto">
                                            <img src="assets/imgs/freelancer/skills/next1.png" alt />
                                        </div>
                                        <span className="mt-15">Next JS</span>
                                    </div>
                                    <div className="item text-center">
                                        <div className="icon-img-60 m-auto">
                                            <img src="assets/imgs/freelancer/skills/node.png" alt />
                                        </div>
                                        <span className="mt-15">Node JS</span>
                                    </div>
                                    <div className="item text-center">
                                        <div className="icon-img-60 m-auto">
                                            <img src="assets/imgs/freelancer/skills/mongodb.png" alt />
                                        </div>
                                        <span className="mt-15">Mongo DB</span>
                                    </div>
                                    <div className="item text-center">
                                        <div className="icon-img-60 m-auto">
                                            <img src="assets/imgs/freelancer/skills/php.png" alt />
                                        </div>
                                        <span className="mt-15">PHP</span>
                                    </div>
                                    <div className="item text-center">
                                        <div className="icon-img-60 m-auto">
                                            <img src="assets/imgs/freelancer/skills/laravel.png" alt />
                                        </div>
                                        <span className="mt-15">Laravel</span>
                                    </div>
                                    <div className="item text-center">
                                        <div className="icon-img-60 m-auto">
                                            <img src="assets/imgs/freelancer/skills/mysql.png" alt />
                                        </div>
                                        <span className="mt-15">My SQL</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ==================== End skills ==================== */}


                {/* ==================== Start FAQs ==================== */}
                <section className="intro-corp section-padding pt-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="sec-head mb-40">
                                    <h6 className="sub-title">FAQ.</h6>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="cont">
                                    <div className="text">
                                        <h2 className="d-slideup wow">
                                            <span className="sideup-text">
                                                <span className="up-text">Watch the creative process</span>
                                            </span>
                                            <span className="sideup-text">
                                                <span className="up-text"><span>behind our digital marketing</span>.</span>
                                            </span>
                                        </h2>
                                    </div>
                                    <div className="accordion bord mt-40">
                                        <div className="item mb-15 wow fadeInUp" data-wow-delay=".1s">
                                            <div className="title">
                                                <h6 className="fz-18">The Power of Influencer Marketing</h6>
                                                <span className="ico" />
                                            </div>
                                            <div className="accordion-info">
                                                <p className="fz-14">Taken possession of my entire soul, like these sweet mornings
                                                    of spring which
                                                    i enjoy with my whole.</p>
                                            </div>
                                        </div>
                                        <div className="item mb-15 wow fadeInUp" data-wow-delay=".3s">
                                            <div className="title">
                                                <h6 className="fz-18">Unique and Influential Design</h6>
                                                <span className="ico" />
                                            </div>
                                            <div className="accordion-info">
                                                <p className="fz-14">Taken possession of my entire soul, like these sweet mornings
                                                    of spring which
                                                    i enjoy with my whole.</p>
                                            </div>
                                        </div>
                                        <div className="item wow fadeInUp" data-wow-delay=".5s">
                                            <div className="title">
                                                <h6 className="fz-18">We Build and Activate Brands</h6>
                                                <span className="ico" />
                                            </div>
                                            <div className="accordion-info">
                                                <p className="fz-14">Taken possession of my entire soul, like these sweet mornings
                                                    of spring which
                                                    i enjoy with my whole.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ==================== End FAQs ==================== */}
            </main>


        </>
    )
}

export default Services
