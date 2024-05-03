import React from 'react'
import { useLocation } from 'react-router-dom'
import { NavLink } from 'react-router-dom';


export default function Page_header() {
  const location=useLocation();

  const pathName=location.pathname;


    
  
    return (
 
          <section className="page-header">
    <div className="overly" />
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="content text-center">
            <h1 className="mb-3 text-white text-capitalize letter-spacing">
             {
                 pathName=== "/speakers"
                 ? "Speakers"
                 : pathName=== "/contact"
                 ? "Contact"
                 : pathName=== "/blog"
                 ? "Blog"
                 : pathName=== "/about"
                 ? "About"
                 : pathName=== "/tickets"
                 ? "Tickets"
                 : pathName=== "/supports"
                 ? "Supports"
                 : pathName=== "/blog_single"
                 ? "Blog Single"
                 : pathName=== "/Speake_single"
                 ? "Speake Single"
                 :""
             }
             
            </h1>
            <div className="divider mx-auto mb-4 bg-white" />
            <ul className="list-inline">
              <li className="list-inline-item">
              <NavLink to="/">Home</NavLink>
              </li>
              <li className="list-inline-item">/</li>
              <li className="list-inline-item">
              <NavLink to={pathName=== "/speakers"
                ? "/speakers"
                : pathName=== "/contact"
                ? "/contact"
                : pathName=== "/blog"
                ? "/blog"
                : pathName=== "/about"
                ? "/about"
                : pathName=== "/tickets"
                ? "/tickets"
                : pathName=== "/supports"
                ? "/supports"
                : pathName=== "/blog_single"
                ? "/blog_single"
                : pathName=== "/Speake_single"
                ? "/Speake_single"
                :""}
              
              
              >
               {
                pathName=== "/speakers"
                ? "Speakers"
                : pathName=== "/contact"
                ? "Contact"
                : pathName=== "/blog"
                ? "Blog"
                : pathName=== "/about"
                ? "About"
                : pathName=== "/tickets"
                ? "Tickets"
                : pathName=== "/supports"
                ? "Supports"
                : pathName=== "/blog_single"
                ? "Blog Single"
                : pathName=== "/Speake_single"
                ? "Speake Single"
                :""
             }</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  )
}
