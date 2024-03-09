import React from 'react'
const Slider = () => {
    return (
        <>
            <main>
                {/* ==================== Start Slider ==================== */}
                <header className="slider showcase-full">
                    <div className="swiper-container parallax-slider">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="bg-img valign" data-background="assets/imgs/works/full/1.jpg" data-overlay-dark={3}>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-11 offset-lg-1">
                                                <div className="caption">
                                                    <h6 className="sub-title mb-30" data-swiper-parallax={-1000}>© 2023 <br />
                                                        Branding</h6>
                                                    <h1>
                                                        <a href="project-details1.html">
                                                            <span data-swiper-parallax={-2000}>Basket Lamp</span>
                                                        </a>
                                                    </h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="bg-img valign" data-background="assets/imgs/works/full/2.jpg" data-overlay-dark={3}>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-11 offset-lg-1">
                                                <div className="caption">
                                                    <h6 className="sub-title mb-30" data-swiper-parallax={-1000}>© 2023 <br />
                                                        Branding</h6>
                                                    <h1>
                                                        <a href="project-details1.html">
                                                            <span data-swiper-parallax={-2000}>Moon Light</span>
                                                        </a>
                                                    </h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="bg-img valign" data-background="assets/imgs/works/full/3.jpg" data-overlay-dark={3}>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-11 offset-lg-1">
                                                <div className="caption">
                                                    <h6 className="sub-title mb-30" data-swiper-parallax={-1000}>© 2023 <br />
                                                        Branding</h6>
                                                    <h1>
                                                        <a href="project-details1.html">
                                                            <span data-swiper-parallax={-2000}>Red Glasses</span>
                                                        </a>
                                                    </h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="bg-img valign" data-background="assets/imgs/works/full/4.jpg" data-overlay-dark={3}>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-11 offset-lg-1">
                                                <div className="caption">
                                                    <h6 className="sub-title mb-30" data-swiper-parallax={-1000}>© 2023 <br />
                                                        Branding</h6>
                                                    <h1>
                                                        <a href="project-details1.html">
                                                            <span data-swiper-parallax={-2000}>Mini</span> <br /> <span data-swiper-parallax={-3000}>Waffile Maker</span>
                                                        </a>
                                                    </h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="swiper-slide">
                                <div className="bg-img valign" data-background="assets/imgs/works/full/5.jpg" data-overlay-dark={3}>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-11 offset-lg-1">
                                                <div className="caption">
                                                    <h6 className="sub-title mb-30" data-swiper-parallax={-1000}>© 2023 <br />
                                                        Branding</h6>
                                                    <h1>
                                                        <a href="project-details1.html">
                                                            <span data-swiper-parallax={-2000}>Headphone</span>
                                                        </a>
                                                    </h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="bg-img valign" data-background="assets/imgs/works/full/6.jpg" data-overlay-dark={3}>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-11 offset-lg-1">
                                                <div className="caption">
                                                    <h6 className="sub-title mb-30" data-swiper-parallax={-1000}>© 2023 <br />
                                                        Branding</h6>
                                                    <h1>
                                                        <a href="project-details1.html">
                                                            <span data-swiper-parallax={-2000}>Serpenta</span> <br /> <span data-swiper-parallax={-3000}>Table Lamp</span>
                                                        </a>
                                                    </h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>

                        {/* slider setting */}
                        {/* <div className="slider-contro">
                            <div className="swiper-button-next swiper-nav-ctrl cursor-pointer">
                                <div>
                                    <span>Next Slide</span>
                                </div>
                                <div><i className="fas fa-chevron-right" /></div>
                            </div>
                            <div className="swiper-button-prev swiper-nav-ctrl cursor-pointer">
                                <div><i className="fas fa-chevron-left" /></div>
                                <div>
                                    <span>Prev Slide</span>
                                </div>
                            </div>
                        </div> */}
                        <div className="swiper-pagination dots" />
                    </div>
                </header>
                {/* ==================== End Slider ==================== */}
            </main>

        </>
    )
}

export default Slider
