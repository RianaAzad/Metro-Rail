import React from 'react';
import metro from '../../../src/assets/metro.jpg';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse mt-20 w-full ml-6">

                <img src={metro} className="max-w-sm rounded-lg shadow-2xl lg:w-1/2" />

                <div className='lg:w-1/2 space-y-5'>
                    <div className="w-full flex justify-center"> {/* Center aligning the Breaking news and Marquee */}
                        <button className='btn btn-secondary w-full lg:w-auto mb-4 lg:mb-0'>Reminder</button>
                    </div>
                    
                    <Marquee pauseOnHover={true} speed={100} className="w-full">
                       <span className='text-2xl font-semibolds'>Dear Passenger,please check metro schedule and then purchase ticket.</span>
                    </Marquee>

                    {/* Rest of your form inputs and buttons */}
                    <label ><span className='text-xl '>From:</span></label><br />
                    <input className='placeholder-opacity-50 placeholder-black text-black ml-2 p-2 rounded-md bg-slate-400 w-full lg:w-auto' placeholder='Enter Boarding Station' type="text" id="from" name="from" />
                    <br />
                    <label ><span className='text-xl'>To:</span></label><br />
                    <input className='placeholder-opacity-50 placeholder-black text-black ml-2 p-2 rounded-md bg-slate-400 w-full lg:w-auto' placeholder='Enter Destination Station' type="text" id="to" name="to" />
                    <br />
                    <label><span className='text-xl'>Date of journey:</span></label><br />
                    <input 
                        className='text-black ml-2 p-2 rounded-md bg-slate-400 w-full lg:w-auto' 
                        type="date" 
                        id="dateOfJourney" 
                        name="dateOfJourney"
                    />
                    <br />
                    <label><span className='text-xl'>Ticket Quantity:</span></label><br />
                    <input 
                        className='text-black ml-2 p-2 rounded-md bg-slate-400 mb-2 w-full lg:w-auto' 
                        type="number" 
                        id="ticket" 
                        name="ticket"
                        min="1"
                        max="4"
                        defaultValue="1"
                    />
                    <button className="btn btn-primary w-full"><Link to='/ticketinfo'>Purchase Ticket</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Home;
