import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Admin2_asidebar from './admin2_components/Admin2_asidebar';
import Admin2_nav from './admin2_components/Admin2_nav';
import { useForm } from 'react-hook-form';
import axios from 'axios'


export default function CatagoryAdd() {
    const [title,setTitle]=useState('');
    const [heading,setheading]=useState('');
    const [status,setstatus]=useState('');
    const navi=useNavigate();
    


    const {register, formState:{errors}, handleSubmit}=useForm();
    
    const onSubmit=(data)=>{
console.log(data);
    }
    const save=()=>{
        const formdata=new FormData()
        formdata.append('title',title)
        formdata.append('heading',heading)
        formdata.append('status',status)
       
    
        axios.post("http://localhost/reactjs/red-halal/src/admin/admin2_components/admin2_page/admin2_backend/addCategory.php",formdata,{
            headers:{
                "Content-Type":"multipart/form-data" 
            }
        })
        .then((res)=>{
            console.log(res.data)
            
            title('')
            heading('')
            status('')
            
            navi('/admin2/schedule')
        })
    }
    
    


    return (
        <>
            <Admin2_asidebar />
            <div className="content">
                <Admin2_nav />
                <main>
                    {/* ====================================== */}

                    <div className="row">
                        <div className='col-md-12 '>
                            <div className="card card-primary">
                                <div className="card-header">
                                    <h3 className="card-title" style={{ fontSize: 30 }}>Add New Category</h3>
                                </div>
                                {/* /.card-header */}
                                {/* form start */}

                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="card-body">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Category Title</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="exampleCategoryTitle1"
                                                placeholder="Enter Category Title"
                                                {...register("categoryName",{required:true,pattern:/^[a-zA-z0-9]+$/,maxLength:15})}
                                                onChange={(e)=>setTitle(e.target.value)}
                                                name='title'
                                            /> <span className='text-danger'>
                                                {errors.categoryName?.type==="required" && "Category Title is required"}
                                                {errors.categoryName?.type==="pattern" && "Category Title is Wrong formate"}
                                                {errors.categoryName?.type==="maxLength" && "Category Title Maxlenth 15 Charecter"}
                                            </span>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Category Heading</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="exampleCategoryTitle1"
                                                placeholder="Enter Category Heading"
                                                {...register("categoryHeading",{required:true})}
                                                onChange={(e)=>setheading(e.target.value)}
                                                name='heading'
                                            />
                                            <span className='text-danger'>
                                                {errors.categoryHeading?.type==="required" && "Category Heading is required"}
                                            </span>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputStatus">Category Status</label>
                                            <select className="form-control" {...register("categoryStatus",{required:true})} name='status' onChange={(e)=>setstatus(e.target.value)}>
                                                 <option value="">-- Pls Select Category Status --</option>
                                                <option value="1">Active</option>
                                                <option value="2">Unactive</option>
                                            </select>
                                            <span className='text-danger'>
                                                {errors.categoryStatus?.type==="required" && "Category Status is required"}
                                            </span>
                                        </div>

                                        {/* <div className="form-group">
          <label htmlFor="exampleInputFile">File input</label>
          <div className="input-group">
            <div className="custom-file">
              <input
                type="file"
                className="custom-file-input"
                id="exampleInputFile"
              />
              <label className="custom-file-label" htmlFor="exampleInputFile">
                Choose file
              </label>
            </div>
            <div className="input-group-append">
              <span className="input-group-text">Upload</span>
            </div>
          </div>
        </div> */}

                                    </div>
                                    {/* /.card-body */}
                                    <div className="card-footer">
                                        <button type="submit" className="btn btn-primary">
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>



                    {/* ====================================== */}
                </main>

            </div>
        </>
    )
}
