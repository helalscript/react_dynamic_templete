import React from 'react'

export default function Counter() {
  return (
    <section className="overflow-hidden counter-wrapper pt-4 pb-5">
    <div className="container">
      <div className="counter-inner">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="counter-stat">
              <h2 className="font-weight-light">
                <span className="font-weight-bold">Count the day</span> <br />
                until conference start
              </h2>
            </div>
          </div>
          <div id="simple-timer" className="syotimer" />
        </div>
      </div>
    </div>
  </section>
  )
}
