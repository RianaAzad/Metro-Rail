import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left mt-20">
      <h1 className="text-5xl font-bold">Register now!</h1>
      </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
      <form className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Enter NID</span>
          </label>
          <input type="tel" placeholder="NID Number" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
         
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
          <p>Have an account? please <span className='text-blue-800'><Link to='/login'>Log In</Link></span></p>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Register;