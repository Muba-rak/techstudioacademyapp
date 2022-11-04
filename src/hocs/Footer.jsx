import React from "react";
import "../css/Footer.css";
import { Link } from "react-router-dom";
import techimage from "../Icons&Images/TechStudioImages/Image129.png";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <footer className="py-20 text-white">
          <div className="row">
            <div className="col-12 col-lg-3 mb-3">
              <div>
                <Link
                  className="d-flex align-items-center gap-2 text-white"
                  to="/"
                >
                  <img src={techimage} alt="logo" />
                  <span className="fw-bold">Techstudio Academy</span>
                </Link>
              </div>
            </div>

            <div className="col-12 col-lg-3 text-white my-12 my-lg-0">
              <div>
                <h5 className="fs-md fw-bolder py-3">Courses</h5>
              </div>
              <ul className="nav flex-column fs-sm mt-5 gap-2">
                <li className="nav-item mb-2">
                  <Link className="text-white" to="/">
                    Front End Development
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link className="text-white" to="/">
                    Android Development
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link className="text-white" to="/">
                    UI/UX Design
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link className="text-white" to="/">
                    Full Stack development
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link className="text-white" to="/">
                    Data Science
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-12 col-lg-2 my-12 my-lg-0">
              <div>
                <h5 className="fs-md fw-bolder py-3">
                  <Link className="text-white" to="/">
                    About Us
                  </Link>
                </h5>
              </div>
              <div>
                <h5 className="fs-md fw-bolder py-3">
                  <Link className="text-white" to="/">
                    Contact
                  </Link>
                </h5>
              </div>
            </div>

            <div className="col-12 col-lg-4 text-white fw-bolder">
              <form>
                <div>
                  <h5 className="fs-md py-3">Subscribe to our newsletter</h5>
                </div>

                <div className="input-group mb-3 bg-white rounded-3 p-1">
                  <input
                    type="email"
                    className="form-control py-2 fs-xs border-0"
                    placeholder="Email Address"
                    aria-label="Email Address"
                    aria-describedby="button-addon2"
                  />
                  <button
                    className="btn btn-primary fs-xs"
                    type="button"
                    id="button-addon2"
                  >
                    Subscribe
                    <i className=""></i>
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p>&copy; 2022 Company, Inc. All rights reserved.</p>
            <ul className="list-unstyled d-flex">
              <li className="ms-3">
                <Link className="text-white">
                  <FaTwitter />
                </Link>
              </li>
              <li className="ms-3">
                <Link className="text-white">
                  <FaFacebookF />
                </Link>
              </li>
              <li className="ms-3">
                <Link className="text-white">
                  <FaLinkedinIn />
                </Link>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
