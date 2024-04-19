import {useContext} from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './../../Provider/AuthProvider';
import { toast } from 'react-hot-toast';
const Register = () => {
  const {createUser}=useContext(AuthContext);
  const handleRegister=(e)=>{
 e.preventDefault()
   const form=e.target;
   const email=form.email.value;
   const password=form.password.value;
   const nid=form.nid.value;
   //console.log(email,password,nid);
   createUser(email,password)
   //validation
   if(password.length<6){
     toast.error("password must be 6 characters")
     return;
   }
   createUser(email,password)
   .then(res => {
     // Display success message using toast.success()
     toast.success('registration  successful!');
     console.log(res);
 })
   .catch(error => {
     // Display Firebase error message using toast.error()
     if (error.code === 'auth/email-already-in-use') {
       toast.error('Email is already in use');
     } else {
       toast.error(error.message);
     }
     console.log(error);  // Optionally log the error
   });
   
  }
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left mt-20">
      <h1 className="text-5xl font-bold">Register now!</h1>
      </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
      <form onSubmit={handleRegister} className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Enter NID</span>
          </label>
          <input type="tel" placeholder="NID Number" name='nid' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
         
        </div>
        <div className="form-control mt-6">
          <button  type='submit' className="btn btn-primary">Register</button>
          <p>Have an account? please <span className='text-blue-800'><Link to='/login'>Log In</Link></span></p>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Register;