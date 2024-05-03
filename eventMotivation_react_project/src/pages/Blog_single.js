import React from "react";
import Mainmenu from "./main/Mainmenu";
import Footermenu from "./main/Footermenu";
import Page_header from "./page_component/Page_header";


export default function Blog_single() {
  return (
    <>
      <Mainmenu />
      <>
  <Page_header/>
  <section className="blog section">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 pr-5">
          <div className="row">
            <div className="col-md-12">
              <article className="post">
                <div className="post-header">
                  {/* tags and share start*/}
                  <div className="meta-row mb-3">
                    <div className="tags">
                      <a href="#">lifestyle</a>
                      <a href="#">fashion</a>
                    </div>
                  </div>
                  {/* tags and share end*/}
                  <h2>
                    Alicia Keys is on the Picturesque Trip of a Lifetime in
                    Egypt
                  </h2>
                </div>
                <div className="single-post-thumbnail my-4">
                  <img
                    className="img-fluid w-100"
                    src="images/blog/blog-post-1.jpg"
                    alt=""
                  />
                </div>
                <div className="post-blog">
                  <p className="lead">
                    At first glance, the 31-year-old, with her Instagram
                    following of 300 000, may give the impression of being just
                    another modest influencer, posing in brands like Dulce by
                    Safiya, Culture Hijab, and Hayah Collection.{" "}
                  </p>
                  <p>
                    “I converted to Islam in 2007, but I never felt like I was
                    fully ready to commit to hijab – my hair was a crutch for
                    me,” says burgeoning rap artist Neelam Hakeem. “From a
                    fashion perspective, I didn’t realize that you could be
                    modest and fierce at the same time; that you could walk into
                    a room and command it. Not that I was ever a skin-shower,”
                    she laughs. “I don’t have a Kardashian body.” The diminutive
                    Hakeem, whose face has the full and regal features of an
                    African queen, is speaking from her home in Los Angeles,
                    where she lives with her husband, Marquis Henri, their two
                    young children, and her mother. At first glance, the
                    31-year-old, with her Instagram following of 300 000, may
                    give the impression of being just another modest influencer,
                    posing in brands like Dulce by Safiya, Culture Hijab, and
                    Hayah Collection. Then you play one of her videos, and she
                    starts rapping about everything from political and social
                    injustices to women’s rights.
                  </p>
                  <blockquote>
                    <p>
                      A shoe is not only a design, but it's a part of your body
                      language, the way you walk. The way you're going to move
                      is quite dictated by your shoes.
                    </p>
                  </blockquote>
                  <h3>Delusion of matter in lifestyle</h3>
                  <p>
                    With exposure comes the responsibility and added pressure of
                    being a role model, which is something Hart doesn’t take
                    lightly. “By virtue of being a female in the job that I am
                    in, you automatically become a role model in some way,
                    whether you choose that or not. I’m careful of the things I
                    advocate and the message I put out there,” she explains. “In
                    a world of Instagram and selfies, I hope I can offer young
                    women something beyond the aesthetic and demonstrate that
                    power comes from a realm outside of the patriarchal gaze.
                    I’d rather offer something relatable than something
                    unattainable.”
                  </p>
                  <h5>On the inspiration behind the exhibition</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aperiam architecto cupiditate eius fuga fugit illum ipsa
                    itaque maxime, molestias odio praesentium quaerat, quam
                    soluta tempora tempore veniam veritatis! Sequi, similique?
                  </p>
                  {/*author info start*/}
                  <div className="post-author-info mt-5 border p-4">
                    <div className="media ">
                      <img
                        className="img-fluid mr-3"
                        src="images/avater.jpg"
                        alt=""
                      />
                      <div className="media-body author-details">
                        <h5>
                          <a href="#">Maria Garcia</a>
                        </h5>
                        <p>
                          Sit amet cursus nisl aliquam. Aliquam et elit eu nunc
                          rhoncus viverra quis at felis. Sed do. Lorem ipsum
                          dolor sit amet, consectetur Nulla fringilla.
                        </p>
                        <div className="s-links">
                          <a href="#">
                            <i className="fa fa-facebook" />
                          </a>
                          <a href="#">
                            <i className="fa fa-twitter" />
                          </a>
                          <a href="#">
                            <i className="fa fa-google-plus" />
                          </a>
                          <a href="#">
                            <i className="fa fa-pinterest" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              {/*Navigation area start*/}
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
                          Next{" "}
                          <i className="tf-ion-android-arrow-forward ml-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/*Navigation area end*/}
              {/*comments area start*/}
              <div className="comments my-5 pt-5">
                <h3 className="comment-reply-title mb-5">Comments(2)</h3>
                <div className="media">
                  <img
                    src="images/clients/s-2.jpg"
                    className="mr-4"
                    alt="..."
                  />
                  <div className="media-body">
                    <h5 className="mb-1">Md.Tanvir</h5>
                    <span>September 2, 2018 at 12:17 pm</span>
                    <p className="mt-3">
                      {" "}
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel
                      metus scelerisque ante sollicitudin. Cras purus odio,
                      vestibulum in vulputate at, tempus viverra turpis.
                    </p>
                    <div className="reply">
                      <a rel="nofollow" className="comment-reply-link" href="#">
                        <i className="tf-ion-reply mr-2" />
                        Reply
                      </a>
                    </div>
                    <div className="media mt-5 border-top pt-5">
                      <img
                        src="images/clients/s-1.jpg"
                        className="mr-4"
                        alt="..."
                      />
                      <div className="media-body">
                        <h5 className="mt-0">Md.Rayhan</h5>
                        <span>September 2, 2018 at 12:17 pm</span>
                        <p className="mt-3">
                          Fusce condimentum nunc ac nisi vulputate fringilla.
                          Donec lacinia congue felis in faucibus.
                        </p>
                        <div className="reply">
                          <a
                            rel="nofollow"
                            className="comment-reply-link"
                            href="#"
                          >
                            <i className="tf-ion-reply mr-2" />
                            Reply{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*comments area END*/}
              {/*comment form start*/}
              <div className="comment-respond my-5 p-5 ">
                <h3 className="comment-reply-title mb-2">Leave a Comment</h3>
                <p className="mb-4">
                  Your email address will not be published. Required fields are
                  marked *
                </p>
                <form className="comment-form">
                  <div className="form-group">
                    <textarea
                      id="message"
                      rows={8}
                      placeholder="Comments*"
                      className="form-control"
                      required=""
                      defaultValue={""}
                    />
                  </div>
                  <div className="form-row">
                    <div className=" col-md-4">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Name*"
                          required=""
                        />
                      </div>
                    </div>
                    <div className=" col-md-4">
                      <div className="form-group ">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email*"
                          required=""
                        />
                      </div>
                    </div>
                    <div className=" col-md-4">
                      <div className="form-group ">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Website"
                          required=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-md-4">
                    <button type="submit" className="btn btn-hero btn-rounded">
                      Submit Comment
                    </button>
                  </div>
                </form>
              </div>
              {/*comment form end*/}
            </div>
          </div>
        </div>
        <div className="col-lg-4 ">
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
</>

      <Footermenu />
    </>
  );
}
