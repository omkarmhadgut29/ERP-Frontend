import React, { useEffect, useState } from "react";
import SignIn from "./SignIn";
import { Route, Routes, useNavigate } from "react-router-dom";

function MainPage() {
  let history = useNavigate();
  const [loginClick, setLoginClick] = useState(false);
  useEffect(() => {
    if (loginClick) {
      history("/login");
    }
  }, [loginClick]);

  return (
    <div>
      {loginClick ? (
        <Routes>
          <Route element={<SignIn />} path="/login" />
        </Routes>
      ) : (
        <>
          <nav
            className="navbar navbar-expand-lg navbar-light fixed-top py-3"
            id="mainNav"
          >
            <div className="container px-4 px-lg-5">
              <a className="navbar-brand" href="#page-top">
                Enterprise Resource Planning
              </a>
              <button
                className="navbar-toggler navbar-toggler-right"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarResponsive"
                aria-controls="navbarResponsive"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ms-auto my-2 my-lg-0">
                  <li className="nav-item">
                    <a className="nav-link" href="#about">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#services">
                      Services
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#portfolio">
                      Portfolio
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#contact">
                      Contact
                    </a>
                  </li>
                </ul>
                <button
                  className="btn btn-primary"
                  data-toggle="modal"
                  data-target="#loginModal"
                  style={{ marginLeft: "20px" }}
                  onClick={() => {
                    setLoginClick(true);
                    history("/login");
                  }}
                >
                  Login
                </button>
              </div>
            </div>
          </nav>
          <header className="masthead">
            <div className="container px-4 px-lg-5 h-100">
              <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                <div className="col-lg-8 align-self-end">
                  <h1 className="text-white font-weight-bold">
                    Your Place for Managing Company Data
                  </h1>
                  <hr className="divider" />
                </div>
                <div className="col-lg-8 align-self-baseline">
                  <p className="text-white-75 mb-5">
                    ERP can help you to manage your employees and customers!
                    Just contact us and start customizing it!
                  </p>
                  <a className="btn btn-primary btn-xl" href="#about">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </header>
          <section
            className="page-section bg-primary"
            id="about"
            style={{ backgroundColor: "#fb9581 !important" }}
          >
            <div className="container px-4 px-lg-5">
              <div className="row gx-4 gx-lg-5 justify-content-center">
                <div className="col-lg-8 text-center">
                  <h2 className="text-white mt-0">We've got what you need!</h2>
                  <hr className="divider divider-light" />
                  <p className="text-white-75 mb-4">
                    ERP has everything you need to get your company up! ERP
                    provides an integrated and continuously updated view of core
                    business processes!
                  </p>
                  <a className="btn btn-light btn-xl" href="#services">
                    Get Started!
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className="page-section" id="services">
            <div className="container px-4 px-lg-5">
              <h2 className="text-center mt-0">At Your Service</h2>
              <hr className="divider" />
              <div className="row gx-4 gx-lg-5">
                <div className="col-lg-3 col-md-6 text-center">
                  <div className="mt-5">
                    <div className="mb-2">
                      <i className="bi-person-circle fs-1 text-primary"></i>
                    </div>
                    <h3 className="h4 mb-2">Employee Management</h3>
                    <p className="text-muted mb-0">Manage Your Employees</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 text-center">
                  <div className="mt-5">
                    <div className="mb-2">
                      <i className="bi-people fs-1 text-primary"></i>
                    </div>
                    <h3 className="h4 mb-2">Customer Management</h3>
                    <p className="text-muted mb-0">Manage Your Customers</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 text-center">
                  <div className="mt-5">
                    <div className="mb-2">
                      <i className="bi-person fs-1 text-primary"></i>
                    </div>
                    <h3 className="h4 mb-2">Leads Management</h3>
                    <p className="text-muted mb-0">Manage Your Leads</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 text-center">
                  <div className="mt-5">
                    <div className="mb-2">
                      <i className="bi-globe2 fs-1 text-primary"></i>
                    </div>
                    <h3 className="h4 mb-2">Uses ML Algorithms</h3>
                    <p className="text-muted mb-0">
                      It Has Machine Learning Algorithms That Can Predict
                      Employee Will Remain OR Not and Customer Will Leave
                      Service Or Not
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div id="portfolio">
            <div className="container-fluid p-0">
              <div className="row g-0">
                <div className="col-lg-4 col-sm-6">
                  <a
                    className="portfolio-box"
                    href="assets/AppImages/1.jpg"
                    title="Project Name"
                  >
                    <img
                      className="img-fluid"
                      src="assets/AppImages/1.jpg"
                      alt="..."
                    />
                    <div className="portfolio-box-caption">
                      <div className="project-category text-white-50">
                        Category
                      </div>
                      <div className="project-name">Project Name</div>
                    </div>
                  </a>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <a
                    className="portfolio-box"
                    href="assets/AppImages/Employee_Mnagement.jpg"
                    title="Project Name"
                  >
                    <img
                      className="img-fluid"
                      src="assets/AppImages/Employee_Mnagement.jpg"
                      alt="..."
                    />
                    <div className="portfolio-box-caption">
                      <div className="project-category text-white-50">
                        Management
                      </div>
                      <div className="project-name">Employee Management</div>
                    </div>
                  </a>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <a
                    className="portfolio-box"
                    href="assets/AppImages/Employee_Statistics.jpg"
                    title="Project Name"
                  >
                    <img
                      className="img-fluid"
                      src="assets/AppImages/Employee_Statistics.jpg"
                      alt="..."
                    />
                    <div className="portfolio-box-caption">
                      <div className="project-category text-white-50">
                        Prediction
                      </div>
                      <div className="project-name">Employee Retension</div>
                    </div>
                  </a>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <a
                    className="portfolio-box"
                    href="assets/AppImages/Customer_Management.jpg"
                    title="Project Name"
                  >
                    <img
                      className="img-fluid"
                      src="assets/AppImages/Customer_Management.jpg"
                      alt="..."
                    />
                    <div className="portfolio-box-caption">
                      <div className="project-category text-white-50">
                        Management
                      </div>
                      <div className="project-name">Customer Management</div>
                    </div>
                  </a>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <a
                    className="portfolio-box"
                    href="assets/AppImages/Customer_Churn.jpg"
                    title="Project Name"
                  >
                    <img
                      className="img-fluid"
                      src="assets/AppImages/Customer_Churn.jpg"
                      alt="..."
                    />
                    <div className="portfolio-box-caption">
                      <div className="project-category text-white-50">
                        Prediction
                      </div>
                      <div className="project-name">Customer Churn</div>
                    </div>
                  </a>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <a
                    className="portfolio-box"
                    href="assets/AppImages/Leads_Management.jpg"
                    title="Project Name"
                  >
                    <img
                      className="img-fluid"
                      src="assets/AppImages/Leads_Management.jpg"
                      alt="..."
                    />
                    <div className="portfolio-box-caption p-3">
                      <div className="project-category text-white-50">
                        Management
                      </div>
                      <div className="project-name">Leads Management</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <section className="page-section bg-dark text-white">
            <div className="container px-4 px-lg-5 text-center">
              <h2 className="mb-4">Free Software That Manage Your Data!</h2>
              <a className="btn btn-light btn-xl" href="">
                Sinup Now!
              </a>
            </div>
          </section>
          <section className="page-section" id="contact">
            <div className="container px-4 px-lg-5">
              <div className="row gx-4 gx-lg-5 justify-content-center">
                <div className="col-lg-8 col-xl-6 text-center">
                  <h2 className="mt-0">Let's Get In Touch!</h2>
                  <hr className="divider" />
                  <p className="text-muted mb-5">
                    If any query give us a call or send us an email and we will
                    get back to you as soon as possible!
                  </p>
                </div>
              </div>
              <div className="row gx-4 gx-lg-5 justify-content-center mb-5">
                <div className="col-lg-6">
                  <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                    <div className="form-floating mb-3">
                      <input
                        className="form-control"
                        id="name"
                        type="text"
                        placeholder="Enter your name..."
                        data-sb-validations="required"
                      />
                      <label htmlFor="name">Full name</label>
                      <div
                        className="invalid-feedback"
                        data-sb-feedback="name:required"
                      >
                        A name is required.
                      </div>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        className="form-control"
                        id="email"
                        type="email"
                        placeholder="name@example.com"
                        data-sb-validations="required,email"
                      />
                      <label htmlFor="email">Email address</label>
                      <div
                        className="invalid-feedback"
                        data-sb-feedback="email:required"
                      >
                        An email is required.
                      </div>
                      <div
                        className="invalid-feedback"
                        data-sb-feedback="email:email"
                      >
                        Email is not valid.
                      </div>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        className="form-control"
                        id="phone"
                        type="tel"
                        placeholder="(123) 456-7890"
                        data-sb-validations="required"
                      />
                      <label htmlFor="phone">Phone number</label>
                      <div
                        className="invalid-feedback"
                        data-sb-feedback="phone:required"
                      >
                        A phone number is required.
                      </div>
                    </div>
                    <div className="form-floating mb-3">
                      <textarea
                        className="form-control"
                        id="message"
                        type="text"
                        placeholder="Enter your message here..."
                        style={{ height: "10rem" }}
                        data-sb-validations="required"
                      ></textarea>
                      <label htmlFor="message">Message</label>
                      <div
                        className="invalid-feedback"
                        data-sb-feedback="message:required"
                      >
                        A message is required.
                      </div>
                    </div>
                    <div className="d-none" id="submitSuccessMessage">
                      <div className="text-center mb-3">
                        <div className="fw-bolder">
                          Form submission successful!
                        </div>
                        To activate this form, sign up at
                        <br />
                        <a href=""></a>
                      </div>
                    </div>
                    <div className="d-none" id="submitErrorMessage">
                      <div className="text-center text-danger mb-3">
                        Error sending message!
                      </div>
                    </div>
                    <div className="d-grid">
                      <button
                        className="btn btn-primary btn-xl disabled"
                        id="submitButton"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="row gx-4 gx-lg-5 justify-content-center">
                <div className="col-lg-4 text-center mb-5 mb-lg-0">
                  <i className="bi-phone fs-2 mb-3 text-muted"></i>
                  <div>+1 (555) 123-4567</div>
                </div>
              </div>
            </div>
          </section>
          <footer className="bg-light py-5">
            <div className="container px-4 px-lg-5">
              <div className="small text-center text-muted">
                Copyright &copy; 2022 - ERP Production - All Rights Reserved
              </div>
            </div>
          </footer>
        </>
      )}
    </div>
  );
}

export default MainPage;
