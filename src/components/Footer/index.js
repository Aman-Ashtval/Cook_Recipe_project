import { SlSocialFacebook, SlSocialLinkedin, SlSocialInstagram } from "react-icons/sl";

import "./index.css"

const Footer = () => {
    return (
        <footer className="footer-bg">
            <div className="container-md container-fluid mt-5">
                <div className="row">
                    {/* author section */}
                    <div className="col-12 order-2">
                        <div className="p-3 d-flex flex-column justify-content-center align-items-center">
                            <p className="footer-p">© 2024 CookRecipe </p>
                            <p className="footer-p">Proudly built by Aman Kumar</p>
                        </div>
                    </div>

                    {/* social section */}
                    <div className="col-12 col-sm-6 order-1">
                        <div className="p-3 d-flex justify-content-center align-items-center">
                            <p className="footer-p d-flex align-item-center">Socials: 
                                <button type="button" className="social-button">
                                    <SlSocialFacebook />
                                </button>
                                <button type="button" className="social-button">
                                    <SlSocialInstagram />
                                </button>
                                <button type="button" className="social-button">
                                    <SlSocialLinkedin />
                                </button>
                            </p>
                        </div>
                    </div>

                    {/* contact section */}
                    <div className="col-12 col-sm-6">
                        <div className="p-3 d-flex justify-content-center align-items-center">
                            <a className="footer-link">About</a>
                            <a className="footer-link">Contact Us</a>
                            <a className="footer-link">Favorite</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer