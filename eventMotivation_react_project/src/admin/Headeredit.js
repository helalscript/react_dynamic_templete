import React from 'react'
import Admin2_asidebar from './admin2_components/Admin2_asidebar'
import Admin2_nav from './admin2_components/Admin2_nav'
import { NavLink } from 'react-router-dom'

export default function Headeredit() {
    return (
        <>
            <Admin2_asidebar />
            <div className="content">
                <Admin2_nav />
                <main>
                    <div className='card card-body '>
                        <div className="row row-cols-1 row-cols-md-2 g-4">
                            <div className="col">
                                <div className="card border-success mb-3" style={{ maxWidth: "18rem" }}>
                                    <div className="card-header">Header logo</div>
                                    <div className="card-body text-success">
                                        <h5 className="card-title">Success card title</h5>
                                        <p className="card-text">
                                            Some quick example text to build on the card title and make up the bulk
                                            of the card's content.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card border-warning mb-3" style={{ maxWidth: "18rem" }}>
                                    <div className="card-header">Header Right Button</div>
                                    <div className="card-body">
                                        <h5 className="card-title">Warning card title</h5>
                                        <p className="card-text">
                                            Some quick example text to build on the card title and make up the bulk
                                            of the card's content.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card border-info mb-3" style={{ maxWidth: "18rem" }}>
                                    <div className="card-header">Category List</div>
                                    <div className="card-body">
                                        <h5 className="card-title">Info card title</h5>
                                        <p className="card-text">
                                            Some quick example text to build on the card title and make up the bulk
                                            of the card's content.
                                        </p>
                                    </div>
                                    <div className="d-grid gap-2 mx-auto">
                                        <NavLink to="/admin2/catagorylist" className="btn btn-info"> See More</NavLink>
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
