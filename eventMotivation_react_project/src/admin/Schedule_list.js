import React from 'react'
import Admin2_asidebar from './admin2_components/Admin2_asidebar'
import Admin2_nav from './admin2_components/Admin2_nav'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

export default function Schedule_list() {
  
 //================Start Schedule api=====================
 const [schedule,setSchedule]=useState([]);
 useEffect(()=>{
   axios.get('http://localhost/reactjs/red-halal/src/backend/api_list/Get_schedules.php')
   .then((res)=>{
     setSchedule(res.data)
   })
 },[]);
 //-------------================End Schedule api=====================---------
  


//  const deletNews = (id) => {
//   axios.get(`http://localhost/Reactjs/2024-02-01/routing/backend/crud/delete.php?id=${id}`)
//       .then((res) => {
//           console.log(res.data)
//           axios.get("http://localhost/Reactjs/2024-02-01/routing/backend/crud/list.php")
//               .then((res) => setData(res.data))
//       })
// }

  
  
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
                    List
                  </a>
                </li>
              </ul>
            </div>
            <a href="#" className="report">
              <NavLink to='/admin2/schedule/add'> ADD NEW</NavLink>
            </a>
          </div>
          
          {/* End of Insights */}
          <div className="bottom-data">
            <div className="orders">
              <div className="header ">
                <i className="bx bx-receipt" />
                <h3 >Recent Schedule</h3>
                <i className="bx bx-filter" />
                <i className="bx bx-search" />
              </div>

              <table className='table table-striped'>
                <thead className='btn-warning '>
                  <tr>
                    <th>Sl</th>
                    <th>Time</th>
                    <th>Slogan</th>
                    <th>Mentor Name</th>
                    <th className={"w-10 text-center"}>Photo</th>
                    <th>Mentor Title</th>
                    <th  >Action</th>
                  </tr>
                </thead>

                <tbody>
                  {schedule.map((d,i)=>
                  
                  <tr key={i}>
                    <td>{++i}</td>
                    <td>{d.time}</td>
                    <td>{d.slogan}</td>
                    <td>{d.mentor_name}</td>
                    <td>
                    <img
                        className="img-fluid w-100"
                        src={`http://localhost/reactjs/red-halal/src/backend/image/${d.photo}`}
                        alt="not found"
                        
                      />
                      </td>
                    <td>{d.mentor_title}</td>
                   

                    <td >
                    <button className=' btn-success btn'>Edit</button>

                      <button className='btn-danger btn'>Delete</button>
                                    
                                   
                                
                    {/* <NavLink to={`/crud/edit/${d.id}`}>
                                        <button className='btn btn-xs btn-info'>Edit</button>
                                    </NavLink>
                                    <button className='btn btn-xs btn-danger' onClick={() => deletNews(d.id)}>Delete</button>
                                 */}
                        </td>
                  </tr>
                 )}

                </tbody>
              </table>


            </div>
            {/* Reminders */}

            {/* End of Reminders*/}
          </div>
        </main>






      </div>
    </>
  )
}
