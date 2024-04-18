import {Link} from 'react-router-dom';


const Navbar = () => {
  
    const navLinks=<>
         <li className='text-black font-semibold'><Link to='/'>Home</Link></li>
         <li className='text-black font-semibold '><Link to='/login'>Login</Link></li>
         <li className='text-black font-semibold '><Link to='/register'>Register</Link></li>
         <li className='text-black font-semibold '><Link to='/distributor'>Metro Information</Link></li>
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
    <a className="btn">Button</a>
  </div>
</div>
    );
};

export default Navbar;