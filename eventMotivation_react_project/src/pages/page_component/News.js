import React from 'react'

export default function News() {
  return (
    <section className="latest-blog section-bottom mt-5 mt-lg-0">
    <div className="container">
      <div className="row section-heading">
        <div className="col-lg-6">
          <div className="heading">
            <span className="stroke-text">News</span>
            <div className="pl-90">
              <h2 className=""> Latest News update</h2>
              <p>
                Accusantium provident suscipit dicta magni dolor deserunt nam
                obcaecati non veritatis optio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="blog-item card border-0 mb-5 mb-lg-0">
            <img
              src="images/blog/blog-img-1.jpg"
              alt=""
              className="img-fluid"
            />
            <div className="p-4">
              <h4 className="mt-2 mb-3">
                <a href="#">Why lead generation is key for business growth</a>
              </h4>
              <p>
                Illum delectus quidem nobis, impedit soluta mollitia dignissimos
                error.
              </p>
              <a href="#" className="read-more text-color h6">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="blog-item card border-0 mb-5 mb-lg-0">
            <img
              src="images/blog/blog-img-2.jpg"
              alt=""
              className="img-fluid"
            />
            <div className="p-4">
              <h4 className="mt-2 mb-3">
                <a href="#">How to visualizze your idea in design</a>
              </h4>
              <p>
                Illum delectus quidem nobis, impedit soluta mollitia dignissimos
                error.
              </p>
              <a href="#" className="read-more text-color h6">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6  col-sm-6">
          <div className="blog-item card border-0 mb-5 mb-lg-0">
            <img
              src="images/blog/blog-img-3.jpg"
              alt=""
              className="img-fluid"
            />
            <div className="p-4">
              <h4 className="mt-2 mb-3">
                <a href="#">Next venue in san farnscicos can join</a>
              </h4>
              <p>
                Illum delectus quidem nobis, impedit soluta mollitia dignissimos
                error.
              </p>
              <a href="#" className="read-more text-color h6">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
