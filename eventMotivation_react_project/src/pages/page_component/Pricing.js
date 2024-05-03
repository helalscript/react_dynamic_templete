import React from 'react'

export default function Pricing() {
  return (
    <section className="section section-pricing">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="heading mb-5">
            <span className="stroke-text">Price</span>
            <div className="pl-90">
              <h2 className="text-white mt-3"> Get your Ticket</h2>
              <p className="text-white-50">
                Accusantium provident suscipit dicta magni dolor deserunt nam
                obcaecati non veritatis optio.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center align-items-center">
        <div className="col-lg-4 col-md-6">
          <div className="package style-1 bg-white mb-5 mb-lg-0">
            <div className="price-header mb-4">
              <i className="tf-ion-android-bulb" />
              <h2 className="mt-4 text-white">70$</h2>
            </div>
            <h6 className="pname">Early</h6>
            <ul className="list-unstyled ">
              <li>Two Days Ticket</li>
              <li>Coffee &amp; Launch</li>
              <li>Networking</li>
              <li>Certificate</li>
              <li>Gift Box</li>
              <li>Email listing</li>
            </ul>
            <a href="#" className="btn btn-hero btn-rounded mt-3 mb-5">
              Get now
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="package  style-2 bg-white mb-5 mb-lg-0">
            <div className="price-header mb-4">
              <i className="tf-ion-android-hangout" />
              <h2 className="mt-4 text-white">250$</h2>
            </div>
            <h6 className="pname">Team</h6>
            <ul className="list-unstyled">
              <li>Two Days Ticket</li>
              <li>Coffee &amp; Launch</li>
              <li>Networking</li>
              <li>Certificate</li>
              <li>Gift Box</li>
              <li>Public ad listing</li>
              <li>Email listing</li>
            </ul>
            <a href="#" className="btn btn-secondary btn-rounded mt-3 mb-5">
              Get now
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="package  bg-white style-3 mb-5 mb-lg-0">
            <div className="price-header mb-4">
              <i className="tf-ion-android-person" />
              <h2 className="mt-4 text-white">300$</h2>
            </div>
            <h6 className="pname">Economic</h6>
            <ul className="list-unstyled">
              <li>Three Days Ticket</li>
              <li>Coffee &amp; Launch</li>
              <li>Networking</li>
              <li>Certificate</li>
              <li>Gift Box</li>
              <li>Company Listing</li>
              <li>Dinner Serve</li>
              <li>Email listing</li>
            </ul>
            <a href="#" className="btn btn-secondary btn-rounded mt-3 mb-5">
              Get now
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
