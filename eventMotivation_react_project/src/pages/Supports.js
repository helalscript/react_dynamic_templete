import React from "react";
import Mainmenu from "./main/Mainmenu";
import Footermenu from "./main/Footermenu";
import Headertitle from "./main/Headertitle";
import Page_header from "./page_component/Page_header";


export default function Supports() {
  return (
    <>
      <Mainmenu />
	  <>
<Page_header/>
  <section className="section faq">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="heading">
            <span className="stroke-text">Faq</span>
            <h3 className="mb-4 h2 mt-2">Frequently Asked Question</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reiciendis fugit doloribus sunt sapiente, corrupti numquam, earum
              molestiae iure maxime in nostrum sit facilis nemo. Magnam quam
              voluptate consequatur inventore numquam?
            </p>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="mb-4 mt-5">
            <h4 className="mb-3 border-bottom pb-3">1. How to buy a Tickets</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
              beatae eius incidunt repudiandae deserunt illum quaerat ipsum rem
              odio, commodi.
            </p>
          </div>
          <div className="mb-4">
            <h4 className="mb-3 border-bottom pb-3">
              2. Which payments method are avaliable?
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
              beatae eius incidunt repudiandae deserunt illum quaerat ipsum rem
              odio, commodi.
            </p>
          </div>
          <div className="mb-4">
            <h4 className="mb-3 border-bottom pb-3">
              3. Is refund is avalaible for valid reason?
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
              beatae eius incidunt repudiandae deserunt illum quaerat ipsum rem
              odio, commodi.
            </p>
          </div>
          <div className="mb-4">
            <h4 className="mb-3 border-bottom pb-3">
              4. When i wil have to reach?
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
              beatae eius incidunt repudiandae deserunt illum quaerat ipsum rem
              odio, commodi.
            </p>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="info">
            <h4 className="mt-5 mb-4">Need Any further Support? </h4>
            <a href="contact.html" className="btn btn-hero btn-rounded">
              Contact us
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

      <Footermenu />
    </>
  );
}