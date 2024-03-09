import React from 'react'

const Contact = () => {
    return (
        <>
            <main>
                {/* ==================== Start Slider ==================== */}
                <header className="page-header section-padding sub-bg">
                    <div className="container mt-80">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="caption">
                                    <h6 className="sub-title">Contact Us</h6>
                                    <h1 className="fz-55">Let's make <br /> your brand brilliant!</h1>
                                </div>
                            </div>
                            <div className="col-lg-5 valign">
                                <div className="text">
                                    <p>We help our clients succeed by creating brand identities, digital experiences, and print materials that communicate clearly, achieve marketing goals, and look fantastic.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                {/* ==================== End Slider ==================== */}
                {/* ==================== Start Contact ==================== */}
                <section className="contact-crev section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="sec-lg-head mb-80">
                                    <h6 className="dot-titl-non mb-10">Get In Touch</h6>
                                    <h2 className="fz-50">Let's get in <br /> touch with us.</h2>
                                    <p className="fz-15 mt-10">If you would like to work with us or just want to get in
                                        touch, we’d love to hear from you!</p>
                                    <div className="phone fz-30 fw-600 mt-30 underline">
                                        <a href="#0">+1 840 841 25 69</a>
                                    </div>
                                    <ul className="rest social-text d-flex mt-60">
                                        <li className="mr-30">
                                            <a href="#0">Facebook</a>
                                        </li>
                                        <li className="mr-30">
                                            <a href="#0">Twitter</a>
                                        </li>
                                        <li className="mr-30">
                                            <a href="#0">LinkedIn</a>
                                        </li>
                                        <li>
                                            <a href="#0">Instagram</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 offset-lg-1 valign">
                                <div className="full-width">
                                    <form id="contact-form" method="post" action="https://ui-themez.smartinnovates.net/items/geekfolio/dark/contact.php">
                                        <div className="messages" />
                                        <div className="controls row">
                                            <div className="col-lg-6">
                                                <div className="form-group mb-30">
                                                    <input id="form_name" type="text" name="name" placeholder="Name" required="required" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group mb-30">
                                                    <input id="form_email" type="email" name="email" placeholder="Email" required="required" />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group mb-30">
                                                    <input id="form_subject" type="text" name="subject" placeholder="Subject" />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <textarea id="form_message" name="message" placeholder="Message" rows={4} required="required" defaultValue={""} />
                                                </div>
                                                <div className="mt-30">
                                                    <button type="submit" className="butn butn-md butn-bord radius-30">
                                                        <span className="text">Let's Talk</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ==================== End Contact ==================== */}
            </main>

        </>
    )
}

export default Contact
