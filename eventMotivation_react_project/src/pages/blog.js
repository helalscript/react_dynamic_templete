import React from 'react'
import Mainmenu from './main/Mainmenu'
import Footermenu from './main/Footermenu'
import Page_header from './page_component/Page_header'

export default function Blog() {
  return (
   <>
   <Mainmenu/>
   <Page_header/>
  <section className="blog section">
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="row">
            <div className="col-lg-6">
              <article className="blog-article box-shadow mb-4">
                <img
                  src="images/blog/blog-2.jpg"
                  alt=""
                  className="img-fluid"
                />
                <div className="content py-5 px-4">
                  <span className="d-block">
                    <i className="tf-ion-android-person mr-3" />
                    By Techydevs
                  </span>
                  <h4 className="my-3">
                    <a href="blog-single.html">
                      5 Creative Ideas for Conference Sessions
                    </a>
                  </h4>
                  <p className="mb-4">
                    There are many variations of passages of but majority have
                    in some by inject.
                  </p>
                  <a
                    href="blog-single.html"
                    className="read-more text-color h6"
                  >
                    Read More{" "}
                    <i className="tf-ion-android-arrow-forward ml-3" />
                  </a>
                </div>
              </article>
            </div>
            <div className="col-lg-6">
              <article className="blog-article box-shadow mb-4">
                <img
                  src="images/blog/blog-3.jpg"
                  alt=""
                  className="img-fluid"
                />
                <div className="content py-5 px-4">
                  <span className="d-block">
                    <i className="tf-ion-android-person mr-3" />
                    By Techydevs
                  </span>
                  <h4 className="my-3">
                    <a href="blog-single.html">
                      5 Creative Ideas for Conference Sessions
                    </a>
                  </h4>
                  <p className="mb-4">
                    There are many variations of passages of but majority have
                    in some by inject.
                  </p>
                  <a
                    href="blog-single.html"
                    className="read-more text-color h6"
                  >
                    Read More{" "}
                    <i className="tf-ion-android-arrow-forward ml-3" />
                  </a>
                </div>
              </article>
            </div>
            <div className="col-lg-6">
              <article className="blog-article box-shadow mb-4">
                <img
                  src="images/blog/blog-1.jpg"
                  alt=""
                  className="img-fluid"
                />
                <div className="content py-5 px-4">
                  <span className="d-block">
                    <i className="tf-ion-android-person mr-3" />
                    By Techydevs
                  </span>
                  <h4 className="my-3">
                    <a href="blog-single.html">
                      5 Creative Ideas for Conference Sessions
                    </a>
                  </h4>
                  <p className="mb-4">
                    There are many variations of passages of but majority have
                    in some by inject.
                  </p>
                  <a
                    href="blog-single.html"
                    className="read-more text-color h6"
                  >
                    Read More{" "}
                    <i className="tf-ion-android-arrow-forward ml-3" />
                  </a>
                </div>
              </article>
            </div>
            <div className="col-lg-6">
              <article className="blog-article box-shadow mb-4">
                <img
                  src="images/blog/blog-2.jpg"
                  alt=""
                  className="img-fluid"
                />
                <div className="content py-5 px-4">
                  <span className="d-block">
                    <i className="tf-ion-android-person mr-3" />
                    By Techydevs
                  </span>
                  <h4 className="my-3">
                    <a href="blog-single.html">
                      5 Creative Ideas for Conference Sessions
                    </a>
                  </h4>
                  <p className="mb-4">
                    There are many variations of passages of but majority have
                    in some by inject.
                  </p>
                  <a
                    href="blog-single.html"
                    className="read-more text-color h6"
                  >
                    Read More{" "}
                    <i className="tf-ion-android-arrow-forward ml-3" />
                  </a>
                </div>
              </article>
            </div>
          </div>
          <section className="mt-5">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="blog-nav d-flex justify-content-between align-items-center">
                    <a href="#" className="prev-nav">
                      <i className="tf-ion-android-arrow-back mr-3" />
                      Previous
                    </a>
                    <a href="#" className="next-nav">
                      Next <i className="tf-ion-android-arrow-forward ml-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="col-lg-4 pl-5 ">
          <div className="widget mb-5 mt-5 mt-lg-0">
            <h5 className="widget-title mb-4">Search</h5>
            <form action="#">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
              />
              <a href="#" className="btn btn-secondary btn-rounded mt-3">
                Search
              </a>
            </form>
          </div>
          <div className="widget mb-5">
            <h5 className="widget-title mb-4">About</h5>
            <p>
              Odit pariatur eveniet molestias minima, ullam obcaecati magnam
              amet voluptas molestiae possimus rerum enim tempore .
            </p>
          </div>
          <div className="widget mb-5">
            <h5 className="widget-title mb-4">Follow us</h5>
            <ul className="list-inline social-links">
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
            </ul>
          </div>
          <div className="widget mb-5 list-item">
            <h5 className="widget-title mb-4">Archieve</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">January 2019</a>
              </li>
              <li>
                <a href="#">December 2018</a>
              </li>
              <li>
                <a href="#">November 2016</a>
              </li>
            </ul>
          </div>
          <div className="widget mb-5 list-item">
            <h5 className="widget-title mb-4">Categories</h5>
            <ul className="list-unstyled">
              <li className="d-flex justify-content-between align-items-center">
                <a href="#">Event</a>
                <span className="">(14)</span>
              </li>
              <li className="d-flex justify-content-between align-items-center">
                <a href="#">Lifestyle</a>
                <span className="">(2)</span>
              </li>
              <li className="d-flex justify-content-between align-items-center">
                <a href="#">Music</a>
                <span className="">(1)</span>
              </li>
            </ul>
          </div>
          <div className="widget tags mb-5">
            <h5 className="widget-title mb-4">Tags</h5>
            <div className="tags-links">
              <a href="#">Culture</a>
              <a href="#">Design</a>
              <a href="#">Event</a>
              <a href="#">News</a>
              <a href="#">Music</a>
              <a href="#">Travel</a>
              <a href="#">Tech</a>
              <a href="#">Event</a>
              <a href="#">Creative</a>
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
