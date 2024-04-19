import {Link} from 'react-router-dom';
import {useContext} from 'react'
import { AuthContext } from './../Provider/AuthProvider';
import { auth } from './../Firebase/firebase.config';

const Navbar = () => {
  const {user,logOut}=useContext(AuthContext);
  const handleLogout=()=>{
    logOut(auth)
    .then('')
    .catch(error)
  }
    const navLinks=<>
         <li className='text-black font-semibold'><Link to='/'>Home</Link></li>
          <li className='text-black font-semibold '><Link to='/metroinfo'>Metro Information</Link></li>
         <li className='text-black font-semibold '><Link to='/contact'>Contact</Link></li>
        
        
    </>
    return (
        <div className="navbar fixed  z-10 bg-green-700 max-w-screen-lg  ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {
            navLinks
        }
        

      </ul>
    </div>
    <a className="bg-blue-200 rounded-xl text-2xl text-green-700 p-4">Metro Rail</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {
        navLinks
      }
    </ul>
  </div>
  <div className="navbar-end">
  {user?.email ? (
                <div className="flex items-center space-x-4">
                    
                    <div className="dropdown dropdown-end">
                    <button className='btn btn-outline'>{user.email}</button>
                        <ul tabIndex="0" className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <Link to="/profile" className="menu-title">
                                    Profile
                                </Link>
                            </li>
                            <li>
                                <button onClick={handleLogout} className="menu-title">
                                    Logout
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            ) : (
                <button className='text-black font-semibold '>
                    <Link to='/login'>Login</Link>
                </button>
            )}
  </div>
</div>
    );
};

export default Navbar;