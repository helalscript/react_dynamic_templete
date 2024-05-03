import React from 'react';
import { NavLink } from "react-router-dom";

 function NoPage() {
  return (
    <>
  <section className="error section">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <img
            src="images/about/404-Error-Concept.png"
            alt=""
            className="img-fluid"
          />
        </div>
        <div className="col-lg-6">
          <div className="error-content mt-5 mt-lg-0">
            <h3>Nothing Found!</h3>
            <p className="mt-3">
              Sorry, but nothing matched your search terms. Please try again
              with some different keywords.Lets search again .
            </p>
            <span className="btn btn-hero btn-rounded mt-3"><NavLink to="/">Go to home</NavLink> </span>
            
          </div>
        </div>
      </div>
    </div>
  </section>
</>

  )
}
export default NoPage;