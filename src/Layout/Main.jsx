import {Outlet} from 'react-router-dom';
import Navbar from './../Shared/Navbar';
import Footer from './../Shared/Footer';
import { Toaster } from 'react-hot-toast';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            
            <Outlet></Outlet>
            <Toaster/>
            <Footer></Footer>
        </div>
    );
};

export default Main;