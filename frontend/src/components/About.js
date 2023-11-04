import React from 'react'
import '../css/style.css';

const About = () => {
    return (
        <div className="hero_area">
            {/* <div className="bg-box">
                <img src="images/hero-bg.jpg" alt="" />
            </div> */}
            {/* About section */}
            <section className="about_section layout_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="img-box">
                                <img src="https://themewagon.github.io/feane/images/about-img.png" alt="" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="detail-box">
                                <div className="heading_container">
                                    <h2>We Are Food Ordering</h2>
                                </div>
                                <p>
                                    A food ordering website is a digital platform that allows users to browse, select, and order a wide variety of culinary options from local restaurants
                                    and eateries. With a user-friendly interface, customers can explore menus, customize their orders,
                                    and make secure payments online. These websites often offer features like real-time order tracking, reviews,
                                    and ratings to help users make informed choices. They provide convenience and efficiency by facilitating food delivery or pickup,
                                    making it easy for customers to enjoy their favorite dishes without leaving the comfort of their homes.
                                    Food ordering websites enhance the dining experience by providing a seamless and appetizing online solution.
                                </p>
                                <a href="">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End about section */}
            {/* Footer section */}
            <footer className="footer_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 footer-col">
                            <div className="footer_contact">
                                <h4>Contact Us</h4>
                                <div className="contact_link_box">
                                    <a href="">
                                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                                        <span>Location</span>
                                    </a>
                                    <a href="">
                                        <i className="fa fa-phone" aria-hidden="true"></i>
                                        <span>Call +01 1234567890</span>
                                    </a>
                                    <a href="">
                                        <i className="fa fa-envelope" aria-hidden="true"></i>
                                        <span>demo@gmail.com</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 footer-col">
                            <div className="footer_detail">
                                <a href="" className="footer-logo">
                                    Food Ordering
                                </a>
                                <p>
                                    Necessary, making this the first true generator on the
                                    Internet. It uses a dictionary of over 200 Latin words,
                                    combined with
                                </p>
                                <div className="footer_social">
                                    <a href="">
                                        <i className="fa fa-facebook" aria-hidden="true"></i>
                                    </a>
                                    <a href="">
                                        <i className="fa fa-twitter" aria-hidden="true"></i>
                                    </a>
                                    <a href="">
                                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                                    </a>
                                    <a href="">
                                        <i className="fa fa-instagram" aria-hidden="true"></i>
                                    </a>
                                    <a href="">
                                        <i className="fa fa-pinterest" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 footer-col">
                            <h4>Opening Hours</h4>
                            <p>Everyday</p>
                            <p>10.00 Am -10.00 Pm</p>
                        </div>
                    </div>
                    <div className="footer-info">
                        <p>
                            &copy; <span id="displayYear"></span> All Rights Reserved By{' '}
                            <a href="https://html.design/"> Alphonzo Tecnology</a>
                            <br />
                            <br />
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default About
