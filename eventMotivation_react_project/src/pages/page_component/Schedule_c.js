import React from 'react'

export default function Schedule_c() {
  return (
    <section className="section-schedule section-bottom ">
    <div className="container">
      <div className="row section-heading">
        <div className="col-lg-6">
          <div className="heading">
            <span className="stroke-text">Schedule</span>
            <div className="pl-90">
              <h2 className="mt-2">Topic Discussion</h2>
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
        <div className="col-lg-12">
          <nav className="nav nav-pills nav-fill" id="TopicTab" role="tablist">
            <a
              className="nav-item nav-link active"
              id="home-tab"
              data-toggle="tab"
              href="#home"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              <h2>Day 1</h2>
              <p>13 Nov ,2019 [09.00am - 04.00pm]</p>
            </a>
            <a
              className="nav-item nav-link"
              id="profile-tab"
              data-toggle="tab"
              href="#profile"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              <h2>Day 2</h2>
              <p>13 Nov ,2019 [09.00am - 04.00pm]</p>
            </a>
            <a
              className="nav-item nav-link"
              id="contact-tab"
              data-toggle="tab"
              href="#contact"
              role="tab"
              aria-controls="contact"
              aria-selected="false"
            >
              <h2>Day 3</h2>
              <p>13 Nov ,2019 [09.00am - 04.00pm]</p>
            </a>
          </nav>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <ul className="mt-5 time-table pl-0 list-unstyled">
                <li className="d-md-flex align-items-center justify-content-between bg-light p-4 mb-3">
                  <h4 className="time text-color">9.00am</h4>
                  <div className="content">
                    <h3 className="mb-3">Introduction of material Design</h3>
                    <span className="h6 ">By Risabh moinul</span>
                    <p>CEo of themefisher</p>
                  </div>
                  <div className="content-img text-lg-right">
                    <img
                      src="images/about/wordpress.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </li>
                <li className="d-md-flex align-items-center justify-content-between bg-light p-4 mb-3">
                  <h4 className="time text-color">12.20pm</h4>
                  <div className="content">
                    <h3 className="mb-3">Marketing Matters in design area</h3>
                    <span className="h6">By Risabh moinul</span>
                    <p>CEo of themefisher</p>
                  </div>
                  <div className="content-img text-lg-right">
                    <img
                      src="images/about/big-data.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </li>
                <li className="d-md-flex align-items-center justify-content-between bg-light p-4 mb-3">
                  <h4 className="time text-color">2.20pm</h4>
                  <div className="content">
                    <h3 className="mb-3">Launch Break</h3>
                    <p>
                      Doloribus veritatis, placeat, laborum amet voluptates
                      cupiditate sapiente, reiciendis nemo recusandae quo
                      mollitial.
                    </p>
                  </div>
                  <div className="content-img text-lg-right">
                    <img
                      src="images/about/lunch.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </li>
                <li className="d-md-flex align-items-center justify-content-between bg-light p-4 ">
                  <h4 className="time text-color">02.40pm</h4>
                  <div className="content">
                    <h3 className="mb-3 ">Cultures of Creativity</h3>
                    <span className="h6">By Risabh moinul</span>
                    <p>CEo of themefisher</p>
                  </div>
                  <div className="content-img text-lg-right">
                    <img
                      src="images/about/creativity.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </li>
              </ul>
            </div>
            <div
              className="tab-pane fade"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <ul className="mt-5 time-table pl-0 list-unstyled">
                <li className="d-md-flex align-items-center justify-content-between bg-light p-4 mb-3">
                  <h4 className="time text-color">9.00am</h4>
                  <div className="content">
                    <h3 className="mb-3">Launch Break</h3>
                    <p>
                      Doloribus veritatis, placeat, laborum amet voluptates
                      cupiditate sapiente, reiciendis nemo recusandae quo
                      mollitial.
                    </p>
                  </div>
                  <div className="content-img text-lg-right">
                    <img
                      src="images/about/lunch.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </li>
                <li className="d-md-flex align-items-center justify-content-between bg-light p-4 mb-3">
                  <h4 className="time text-color">12.00pm</h4>
                  <div className="content">
                    <h3 className="mb-3">Introduction of material Design</h3>
                    <span className="h6 ">By Risabh moinul</span>
                    <p>CEo of themefisher</p>
                  </div>
                  <div className="content-img text-lg-right">
                    <img
                      src="images/about/wordpress.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </li>
                <li className="d-md-flex align-items-center justify-content-between bg-light p-4 mb-3">
                  <h4 className="time text-color">12.40pm</h4>
                  <div className="content">
                    <h3 className="mb-3">Marketing Matters in design area</h3>
                    <span className="h6">By Risabh moinul</span>
                    <p>CEo of themefisher</p>
                  </div>
                  <div className="content-img text-lg-right">
                    <img
                      src="images/about/big-data.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </li>
                <li className="d-md-flex align-items-center justify-content-between bg-light p-4 ">
                  <h4 className="time text-color">02.40pm</h4>
                  <div className="content">
                    <h3 className="mb-3 ">Cultures of Creativity</h3>
                    <span className="h6">By Risabh moinul</span>
                    <p>CEo of themefisher</p>
                  </div>
                  <div className="content-img text-lg-right">
                    <img
                      src="images/about/creativity.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </li>
              </ul>
            </div>
            <div
              className="tab-pane fade"
              id="contact"
              role="tabpanel"
              aria-labelledby="contact-tab"
            >
              <ul className="mt-5 time-table pl-0 list-unstyled">
                <li className="d-md-flex align-items-center justify-content-between bg-light p-4 mb-3">
                  <h4 className="time text-color">9.00am</h4>
                  <div className="content">
                    <h3 className="mb-3">Marketing Matters in design area</h3>
                    <span className="h6">By Risabh moinul</span>
                    <p>CEo of themefisher</p>
                  </div>
                  <div className="content-img text-lg-right">
                    <img
                      src="images/about/big-data.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </li>
                <li className="d-md-flex align-items-center justify-content-between bg-light p-4 mb-3">
                  <h4 className="time text-color">12.20pm</h4>
                  <div className="content">
                    <h3 className="mb-3">Introduction of material Design</h3>
                    <span className="h6 ">By Risabh moinul</span>
                    <p>CEo of themefisher</p>
                  </div>
                  <div className="content-img text-lg-right">
                    <img
                      src="images/about/wordpress.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </li>
                <li className="d-md-flex align-items-center justify-content-between bg-light p-4 mb-3">
                  <h4 className="time text-color">2.00pm</h4>
                  <div className="content">
                    <h3 className="mb-3">Launch Break</h3>
                    <p>
                      Doloribus veritatis, placeat, laborum amet voluptates
                      cupiditate sapiente, reiciendis nemo recusandae quo
                      mollitial.
                    </p>
                  </div>
                  <div className="content-img text-lg-right">
                    <img
                      src="images/about/lunch.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </li>
                <li className="d-md-flex align-items-center justify-content-between bg-light p-4 ">
                  <h4 className="time text-color">02.40pm</h4>
                  <div className="content">
                    <h3 className="mb-3 ">Cultures of Creativity</h3>
                    <span className="h6">By Risabh moinul</span>
                    <p>CEo of themefisher</p>
                  </div>
                  <div className="content-img text-lg-right">
                    <img
                      src="images/about/creativity.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
