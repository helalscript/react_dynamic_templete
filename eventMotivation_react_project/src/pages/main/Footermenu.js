import React from 'react'

 function Footermenu() {
  return (
    <>
    <section className="footer section">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6 text-center">
          <h2 className="text-white mb-3">Vixcon.</h2>
          <p className="text-white-50">
            We are a creative-led experiential Event Production Agency that
            helps brands connect, engage and evolve.{" "}
          </p>
          <form action="#" className="sub-form mt-4 mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Put your email address"
            />
            <a href="#" className="btn btn-secondary btn-rounded mt-3">
              Subscribe now
            </a>
          </form>
          <p className="mt-3 text-white-50">
            We will not spam at your inbox .Don't panic
          </p>
          <ul className="list-inline footer-socails">
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
                <i className="tf-ion-social-pinterest" />
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
      <div className="row">
        <div className="col-lg-12 text-center mt-5 ">
          <p className="copy border-top pt-4 text-white-50 mb-0">
            Copyright Reserved to Themefisher.2019
          </p>
        </div>
      </div>
    </div>
  </section></>
  )
}
export default Footermenu;