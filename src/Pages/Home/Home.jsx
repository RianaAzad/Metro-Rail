import React from 'react';
import metro from '../../../src/assets/metro.jpg'
const Home = () => {
    return (
        <div>
          <div className="hero min-h-screen bg-base-200 ">
  <div className="hero-content flex-col lg:flex-row-reverse mt-20 w-2/4 ml-6">
    <img src={metro} className="max-w-sm rounded-lg shadow-2xl" />
    <div className='space-y-5'>
    <label ><span className='text-xl'>From:</span></label>
<input className='placeholder-opacity-50 placeholder-black text-black ml-2 p-2 rounded-md bg-slate-400' placeholder='Enter Boarding Station' type="text" id="from" name="from"/>
<br />
<label ><span className='text-xl'>To:</span></label>
<input className='placeholder-opacity-50 placeholder-black text-black ml-2 p-2 rounded-md bg-slate-400' placeholder='Enter Destination Station' type="text" id="from" name="from"/>
   <br />   
   <label><span className='text-xl'>Date of journey:</span></label>
  <input 
    className='text-black ml-2 p-2 rounded-md bg-slate-400 ' 
    type="date" 
    id="dateOfJourney" 
    name="dateOfJourney"
  />
  <br />
  <label><span className='text-xl'>Ticket Quantity:</span></label>
  <input 
    className='text-black ml-2 p-2 rounded-md bg-slate-400 mb-2' 
    type="number" 
    id="ticket" 
    name="ticket"
  />
      <button className="btn btn-primary">Purchase ticket</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Home;