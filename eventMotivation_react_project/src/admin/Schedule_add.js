import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Admin2_asidebar from './admin2_components/Admin2_asidebar'
import Admin2_nav from './admin2_components/Admin2_nav'
import axios from 'axios'



export default function Schedule_add() {
  const [time, setTime] = useState('');
  const [mentor_name, setMentor_name] = useState('');
  const [mentor_title, setMentor_title] = useState('');
  const [slogan, setSlogan] = useState('');
  const [photo, setPhoto] = useState('');
  const navi = useNavigate();
  
  const save = () => {
    const formdata = new FormData()
    formdata.append('time', time)
    formdata.append('mentor_name', mentor_name)
    formdata.append('mentor_title', mentor_title)
    formdata.append('slogan', slogan)
    formdata.append('photo', photo)

    axios.post("http://localhost/reactjs/red-halal/src/backend/api_list/Add_schedules.php", formdata, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
      .then((res) => {
        console.log(res.data)

        setTime('')
        setMentor_name('')
        setMentor_title('')
        setSlogan('')
        setPhoto('')
        navi('/admin2/schedule')
      })
  }
  return (
    <>
      <Admin2_asidebar />
      <div className="content">
        <Admin2_nav />
        <main>
          <div className="header">
            <div className="left">
              <h1>Schedule</h1>
              <ul className="breadcrumb">
                <li>
                  <a href="#">Schedule </a>
                </li>
                /
                <li>
                  <a href="#" className="active">
                    ADD
                  </a>
                </li>
              </ul>
            </div>
            <a href="#" className="report">
              <NavLink to='/admin2/schedule'> Back to List</NavLink>
            </a>
          </div>
          {/* End of Insights */}
          <div className="bottom-data">
            <div className="orders">
              <div className="header ">
                <i className="bx bx-receipt" />
                <h3 >Add New Schedule</h3>
                <i className="bx bx-filter" />
                <i className="bx bx-search" />
              </div>
              <div>
                <div className="card mt-2 mx-auto p-4 bg-light">
                  <div className="card-body bg-light">
                    <div className="container">
                      <div className="controls">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label >Time *</label>
                              <input id="form_time" type="time"
                                name="time"
                                className="form-control"
                                placeholder="Please enter your firstname *"
                                required="required"
                                onChange={(e) => setTime(e.target.value)}
                                value={time}
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label >Mentor Name *</label>
                              <input
                                id="form_mentor_name"
                                type="text"
                                name="mentor_name"
                                className="form-control"
                                placeholder="Please enter your mentor_name *"
                                required="required"
                                onChange={(e) => setMentor_name(e.target.value)}
                                value={mentor_name}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label>Mentor Title</label>
                              <input
                                id="form_mentor_title"
                                type="text"
                                name="mentor_title"
                                className="form-control"
                                placeholder="Please enter your mentor_title *"
                                required="required"
                                onChange={(e) => setMentor_title(e.target.value)}
                                value={mentor_title}
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label>Photo</label>
                              <input
                                id="form_photo"
                                type="file"
                                name="photo"
                                className="form-control"
                                placeholder="Please enter your photo *"
                                required="required"
                                onChange={(e) => setPhoto(e.target.files[0])}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group">
                              <label>Slogan *</label>
                              <textarea
                                id="form_slogan"
                                name="slogan"
                                className="form-control"
                                placeholder="Write your slogan here."
                                rows={4}
                                required="required"
                                onChange={(e) => setSlogan(e.target.value)}
                                value={slogan}
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <input
                              type="submit"
                              className="btn btn-success btn-send  pt-2 btn-block"
                              onClick={save}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
