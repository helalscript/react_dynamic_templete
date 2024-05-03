import React from 'react'
import Mainmenu from './main/Mainmenu'
import Footermenu from './main/Footermenu'
import Blog from './blog'
import Page_header from './page_component/Page_header'

export default function About() {
  return (
   <>
   <Mainmenu/>
   <Page_header/>
  

  <section className="about-page section">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <img src="images/bg/ctg.jpg" alt="" className="img-fluid" />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-lg-6">
          <h2 className="mb-4 text-lg">
            Inovation &amp; <span className="text-color">Inspiration</span>{" "}
            Connect People
          </h2>
        </div>
        <div className="col-lg-6">
          <p>
            The Event Company is an event design and production company that
            specializes in corporate and social events as well as non-profit
            fundraisers. We consider ourselves experts when it comes to event
            fundraising and public/media relations and offer consultation
            services to our clients to help make their event a sensational
            success.
          </p>
        </div>
      </div>
    </div>
  </section>


  
  {/* Section Start */}
  <section className="section sponsors">
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <h4 className="mb-4 text-white letter-spacing text-sm">
            Gold Sponsors
          </h4>
        </div>
        <div className="col-lg-12">
          <div className="client-item">
            <a href="#">
              <img
                src="images/clients/client-img-1.png"
                alt=""
                className="img-fluid"
              />
            </a>
          </div>
          <div className="client-item">
            <a href="#">
              <img
                src="images/clients/client-img-2.png"
                alt=""
                className="img-fluid"
              />
            </a>
          </div>
          <div className="client-item">
            <a href="#">
              <img
                src="images/clients/client-img-3.png"
                alt=""
                className="img-fluid"
              />
            </a>
          </div>
          <div className="client-item">
            <a href="#">
              <img
                src="images/clients/client-img-4.png"
                alt=""
                className="img-fluid"
              />
            </a>
          </div>
          <div className="client-item">
            <a href="#">
              <img
                src="images/clients/client-img-5.png"
                alt=""
                className="img-fluid"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-lg-8">
          <h4 className="mb-4 text-white mt-5 letter-spacing text-sm">
            Platinum Sponsors
          </h4>
        </div>
        <div className="col-lg-12">
          <div className="client-item">
            <a href="#">
              <img
                src="images/clients/client-img-6.png"
                alt=""
                className="img-fluid"
              />
            </a>
          </div>
          <div className="client-item">
            <a href="#">
              <img
                src="images/clients/client-img-7.png"
                alt=""
                className="img-fluid"
              />
            </a>
          </div>
          <div className="client-item">
            <a href="#">
              <img
                src="images/clients/client-img-8.png"
                alt=""
                className="img-fluid"
              />
            </a>
          </div>
          <div className="client-item">
            <a href="#">
              <img
                src="images/clients/client-img-9.png"
                alt=""
                className="img-fluid"
              />
            </a>
          </div>
          <div className="client-item">
            <a href="#">
              <img
                src="images/clients/client-img-1.png"
                alt=""
                className="img-fluid"
              />
            </a>
          </div>
          <div className="client-item">
            <a href="#">
              <img
                src="images/clients/client-img-2.png"
                alt=""
                className="img-fluid"
              />
            </a>
          </div>
          <div className="client-item">
            <a href="#">
              <img
                src="images/clients/client-img-3.png"
                alt=""
                className="img-fluid"
              />
            </a>
          </div>
          <div className="client-item">
            <a href="#">
              <img
                src="images/clients/client-img-4.png"
                alt=""
                className="img-fluid"
              />
            </a>
          </div>
          <div className="client-item">
            <a href="#">
              <img
                src="images/clients/client-img-5.png"
                alt=""
                className="img-fluid"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <h5 className="text-white mt-5 mb-4 h3">Want to be a sponsor ? </h5>
          <a href="#" className="btn btn-hero btn-rounded">
            apply now
          </a>
        </div>
      </div>
    </div>
  </section>
  {/* Section END */}
  <section className="section cta-wrap bg-light">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="cta-content">
            <span className="lead">10% Sale offer for early birds</span>
            <h2 className="mt-3 mb-4 text-md">
              Meet top <span className="text-color">digital masters </span>{" "}
              &amp; influencers in a unique{" "}
              <span className="text-color">3-days</span> experience.
            </h2>
            <a href="#" className="btn btn-secondary btn-rounded my-4">
              Get ticket
            </a>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="row">
            <div className="col-lg-6">
              <div className="feature-item bg-info mt-5">
                <i className="tf-ion-android-globe" />
                <h4 className="mt-3 mb-3">Global Audience</h4>
                <p>
                  Starting a mentoring program might be the closest you'll ever
                  get.{" "}
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="feature-item bg-dark mt-3">
                <i className="tf-ion-android-microphone" />
                <h4 className="mt-3 mb-3">Valuable Insight</h4>
                <p>Events Drinks and Dancing are hosting an After Party. </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="feature-item bg-orange mt-4">
                <i className="tf-ion-android-microphone" />
                <h4 className="mt-3 mb-3">Valuable Insight</h4>
                <p>Events Drinks and Dancing are hosting an After Party</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="feature-item bg-secondary mt-4 mt-lg-0">
                <i className="tf-ion-android-globe" />
                <h4 className="mt-3 mb-3">Global Audience</h4>
                <p>
                  Starting a mentoring program might be the closest you'll ever
                  get.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>





    <Footermenu/>
  
   </> 
  )
}