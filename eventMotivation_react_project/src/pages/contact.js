
import React from "react";
import Mainmenu from "./main/Mainmenu";
import Footermenu from "./main/Footermenu";
import Headertitle from "./main/Headertitle";
import Page_header from "./page_component/Page_header";


export default function Contact() {
  return (
    <>
      <Mainmenu />
	  <>
    <Page_header/>
  <section className="contact-section section ">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="google-map">
            <div id="map" />
            <div className="contact-info-block box-shadow p-5">
              <h5 className="text-uppercase letter-spacing mb-4">
                Venue location
              </h5>
              <h6 className="text-color mb-3">18 - 21 December, 2019 </h6>
              <p className="text-sm-2">
                85 Golden Street, Darlinghurst <br />
                ERP 2019, United States{" "}
              </p>
              <h5 className="text-uppercase letter-spacing mb-2 mt-5">
                Message Us
              </h5>
              <p className="text-sm-2">info@yourdomain.com</p>
              <ul className="list-inline socials-links mt-5 mb-0">
                <li className="list-inline-item">
                  <a href="#">
                    <i className="tf-ion-social-facebook" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="tf-ion-social-twitter" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="tf-ion-social-linkedin" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="tf-ion-social-rss" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="contact-form pl-4 mt-5 mt-lg-0">
            <h3 className="mb-2">Contact for any support!</h3>
            <p className="mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consectetur, natus.
            </p>
            <form id="contact-form" method="post" action="#">
              <div className="form-row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="form-control"
                      name="name"
                      id="name"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="form-control"
                      name="email"
                      id="email"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Subject"
                      className="form-control"
                      name="subject"
                      id="subject"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Phone"
                      className="form-control"
                      name="Phone"
                      id="phone"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <textarea
                  rows={6}
                  placeholder="Message"
                  className="form-control"
                  name="message"
                  id="message"
                  defaultValue={""}
                />
              </div>
              <div className="mt-4">
                <input
                  type="submit"
                  id="contact-submit"
                  className="btn btn-hero btn-rounded "
                  defaultValue="Send Message"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* ./End Contact Form */}
    </div>{" "}
    {/* end container */}
  </section>
</>

      <Footermenu />
    </>
  );
}
 