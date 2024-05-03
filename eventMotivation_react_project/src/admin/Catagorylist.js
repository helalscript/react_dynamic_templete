import React from 'react'
import Admin2_nav from './admin2_components/Admin2_nav'
import Admin2_asidebar from './admin2_components/Admin2_asidebar'
import { NavLink } from 'react-router-dom'

export default function Catagorylist() {
    return (
        <>
            <Admin2_asidebar />
            <div className="content">
                <Admin2_nav />
                <main>
                    {/* ====================================== */}
                    {/*     
            <table className="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td colSpan={2}>Larry the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </table>
 */}

                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header bg-warning">
                                    <h1 className="card-title" style={{ fontSize: 30 }}>Category List</h1>
                                </div>
                                {/* /.card-header */}
                                <div className="card-body">
                                    <table className="table table-bordered table-striped">
                                        <thead>
                                            <tr>
                                                <th style={{ width: 10 }}>SL</th>
                                                <th>Category Title</th>
                                                <th>Category Heading</th>
                                                <th>Category Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Home</td>
                                                <td>Home Page</td>
                                                <td>Active</td>
                                                <td><button className=' btn-success btn'>Edit</button>

                                                    <button className='btn-danger btn'>Delete</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>About</td>
                                                <td>About Page</td>
                                                <td>Active</td>
                                                <td><button className=' btn-success btn'>Edit</button>

                                                    <button className='btn-danger btn'>Delete</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>Contact</td>
                                                <td>Contact Page</td>
                                                <td>Active</td>
                                                <td><button className=' btn-success btn'>Edit</button>

                                                    <button className='btn-danger btn'>Delete</button>
                                                </td>
                                            </tr>
                                        </tbody>

                                    </table>
                                    <tfoot className=''>
                                        <div className='row'>
                                            <div className='col'>
                                                <NavLink to='/admin2/add_category' className="bg-success btn"> Add Category</NavLink>
                                            </div>
                                            <div className='col'>
                                                <NavLink to='/admin2/add_category' className="bg-success btn"> Active Selected</NavLink>
                                            </div>
                                            <div className='col'>
                                                <NavLink to='/admin2/add_category' className="bg-success btn">Inactive Selected</NavLink>
                                            </div>

                                        </div>

                                    </tfoot>

                                </div>


                                <div className="card-footer clearfix">
                                    <ul className="pagination pagination-sm m-0 float-right">
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                «
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                1
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                2
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                3
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                »
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>



                    {/* ====================================== */}
                </main>

            </div>
        </>


    )
}
