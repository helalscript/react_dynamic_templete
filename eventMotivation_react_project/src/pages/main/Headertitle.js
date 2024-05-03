import React from 'react'
import { NavLink } from "react-router-dom";
 function Headertitle() {
  return (
    <>
    <section className="page-header">
    <div className="overly" />
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="content text-center">
            <h1 className="mb-3 text-white text-capitalize letter-spacing">
              About
            </h1>
            <div className="divider mx-auto mb-4 bg-white" />
            <ul className="list-inline">
              <li className="list-inline-item">
     <NavLink to="/">Home</NavLink>
                </li>
              <li className="list-inline-item">/</li>
              <li className="list-inline-item">
              <NavLink to="/about">About</NavLink>
                

              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}
export default Headertitle;