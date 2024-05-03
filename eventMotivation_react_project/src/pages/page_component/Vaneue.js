import React from 'react'

export default function Vaneue() {
  return (
    <section className="cta-2 section">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="cta-img">
            <img src="images/bg/cta-bg.jpg" alt="" className="img-fluid" />
            <div className="contact-info box-shadow">
              <h5 className="text-uppercase letter-spacing mb-4">
                Venue location
              </h5>
              <h6 className="text-color mb-3">18 - 21 December, 2019 </h6>
              <p className="lead">
                85 Golden Street, Darlinghurst <br />
                ERP 2019, United States{" "}
              </p>
              <a href="contact.html">
                <i className="tf-ion-ios-location mr-2" />
                View Map location
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
