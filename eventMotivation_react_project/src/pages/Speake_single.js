import React from 'react'
import Mainmenu from './main/Mainmenu'
import Footermenu from './main/Footermenu'
import Page_header from './page_component/Page_header'


export default function Speaker_single() {
  return (
	<>
	 <Mainmenu/>
<Page_header/>
  <section className="speaker-single section">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-5 mb-5 mb-md-0">
          <img src="images/teams/s-6.jpg" alt="" className="img-fluid w-100" />
        </div>
        <div className="col-lg-6 col-md-7">
          <div className="speaker-single-wrap">
            <div className="speaker-header mb-4">
              <h2>Martin Guptil</h2>
              <span className="text-color">Founder ,Elite Group</span>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <h5 className="mb-3 mt-5">Follow Me</h5>
            <ul className="list-inline social-single">
              <li className="list-inline-item">
                <a href="#">
                  <i className="tf-ion-social-facebook" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="tf-ion-social-pinterest" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="tf-ion-social-twitter" />
                </a>
              </li>
            </ul>
            <h5 className="mt-4">Email</h5>
            <p>Martin@mail.com</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="section bg-light">
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="mb-5">
            <h2>Professional Skills</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div className="skill-item mb-5 mb-lg-0">
            <i className="tf-ion-android-document" />
            <h4 className="mb-3">Course Correction</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              hendrerit elit turpis, a porttitor tellus sollicitudin at.
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="skill-item mb-5">
            <i className="tf-ion-android-desktop" />
            <h4 className="mb-3">Execute the Decision</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              hendrerit elit turpis, a porttitor tellus sollicitudin at.
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="skill-item mb-5 ">
            <i className="tf-ion-android-bulb" />
            <h4 className="mb-3">Planning the Moves</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              hendrerit elit turpis, a porttitor tellus sollicitudin at.
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="skill-item mb-5">
            <i className="tf-ion-android-document" />
            <h4 className="mb-3">Analyze the Results</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              hendrerit elit turpis, a porttitor tellus sollicitudin at.
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="skill-item mb-5 mb-lg-0">
            <i className="tf-ion-android-desktop" />
            <h4 className="mb-3">Execute the Decision</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              hendrerit elit turpis, a porttitor tellus sollicitudin at.
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="skill-item mb-5 mb-lg-0">
            <i className="tf-ion-android-bulb" />
            <h4 className="mb-3">Planning the Moves</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              hendrerit elit turpis, a porttitor tellus sollicitudin at.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
 
  <Footermenu/>
</>

  )
}
