import React from "react";
import Mainmenu from "./main/Mainmenu";
import Footermenu from "./main/Footermenu";
import Headertitle from "./main/Headertitle";
import Page_header from "./page_component/Page_header";
import Pricing from "./page_component/Pricing";
import About from "./page_component/About";

export default function Tiket() {
  return (
    <><Mainmenu />

   
<Page_header/>
  <section className="section">
    <div className="container">
      <div className="position-relative">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="counter-stat">
              <h2 className="font-weight-light mb-4">
                <span className="font-weight-bold text-color">
                  Count the day
                </span>{" "}
                <br />
                until conference start
              </h2>
              <p>
                Our intensive 2-day business conferences will teach you the
                specific steps and proven systems you need to implement and grow
                your business. We hope you’ll join us!
              </p>
            </div>
          </div>
          <div id="simple-timer" className="syotimer" />
        </div>
      </div>
    </div>
  </section>
  <Pricing/>
  <About/>
  <Footermenu />
</>

  )
}
