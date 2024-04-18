import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
const Contact = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left mt-20  w-2/4 p-10">
            <h1 className="text-3xl text-green-700 font-boldbold ">Get in touch </h1>
            <div className="divider"></div>
            <div className='flex items-center'>
    <p className='flex items-center '>
        <FaLocationDot className='mr-2 text-2xl'></FaLocationDot>
        <span>Metro Rail office, Begum rokeya avenue</span>
    </p>
</div>
<div className='flex items-center mt-2'>
    <p className='flex items-center '>
        < FaPhoneSquareAlt className='mr-2 text-2xl'></FaPhoneSquareAlt>
        <span>0198768,01867653463</span>
    </p>
</div>
<div className='flex items-center mt-2'>
    <p className='flex items-center '>
        <MdOutlineMailOutline  className='mr-2 text-2xl'></MdOutlineMailOutline>
        <span>bdmetro@gmail.com</span>
    </p>
</div>
          </div>
          <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100 w-2/4">
            <form className="card-body">
              <div className='flex gap-2'>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">First Name</span>
                </label>
                <input type="text" placeholder="Fisrt Name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Last  Name</span>
                </label>
                <input type="text" placeholder="Fisrt Name" className="input input-bordered" required />
              </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" required />
                
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
  
    );
};

export default Contact;