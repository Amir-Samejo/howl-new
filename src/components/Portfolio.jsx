import React from 'react'

const Portfolio = () => {
    return (
        <>
            <div>
                {/* ==================== Start Slider ==================== */}
                <header className="work-header py-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="caption">
                                    <h2>Our Work</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                {/* ==================== End Slider ==================== */}
                {/* ==================== Start Portfolio ==================== */}
                <section className="portfolio section-padding">
                    <div className="container-xxl">
                        <div className="row">
                            {/* filter links */}
                            <div className="filtering col-12 mb-80 text-center">
                                <div className="filter">
                                    <span className="text">Filter By :</span>
                                    <span data-filter="*" className="active" data-count={"08"}>All</span>
                                    <span data-filter=".brand" data-count={"03"}>Branding</span>
                                    <span data-filter=".app" data-count={"02"}>Mobile App</span>
                                    <span data-filter=".web" data-count={"03"}>Creative</span>
                                </div>
                            </div>
                        </div>
                        <div className="gallery metro text-center">
                            <div className="row">
                                <div className="col-lg-3 col-md-6 items web info-overlay height-1 mb-30">
                                    <div className="item-img o-hidden">
                                        <a href="project-details1.html" className="imago wow">
                                            <div className="inner wow">
                                                <img src="assets/imgs/works/grid/1.jpg" alt="image" />
                                            </div>
                                        </a>
                                        <div className="info">
                                            <h6><a href="project-details1.html">Character Design</a></h6>
                                            <span className="sub-title tag"><a href="project-details1.html">Design ART</a></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 items app info-overlay height-2 mb-30">
                                    <div className="item-img o-hidden">
                                        <a href="project-details1.html" className="imago wow">
                                            <div className="inner wow">
                                                <img src="assets/imgs/works/grid/10.jpg" alt="image" />
                                            </div>
                                        </a>
                                        <div className="info">
                                            <h6><a href="project-details1.html">Character Design</a></h6>
                                            <span className="sub-title tag"><a href="project-details1.html">Design ART</a></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 items brand info-overlay height-1 mb-30">
                                    <div className="item-img o-hidden">
                                        <a href="project-details1.html" className="imago wow">
                                            <div className="inner wow">
                                                <img src="assets/imgs/works/grid/3.jpg" alt="image" />
                                            </div>
                                        </a>
                                        <div className="info">
                                            <h6><a href="project-details1.html">Character Design</a></h6>
                                            <span className="sub-title tag"><a href="project-details1.html">Design ART</a></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 items web info-overlay height-2 mb-30">
                                    <div className="item-img o-hidden">
                                        <a href="project-details1.html" className="imago wow">
                                            <div className="inner wow">
                                                <img src="assets/imgs/works/grid/4.jpg" alt="image" />
                                            </div>
                                        </a>
                                        <div className="info">
                                            <h6><a href="project-details1.html">Character Design</a></h6>
                                            <span className="sub-title tag"><a href="project-details1.html">Design ART</a></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 items brand info-overlay height-1 mb-30">
                                    <div className="item-img o-hidden">
                                        <a href="project-details1.html" className="imago wow">
                                            <div className="inner wow">
                                                <img src="assets/imgs/works/grid/6.jpg" alt="image" />
                                            </div>
                                        </a>
                                        <div className="info">
                                            <h6><a href="project-details1.html">Character Design</a></h6>
                                            <span className="sub-title tag"><a href="project-details1.html">Design ART</a></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 items app info-overlay height-2 mb-30">
                                    <div className="item-img o-hidden">
                                        <a href="project-details1.html" className="imago wow">
                                            <div className="inner wow">
                                                <img src="assets/imgs/works/grid/5.jpg" alt="image" />
                                            </div>
                                        </a>
                                        <div className="info">
                                            <h6><a href="project-details1.html">Character Design</a></h6>
                                            <span className="sub-title tag"><a href="project-details1.html">Design ART</a></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 items web info-overlay height-2 mb-30">
                                    <div className="item-img o-hidden">
                                        <a href="project-details1.html" className="imago wow">
                                            <div className="inner wow">
                                                <img src="assets/imgs/works/grid/7.jpg" alt="image" />
                                            </div>
                                        </a>
                                        <div className="info">
                                            <h6><a href="project-details1.html">Character Design</a></h6>
                                            <span className="sub-title tag"><a href="project-details1.html">Design ART</a></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 items brand info-overlay height-2 mb-30">
                                    <div className="item-img o-hidden">
                                        <a href="project-details1.html" className="imago wow">
                                            <div className="inner wow">
                                                <img src="assets/imgs/works/grid/8.jpg" alt="image" />
                                            </div>
                                        </a>
                                        <div className="info">
                                            <h6><a href="project-details1.html">Character Design</a></h6>
                                            <span className="sub-title tag"><a href="project-details1.html">Design ART</a></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ==================== End Portfolio ==================== */}
            </div>

        </>
    )
}

export default Portfolio
